# -*- coding: utf-8 -*-
import os
import sys
import re
import yaml  # type: ignore # pip install PyYAML
import ollama # type: ignore

# 设置最大输入字段，超出会拆分输入，防止超出输入字数限制
max_length = 1800

# 设置翻译的路径
dir_to_translate = "docs"
excluded_dirs = ["en"]  # 替换为你要排除的目录名
translates = ['en'] # 需要翻译成什么语言 当前的模型比较垃圾，没有办法翻译 es 和 ar

# 不进行翻译的文件列表
exclude_list = ["Contact-and-Subscribe.md", "WeChat.md"]
# 已处理的 Markdown 文件名的列表，会自动生成
processed_list = "processed_list.txt"



# 即使在已处理的列表中，仍需要重新翻译的标记
marker_force_translate = "\n[translate]\n"

# Front Matter 处理规则
front_matter_translation_rules = {
    "title": lambda value, lang: translate_text(value, lang),
    "description": lambda value, lang: translate_text(value, lang),
    "text": lambda value, lang: translate_text(value, lang),
    "tagline": lambda value, lang: translate_text(value, lang),
    "details": lambda value, lang: translate_text(value, lang),
    # "actions": lambda value, lang: translate_text(value, lang),
    # "features": lambda value, lang: translate_text(value, lang),
    # 使用固定的替换规则
    "categories": lambda value, lang: front_matter_replace(value, lang),
    "tags": lambda value, lang: front_matter_replace(value, lang),

    # 未添加的字段将默认不翻译
}

# 固定字段替换规则。文章中一些固定的字段，不需要每篇都进行翻译，且翻译结果可能不一致，所以直接替换掉。
replace_rules = [
    {
        # 版权信息手动翻译
        "orginal_text": "> 原文地址：<https://wiki-power.com/>",
        "replaced_text": {
            "en": "> Original: <https://wiki-power.com/>",
            "es": "> Dirección original del artículo: <https://wiki-power.com/>",
            "ar": "> عنوان النص: <https://wiki-power.com/>",
        }
    },
    {
        # 版权信息手动翻译
        "orginal_text": "> 本篇文章受 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh) 协议保护，转载请注明出处。",
        "replaced_text": {
            "en": "> This post is protected by [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.en) agreement, should be reproduced with attribution.",
            "es": "> Este artículo está protegido por la licencia [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh). Si desea reproducirlo, por favor indique la fuente.",
            "ar": "> يتم حماية هذا المقال بموجب اتفاقية [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh)، يُرجى ذكر المصدر عند إعادة النشر.",
        }
    },
    {
        # 文章中的站内链接，跳转为当前相同语言的网页
        "orginal_text": "](https://wiki-power.com/",
        "replaced_text": {
            "en": "](https://wiki-power.com/en/",
            "es": "](https://wiki-power.com/es/",
            "ar": "](https://wiki-power.com/ar/",
        }
    }
    # {
    #    # 不同语言可使用不同图床
    #    "orginal_text": "![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/",
    #    "replaced_en": "![](https://f004.backblazeb2.com/file/wiki-media/",
    #    "replaced_es": "![](https://f004.backblazeb2.com/file/wiki-media/",
    #    "replaced_ar": "![](https://f004.backblazeb2.com/file/wiki-media/",
    # },
]

# Front Matter 固定字段替换规则。
front_matter_replace_rules = [
    {
        "orginal_text": "类别 1",
        "replaced_text": {
            "en": "Categories 1",
            "es": "Categorías 1",
            "ar": "الفئة 1",
        }
    },
    {
        "orginal_text": "类别 2",
        "replaced_text": {
            "en": "Categories 2",
            "es": "Categorías 2",
            "ar": "الفئة 2",
        }
    },
    {
        "orginal_text": "标签 1",
        "replaced_text": {
            "en": "Tags 1",
            "es": "Etiquetas 1",
            "ar": "بطاقة 1",
        }
    },
    {
        "orginal_text": "标签 2",
        "replaced_text": {
            "en": "Tags 2",
            "es": "Etiquetas 2",
            "ar": "بطاقة 2",
        }
    },
]

##############################

# 对 Front Matter 使用固定规则替换的函数
def front_matter_replace(value, lang):
    for index in range(len(value)):
        element = value[index]
        # print(f"element[{index}] = {element}")
        for replacement in front_matter_replace_rules:
            if replacement["orginal_text"] in element:
                # 使用 replace 函数逐个替换
                element = element.replace(
                    replacement["orginal_text"], replacement["replaced_text"][lang])
        value[index] = element
        # print(f"element[{index}] = {element}")
    return value

# 定义调用 ChatGPT API 翻译的函数
def translate_text(text, lang):
    target_lang = {
        "en": "English",
        "es": "Spanish",
        "ar": "Arabic"
    }[lang]
    completion = ollama.chat(model="qwen2",
    messages=[
        {"role": "system", "content": "You are a translation expert proficient in various languages, focusing solely on translating text without interpretation. You accurately understand the meanings of proper nouns, idioms, metaphors, allusions, and other obscure words in sentences, translating them appropriately based on the context and language environment. The translation should be natural and fluent. Only return the translated text, without including redundant quotes or additional notes."},
        {"role": "user", "content": f"Translate the following  Simplified-Chinese text into {target_lang}  text: {text}"},
    ])
    # 获取翻译结果
    output_text = completion['message']['content']
    return output_text

# Front Matter 处理规则
def translate_front_matter(front_matter, lang):
    def recursive_translate(value, lang):
        if isinstance(value, dict):
            translated_dict = {}
            for k, v in value.items():
                if k in front_matter_translation_rules:
                    processed_value = front_matter_translation_rules[k](v, lang)
                else:
                    processed_value = recursive_translate(v, lang)
                translated_dict[k] = processed_value
            return translated_dict
        elif isinstance(value, list): #处理数组
            translated_list = []
            for item in value:
                translated_list.append(recursive_translate(item, lang))
            return translated_list
        else:
            return value

    return recursive_translate(front_matter, lang)

# 定义文章拆分函数
def split_text(text, max_length):
    # 根据段落拆分文章
    paragraphs = text.split("\n\n")
    output_paragraphs = []
    current_paragraph = ""

    for paragraph in paragraphs:
        if len(current_paragraph) + len(paragraph) + 2 <= max_length:
            # 如果当前段落加上新段落的长度不超过最大长度，就将它们合并
            if current_paragraph:
                current_paragraph += "\n\n"
            current_paragraph += paragraph
        else:
            # 否则将当前段落添加到输出列表中，并重新开始一个新段落
            output_paragraphs.append(current_paragraph)
            current_paragraph = paragraph

    # 将最后一个段落添加到输出列表中
    if current_paragraph:
        output_paragraphs.append(current_paragraph)

    # 将输出段落合并为字符串
    output_text = "\n\n".join(output_paragraphs)

    return output_text

# 定义翻译文件的函数
def translate_file(input_file, lang):
    print(f"Translating into {lang}: {input_file}")
    sys.stdout.flush()

    # 定义输出文件
    output_file = input_file.replace("docs",f"docs/{lang}")
    output_dir = os.path.dirname(output_file)
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    # 读取输入文件内容
    with open(input_file, "r", encoding="utf-8") as f:
        input_text = f.read()

    # 创建一个字典来存储占位词和对应的替换文本
    placeholder_dict = {}

    # 使用 for 循环应用替换规则，并将匹配的文本替换为占位词
    for i, rule in enumerate(replace_rules):
        find_text = rule["orginal_text"]
        replace_with = rule["replaced_text"][lang]
        placeholder = f"[to_be_replace[{i + 1}]]"
        input_text = input_text.replace(find_text, placeholder)
        placeholder_dict[placeholder] = replace_with

    # 删除译文中指示强制翻译的 marker
    input_text = input_text.replace(marker_force_translate, "")


    # 使用正则表达式来匹配 Front Matter
    front_matter_match = re.search(r'---\n(.*?)\n---', input_text, re.DOTALL)
    if front_matter_match:
        front_matter_text = front_matter_match.group(1)
        # 使用PyYAML加载YAML格式的数据
        front_matter_data = yaml.safe_load(front_matter_text)

        # 按照前文的规则对 Front Matter 进行翻译
        front_matter_data = translate_front_matter(front_matter_data, lang)

        # 将处理完的数据转换回 YAML
        front_matter_text_processed = yaml.dump(
            front_matter_data, allow_unicode=True, default_style=None, sort_keys=False)

        # 暂时删除未处理的 Front Matter
        input_text = input_text.replace(
            "---\n"+front_matter_text+"\n---\n", "")
    else:
        # print("没有找到front matter，不进行处理。")
        pass

    # print(input_text) # debug 用，看看输入的是什么

    # 拆分文章
    paragraphs = input_text.split("\n\n")
    input_text = ""
    output_paragraphs = []
    current_paragraph = ""

    for paragraph in paragraphs:
        if len(current_paragraph) + len(paragraph) + 2 <= max_length:
            # 如果当前段落加上新段落的长度不超过最大长度，就将它们合并
            if current_paragraph:
                current_paragraph += "\n\n"
            current_paragraph += paragraph
        else:
            # 否则翻译当前段落，并将翻译结果添加到输出列表中
            output_paragraphs.append(translate_text(current_paragraph, lang))
            current_paragraph = paragraph

    # 处理最后一个段落
    if current_paragraph:
        if len(current_paragraph) + len(input_text) <= max_length:
            # 如果当前段落加上之前的文本长度不超过最大长度，就将它们合并
            input_text += "\n\n" + current_paragraph
        else:
            # 否则翻译当前段落，并将翻译结果添加到输出列表中
            output_paragraphs.append(translate_text(current_paragraph, lang))

    # 如果还有未翻译的文本，就将它们添加到输出列表中
    if input_text:
        output_paragraphs.append(translate_text(input_text, lang))

    # 将输出段落合并为字符串
    output_text = "\n\n".join(output_paragraphs)

    if front_matter_match:
        # 加入 Front Matter
        output_text = "---\n" + front_matter_text_processed + "---\n\n" + output_text

    # 最后，将占位词替换为对应的替换文本
    for placeholder, replacement in placeholder_dict.items():
        output_text = output_text.replace(placeholder, replacement)

    # 写入输出文件
    with open(output_file, "w", encoding="utf-8") as f:
        f.write(output_text)


def process_file(fullPath):
    # 读取 Markdown 文件的内容
    with open(fullPath, "r", encoding="utf-8") as f:
        md_content = f.read()

    # 读取processed_list内容
    with open(processed_list, "r", encoding="utf-8") as f:
        processed_list_content = f.read()

    if marker_force_translate in md_content:  # 如果有强制翻译的标识，则执行这部分的代码
        for lang in translates:
                translate_file(fullPath, lang)
    elif fullPath in exclude_list:  # 不进行翻译
        print(f"Pass the post in exclude_list: {fullPath}")
        sys.stdout.flush()
    elif fullPath in processed_list_content:  # 不进行翻译
        print(f"Pass the post in processed_list: {fullPath}")
        sys.stdout.flush()
    else:  # 翻译为所有语言
        for lang in translates:
            translate_file(fullPath, lang)

    # 将处理完成的文件名加到列表，下次跳过不处理
    if fullPath not in processed_list_content:
        print(f"Added into processed_list: {fullPath}")
        with open(processed_list, "a", encoding="utf-8") as f:
            f.write("\n")
            f.write(fullPath)

    # 强制将缓冲区中的数据刷新到终端中，使用 GitHub Action 时方便实时查看过程
    sys.stdout.flush()

def recursive_process_dir(dir_to_translate):
    # 按文件名称顺序排序
    file_list = [f for f in os.listdir(dir_to_translate) if f not in excluded_dirs]
    sorted_file_list = sorted(file_list)

    for filename in sorted_file_list:
        full_path = os.path.join(dir_to_translate, filename)

        if os.path.isdir(full_path):
            # 如果遇到的是目录，则递归处理
            recursive_process_dir(full_path)
        elif filename.endswith(".md"):
            try:
                process_file(full_path)
            except Exception as e:
                # 捕获异常并输出错误信息
                print(f"An error has occurred while processing file {full_path}: {e}")
                sys.stdout.flush()

# 开始递归处理目录
try:
    recursive_process_dir(dir_to_translate)
    # 所有任务完成的提示
    print("Congratulations! All files processed done.")
    sys.stdout.flush()
except Exception as e:
    print(f"An error has occurred: {e}")
    sys.stdout.flush()
    raise SystemExit(1)  # 1 表示非正常退出
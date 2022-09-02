<template><div><h1 id="top-bar" tabindex="-1"><a class="header-anchor" href="#top-bar" aria-hidden="true">#</a> Top Bar</h1>
<div style="margin: 0 130px">
<p><img src="@source/plugin/topBar/top-bar.png" alt="top-bar"></p>
</div>
<h2 id="组件示例" tabindex="-1"><a class="header-anchor" href="#组件示例" aria-hidden="true">#</a> 组件示例</h2>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dweb-top-bar</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>topbar<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Ar 扫雷<span class="token punctuation">"</span></span> <span class="token attr-name">background-color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#eeee<span class="token punctuation">"</span></span> <span class="token attr-name">foreground-color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#000<span class="token punctuation">"</span></span>  <span class="token attr-name">overlay</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0.4<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dweb-top-bar-button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>aaa<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dweb-icon</span> <span class="token attr-name">source</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Filled.AddCircle<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dweb-icon</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dweb-top-bar-button</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dweb-top-bar-button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ccc<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dweb-icon</span> <span class="token attr-name">source</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://objectjson.waterbang.top/test-vue3/vite.svg<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>AssetIcon<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dweb-icon</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dweb-top-bar-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dweb-top-bar</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dweb-top-bar" tabindex="-1"><a class="header-anchor" href="#dweb-top-bar" aria-hidden="true">#</a> dweb-top-bar</h2>
<p>包含属性<code v-pre>background-color</code>,<code v-pre>foreground-color</code>,<code v-pre>hidden</code>, <code v-pre>overlay</code>,<code v-pre>title</code>。</p>
<h3 id="title" tabindex="-1"><a class="header-anchor" href="#title" aria-hidden="true">#</a> <code v-pre>title</code></h3>
<p>控制主标题。</p>
<h3 id="background-color" tabindex="-1"><a class="header-anchor" href="#background-color" aria-hidden="true">#</a> <code v-pre>background-color</code></h3>
<p>控制<code v-pre>topBar</code>的背景颜色。</p>
<h3 id="foreground-color" tabindex="-1"><a class="header-anchor" href="#foreground-color" aria-hidden="true">#</a> <code v-pre>foreground-color</code></h3>
<p><code v-pre>topBar</code>内容的首选颜色。控制返回键，标题，内置icon的颜色。</p>
<blockquote>
<p>或许应该再给几个属性？ <code v-pre>icon-color</code>,<code v-pre>title-color</code>,<code v-pre>back-color</code></p>
</blockquote>
<h3 id="overlay" tabindex="-1"><a class="header-anchor" href="#overlay" aria-hidden="true">#</a> <code v-pre>overlay</code></h3>
<p>是否开启<code v-pre>topBar</code>遮罩,也就是背景变透明，建议传递值<code v-pre>0~1</code>之间。
默认值：1 , 也就是不透明。</p>
<h2 id="dweb-top-bar-button" tabindex="-1"><a class="header-anchor" href="#dweb-top-bar-button" aria-hidden="true">#</a> dweb-top-bar-button</h2>
<p>包含属性:<code v-pre>disabled</code>。<code v-pre>hidden</code>(还没写,要不要这个属性嘞？)</p>
<blockquote>
<p>点击下拉菜单？</p>
</blockquote>
<h3 id="disabled" tabindex="-1"><a class="header-anchor" href="#disabled" aria-hidden="true">#</a> <code v-pre>disabled</code></h3>
<p>禁止触发所有事件，包括无障碍事件。但是还是看得见。</p>
<h2 id="dweb-icon" tabindex="-1"><a class="header-anchor" href="#dweb-icon" aria-hidden="true">#</a> dweb-icon</h2>
<p>包含属性：<code v-pre>type</code>, <code v-pre>description</code>, <code v-pre>size</code>, <code v-pre>source</code>。</p>
<h3 id="source" tabindex="-1"><a class="header-anchor" href="#source" aria-hidden="true">#</a> <code v-pre>source</code></h3>
<p>建议传递svg格式图片，注意如果使用自定义图片则无法定义其颜色。</p>
<h3 id="type" tabindex="-1"><a class="header-anchor" href="#type" aria-hidden="true">#</a> <code v-pre>type</code></h3>
<p>设置icon的类型，如果要传递自定义图片，<code v-pre>Android</code>需要指定 <code v-pre>type=&quot;AssetIcon&quot;</code>。</p>
<h3 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> <code v-pre>description</code></h3>
<p>无障碍服务用来描述这个图标代表什么的文本。(⚠️ 未测试)</p>
<h3 id="size" tabindex="-1"><a class="header-anchor" href="#size" aria-hidden="true">#</a> <code v-pre>size</code></h3>
<p>控制图标大小。</p>
</div></template>



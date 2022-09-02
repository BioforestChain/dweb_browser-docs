<template><div><h1 id="navigation-bar" tabindex="-1"><a class="header-anchor" href="#navigation-bar" aria-hidden="true">#</a> Navigation Bar</h1>
<p><img src="@source/plugin/bottomBar/navigation-bar.png" alt="navigation-bar"></p>
<h2 id="组件示例" tabindex="-1"><a class="header-anchor" href="#组件示例" aria-hidden="true">#</a> 组件示例</h2>
<blockquote>
<p>以vue3 为例</p>
</blockquote>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dweb-bottom-bar</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bottom_bar<span class="token punctuation">"</span></span> <span class="token attr-name">background-color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#D0BCFF<span class="token punctuation">"</span></span>  <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>70<span class="token punctuation">"</span></span> <span class="token attr-name">hidden</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span>  <span class="token attr-name">overlay</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0.2<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dweb-bottom-bar-button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ddd<span class="token punctuation">"</span></span> <span class="token attr-name">selected</span>  <span class="token attr-name">indicator-color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#D0BCFF<span class="token punctuation">"</span></span>  <span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dweb-bottom-bar-icon</span> <span class="token attr-name">source</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://objectjson.waterbang.top/test-vue3/land.svg<span class="token punctuation">"</span></span> <span class="token attr-name">un-source</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://objectjson.waterbang.top/test-vue3/land-not.svg<span class="token punctuation">"</span></span>  <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>AssetIcon<span class="token punctuation">"</span></span>   <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dweb-bottom-bar-icon</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dweb-bottom-bar-text</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#938F99<span class="token punctuation">"</span></span> <span class="token attr-name">selected-color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#1C1B1F<span class="token punctuation">"</span></span>  <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>土地<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dweb-bottom-bar-text</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dweb-bottom-bar-button</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dweb-bottom-bar-button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>eee<span class="token punctuation">"</span></span>  <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>openScanner<span class="token punctuation">"</span></span> <span class="token attr-name">diSelectable</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dweb-bottom-bar-icon</span> <span class="token attr-name">source</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://objectjson.waterbang.top/test-vue3/scanner.svg<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>AssetIcon<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dweb-bottom-bar-icon</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dweb-bottom-bar-text</span>  <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>扫码<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dweb-bottom-bar-text</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dweb-bottom-bar-button</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dweb-bottom-bar-button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fff<span class="token punctuation">"</span></span> <span class="token attr-name">indicator-color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#D0BCFF<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dweb-bottom-bar-icon</span> <span class="token attr-name">source</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://objectjson.waterbang.top/test-vue3/home.svg<span class="token punctuation">"</span></span> <span class="token attr-name">un-source</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://objectjson.waterbang.top/test-vue3/home-not.svg<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>AssetIcon<span class="token punctuation">"</span></span>  <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dweb-bottom-bar-icon</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dweb-bottom-bar-text</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#938F99<span class="token punctuation">"</span></span> <span class="token attr-name">selected-color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#1C1B1F<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>个人空间<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dweb-bottom-bar-text</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dweb-bottom-bar-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dweb-bottom-bar</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dweb-bottom-bar" tabindex="-1"><a class="header-anchor" href="#dweb-bottom-bar" aria-hidden="true">#</a> dweb-bottom-bar</h2>
<p>包含属性<code v-pre>background-color</code>,<code v-pre>foreground-color</code>,<code v-pre>hidden</code>, <code v-pre>overlay</code>,<code v-pre>height</code>。</p>
<h3 id="background-color" tabindex="-1"><a class="header-anchor" href="#background-color" aria-hidden="true">#</a> <code v-pre>background-color</code></h3>
<p>控制bottombar的背景颜色。</p>
<h3 id="foreground-color" tabindex="-1"><a class="header-anchor" href="#foreground-color" aria-hidden="true">#</a> <code v-pre>foreground-color</code></h3>
<p>bottombar内容的首选颜色。默认为 <code v-pre>background-color</code> 的匹配内容颜色。</p>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>一个诡异的属性暂无效果。</p>
</div>
<h3 id="hidden" tabindex="-1"><a class="header-anchor" href="#hidden" aria-hidden="true">#</a> <code v-pre>hidden</code></h3>
<p>是否隐藏bottombar。
默认值：false。</p>
<h3 id="overlay" tabindex="-1"><a class="header-anchor" href="#overlay" aria-hidden="true">#</a> <code v-pre>overlay</code></h3>
<p>是否开启bottombar遮罩,也就是背景变透明，建议传递值<code v-pre>0~1</code>之间。
默认值：1 , 也就是不透明。</p>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>android是用rgba控制指示器颜色的，因此如果要使用此属性，需要禁掉<code v-pre>indicator-color</code>，但是！！
android源码强制覆盖了<code v-pre>indicatorColor</code>来控制是否选中，所以这个属性是有问题的，期待解决，<a href="https://stackoverflow.com/questions/73566582/how-do-hide-navigationbar-indicatorcolor" target="_blank" rel="noopener noreferrer">how-do-hide-navigationbar-indicatorcolor<ExternalLinkIcon/></a>。</p>
</div>
<p><img src="@source/plugin/bottomBar/indicator-color.png" alt="indicator"></p>
<h3 id="height" tabindex="-1"><a class="header-anchor" href="#height" aria-hidden="true">#</a> <code v-pre>height</code></h3>
<p>控制bottom高度。
默认值： Android: 80 ，IOS: 88。</p>
<h2 id="dweb-bottom-bar-button" tabindex="-1"><a class="header-anchor" href="#dweb-bottom-bar-button" aria-hidden="true">#</a> dweb-bottom-bar-button</h2>
<p>包含属性：<code v-pre>disabled</code>, <code v-pre>selected</code>, <code v-pre>diSelectable</code>, <code v-pre>indicator-color</code>。</p>
<h3 id="disabled" tabindex="-1"><a class="header-anchor" href="#disabled" aria-hidden="true">#</a> <code v-pre>disabled</code></h3>
<p>禁用所有的事件，包括无障碍事件。</p>
<h3 id="selected" tabindex="-1"><a class="header-anchor" href="#selected" aria-hidden="true">#</a> <code v-pre>selected</code></h3>
<p>控制是否选中。</p>
<h3 id="diselectable" tabindex="-1"><a class="header-anchor" href="#diselectable" aria-hidden="true">#</a> <code v-pre>diSelectable</code></h3>
<p>此属性控制bar是否可以选择，可触发事件。</p>
<h3 id="indicator-color" tabindex="-1"><a class="header-anchor" href="#indicator-color" aria-hidden="true">#</a> <code v-pre>indicator-color</code></h3>
<p>控制选中指示器的颜色。如上图4号标记。</p>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>Android Navigation bar indicatorColor无法设置透明度。即RBGA的A无效，原因是被系统劫持,来控制是否选中。</p>
</div>
<h2 id="dweb-bottom-bar-icon" tabindex="-1"><a class="header-anchor" href="#dweb-bottom-bar-icon" aria-hidden="true">#</a> dweb-bottom-bar-icon</h2>
<p>包含属性：<code v-pre>type</code>, <code v-pre>description</code>, <code v-pre>size</code>, <code v-pre>source</code>,<code v-pre>un-source</code>, <code v-pre>color</code>, <code v-pre>selected-color</code>。</p>
<h3 id="type" tabindex="-1"><a class="header-anchor" href="#type" aria-hidden="true">#</a> <code v-pre>type</code></h3>
<p>设置icon的类型，如果要传递自定义图片，<code v-pre>Android</code>需要指定 <code v-pre>type=&quot;AssetIcon&quot;</code>。</p>
<h3 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> <code v-pre>description</code></h3>
<p>无障碍服务用来描述这个图标代表什么的文本。(⚠️ 未测试)</p>
<h3 id="size" tabindex="-1"><a class="header-anchor" href="#size" aria-hidden="true">#</a> <code v-pre>size</code></h3>
<p>控制图标大小。</p>
<h3 id="source" tabindex="-1"><a class="header-anchor" href="#source" aria-hidden="true">#</a> <code v-pre>source</code></h3>
<p>必传属性，建议传递svg格式图片，此属性存放选中显示的图片。如上图2号标记。</p>
<h3 id="un-source" tabindex="-1"><a class="header-anchor" href="#un-source" aria-hidden="true">#</a> <code v-pre>un-source</code></h3>
<p>建议传递svg格式图片,此属性存放未选中显示的图片，如果未传递则选未选中都使用<code v-pre>source</code>图片。</p>
<h3 id="color-selected-color" tabindex="-1"><a class="header-anchor" href="#color-selected-color" aria-hidden="true">#</a> <code v-pre>color</code>, <code v-pre>selected-color</code></h3>
<p>控制选中或者未选中的<code v-pre>icon</code>颜色,自定义图片无效。</p>
<h2 id="dweb-bottom-bar-text" tabindex="-1"><a class="header-anchor" href="#dweb-bottom-bar-text" aria-hidden="true">#</a> dweb-bottom-bar-text</h2>
<p>包含属性：<code v-pre>value</code>,<code v-pre>color</code>, <code v-pre>selected-color</code>, <code v-pre>hide-value</code>。</p>
<h3 id="value" tabindex="-1"><a class="header-anchor" href="#value" aria-hidden="true">#</a> <code v-pre>value</code></h3>
<p>设置bottom bar的文字。如上图3号标记。</p>
<h3 id="color" tabindex="-1"><a class="header-anchor" href="#color" aria-hidden="true">#</a> <code v-pre>color</code></h3>
<p>未选中的文字颜色。</p>
<h3 id="selected-color" tabindex="-1"><a class="header-anchor" href="#selected-color" aria-hidden="true">#</a> <code v-pre>selected-color</code></h3>
<p>选中的文字颜色。</p>
<h3 id="hide-value" tabindex="-1"><a class="header-anchor" href="#hide-value" aria-hidden="true">#</a> <code v-pre>hide-value</code></h3>
<p>如果指定此值，则只有选中的时候才会显示文字。</p>
</div></template>



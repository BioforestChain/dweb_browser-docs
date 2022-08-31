import{_ as a,o as n,c as s,a as t}from"./app.74c756b1.js";const o="/assets/navigation-bar.6b8f3104.png",e={},p=t('<h1 id="navigation-bar" tabindex="-1"><a class="header-anchor" href="#navigation-bar" aria-hidden="true">#</a> Navigation Bar</h1><p><img src="'+o+`" alt="navigation-bar"></p><h2 id="\u7EC4\u4EF6\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u793A\u4F8B" aria-hidden="true">#</a> \u7EC4\u4EF6\u793A\u4F8B</h2><blockquote><p>\u4EE5vue3 \u4E3A\u4F8B</p></blockquote><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dweb-bottom-bar</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bottom_bar<span class="token punctuation">&quot;</span></span> <span class="token attr-name">background-color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#D0BCFF<span class="token punctuation">&quot;</span></span> <span class="token attr-name">indicator-color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#f3bf44<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dweb-bottom-bar-button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ddd<span class="token punctuation">&quot;</span></span> <span class="token attr-name">selected</span>   <span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dweb-bottom-bar-icon</span> <span class="token attr-name">source</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://objectjson.waterbang.top/test-vue3/land.svg<span class="token punctuation">&quot;</span></span> <span class="token attr-name">un-source</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://objectjson.waterbang.top/test-vue3/land-not.svg<span class="token punctuation">&quot;</span></span>  <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>AssetIcon<span class="token punctuation">&quot;</span></span>   <span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dweb-bottom-bar-icon</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dweb-bottom-bar-text</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#FFD8E4<span class="token punctuation">&quot;</span></span> <span class="token attr-name">selected-color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#B3261E<span class="token punctuation">&quot;</span></span>  <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u571F\u5730<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dweb-bottom-bar-text</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dweb-bottom-bar-button</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dweb-bottom-bar-button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>eee<span class="token punctuation">&quot;</span></span>  <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>openScanner<span class="token punctuation">&quot;</span></span> <span class="token attr-name">diSelectable</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dweb-bottom-bar-icon</span> <span class="token attr-name">source</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://objectjson.waterbang.top/test-vue3/scanner.svg<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>AssetIcon<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dweb-bottom-bar-icon</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dweb-bottom-bar-text</span>  <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u626B\u7801<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dweb-bottom-bar-text</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dweb-bottom-bar-button</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dweb-bottom-bar-button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fff<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dweb-bottom-bar-icon</span> <span class="token attr-name">source</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://objectjson.waterbang.top/test-vue3/home.svg<span class="token punctuation">&quot;</span></span> <span class="token attr-name">un-source</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://objectjson.waterbang.top/test-vue3/home-not.svg<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>AssetIcon<span class="token punctuation">&quot;</span></span>  <span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dweb-bottom-bar-icon</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dweb-bottom-bar-text</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#FFD8E4<span class="token punctuation">&quot;</span></span> <span class="token attr-name">selected-color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#B3261E<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u4E2A\u4EBA\u7A7A\u95F4<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dweb-bottom-bar-text</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dweb-bottom-bar-button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dweb-bottom-bar</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dweb-bottom-bar" tabindex="-1"><a class="header-anchor" href="#dweb-bottom-bar" aria-hidden="true">#</a> dweb-bottom-bar</h2><p>\u5305\u542B\u5C5E\u6027<code>background-color</code>,<code>indicator-color</code>,<code>hidden</code>, <code>overlay</code>,<code>height</code>\u3002</p><h3 id="background-color" tabindex="-1"><a class="header-anchor" href="#background-color" aria-hidden="true">#</a> <code>background-color</code></h3><p>\u63A7\u5236navigationBar\u7684\u80CC\u666F\u989C\u8272\u3002</p><h3 id="indicator-color" tabindex="-1"><a class="header-anchor" href="#indicator-color" aria-hidden="true">#</a> <code>indicator-color</code></h3><p>\u63A7\u5236\u9009\u4E2D\u6307\u793A\u5668\u7684\u989C\u8272\u3002</p><h2 id="dweb-bottom-bar-button" tabindex="-1"><a class="header-anchor" href="#dweb-bottom-bar-button" aria-hidden="true">#</a> dweb-bottom-bar-button</h2><p>\u5305\u542B\u5C5E\u6027\uFF1A<code>disabled</code>, <code>selected</code>, <code>selectable</code>, <code>indicator-color</code>\u3002</p><h3 id="selected" tabindex="-1"><a class="header-anchor" href="#selected" aria-hidden="true">#</a> selected</h3><p>\u63A7\u5236\u662F\u5426\u9009\u4E2D</p><h2 id="dweb-bottom-bar-icon" tabindex="-1"><a class="header-anchor" href="#dweb-bottom-bar-icon" aria-hidden="true">#</a> dweb-bottom-bar-icon</h2><p>\u5305\u542B\u5C5E\u6027\uFF1A<code>type</code>, <code>description</code>, <code>size</code>, <code>source</code>,<code>un-source</code>, <code>color</code>, <code>selected-color</code>\u3002</p><h2 id="dweb-bottom-bar-text" tabindex="-1"><a class="header-anchor" href="#dweb-bottom-bar-text" aria-hidden="true">#</a> dweb-bottom-bar-text</h2><p>\u5305\u542B\u5C5E\u6027\uFF1A<code>value</code>,<code>color</code>, <code>selected-color</code>\u3002</p>`,19),c=[p];function u(l,i){return n(),s("div",null,c)}const k=a(e,[["render",u],["__file","index.html.vue"]]);export{k as default};

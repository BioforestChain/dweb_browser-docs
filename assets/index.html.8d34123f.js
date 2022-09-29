import{_ as n,o as s,c as a,d as t}from"./app.a217caa3.js";const e={},p=t(`<h1 id="plaoc-\u670D\u52A1\u7AEF" tabindex="-1"><a class="header-anchor" href="#plaoc-\u670D\u52A1\u7AEF" aria-hidden="true">#</a> Plaoc \u670D\u52A1\u7AEF</h1><h2 id="\u5FEB\u901F\u5F00\u59CB" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u901F\u5F00\u59CB" aria-hidden="true">#</a> \u5FEB\u901F\u5F00\u59CB</h2><p>\u9996\u5148\u60A8\u5E94\u8BE5\u5728\u60A8\u7684\u540E\u7AEF\u6839\u76EE\u5F55\u521B\u5EFA\u4E00\u4E2A\u914D\u7F6E\u6587\u4EF6\u540D\u79F0\u4E3A<code>bfsa-metadata.ts</code>\u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u5927\u4F53\u7684\u683C\u5F0F\u5982\u4E0B:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> metaConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@bfsx/metadata&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// import &quot;./node_modules/index.html&quot;;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">metaConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  manifest<span class="token operator">:</span> <span class="token punctuation">{</span>
    version<span class="token operator">:</span> <span class="token string">&quot;1.0.0&quot;</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">&quot;ar\u626B\u7801&quot;</span><span class="token punctuation">,</span>
    icon<span class="token operator">:</span> <span class="token string">&quot;mzt.png&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u5E94\u7528\u7684\u56FE\u7247</span>
    engines<span class="token operator">:</span> <span class="token punctuation">{</span>
      dwebview<span class="token operator">:</span> <span class="token string">&quot;~1.0.0&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5E94\u7528\u6240\u5C5E\u94FE\u7684\u540D\u79F0\uFF08\u7CFB\u7EDF\u5E94\u7528\u7684\u94FE\u540D\u4E3A\u901A\u914D\u7B26\u201C*\u201D\uFF0C\u5176\u5408\u6CD5\u6027\u7531\u8282\u70B9\u7A0B\u5E8F\u81EA\u8EAB\u51B3\u5B9A\uFF0C\u4E0D\u8DDF\u968F\u94FE\u4E0A\u6570\u636E\uFF09</span>
    origin<span class="token operator">:</span> <span class="token string">&quot;bfchain&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5F00\u53D1\u8005</span>
    author<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;waterbang,water_bang@163.com&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5E94\u7528\u641C\u7D22\u7684\u63CF\u8FF0</span>
    description<span class="token operator">:</span> <span class="token string">&quot;Awasome DWeb&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5E94\u7528\u641C\u7D22\u7684\u5173\u952E\u5B57</span>
    keywords<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;VR&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// \u79C1\u94A5\u6587\u4EF6\uFF0C\u7528\u4E8E\u6700\u7EC8\u7684\u5E94\u7528\u7B7E\u540D</span>
    privateKey<span class="token operator">:</span> <span class="token string">&quot;bmr9vohvtvbvwrs3p4bwgzsmolhtphsvvj&quot;</span><span class="token punctuation">,</span>
    homepage<span class="token operator">:</span> <span class="token string">&quot;docs.plaoc.com&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5E94\u7528\u5165\u53E3\uFF0C\u53EF\u4EE5\u914D\u7F6E\u591A\u4E2A\uFF0C\u5176\u4E2Dindex\u4E3A\u7F3A\u7701\u540D\u79F0\u3002</span>
    <span class="token comment">// \u5916\u90E8\u53EF\u4EE5\u4F7F\u7528 DWEB_ID.bfchain (\u7B49\u4EF7\u540C\u4E8Eindex.DWEB_ID.bfchain)\u3001admin.DWEB_ID.bfchain \u6765\u542F\u52A8\u5176\u5B83\u9875\u9762</span>
    enters<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;index.html&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">//\u672C\u6B21\u53D1\u5E03\u7684\u4FE1\u606F\uFF0C\u4E00\u822C\u5B58\u653E\u66F4\u65B0\u4FE1\u606F</span>
    releaseNotes<span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">//  \u672C\u6B21\u53D1\u5E03\u7684\u6807\u9898\uFF0C\u7528\u4E8E\u5C55\u793A\u66F4\u65B0\u4FE1\u606F\u65F6\u7684\u6807\u9898</span>
    releaseName<span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// \u53D1\u5E03\u65E5\u671F</span>
    releaseDate<span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">//  \u8FD9\u91CC\u914D\u7F6E\u7684\u767D\u540D\u5355\u5C06\u4E0D\u88AB\u62E6\u622A</span>
  whitelist<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;https://unpkg.com&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;https://cn.vitejs.dev&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// \u5B9A\u4E49\u8DEF\u7531\uFF0C\u8FD9\u91CC\u4E0Eenter\u662F\u5B8C\u5168\u72EC\u7ACB\u7684\u5B58\u5728\u3002</span>
  <span class="token comment">// \u5916\u90E8\u53EF\u4EE5\u4F7F\u7528 admin.DWEB_ID.bfchain/routeA \u6765\u4F20\u5165\u53C2\u6570</span>
  dwebview<span class="token operator">:</span> <span class="token punctuation">{</span>
    importmap<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        url<span class="token operator">:</span> <span class="token string">&quot;/getBlockInfo&quot;</span><span class="token punctuation">,</span>
        response<span class="token operator">:</span>
          <span class="token string">&quot;https://62b94efd41bf319d22797acd.mockapi.io/bfchain/v1/getBlockInfo&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        url<span class="token operator">:</span> <span class="token string">&quot;/app/bfchain.dev/index.html&quot;</span><span class="token punctuation">,</span>
        response<span class="token operator">:</span> <span class="token string">&quot;/app/bfchain.dev/index.html&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        url<span class="token operator">:</span> <span class="token string">&quot;/api/*&quot;</span><span class="token punctuation">,</span>
        response<span class="token operator">:</span> <span class="token string">&quot;./api/*&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
     
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u60A8\u7684\u6240\u6709\u6743\u9650\u914D\u7F6E\u548C\u8DEF\u7531\u6620\u5C04\u90FD\u5728\u8FD9\u4E2A\u6587\u4EF6\u4E0B\u58F0\u660E\u3002</p><h3 id="\u542F\u52A8\u524D\u7AEF\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8\u524D\u7AEF\u9879\u76EE" aria-hidden="true">#</a> \u542F\u52A8\u524D\u7AEF\u9879\u76EE</h3><p>\u524D\u7AEF\u542F\u52A8\u7684\u65F6\u5019\u9700\u8981\u4F20\u5165\u60A8\u7684\u914D\u7F6E\u6587\u4EF6,\u5927\u4F53\u683C\u5F0F\u5982\u4E0B\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// import metaData from &quot;./bfsa-metadata.ts&quot;; // deno</span>
<span class="token keyword">import</span> metaData <span class="token keyword">from</span> <span class="token string">&quot;./bfsa-metadata&quot;</span><span class="token punctuation">;</span> <span class="token comment">// typescript</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> DWebView <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@bfsx/core&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> webView <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DWebView</span><span class="token punctuation">(</span>metaData<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u591A\u5165\u53E3\u6307\u5B9A\uFF0C\u53EF\u4EE5\u914D\u7F6E\u524D\u7AEF\u542F\u52A8\u7684\u591A\u5165\u53E3\uFF0C\u9700\u8981\u5728bfsa-metadata\u7684enters\u4E0B\u914D\u7F6E\u3002</span>
webView<span class="token punctuation">.</span><span class="token function">activity</span><span class="token punctuation">(</span><span class="token string">&quot;index.html&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),o=[p];function i(c,l){return s(),a("div",null,o)}const r=n(e,[["render",i],["__file","index.html.vue"]]);export{r as default};

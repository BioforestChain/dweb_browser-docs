<template><div><h1 id="plaoc-文档" tabindex="-1"><a class="header-anchor" href="#plaoc-文档" aria-hidden="true">#</a> Plaoc 文档</h1>
<h2 id="快速上手" tabindex="-1"><a class="header-anchor" href="#快速上手" aria-hidden="true">#</a> 快速上手</h2>
<h3 id="前端-vue-react-angular" tabindex="-1"><a class="header-anchor" href="#前端-vue-react-angular" aria-hidden="true">#</a> 前端(Vue/React/Angular)</h3>
<p>在入口页面引用Plugin。</p>
<blockquote>
<p>以vue3为例：</p>
</blockquote>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'@bfsx/plugin'</span><span class="token punctuation">;</span>   <span class="token comment">// +++++++++++</span>
<span class="token keyword">import</span> <span class="token string">"./style.css"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">"./App.vue"</span><span class="token punctuation">;</span>
<span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">"#app"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="按需引入" tabindex="-1"><a class="header-anchor" href="#按需引入" aria-hidden="true">#</a> 按需引入</h4>
<p>这个没得</p>
<h2 id="配置参考" tabindex="-1"><a class="header-anchor" href="#配置参考" aria-hidden="true">#</a> 配置参考</h2>
</div></template>



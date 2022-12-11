import{_ as t,r as p,o as l,c as i,a as n,b as s,d as e,e as a}from"./app.ca1881d0.js";const c={},u=a(`<h1 id="项目结构" tabindex="-1"><a class="header-anchor" href="#项目结构" aria-hidden="true">#</a> 项目结构</h1><h5 id="文件说明" tabindex="-1"><a class="header-anchor" href="#文件说明" aria-hidden="true">#</a> 文件说明</h5><ul><li>pages 用来存放所有小程序的页面 <ul><li>index logs <ul><li>.js 页面的脚本文件，存放页面的数据、事件处理函数等</li><li>.json 当前页面的配置文件，配置窗口的外观、表现等</li><li>.wxml 页面的模板结构文件</li><li>.wxss 当前页面的样式表文件</li></ul></li></ul></li><li>utils 用来存放工具性质的模块(如：格式化时间的自定义模块)</li><li>app.js 小程序入口文件</li><li>app.json 小程序全局的配置文件</li><li>app.wxss 全局样式文件</li><li>project.config.json 项目的配置文件</li><li>sitemap.json 用来配置小程序及其他页面是否允许被微信索引</li></ul><h5 id="json配置文件的作用" tabindex="-1"><a class="header-anchor" href="#json配置文件的作用" aria-hidden="true">#</a> json配置文件的作用</h5><blockquote><p><code>json</code>是一种数据格式，在实际开发中，<code>json</code>总是以配置文件的形式出现。小程序项目中也不例外：通过不同的<code>.json</code>配置文件，可以对小程序项目进行不同级别的配置。</p></blockquote><ul><li>小程序项目中有<code>4种json</code>配置文件分别是： <ol><li>项目根目录中的<code>app.json</code>配置文件</li><li>项目根目录中的<code>project.config.json</code>配置文件</li><li>项目根目录中的<code>sitemap.json</code>配置文件</li><li>每个页面文件夹中的<code>.json</code>配置文件</li></ol></li></ul><h5 id="app-json-文件" tabindex="-1"><a class="header-anchor" href="#app-json-文件" aria-hidden="true">#</a> <code>app.json</code> 文件</h5><blockquote><p><code>app.json</code>是当前小程序的全局配置，包含了小程序的所有页面的路径、窗口外观、界面表现、底部tab等。</p></blockquote><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token comment">// 所有小程序的页面路径</span>
  <span class="token property">&quot;pages&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
    <span class="token string">&quot;pages/index/index&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;pages/logs/logs&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 定义所有页面的背景色、文字颜色等</span>
  <span class="token property">&quot;window&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;backgroundTextStyle&quot;</span><span class="token operator">:</span><span class="token string">&quot;light&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;navigationBarBackgroundColor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#fff&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;navigationBarTitleText&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Weixin&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;navigationBarTextStyle&quot;</span><span class="token operator">:</span><span class="token string">&quot;black&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 全局定义小程序组件所使用的样式版本</span>
  <span class="token property">&quot;style&quot;</span><span class="token operator">:</span> <span class="token string">&quot;v2&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// 用来指明sitemap.json的位置</span>
  <span class="token property">&quot;sitemapLocation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;sitemap.json&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="project-config-json-文件" tabindex="-1"><a class="header-anchor" href="#project-config-json-文件" aria-hidden="true">#</a> <code>project.config.json</code> 文件</h5><blockquote><p>开发工具个性化配置文件</p></blockquote>`,11),r={href:"https://developers.weixin.qq.com/miniprogram/dev/devtools/projectconfig.html",target:"_blank",rel:"noopener noreferrer"},d=a(`<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;开发工具项目配置文件&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;packOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;ignore&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;include&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;setting&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;bundle&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;userConfirmedBundleSwitch&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;urlCheck&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;scopeDataCheck&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;coverView&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;es6&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;postcss&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;compileHotReLoad&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;lazyloadPlaceholderEnable&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;preloadBackgroundData&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;minified&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;autoAudits&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;newFeature&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;uglifyFileName&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;uploadWithSourceMap&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;useIsolateContext&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;nodeModules&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;enhance&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;useMultiFrameRuntime&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;useApiHook&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;useApiHostProcess&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;showShadowRootInWxmlPanel&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;packNpmManually&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;enableEngineNative&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;packNpmRelationList&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;minifyWXSS&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;showES6CompileOption&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;minifyWXML&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;useStaticServer&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;checkInvalidKey&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;babelSetting&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;ignore&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;disablePlugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;outputPath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;disableUseStrict&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;useCompilerPlugins&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;compileType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;miniprogram&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;libVersion&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2.19.4&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;appid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wx91eb89fb3cc017e6&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;projectname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;miniprogram-92&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;condition&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editorSetting&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;tabIndent&quot;</span><span class="token operator">:</span> <span class="token string">&quot;insertSpaces&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;tabSize&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="sitemap-json-文件" tabindex="-1"><a class="header-anchor" href="#sitemap-json-文件" aria-hidden="true">#</a> <code>sitemap.json</code> 文件</h5><blockquote><p>小程序内的搜索，类似seo</p></blockquote>`,3),k={href:"https://developers.weixin.qq.com/miniprogram/dev/framework/sitemap.html",target:"_blank",rel:"noopener noreferrer"},v=a(`<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;desc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;SEO&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
  <span class="token property">&quot;action&quot;</span><span class="token operator">:</span> <span class="token string">&quot;allow&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 值：disallow不被索引</span>
  <span class="token property">&quot;page&quot;</span><span class="token operator">:</span> <span class="token string">&quot;*&quot;</span> <span class="token comment">// * 代表所有页面</span>
  <span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="页面的-json配置" tabindex="-1"><a class="header-anchor" href="#页面的-json配置" aria-hidden="true">#</a> 页面的.json配置</h5><blockquote><p>小程序中的每一个页面，可以使用.json文件来对本页面的窗口外观进行配置，页面中的配置会覆盖app.json的window中相同的配置项。页面的权限高于app.json</p></blockquote><h5 id="新建小程序页面" tabindex="-1"><a class="header-anchor" href="#新建小程序页面" aria-hidden="true">#</a> 新建小程序页面</h5><blockquote><p>只需要中pages中建立路径即可</p></blockquote><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;pages&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
    <span class="token string">&quot;pages/index/index&quot;</span><span class="token punctuation">,</span>  <span class="token comment">//默认首页</span>
    <span class="token string">&quot;pages/logs/logs&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;pages/list/list&quot;</span>  <span class="token comment">//小程序会帮我们自己新建</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="修改项目首页" tabindex="-1"><a class="header-anchor" href="#修改项目首页" aria-hidden="true">#</a> 修改项目首页</h5><p>只需要调整app.json -&gt; pages数组中页面路径的前后顺序，即可修改项目的首页，小程序会把排在第一位的页面当作首页项目进行渲染。</p><div class="language-josn line-numbers-mode" data-ext="josn"><pre class="language-josn"><code>{
  &quot;pages&quot;:[
  	&quot;pages/list/list&quot;,  //默认首页
    &quot;pages/index/index&quot;,
    &quot;pages/logs/logs&quot;
  ],
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="wxml文件" tabindex="-1"><a class="header-anchor" href="#wxml文件" aria-hidden="true">#</a> WXML文件</h5><blockquote><p>wxml是小程序框架设计的一套标签语言，用来构建小程序页面的结构，其作用类似于网页开发中的html。</p></blockquote><ol><li><p>标签的名称不同</p><ul><li>HTML (div,span,img,a)</li><li>WXML (view,text,image,navigator)</li></ul></li><li><p>属性节点不同</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span> <span class="token punctuation">&quot;</span>#<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>超链接<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span> 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>navigator</span> <span class="token attr-name">url</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/pages/index/<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>navigator</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>提供了类似于vue中的模板语法</p><ul><li>数据绑定</li><li>列表渲染</li><li>条件渲染</li></ul></li></ol><h5 id="wxss样式" tabindex="-1"><a class="header-anchor" href="#wxss样式" aria-hidden="true">#</a> WXSS样式</h5><ol><li>新增了<code>rpx</code>尺寸单位 <ul><li><code>css</code>中需要手动进行像素单位换算</li><li><code>wxss</code>在底层支持新的尺寸单位<code>rpx</code>，在不同大小的屏幕上小程序会自动进行换算</li></ul></li><li>提供了全局的样式和局部样式 <ul><li>项目根目录中的<code>app.wxss</code>会作用于所有的小程序页面</li><li>局部页面的<code>.wxss</code>样式只对当前页面生效</li></ul></li><li><code>wxss</code>支持部分的<code>css</code>选择器 <ul><li><code>.class</code>和<code>#id</code></li><li><code>element</code></li><li>并集选择器、后代选择器</li><li><code>::after</code>和<code>::before</code>等伪类选择器</li></ul></li></ol><h5 id="js文件" tabindex="-1"><a class="header-anchor" href="#js文件" aria-hidden="true">#</a> .JS文件</h5><ol><li>app.js <ul><li>是整个小程序项目的入口文件，通过调用<code>App()</code>函数来启动整个小程序</li></ul></li><li>页面的.js <ul><li>是页面的入口文件，通过调用<code>Page()</code>函数来创建并运行页面</li></ul></li><li>普通的.js <ul><li>是普通的功能模块，用来封装公共的函数或属性供页面使用</li></ul></li></ol>`,16);function q(m,b){const o=p("ExternalLinkIcon");return l(),i("div",null,[u,n("p",null,[s("该文件详细文档："),n("a",r,[s("https://developers.weixin.qq.com/miniprogram/dev/devtools/projectconfig.html"),e(o)])]),d,n("p",null,[s("该文件详细文档："),n("a",k,[s("https://developers.weixin.qq.com/miniprogram/dev/framework/sitemap.html"),e(o)])]),v])}const h=t(c,[["render",q],["__file","index.html.vue"]]);export{h as default};
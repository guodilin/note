import{_ as e,r as t,o as i,c,a as n,b as a,d as o,e as l}from"./app.ca1881d0.js";const r={},d=n("h1",{id:"前言",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#前言","aria-hidden":"true"},"#"),a(" 前言")],-1),p=n("h2",{id:"安装",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#安装","aria-hidden":"true"},"#"),a(" 安装")],-1),u={href:"https://git-scm.com/download",target:"_blank",rel:"noopener noreferrer"},m=l(`<h2 id="忽略文件" tabindex="-1"><a class="header-anchor" href="#忽略文件" aria-hidden="true">#</a> 忽略文件</h2><p>新建一个文件，<code>.gitignore</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">touch</span> .gitignore	<span class="token comment"># 终端中创建.gitignore</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>文件配置</p><ul><li>被过滤的文件就不会出现在git仓库中</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>*.css	<span class="token comment"># 表示忽略所有css文件</span>
<span class="token operator">!</span>lib.a	<span class="token comment"># 表示但lib.a除外</span>
/todo	<span class="token comment"># 表示忽略根目录下的todo文件</span>

bin/:	<span class="token comment"># 表示忽略当前路径下的bin文件夹，该文件夹下的内容都会被忽略</span>
*.log:	<span class="token comment"># 表示忽略所有.log文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="分支常用命令" tabindex="-1"><a class="header-anchor" href="#分支常用命令" aria-hidden="true">#</a> 分支常用命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 列出所有本地分支</span>
<span class="token function">git</span> branch
<span class="token comment"># 列出所有远程分支</span>
<span class="token function">git</span> branch <span class="token parameter variable">-r</span>
<span class="token comment"># 新建一个分支，但停留在当前分支</span>
<span class="token function">git</span> branch <span class="token punctuation">[</span>branch-name<span class="token punctuation">]</span>
<span class="token comment"># 新建一个分支，并切换到该分支</span>
<span class="token function">git</span> checkout <span class="token parameter variable">-b</span> <span class="token punctuation">[</span>branch<span class="token punctuation">]</span>
<span class="token comment"># 合并指定分支到当前分支</span>
<span class="token function">git</span> merge <span class="token punctuation">[</span>branch<span class="token punctuation">]</span>
<span class="token comment"># 删除分支</span>
<span class="token function">git</span> branch <span class="token parameter variable">-d</span> <span class="token punctuation">[</span>branch-name<span class="token punctuation">]</span>
<span class="token comment"># 删除远程分支</span>
<span class="token function">git</span> push origin <span class="token parameter variable">--delete</span> <span class="token punctuation">[</span>branch-name<span class="token punctuation">]</span>
<span class="token function">git</span> branch <span class="token parameter variable">-dr</span> <span class="token punctuation">[</span>remote/branch<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function v(b,h){const s=t("ExternalLinkIcon");return i(),c("div",null,[d,p,n("p",null,[a("GIT下载地址："),n("a",u,[a("https://git-scm.com/download"),o(s)])]),m])}const g=e(r,[["render",v],["__file","index.html.vue"]]);export{g as default};

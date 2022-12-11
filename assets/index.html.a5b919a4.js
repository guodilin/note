import{_ as n,o as s,c as a,e}from"./app.ca1881d0.js";const i={},l=e(`<h1 id="基础入门" tabindex="-1"><a class="header-anchor" href="#基础入门" aria-hidden="true">#</a> 基础入门</h1><h5 id="_1-更新pip" tabindex="-1"><a class="header-anchor" href="#_1-更新pip" aria-hidden="true">#</a> ①. 更新pip</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 更新pip</span>
python <span class="token parameter variable">-m</span> pip <span class="token function">install</span> <span class="token parameter variable">--upgrade</span> pip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-配置pip下载源" tabindex="-1"><a class="header-anchor" href="#_2-配置pip下载源" aria-hidden="true">#</a> ②. 配置pip下载源</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 换源安装，临时换源</span>
pip <span class="token function">install</span> <span class="token parameter variable">-i</span> https://pypi.tuna.tsinghua.edu.cn/simple 模块名
<span class="token comment"># 快速配置阿里pip镜像</span>
pip config <span class="token builtin class-name">set</span> global.index-url https://mirrors.aliyun.com/pypi/simple/
pip config <span class="token builtin class-name">set</span> install.trusted-host mirrors.aliyun.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_3-常用命令" tabindex="-1"><a class="header-anchor" href="#_3-常用命令" aria-hidden="true">#</a> ③. 常用命令</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 普通安装</span>
pip <span class="token function">install</span> 模块名
<span class="token comment"># 指定版本安装</span>
pip <span class="token function">install</span> 模块名<span class="token operator">==</span>版本
<span class="token comment"># 卸载</span>
pip uninstall 模块名
<span class="token comment"># 查看已安装的版本及模块</span>
pip list
<span class="token comment"># 查看已安装的版本及模块</span>
pip freeze

<span class="token comment"># 自动生成已安装的依赖包和版本</span>
pip freeze <span class="token operator">&gt;</span> requirements.txt
<span class="token comment"># 安装所生成的依赖包和版本</span>
pip <span class="token function">install</span> <span class="token parameter variable">-r</span> requirements.txt

<span class="token comment"># 生成requirements.txt建议使用pipreqs</span>
<span class="token comment"># 安装pipreqs</span>
pip <span class="token function">install</span> pipreqs
<span class="token comment"># 保存至指定位置</span>
pipreqs /home/project/location <span class="token parameter variable">--encoding</span><span class="token operator">=</span>utf8
<span class="token comment"># 保存当前项目根目录</span>
pipreqs <span class="token builtin class-name">.</span> <span class="token parameter variable">--encoding</span><span class="token operator">=</span>utf8
<span class="token comment"># 强制执行命令--force，覆盖原有的requirements.txt文件</span>
pipreqs <span class="token builtin class-name">.</span> <span class="token parameter variable">--encoding</span><span class="token operator">=</span>utf8 <span class="token parameter variable">--force</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),p=[l];function t(c,r){return s(),a("div",null,p)}const o=n(i,[["render",t],["__file","index.html.vue"]]);export{o as default};

import{_ as t,r as l,o as r,c as o,a as n,b as s,d as e,e as i}from"./app.ca1881d0.js";const p={},c=i(`<h1 id="一、下载安装" tabindex="-1"><a class="header-anchor" href="#一、下载安装" aria-hidden="true">#</a> 一、下载安装</h1><h2 id="_1-centos安装" tabindex="-1"><a class="header-anchor" href="#_1-centos安装" aria-hidden="true">#</a> 1. centos安装</h2><h5 id="_1-安装依赖" tabindex="-1"><a class="header-anchor" href="#_1-安装依赖" aria-hidden="true">#</a> ①. 安装依赖</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token function">wget</span> zlib-devel bzip2-devel openssl-devel ncurses-devel sqlite-devel readline-devel tk-devel gcc <span class="token function">make</span> zlib zlib-devel libffi-devel <span class="token parameter variable">-y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="_2-下载解压python" tabindex="-1"><a class="header-anchor" href="#_2-下载解压python" aria-hidden="true">#</a> ②. 下载解压python</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> https://registry.npmmirror.com/-/binary/python/3.10.6/Python-3.10.6.tgz  <span class="token comment"># 下载python3.10.6</span>
<span class="token function">tar</span> <span class="token parameter variable">-xvf</span> Python-3.10.6.tgz	<span class="token comment"># 解压</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_3-配置编译安装python" tabindex="-1"><a class="header-anchor" href="#_3-配置编译安装python" aria-hidden="true">#</a> ③. 配置编译安装python</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 切换至解压后文件目录</span>
<span class="token builtin class-name">cd</span> Python-3.10.6
<span class="token comment"># 配置python安装路径</span>
./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local/python3.10.6
<span class="token comment"># 编译python及安装python</span>
<span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>
<span class="token comment"># 删除旧版本</span>
<span class="token function">rm</span> <span class="token parameter variable">-f</span> /usr/bin/python
<span class="token comment"># 软链接至最新python</span>
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/python3.10.6/bin/python3.10 /usr/bin/python
<span class="token comment"># 查看当前版本</span>
python <span class="token parameter variable">-V</span>	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_4-修改yum程序" tabindex="-1"><a class="header-anchor" href="#_4-修改yum程序" aria-hidden="true">#</a> ④. 修改yum程序</h5><blockquote><p>创建软链接后，会破坏yum程序的正常使用（只能使用系统自带的python2）</p></blockquote><ul><li>修改如下2个文件</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/usr/libexec/urlgrabber-ext-down
/usr/bin/yum
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>使用vi编辑器，将这2个文件的第一行修改为如下所示</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vi</span> /usr/libexec/urlgrabber-ext-down	<span class="token comment"># 修改urlgrabber-ext-down</span>
/usr/bin/python2	<span class="token comment"># 修改首行/usr/bin/python改为python2</span>
<span class="token function">vi</span> /usr/bin/yum		<span class="token comment"># 进入修改yum</span>
/usr/bin/python2	<span class="token comment"># 修改首行/usr/bin/python改为python2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_5-更新安装pip" tabindex="-1"><a class="header-anchor" href="#_5-更新安装pip" aria-hidden="true">#</a> ⑤. 更新安装pip</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 更新pip,更新完后会出现提示安装路径</span>
python <span class="token parameter variable">-m</span> pip <span class="token function">install</span> <span class="token parameter variable">--upgrade</span> pip
<span class="token comment"># 查找安装路径</span>
<span class="token function">find</span> / <span class="token parameter variable">-name</span> pip
/root/Python-3.10.6/Tools/msi/pip
/root/.cache/pip
/usr/local/python3.10.6/bin/pip
/usr/local/python3.10.6/lib/python3.10/site-packages/pip
<span class="token comment"># 软链接至最新pip</span>
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/python3.10.6/bin/pip /usr/bin/pip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-ubantu安装" tabindex="-1"><a class="header-anchor" href="#_2-ubantu安装" aria-hidden="true">#</a> 2.ubantu安装</h2><h5 id="_1-更换更新源" tabindex="-1"><a class="header-anchor" href="#_1-更换更新源" aria-hidden="true">#</a> ①. 更换更新源</h5>`,18),d={href:"https://developer.aliyun.com/mirror/ubuntu?spm=a2c6h.13651102.0.0.3e221b11HtzVpp",target:"_blank",rel:"noopener noreferrer"},u=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 备份</span>
<span class="token function">cp</span> /etc/apt/sources.list /etc/apt/sources.listbackups
<span class="token comment"># 编辑</span>
<span class="token function">vim</span> /etc/apt/sources.list
<span class="token comment"># 按esc，然后按dd到达顶部，然后dG删除粘贴下面内容</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>删除<code>sources.list</code>所有内容，粘贴下面内容</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>deb https://mirrors.aliyun.com/ubuntu/ focal main restricted universe multiverse
deb-src https://mirrors.aliyun.com/ubuntu/ focal main restricted universe multiverse

deb https://mirrors.aliyun.com/ubuntu/ focal-security main restricted universe multiverse
deb-src https://mirrors.aliyun.com/ubuntu/ focal-security main restricted universe multiverse

deb https://mirrors.aliyun.com/ubuntu/ focal-updates main restricted universe multiverse
deb-src https://mirrors.aliyun.com/ubuntu/ focal-updates main restricted universe multiverse

<span class="token comment"># deb https://mirrors.aliyun.com/ubuntu/ focal-proposed main restricted universe multiverse</span>
<span class="token comment"># deb-src https://mirrors.aliyun.com/ubuntu/ focal-proposed main restricted universe multiverse</span>

deb https://mirrors.aliyun.com/ubuntu/ focal-backports main restricted universe multiverse
deb-src https://mirrors.aliyun.com/ubuntu/ focal-backports main restricted universe multiverse
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-安装依赖" tabindex="-1"><a class="header-anchor" href="#_2-安装依赖" aria-hidden="true">#</a> ②. 安装依赖</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 切换root用户</span>
<span class="token function">sudo</span> <span class="token function">su</span>
<span class="token comment"># 更新库</span>
<span class="token function">apt</span> update
<span class="token comment"># 安装依赖</span>
<span class="token function">apt</span> <span class="token function">install</span> build-essential zlib1g-dev libncurses5-dev libgdbm-dev libnss3-dev libssl-dev libreadline-dev libffi-dev libsqlite3-dev <span class="token function">wget</span> libbz2-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_3-下载解压python" tabindex="-1"><a class="header-anchor" href="#_3-下载解压python" aria-hidden="true">#</a> ③. 下载解压python</h5><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 下载python</span>
wget https<span class="token punctuation">:</span><span class="token operator">//</span>registry<span class="token punctuation">.</span>npmmirror<span class="token punctuation">.</span>com<span class="token operator">/</span><span class="token operator">-</span><span class="token operator">/</span>binary<span class="token operator">/</span>python<span class="token operator">/</span><span class="token number">3.10</span><span class="token number">.6</span><span class="token operator">/</span>Python<span class="token operator">-</span><span class="token number">3.10</span><span class="token number">.6</span><span class="token punctuation">.</span>tgz
<span class="token comment"># 解压</span>
tar <span class="token operator">-</span>zvxf Python<span class="token operator">-</span><span class="token number">3.10</span><span class="token number">.6</span><span class="token punctuation">.</span>tgz
<span class="token comment"># 配置安装路径--enable-shared，启动共享 --enable-optimizations 是优化选项(LTO，PGO 等)加上这个 flag 编译后，性能有 10% 左右的优化</span>
<span class="token punctuation">.</span><span class="token operator">/</span>configure <span class="token operator">-</span><span class="token operator">-</span>prefix<span class="token operator">=</span><span class="token operator">/</span>usr<span class="token operator">/</span>local<span class="token operator">/</span>python3<span class="token punctuation">.</span><span class="token number">10.6</span> <span class="token operator">-</span><span class="token operator">-</span>enable<span class="token operator">-</span>shared  <span class="token operator">-</span><span class="token operator">-</span>enable<span class="token operator">-</span>optimizations
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_4-配置编译安装python" tabindex="-1"><a class="header-anchor" href="#_4-配置编译安装python" aria-hidden="true">#</a> ④. 配置编译安装python</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 编译及安装python</span>
<span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>
<span class="token comment"># 删除旧版本</span>
<span class="token function">rm</span> <span class="token parameter variable">-f</span> /usr/bin/python
<span class="token comment"># 软链接至最新python</span>
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/python3.10.6/bin/python3.10 /usr/bin/python
<span class="token comment"># 检查版本</span>
python3 <span class="token parameter variable">-V</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_5-如果报错解决方法" tabindex="-1"><a class="header-anchor" href="#_5-如果报错解决方法" aria-hidden="true">#</a> ⑤. 如果报错解决方法</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 如果报以下错误解决方法</span>
python: error <span class="token keyword">while</span> loading shared libraries: libpython3.10.so.1.0: cannot <span class="token function">open</span> shared object file: No such <span class="token function">file</span> or directory
<span class="token comment"># 查找</span>
<span class="token function">find</span> / <span class="token parameter variable">-name</span> libpython3.10.so.1.0
<span class="token comment"># 显示如下</span>
/home/guodilin/Python-3.10.6/libpython3.10.so.1.0
/usr/local/python3.10.6/lib/libpython3.10.so.1.0
<span class="token comment"># 复制至lib下</span>
<span class="token function">cp</span> /usr/local/python3.10.6/lib/libpython3.10.so.1.0 /usr/lib/
<span class="token comment"># 测试进入python</span>
python
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_6-更新安装pip" tabindex="-1"><a class="header-anchor" href="#_6-更新安装pip" aria-hidden="true">#</a> ⑥. 更新安装pip</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 更新pip,更新完后会出现提示安装路径</span>
python <span class="token parameter variable">-m</span> pip <span class="token function">install</span> <span class="token parameter variable">--upgrade</span> pip
<span class="token comment"># 查找安装路径</span>
<span class="token function">find</span> / <span class="token parameter variable">-name</span> pip
/root/Python-3.10.6/Tools/msi/pip
/root/.cache/pip
/usr/local/python3.10.6/bin/pip
/usr/local/python3.10.6/lib/python3.10/site-packages/pip
<span class="token comment"># 软链接至最新pip</span>
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/python3.10.6/bin/pip3 /usr/bin/pip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-windows安装" tabindex="-1"><a class="header-anchor" href="#_3-windows安装" aria-hidden="true">#</a> 3. windows安装</h2>`,14),m={href:"https://www.python.org/ftp/python/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://registry.npmmirror.com/binary.html?path=python/",target:"_blank",rel:"noopener noreferrer"},b=n("h2",{id:"_4-mac安装",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_4-mac安装","aria-hidden":"true"},"#"),s(" 4. mac安装")],-1),h={href:"https://www.python.org/ftp/python/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://registry.npmmirror.com/binary.html?path=python/",target:"_blank",rel:"noopener noreferrer"},y=i(`<h2 id="_5-虚拟环境" tabindex="-1"><a class="header-anchor" href="#_5-虚拟环境" aria-hidden="true">#</a> 5. 虚拟环境</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>python <span class="token parameter variable">-m</span>  venv test_env	// test_env 为虚拟环境名称
<span class="token builtin class-name">cd</span> E:<span class="token punctuation">\\</span>PythonEnv<span class="token punctuation">\\</span>test_env<span class="token punctuation">\\</span>scripts	// 进入虚拟环境
.<span class="token punctuation">\\</span>activate					// 激活虚拟环境
pip list					// 测试环境模块安装
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function f(g,_){const a=l("ExternalLinkIcon");return r(),o("div",null,[c,n("blockquote",null,[n("p",null,[s("具体如果更换源："),n("a",d,[s("ubuntu镜像_ubuntu下载地址_ubuntu安装教程-阿里巴巴开源镜像站 (aliyun.com)"),e(a)])])]),u,n("ol",null,[n("li",null,[s("下载地址："),n("a",m,[s("https://www.python.org/ftp/python/"),e(a)])]),n("li",null,[s("阿里源下载地址："),n("a",v,[s("https://registry.npmmirror.com/binary.html?path=python/"),e(a)])])]),b,n("ol",null,[n("li",null,[s("下载地址："),n("a",h,[s("https://www.python.org/ftp/python/"),e(a)])]),n("li",null,[s("阿里源下载地址："),n("a",k,[s("https://registry.npmmirror.com/binary.html?path=python/"),e(a)])])]),y])}const w=t(p,[["render",f],["__file","index.html.vue"]]);export{w as default};

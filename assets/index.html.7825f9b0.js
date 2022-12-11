import{_ as n,o as s,c as a,e}from"./app.ca1881d0.js";const i={},l=e(`<h1 id="基础入门" tabindex="-1"><a class="header-anchor" href="#基础入门" aria-hidden="true">#</a> 基础入门</h1><h2 id="一、uwsgi安装" tabindex="-1"><a class="header-anchor" href="#一、uwsgi安装" aria-hidden="true">#</a> 一、uwsgi安装</h2><h5 id="_1-安装uwsgi" tabindex="-1"><a class="header-anchor" href="#_1-安装uwsgi" aria-hidden="true">#</a> ①. 安装uwsgi</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装uwsgi</span>
pip <span class="token function">install</span> uwsgi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-配置uwsgi" tabindex="-1"><a class="header-anchor" href="#_2-配置uwsgi" aria-hidden="true">#</a> ②. 配置uwsgi</h5><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">uwsgi</span><span class="token punctuation">]</span></span>
<span class="token comment">#项目目录</span>
<span class="token key attr-name">chdir</span> <span class="token punctuation">=</span> <span class="token value attr-value">/www/guodilin</span>
<span class="token comment"># 启动uwsgi的用户名</span>
<span class="token key attr-name">uid</span> <span class="token punctuation">=</span> <span class="token value attr-value">root</span>
<span class="token comment"># 启动uwsgi的用户组</span>
<span class="token key attr-name">gid</span> <span class="token punctuation">=</span> <span class="token value attr-value">root</span>
<span class="token comment"># 指定项目的application</span>
<span class="token key attr-name">module</span> <span class="token punctuation">=</span> <span class="token value attr-value">guodilin.wsgi:application</span>
<span class="token comment"># 指定sock的文件路径</span>
<span class="token key attr-name">socket</span> <span class="token punctuation">=</span> <span class="token value attr-value">/home/guodilin/uwsgi.sock</span>
<span class="token comment"># 启动主进程</span>
<span class="token key attr-name">master</span> <span class="token punctuation">=</span> <span class="token value attr-value">true</span>
<span class="token comment"># 进程个数</span>
<span class="token key attr-name">workers</span> <span class="token punctuation">=</span> <span class="token value attr-value">5</span>
<span class="token key attr-name">pidfile</span> <span class="token punctuation">=</span> <span class="token value attr-value">/home/guodilin/uwsgi.pid</span>
<span class="token comment"># 自动移除unix socket和pid文件当前服务器停止的时候</span>
<span class="token key attr-name">vacuum</span> <span class="token punctuation">=</span> <span class="token value attr-value">true</span>
<span class="token comment"># 序列化接受的内容，可能的话</span>
<span class="token key attr-name">thunder-lock</span> <span class="token punctuation">=</span> <span class="token value attr-value">true</span>
<span class="token comment">#启动线程</span>
<span class="token key attr-name">enable-threads</span> <span class="token punctuation">=</span> <span class="token value attr-value">true</span>
<span class="token comment"># 设置自中断时间</span>
<span class="token key attr-name">harakiri</span> <span class="token punctuation">=</span> <span class="token value attr-value">30</span>
<span class="token comment"># 设置缓冲</span>
<span class="token key attr-name">post-buffering</span> <span class="token punctuation">=</span> <span class="token value attr-value">4096</span>
<span class="token comment"># 设置日志目录</span>
<span class="token key attr-name">daemonize</span> <span class="token punctuation">=</span> <span class="token value attr-value">/home/guodilin/uwsgi.log</span>

<span class="token comment"># 如果启动项目访问页面并报500错误</span>
<span class="token comment"># 并且日志显示uwsgi no python application found</span>
<span class="token comment"># ModuleNotFoundError: No module named &#39;django&#39;解决方法如下</span>
<span class="token comment"># 查找django环境</span>
<span class="token comment"># pip show django|grep -i location</span>
<span class="token comment"># Location: /usr/local/python3.10.6/lib/python3.10/site-packages</span>
<span class="token comment"># 指定django环境，如果不报错可省略</span>
<span class="token key attr-name">pythonpath</span> <span class="token punctuation">=</span> <span class="token value attr-value">/usr/local/python3.10.6/lib/python3.10/site-packages</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_3-常用命令" tabindex="-1"><a class="header-anchor" href="#_3-常用命令" aria-hidden="true">#</a> ③. 常用命令</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 启动,在项目目录中，可测试系统环境是否正常</span>
uwsgi <span class="token parameter variable">--http</span> <span class="token number">101.35</span>.112.123:8080 <span class="token parameter variable">--file</span> guodilin/wsgi.py --static-map<span class="token operator">=</span>/static<span class="token operator">=</span>static
<span class="token comment"># 配置文件方式启动</span>
uwsgi <span class="token parameter variable">--ini</span> uwsgi.ini
<span class="token comment"># 查看进程</span>
<span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span><span class="token function">grep</span> <span class="token parameter variable">-i</span> uwsgi
<span class="token comment"># 停止uwsgi</span>
uwsgi <span class="token parameter variable">--stop</span> /uwsgi/guodilin/uwsgi.pid
<span class="token comment"># 重启uwsgi</span>
uwsgi <span class="token parameter variable">--reload</span> /uwsgi/guodilin/uwsgi.pid
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_4-配置nginx" tabindex="-1"><a class="header-anchor" href="#_4-配置nginx" aria-hidden="true">#</a> ④. 配置nginx</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># nginx -- guodilin.com</span>
<span class="token comment"># 自定义配置文件路径</span>
<span class="token comment"># /etc/nginx/conf.d/*conf</span>
server<span class="token punctuation">{</span>
    listen <span class="token number">443</span> ssl<span class="token punctuation">;</span>
    server_name www.guodilin.com<span class="token punctuation">;</span>
    <span class="token comment"># 证书pem文件</span>
    ssl_certificate /uwsgi/guodilin/ssl/www.guodilin.com_bundle.pem<span class="token punctuation">;</span>
    <span class="token comment"># 证书key文件</span>
    ssl_certificate_key  /uwsgi/guodilin/ssl/www.guodilin.com.key<span class="token punctuation">;</span>
    <span class="token comment"># 启动ssl session 缓存</span>
    ssl_session_cache shared:SSL:1m<span class="token punctuation">;</span>
    <span class="token comment"># 缓存ssl握手产生的参数和加密秘钥的时长</span>
    ssl_session_timeout 5m<span class="token punctuation">;</span>
    <span class="token comment"># 使用的加密套件的类型</span>
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:<span class="token operator">!</span>aNULL:<span class="token operator">!</span>MD5:<span class="token operator">!</span>RC4:<span class="token operator">!</span>DHE<span class="token punctuation">;</span>
    <span class="token comment"># 表示使用的TLS协议的类型</span>
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2<span class="token punctuation">;</span>
    <span class="token comment"># 加密套件优先选择服务器的加密套件</span>
    ssl_prefer_server_ciphers on<span class="token punctuation">;</span>
    error_page <span class="token number">404</span> /404.html<span class="token punctuation">;</span>
    error_page <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span> /50x.html<span class="token punctuation">;</span>
    <span class="token comment"># sock方式</span>
    location / <span class="token punctuation">{</span>
        include uwsgi_params<span class="token punctuation">;</span>
        uwsgi_connect_timeout <span class="token number">30</span><span class="token punctuation">;</span>
        uwsgi_pass unix:/uwsgi/guodilin/uwsgi.sock<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
   <span class="token comment"># 默认</span>
   <span class="token comment"># location / {</span>
   <span class="token comment">#     root html;</span>
   <span class="token comment">#     index index.html index.htm;</span>
   <span class="token comment"># }</span>
    location /static/ <span class="token punctuation">{</span>
        <span class="token builtin class-name">alias</span> /www/wwwguodilincom/static/<span class="token punctuation">;</span>
        index index.html index.htm<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
server<span class="token punctuation">{</span>
    listen <span class="token number">80</span><span class="token punctuation">;</span>
    <span class="token builtin class-name">return</span> <span class="token number">301</span> https://<span class="token variable">$host</span><span class="token variable">$request_uri</span><span class="token punctuation">;</span>
    server_name www.guodilin.com<span class="token punctuation">;</span>
    error_page <span class="token number">404</span> /404.html<span class="token punctuation">;</span>
    error_page <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span> /50x.html<span class="token punctuation">;</span>
    location / <span class="token punctuation">{</span>
        root html<span class="token punctuation">;</span>
        index index.html index.htm<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_5-常用命令" tabindex="-1"><a class="header-anchor" href="#_5-常用命令" aria-hidden="true">#</a> ⑤. 常用命令</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 启动nginx</span>
nginx restart
<span class="token comment"># 自定义配置文件启动nginx</span>
nginx <span class="token parameter variable">-c</span> /etc/nginx/nginx.conf
<span class="token comment"># 重载nginx</span>
nginx <span class="token parameter variable">-s</span> reload
<span class="token comment"># 快速关闭</span>
nginx <span class="token parameter variable">-s</span> stop
<span class="token comment"># 安全关闭</span>
nginx <span class="token parameter variable">-s</span> quit
<span class="token comment"># 重新打开一个log文件，主要用于日志切割</span>
nginx reopen
<span class="token comment"># 验证默认配置文件</span>
nginx <span class="token parameter variable">-t</span>
<span class="token comment"># 验证自定义配置文件</span>
nginx <span class="token parameter variable">-t</span> <span class="token parameter variable">-c</span> /etc/nginx/nginx.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、rhel-centos安装" tabindex="-1"><a class="header-anchor" href="#二、rhel-centos安装" aria-hidden="true">#</a> 二、RHEL/CentOS安装</h2><h2 id="三、windows安装" tabindex="-1"><a class="header-anchor" href="#三、windows安装" aria-hidden="true">#</a> 三、windows安装</h2>`,14),t=[l];function c(p,o){return s(),a("div",null,t)}const u=n(i,[["render",c],["__file","index.html.vue"]]);export{u as default};

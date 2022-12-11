import{_ as n,o as s,c as a,e}from"./app.ca1881d0.js";const i={},l=e(`<h1 id="下载安装" tabindex="-1"><a class="header-anchor" href="#下载安装" aria-hidden="true">#</a> 下载安装</h1><h2 id="一、ubantu安装" tabindex="-1"><a class="header-anchor" href="#一、ubantu安装" aria-hidden="true">#</a> 一、ubantu安装</h2><h5 id="_1-安装依赖" tabindex="-1"><a class="header-anchor" href="#_1-安装依赖" aria-hidden="true">#</a> ①. 安装依赖</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 启动root权限</span>
<span class="token function">sudo</span> <span class="token function">su</span>
<span class="token comment"># 安装依赖</span>
<span class="token function">apt</span> <span class="token function">install</span> <span class="token function">curl</span> gnupg2 ca-certificates lsb-release ubuntu-keyring
              nginx signing key <span class="token operator">&lt;</span>signing-key@nginx.com<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-验证签名" tabindex="-1"><a class="header-anchor" href="#_2-验证签名" aria-hidden="true">#</a> ②. 验证签名</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 导入一个官方的nginx签名密钥，以便apt可以验证软件包的真实性。获取密钥：</span>
<span class="token function">curl</span> https://nginx.org/keys/nginx_signing.key <span class="token operator">|</span> gpg <span class="token parameter variable">--dearmor</span> <span class="token punctuation">\\</span>
    <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /usr/share/keyrings/nginx-archive-keyring.gpg <span class="token operator">&gt;</span>/dev/null
<span class="token comment"># 验证下载的文件是否包含正确的密钥：</span>
gpg --dry-run <span class="token parameter variable">--quiet</span> <span class="token parameter variable">--import</span> --import-options import-show /usr/share/keyrings/nginx-archive-keyring.gpg
<span class="token comment"># 输出应包含完整的指纹，如下所示：573BFD6B3D8FBC641079A6ABABF5BD827BD9BF62</span>
pub   rsa2048 <span class="token number">2011</span>-08-19 <span class="token punctuation">[</span>SC<span class="token punctuation">]</span> <span class="token punctuation">[</span>expires: <span class="token number">2024</span>-06-14<span class="token punctuation">]</span>
      573BFD6B3D8FBC641079A6ABABF5BD827BD9BF62
uid        
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_3-安装nginx" tabindex="-1"><a class="header-anchor" href="#_3-安装nginx" aria-hidden="true">#</a> ③. 安装nginx</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装nginx</span>
<span class="token function">apt</span> <span class="token function">install</span> nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_4-配置nginx" tabindex="-1"><a class="header-anchor" href="#_4-配置nginx" aria-hidden="true">#</a> ④. 配置nginx</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># nginx -- guodilin.com</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、rhel-centos安装" tabindex="-1"><a class="header-anchor" href="#二、rhel-centos安装" aria-hidden="true">#</a> 二、RHEL/CentOS安装</h2><h2 id="三、windows安装" tabindex="-1"><a class="header-anchor" href="#三、windows安装" aria-hidden="true">#</a> 三、windows安装</h2>`,14),c=[l];function t(p,o){return s(),a("div",null,c)}const d=n(i,[["render",t],["__file","index.html.vue"]]);export{d as default};

import{_ as n,o as s,c as a,e}from"./app.ca1881d0.js";const i={},l=e(`<h1 id="部署django" tabindex="-1"><a class="header-anchor" href="#部署django" aria-hidden="true">#</a> 部署Django</h1><h2 id="一、ubuntu部署" tabindex="-1"><a class="header-anchor" href="#一、ubuntu部署" aria-hidden="true">#</a> 一、ubuntu部署</h2><h5 id="_1-安装python" tabindex="-1"><a class="header-anchor" href="#_1-安装python" aria-hidden="true">#</a> ①. 安装python</h5><ol><li>安装python依赖</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">apt</span> <span class="token function">install</span> build-essential zlib1g-dev libncurses5-dev libgdbm-dev libnss3-dev libssl-dev libreadline-dev libffi-dev libsqlite3-dev <span class="token function">wget</span> libbz2-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>下载解压python</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 下载python</span>
<span class="token function">wget</span> https://registry.npmmirror.com/-/binary/python/3.10.6/Python-3.10.6.tgz
<span class="token comment"># 解压</span>
<span class="token function">tar</span> <span class="token parameter variable">-zvxf</span> Python-3.10.6.tgz
<span class="token comment"># 进入解压目录</span>
<span class="token builtin class-name">cd</span> Python-3.10.6
<span class="token comment"># 配置安装路径--enable-shared，启动共享 --enable-optimizations 是优化选项(LTO，PGO 等)加上这个 flag 编译后，性能有 10% 左右的优化</span>
./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local/python3.10.6 --enable-shared  --enable-optimizations
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>编译及安装python</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 编译及安装</span>
make <span class="token operator">&amp;</span><span class="token operator">&amp;</span> make install
<span class="token comment"># 删除旧版软链接</span>
rm <span class="token operator">-</span>f <span class="token operator">/</span>usr<span class="token operator">/</span><span class="token builtin">bin</span><span class="token operator">/</span>python
<span class="token comment"># 软链接至最新python</span>
ln <span class="token operator">-</span>s <span class="token operator">/</span>usr<span class="token operator">/</span>local<span class="token operator">/</span>python3<span class="token punctuation">.</span><span class="token number">10.6</span><span class="token operator">/</span><span class="token builtin">bin</span><span class="token operator">/</span>python3<span class="token punctuation">.</span><span class="token number">10</span> <span class="token operator">/</span>usr<span class="token operator">/</span><span class="token builtin">bin</span><span class="token operator">/</span>python
<span class="token comment"># 检查版本</span>
python <span class="token operator">-</span>V
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>如果报错解决方法</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 如果报以下错误解决方法</span>
python: error <span class="token keyword">while</span> loading shared libraries: libpython3.10.so.1.0: cannot <span class="token function">open</span> shared object file: No such <span class="token function">file</span> or directory
<span class="token comment"># 查找</span>
<span class="token function">find</span> / <span class="token parameter variable">-name</span> libpython3.10.so.1.0
<span class="token comment"># 显示如下</span>
/home/guodilin/Python-3.10.6/libpython3.10.so.1.0
/usr/local/python3.10.6/lib/libpython3.10.so.1.0
<span class="token comment"># 复制至lib下</span>
<span class="token function">cp</span> /usr/local/python3.10.6/lib/libpython3.10.so.1.0 /usr/lib/
<span class="token comment"># 在测试</span>
python <span class="token parameter variable">-V</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-更新pip" tabindex="-1"><a class="header-anchor" href="#_2-更新pip" aria-hidden="true">#</a> ②. 更新pip</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 更新pip,更新完后会出现提示安装路径</span>
python <span class="token parameter variable">-m</span> pip <span class="token function">install</span> <span class="token parameter variable">--upgrade</span> pip
<span class="token comment"># 软链接至最新pip</span>
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/python3.10.6/bin/pip3 /usr/bin/pip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_3-安装uwsgi" tabindex="-1"><a class="header-anchor" href="#_3-安装uwsgi" aria-hidden="true">#</a> ③. 安装uwsgi</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装uwsgi</span>
pip <span class="token function">install</span> uwsgi
<span class="token comment"># 建立软链接</span>
<span class="token function">find</span> / <span class="token parameter variable">-name</span> uwsgi
/usr/local/python3.10.6/bin/uwsgi
<span class="token comment"># 新增软连接</span>
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/python3.10.6/bin/uwsgi /usr/bin/uwsgi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_4-安装nginx" tabindex="-1"><a class="header-anchor" href="#_4-安装nginx" aria-hidden="true">#</a> ④. 安装nginx</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装依赖</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token function">curl</span> gnupg2 ca-certificates lsb-release ubuntu-keyring
<span class="token comment"># 导入一个官方的nginx签名密钥，以便apt可以验证软件包的真实性。获取密钥：</span>
<span class="token function">curl</span> https://nginx.org/keys/nginx_signing.key <span class="token operator">|</span> gpg <span class="token parameter variable">--dearmor</span> <span class="token punctuation">\\</span>
    <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /usr/share/keyrings/nginx-archive-keyring.gpg <span class="token operator">&gt;</span>/dev/null
<span class="token comment"># 验证下载的文件是否包含正确的密钥：</span>
gpg --dry-run <span class="token parameter variable">--quiet</span> <span class="token parameter variable">--import</span> --import-options import-show /usr/share/keyrings/nginx-archive-keyring.gpg
<span class="token comment"># 输出应包含完整的指纹，如下所示：573BFD6B3D8FBC641079A6ABABF5BD827BD9BF62</span>
pub   rsa2048 <span class="token number">2011</span>-08-19 <span class="token punctuation">[</span>SC<span class="token punctuation">]</span> <span class="token punctuation">[</span>expires: <span class="token number">2024</span>-06-14<span class="token punctuation">]</span>
      573BFD6B3D8FBC641079A6ABABF5BD827BD9BF62
uid                      nginx signing key <span class="token operator">&lt;</span>signing-key@nginx.com<span class="token operator">&gt;</span>
<span class="token comment"># 安装nginx</span>
<span class="token function">apt</span> <span class="token function">install</span> nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_5-安装mysql-server" tabindex="-1"><a class="header-anchor" href="#_5-安装mysql-server" aria-hidden="true">#</a> ⑤. 安装mysql-server</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装数据库</span>
<span class="token function">apt</span> <span class="token function">install</span> mysql-server
<span class="token comment"># 查看安装状态</span>
<span class="token function">netstat</span> <span class="token parameter variable">-tap</span> <span class="token operator">|</span> <span class="token function">grep</span> mysql
<span class="token comment"># 进入数据库，默认密码为空</span>
mysql <span class="token parameter variable">-u</span> root <span class="token parameter variable">-p</span>
<span class="token comment"># 修改初始化密码为 123456</span>
ALTER user <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;localhost&#39;</span> IDENTIFIED WITH mysql_native_password BY <span class="token string">&#39;123456&#39;</span><span class="token punctuation">;</span>
<span class="token comment"># 修改root用户权限</span>
CREATE user <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;%&#39;</span> IDENTIFIED WITH mysql_native_password BY <span class="token string">&#39;123456&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_6-安装mysqlclinet" tabindex="-1"><a class="header-anchor" href="#_6-安装mysqlclinet" aria-hidden="true">#</a> ⑥. 安装mysqlclinet</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装依赖</span>
<span class="token function">apt-get</span> <span class="token function">install</span> python3-dev default-libmysqlclient-dev
<span class="token comment"># 安装mysqlclient</span>
pip3 <span class="token function">install</span> mysqlclient
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_7-安装django" tabindex="-1"><a class="header-anchor" href="#_7-安装django" aria-hidden="true">#</a> ⑦. 安装django</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装django（这步其实可以省略，会打包至requirements.txt中）</span>
pip <span class="token function">install</span> <span class="token assign-left variable">django</span><span class="token operator">==</span><span class="token number">4.1</span>
<span class="token comment"># 生成requirements.txt保存至项目目录中</span>
pip freeze <span class="token operator">&gt;</span> requirements.txt
<span class="token comment"># 创建项目安装路径并将需要上传的目录上传至本目录</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /www/wwwguodilincom
<span class="token comment"># 安装项目所需依赖</span>
pip <span class="token function">install</span> <span class="token parameter variable">-r</span> requirements.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_8-配置uwsgi" tabindex="-1"><a class="header-anchor" href="#_8-配置uwsgi" aria-hidden="true">#</a> ⑧. 配置uwsgi</h5><blockquote><p>配置<code>uwsgi</code>，在项目目录中创建<code>uwsgi.ini</code>，</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建存放sock，pid，log文件地址</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /uwsgi/guodilin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>uwsgi.ini</code></p></blockquote><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token comment"># 配置uwsgi</span>
<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">uwsgi</span><span class="token punctuation">]</span></span>
<span class="token comment">#项目目录</span>
<span class="token key attr-name">chdir</span> <span class="token punctuation">=</span> <span class="token value attr-value">/www/wwwguodilincom</span>
<span class="token comment"># 启动uwsgi的用户名</span>
<span class="token key attr-name">uid</span> <span class="token punctuation">=</span> <span class="token value attr-value">root</span>
<span class="token comment"># 启动uwsgi的用户组</span>
<span class="token key attr-name">gid</span> <span class="token punctuation">=</span> <span class="token value attr-value">root</span>
<span class="token comment"># 指定项目的application</span>
<span class="token key attr-name">module</span> <span class="token punctuation">=</span> <span class="token value attr-value">guodilin.wsgi:application</span>
<span class="token comment"># 指定sock的文件路径</span>
<span class="token key attr-name">socket</span> <span class="token punctuation">=</span> <span class="token value attr-value">/uwsgi/guodilin/uwsgi.sock</span>
<span class="token comment"># 启动主进程</span>
<span class="token key attr-name">master</span> <span class="token punctuation">=</span> <span class="token value attr-value">true</span>
<span class="token comment"># 进程个数</span>
<span class="token key attr-name">workers</span> <span class="token punctuation">=</span> <span class="token value attr-value">5</span>
<span class="token key attr-name">pidfile</span> <span class="token punctuation">=</span> <span class="token value attr-value">/uwsgi/guodilin/uwsgi.pid</span>
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
<span class="token key attr-name">daemonize</span> <span class="token punctuation">=</span> <span class="token value attr-value">/uwsgi/guodilin/uwsgi.log</span>

<span class="token comment"># 如果启动项目访问页面并报500错误</span>
<span class="token comment"># 并且日志显示uwsgi no python application found</span>
<span class="token comment"># ModuleNotFoundError: No module named &#39;django&#39;解决方法如下</span>
<span class="token comment"># 查找django环境</span>
<span class="token comment"># pip show django|grep -i location</span>
<span class="token comment"># Location: /usr/local/python3.10.6/lib/python3.10/site-packages</span>
<span class="token comment"># 指定django环境，如果不报错可省略</span>
<span class="token key attr-name">pythonpath</span> <span class="token punctuation">=</span> <span class="token value attr-value">/usr/local/python3.10.6/lib/python3.10/site-packages</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_9-配置nginx" tabindex="-1"><a class="header-anchor" href="#_9-配置nginx" aria-hidden="true">#</a> ⑨. 配置nginx</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建配置文件</span>
<span class="token function">vim</span> /etc/nginx/conf.d/guodilin.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>guodilin.conf</code></p></blockquote><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code># nginx -- guodilin.com
# 自定义配置文件路径
# /etc/nginx/conf.d/*conf
server{
    listen 443 ssl;
    server_name www.guodilin.com;
    # 证书pem文件
    ssl_certificate /uwsgi/guodilin/ssl/www.guodilin.com_bundle.pem;
    # 证书key文件
    ssl_certificate_key  /uwsgi/guodilin/ssl/www.guodilin.com.key;
    # 启动ssl session 缓存
    ssl_session_cache shared:SSL:1m;
    # 缓存ssl握手产生的参数和加密秘钥的时长
    ssl_session_timeout 5m;
    # 使用的加密套件的类型
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;
    # 表示使用的TLS协议的类型
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
    # 加密套件优先选择服务器的加密套件
    ssl_prefer_server_ciphers on;
    error_page 404 /404.html;
    error_page 500 502 503 504 /50x.html;
    location / {
        include uwsgi_params;
        uwsgi_connect_timeout 30;
        uwsgi_pass unix:/uwsgi/guodilin/uwsgi.sock;
    }
    location /static/ {
        alias /www/wwwguodilincom/static/;
        index index.html index.htm;
    }
}
server{
    listen 80;
    return 301 https://$host$request_uri;
    server_name www.guodilin.com;
    error_page 404 /404.html;
    error_page 500 502 503 504 /50x.html;
    location / {
        root html;
        index index.html index.htm;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_10-启动uwsgi" tabindex="-1"><a class="header-anchor" href="#_10-启动uwsgi" aria-hidden="true">#</a> ⑩. 启动uwsgi</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 项目目录下启动</span>
uwsgi <span class="token parameter variable">--ini</span> uwsgi.ini
<span class="token comment"># 或者完整路径启动</span>
uwsgi <span class="token parameter variable">--ini</span> /www/wwwguodilin/uwsgi.ini
<span class="token comment"># 查看进程</span>
<span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span><span class="token function">grep</span> <span class="token parameter variable">-i</span> uwsgi
<span class="token comment"># 停止uwsgi</span>
<span class="token function">sudo</span> uwsgi <span class="token parameter variable">--stop</span> /uwsgi/guodilin/uwsgi.pid
<span class="token comment"># 重启uwsgi</span>
<span class="token function">sudo</span> uwsgi <span class="token parameter variable">--reload</span> /uwsgi/guodilin/uwsgi.pid
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_101-启动nginx" tabindex="-1"><a class="header-anchor" href="#_101-启动nginx" aria-hidden="true">#</a> ⑩①. 启动nginx</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 启动nginx</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,36),t=[l];function c(o,p){return s(),a("div",null,t)}const r=n(i,[["render",c],["__file","Django_5.html.vue"]]);export{r as default};

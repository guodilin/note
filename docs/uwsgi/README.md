# 基础入门

## 一、uwsgi安装

##### ①. 安装uwsgi

```shell
# 安装uwsgi
pip install uwsgi
```

##### ②. 配置uwsgi

```ini
[uwsgi]
#项目目录
chdir = /www/guodilin
# 启动uwsgi的用户名
uid = root
# 启动uwsgi的用户组
gid = root
# 指定项目的application
module = guodilin.wsgi:application
# 指定sock的文件路径
socket = /home/guodilin/uwsgi.sock
# 启动主进程
master = true
# 进程个数
workers = 5
pidfile = /home/guodilin/uwsgi.pid
# 自动移除unix socket和pid文件当前服务器停止的时候
vacuum = true
# 序列化接受的内容，可能的话
thunder-lock = true
#启动线程
enable-threads = true
# 设置自中断时间
harakiri = 30
# 设置缓冲
post-buffering = 4096
# 设置日志目录
daemonize = /home/guodilin/uwsgi.log

# 如果启动项目访问页面并报500错误
# 并且日志显示uwsgi no python application found
# ModuleNotFoundError: No module named 'django'解决方法如下
# 查找django环境
# pip show django|grep -i location
# Location: /usr/local/python3.10.6/lib/python3.10/site-packages
# 指定django环境，如果不报错可省略
pythonpath = /usr/local/python3.10.6/lib/python3.10/site-packages
```

##### ③. 常用命令

```shell
# 启动,在项目目录中，可测试系统环境是否正常
uwsgi --http 101.35.112.123:8080 --file guodilin/wsgi.py --static-map=/static=static
# 配置文件方式启动
uwsgi --ini uwsgi.ini
# 查看进程
ps -ef |grep -i uwsgi
# 停止uwsgi
uwsgi --stop /uwsgi/guodilin/uwsgi.pid
# 重启uwsgi
uwsgi --reload /uwsgi/guodilin/uwsgi.pid
```

##### ④. 配置nginx

```shell
# nginx -- guodilin.com
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
    # sock方式
    location / {
        include uwsgi_params;
        uwsgi_connect_timeout 30;
        uwsgi_pass unix:/uwsgi/guodilin/uwsgi.sock;
    }
   # 默认
   # location / {
   #     root html;
   #     index index.html index.htm;
   # }
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
```

##### ⑤. 常用命令

```shell
# 启动nginx
nginx restart
# 自定义配置文件启动nginx
nginx -c /etc/nginx/nginx.conf
# 重载nginx
nginx -s reload
# 快速关闭
nginx -s stop
# 安全关闭
nginx -s quit
# 重新打开一个log文件，主要用于日志切割
nginx reopen
# 验证默认配置文件
nginx -t
# 验证自定义配置文件
nginx -t -c /etc/nginx/nginx.conf
```

## 二、RHEL/CentOS安装

## 三、windows安装

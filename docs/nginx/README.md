# 下载安装

## 一、ubantu安装

##### ①. 安装依赖

```shell
# 启动root权限
sudo su
# 安装依赖
apt install curl gnupg2 ca-certificates lsb-release ubuntu-keyring
              nginx signing key <signing-key@nginx.com>
```

##### ②. 验证签名

```shell
# 导入一个官方的nginx签名密钥，以便apt可以验证软件包的真实性。获取密钥：
curl https://nginx.org/keys/nginx_signing.key | gpg --dearmor \
    | sudo tee /usr/share/keyrings/nginx-archive-keyring.gpg >/dev/null
# 验证下载的文件是否包含正确的密钥：
gpg --dry-run --quiet --import --import-options import-show /usr/share/keyrings/nginx-archive-keyring.gpg
# 输出应包含完整的指纹，如下所示：573BFD6B3D8FBC641079A6ABABF5BD827BD9BF62
pub   rsa2048 2011-08-19 [SC] [expires: 2024-06-14]
      573BFD6B3D8FBC641079A6ABABF5BD827BD9BF62
uid        
```

##### ③. 安装nginx

```shell
# 安装nginx
apt install nginx
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

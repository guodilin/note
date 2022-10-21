# 部署Django

## 一、ubuntu部署

##### ①. 安装python

1. 安装python依赖

```shell
apt install build-essential zlib1g-dev libncurses5-dev libgdbm-dev libnss3-dev libssl-dev libreadline-dev libffi-dev libsqlite3-dev wget libbz2-dev
```

2. 下载解压python

```shell
# 下载python
wget https://registry.npmmirror.com/-/binary/python/3.10.6/Python-3.10.6.tgz
# 解压
tar -zvxf Python-3.10.6.tgz
# 进入解压目录
cd Python-3.10.6
# 配置安装路径--enable-shared，启动共享 --enable-optimizations 是优化选项(LTO，PGO 等)加上这个 flag 编译后，性能有 10% 左右的优化
./configure --prefix=/usr/local/python3.10.6 --enable-shared  --enable-optimizations
```

3. 编译及安装python

```python
# 编译及安装
make && make install
# 删除旧版软链接
rm -f /usr/bin/python
# 软链接至最新python
ln -s /usr/local/python3.10.6/bin/python3.10 /usr/bin/python
# 检查版本
python -V
```

4. 如果报错解决方法

```shell
# 如果报以下错误解决方法
python: error while loading shared libraries: libpython3.10.so.1.0: cannot open shared object file: No such file or directory
# 查找
find / -name libpython3.10.so.1.0
# 显示如下
/home/guodilin/Python-3.10.6/libpython3.10.so.1.0
/usr/local/python3.10.6/lib/libpython3.10.so.1.0
# 复制至lib下
cp /usr/local/python3.10.6/lib/libpython3.10.so.1.0 /usr/lib/
# 在测试
python -V
```

##### ②. 更新pip

```shell
# 更新pip,更新完后会出现提示安装路径
python -m pip install --upgrade pip
# 软链接至最新pip
ln -s /usr/local/python3.10.6/bin/pip3 /usr/bin/pip
```

##### ③. 安装uwsgi

```shell
# 安装uwsgi
pip install uwsgi
# 建立软链接
find / -name uwsgi
/usr/local/python3.10.6/bin/uwsgi
# 新增软连接
ln -s /usr/local/python3.10.6/bin/uwsgi /usr/bin/uwsgi
```

##### ④. 安装nginx

```shell
# 安装依赖
sudo apt install curl gnupg2 ca-certificates lsb-release ubuntu-keyring
# 导入一个官方的nginx签名密钥，以便apt可以验证软件包的真实性。获取密钥：
curl https://nginx.org/keys/nginx_signing.key | gpg --dearmor \
    | sudo tee /usr/share/keyrings/nginx-archive-keyring.gpg >/dev/null
# 验证下载的文件是否包含正确的密钥：
gpg --dry-run --quiet --import --import-options import-show /usr/share/keyrings/nginx-archive-keyring.gpg
# 输出应包含完整的指纹，如下所示：573BFD6B3D8FBC641079A6ABABF5BD827BD9BF62
pub   rsa2048 2011-08-19 [SC] [expires: 2024-06-14]
      573BFD6B3D8FBC641079A6ABABF5BD827BD9BF62
uid                      nginx signing key <signing-key@nginx.com>
# 安装nginx
apt install nginx
```

##### ⑤. 安装mysql-server

```shell
# 安装数据库
apt install mysql-server
# 查看安装状态
netstat -tap | grep mysql
# 进入数据库，默认密码为空
mysql -u root -p
# 修改初始化密码为 123456
ALTER user 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456';
# 修改root用户权限
CREATE user 'root'@'%' IDENTIFIED WITH mysql_native_password BY '123456';
```

##### ⑥. 安装mysqlclinet

```shell
# 安装依赖
apt-get install python3-dev default-libmysqlclient-dev
# 安装mysqlclient
pip3 install mysqlclient
```

##### ⑦. 安装django

```shell
# 安装django（这步其实可以省略，会打包至requirements.txt中）
pip install django==4.1
# 需要上线的项目中安装pipreqs
pip install pipreqs
# 生成requirements.txt保存至项目目录中
pipreqs . --encoding=utf8
# 创建项目安装路径并将需要上传的目录上传至本目录
mkdir -p /www/wwwguodilincom
# 安装项目所需依赖
pip install -r requirements.txt
```

##### ⑧. 配置uwsgi

> 配置`uwsgi`，在项目目录中创建`uwsgi.ini`，

```shell
# 创建存放sock，pid，log文件地址
mkdir -p /uwsgi/guodilin
```

> `uwsgi.ini`

```ini
# 配置uwsgi
[uwsgi]
#项目目录
chdir = /www/wwwguodilincom
# 启动uwsgi的用户名
uid = root
# 启动uwsgi的用户组
gid = root
# 指定项目的application
module = guodilin.wsgi:application
# 指定sock的文件路径
socket = /uwsgi/guodilin/uwsgi.sock
# 启动主进程
master = true
# 进程个数
workers = 5
pidfile = /uwsgi/guodilin/uwsgi.pid
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
daemonize = /uwsgi/guodilin/uwsgi.log

# 如果启动项目访问页面并报500错误
# 并且日志显示uwsgi no python application found
# ModuleNotFoundError: No module named 'django'解决方法如下
# 查找django环境
# pip show django|grep -i location
# Location: /usr/local/python3.10.6/lib/python3.10/site-packages
# 指定django环境，如果不报错可省略
pythonpath = /usr/local/python3.10.6/lib/python3.10/site-packages
```

##### ⑨. 配置nginx

```shell
# 创建配置文件
vim /etc/nginx/conf.d/guodilin.conf
```

> `guodilin.conf`

```conf
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
```

##### ⑩. 启动uwsgi

```shell
# 项目目录下启动
uwsgi --ini uwsgi.ini
# 或者完整路径启动
uwsgi --ini /www/wwwguodilin/uwsgi.ini
# 查看进程
ps -ef |grep -i uwsgi
# 停止uwsgi
sudo uwsgi --stop /uwsgi/guodilin/uwsgi.pid
# 重启uwsgi
sudo uwsgi --reload /uwsgi/guodilin/uwsgi.pid
```

##### ⑩①. 启动nginx

```shell
# 启动nginx
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


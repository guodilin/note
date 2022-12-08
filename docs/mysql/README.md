# 一. 下载安装
## 1. ubantu安装

```shell
# 安装数据库
sudo apt install mysql-server
# 查看mysql进程
netstat -tap | grep mysql
# 进入数据库，安装完mysql默认密码为空
mysql -u root -p
# 创建密码为 123456
ALTER user 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456';
# 修改root用户权限
CREATE user 'root'@'%' IDENTIFIED WITH mysql_native_password BY '123456';
```

## 2. CentOS安装

```shell
# 安装数据库
yum install mysql-server
# 查看安装状态
netstat -tap | grep mysql
# 进入数据库，默认密码为空
mysql -u root -p
# 创建密码为 123456
ALTER user 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456';
# 修改root用户权限
CREATE user 'root'@'%' IDENTIFIED WITH mysql_native_password BY '123456';
```

## 2. windwos安装

下载地址：<https://dev.mysql.com/downloads/mysql/>
运行库：<https://learn.microsoft.com/zh-cn/cpp/windows/latest-supported-vc-redist?view=msvc-170#visual-studio-2015-2017-2019-and-2022>

- mysql需要安装vs2017运行库,因为mysql使用的是c和c++编写的

##### ①. 解压，新建my.ini配置

```ini
[mysqld]
# 设置3306端口
port=3306
character-set-server=utf8
# 设置安装目录
basedir=D:/Dev/mysql-8.0.30-winx64
# 数据文件的存储位置，也是数据表的存放位置
datadir=D:/Dev/mysqlData
# 创建新表时将使用默认的存储引擎
default-storage-engine=INNODB
[mysql]
# 设置mysql客户端默认字符集
default-character-set=utf8
[client]
# 设置mysql客户端连接服务端时默认使用的端口号
port=3306
default-character-set=utf8
```

##### ②. 对mysql进行初始化

+ 初始化,结尾会生成临时密码

+ 如果初始化有误，可以直接把`mysqlData`整个删除，然后重新初始化。或者重新解压，重新初始化

```sh
# 运行 cmd,或者 win + R 快捷键,(管理员运行cmd)
# 进入cmd,添加环境变量(临时有效,关闭cmd窗口失效)
set path=%path%;D:\Dev\mysql-8.0.30-winx64\bin
# 初始化
mysqld --initialize --user=mysql --console
# 安装mysql服务(需要管理员运行该命令)
mysqld --install
# 启动mysql服务
net start mysql
```

##### ③. 登录mysql

```sh
# 登录mysql
mysql -uroot -p生成的密码;
```

##### ④. 修改mysql密码

```sql
## 修改初始化密码为 123456
ALTER user 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456';
## 修改root用户权限
CREATE user 'root'@'%' IDENTIFIED WITH mysql_native_password BY '123456';
```

##### ⑤. 卸载

> 关闭mysql服务

```sh
#停止mysql服务
net stop mysql
```

> 卸载mysql服务

```sh
#卸载mysql服务
 sc delete "mysql"
```

> 删除项目文件夹及注册表

```sh
#进入安装位置，删除安装文件夹
#删除注册表，cmd 输入regedit进入下面路径
计算机\HKEY_LOCAL_MACHINE\SYSTEM\ControlSet001\Services\EventLog\Application\MySQLD Service
```
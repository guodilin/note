# 一、下载安装

## 1. centos安装

##### ①. 安装依赖

```shell
yum install wget zlib-devel bzip2-devel openssl-devel ncurses-devel sqlite-devel readline-devel tk-devel gcc make zlib zlib-devel libffi-devel -y
```

##### ②. 下载解压python

```shell
wget https://registry.npmmirror.com/-/binary/python/3.10.6/Python-3.10.6.tgz  # 下载python3.10.6
tar -xvf Python-3.10.6.tgz	# 解压
```

##### ③. 配置编译安装python

```shell
# 切换至解压后文件目录
cd Python-3.10.6
# 配置python安装路径
./configure --prefix=/usr/local/python3.10.6
# 编译python及安装python
make && make install
# 删除旧版本
rm -f /usr/bin/python
# 软链接至最新python
ln -s /usr/local/python3.10.6/bin/python3.10 /usr/bin/python
# 查看当前版本
python -V	
```

##### ④. 修改yum程序

> 创建软链接后，会破坏yum程序的正常使用（只能使用系统自带的python2）
   + 修改如下2个文件

   ```shell
   /usr/libexec/urlgrabber-ext-down
   /usr/bin/yum
   ```


   + 使用vi编辑器，将这2个文件的第一行修改为如下所示


   ```shell
   vi /usr/libexec/urlgrabber-ext-down	# 修改urlgrabber-ext-down
   /usr/bin/python2	# 修改首行/usr/bin/python改为python2
   vi /usr/bin/yum		# 进入修改yum
   /usr/bin/python2	# 修改首行/usr/bin/python改为python2
   ```

##### ⑤. 更新安装pip

```shell
# 更新pip,更新完后会出现提示安装路径
python -m pip install --upgrade pip
# 查找安装路径
find / -name pip
/root/Python-3.10.6/Tools/msi/pip
/root/.cache/pip
/usr/local/python3.10.6/bin/pip
/usr/local/python3.10.6/lib/python3.10/site-packages/pip
# 软链接至最新pip
ln -s /usr/local/python3.10.6/bin/pip /usr/bin/pip
```

## 2.ubantu安装

##### ①. 更换更新源

> 具体如果更换源：[ubuntu镜像_ubuntu下载地址_ubuntu安装教程-阿里巴巴开源镜像站 (aliyun.com)](https://developer.aliyun.com/mirror/ubuntu?spm=a2c6h.13651102.0.0.3e221b11HtzVpp)

```shell
# 备份
cp /etc/apt/sources.list /etc/apt/sources.listbackups
# 编辑
vim /etc/apt/sources.list
# 按esc，然后按dd到达顶部，然后dG删除粘贴下面内容
```

> 删除`sources.list`所有内容，粘贴下面内容

```shell
deb https://mirrors.aliyun.com/ubuntu/ focal main restricted universe multiverse
deb-src https://mirrors.aliyun.com/ubuntu/ focal main restricted universe multiverse

deb https://mirrors.aliyun.com/ubuntu/ focal-security main restricted universe multiverse
deb-src https://mirrors.aliyun.com/ubuntu/ focal-security main restricted universe multiverse

deb https://mirrors.aliyun.com/ubuntu/ focal-updates main restricted universe multiverse
deb-src https://mirrors.aliyun.com/ubuntu/ focal-updates main restricted universe multiverse

# deb https://mirrors.aliyun.com/ubuntu/ focal-proposed main restricted universe multiverse
# deb-src https://mirrors.aliyun.com/ubuntu/ focal-proposed main restricted universe multiverse

deb https://mirrors.aliyun.com/ubuntu/ focal-backports main restricted universe multiverse
deb-src https://mirrors.aliyun.com/ubuntu/ focal-backports main restricted universe multiverse
```

##### ②. 安装依赖

```shell
# 切换root用户
sudo su
# 更新库
apt update
# 安装依赖
apt install build-essential zlib1g-dev libncurses5-dev libgdbm-dev libnss3-dev libssl-dev libreadline-dev libffi-dev libsqlite3-dev wget libbz2-dev
```

##### ③. 下载解压python

```python
# 下载python
wget https://registry.npmmirror.com/-/binary/python/3.10.6/Python-3.10.6.tgz
# 解压
tar -zvxf Python-3.10.6.tgz
# 配置安装路径--enable-shared，启动共享 --enable-optimizations 是优化选项(LTO，PGO 等)加上这个 flag 编译后，性能有 10% 左右的优化
./configure --prefix=/usr/local/python3.10.6 --enable-shared  --enable-optimizations
```

##### ④. 配置编译安装python

```shell
# 编译及安装python
make && make install
# 删除旧版本
rm -f /usr/bin/python
# 软链接至最新python
ln -s /usr/local/python3.10.6/bin/python3.10 /usr/bin/python
# 检查版本
python3 -V
```

##### ⑤. 如果报错解决方法

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
# 测试进入python
python
```

##### ⑥. 更新安装pip

```shell
# 更新pip,更新完后会出现提示安装路径
python -m pip install --upgrade pip
# 查找安装路径
find / -name pip
/root/Python-3.10.6/Tools/msi/pip
/root/.cache/pip
/usr/local/python3.10.6/bin/pip
/usr/local/python3.10.6/lib/python3.10/site-packages/pip
# 软链接至最新pip
ln -s /usr/local/python3.10.6/bin/pip3 /usr/bin/pip
```

## 3. windows安装

1. 下载地址：<https://www.python.org/ftp/python/>
2. 阿里源下载地址：<https://registry.npmmirror.com/binary.html?path=python/>

## 4. mac安装
1. 下载地址：<https://www.python.org/ftp/python/>
2. 阿里源下载地址：<https://registry.npmmirror.com/binary.html?path=python/>

## 5. 虚拟环境

```bash
python -m  venv test_env	// test_env 为虚拟环境名称
cd E:\PythonEnv\test_env\scripts	// 进入虚拟环境
.\activate					// 激活虚拟环境
pip list					// 测试环境模块安装
```


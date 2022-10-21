# 命令细解
## 基础命令
##### ls
> ls：查看当前目录列表
* ls
  * ls -a 显示隐藏文件
  * ls -l 以列表方式显示文件的详细信息
  * ls -l -h 以人性化的方式显示文件大小
  * ls name 搜索需要显示的文件及文件名
  * ls 1* 显示包含1点文件,*通配符可以代表任意个数字符
  * ls 1? 显示包含1点文件,?通配符可以代表任意一个字符
##### tree
> tree：查看当前文件夹及其详细子文件夹
##### pwd
> pwd：查看当前所在位置
##### cat
> cat：查看文件内容
##### cd
> cd：进入文件夹命令
* cd 目录 进入想进入当前目录中的文件夹
   * cd .. 返回上一级cd ../..返回上上级目录
   * cd   切换到当前用户主目录
   * cd ～ 切换到当前用户主目录
   * cd - 切换到上一次目录
   * cd / 切换到根目录
##### touch
> touch:创建文件
* touch 使用方法：touch index.html 说明：创建index.html文件
  * touch index.html 创建index.html文件
##### mkdir
> mkdir:创建文件夹
* mkdir 使用方法：mkdir www 说明：创建www文件夹
  * mkdir www          创建www文件夹
  * mkdir aa/bb/cc -p  创建有嵌套的文件夹
##### rm
> rm:删除文件及文件夹
* 删除文件：rm 使用方法：rm index.html 说明：删除index.html文件
  * rm index.html  删除index.html文件
* 删除文件夹：rm -r 使用方法：rm www -r 说明：删除www文件夹
  * rm -i www 出现删除提示（rm www -i）
  * rm -r     删除文件夹和子文件夹所有内容
  * rm -f     强制删除文件和子文件夹所有内容没有任何提示
  * rm -rf    强制删除文件夹和子文件夹所有内容，无任何提示
##### cp
> cp:复制剪切文件及复制剪切文件夹
* 复制文件使用方法：cp ./index.html ../index.html 复制当前目录中的index.html文件至上一目录中并命名index.html
* 复制文件夹使用方法：cp ./www ../www -r 说明：复制当前目录中的www文件夹至上一目录中并命名www
  * cp -i 当遇到同名文件时会提示是否覆盖
  * cp -v 显示复制路径
  * cp -a 保留复制文件等原有权限
  * cp -r 复制目录
  * mv -i 当遇到同名文件夹时会提示是否覆盖
  * mv -v 提示剪切后信息
##### cat
* cat 
  * cat -b  显示行号，空格不显示行号
  * cat -n  显示所有行号
##### grep
* grep:grep as 123.txt 说明搜索123.txt文件中的as
  * grep -n  显示行号,grep -n as 123.txt
  * grep -v  显示不包含内容的行号,grep -v as 123.txt
  * grep -i  忽略大小写
##### echo
* echo
  * echo >  重定向,会覆盖,echo hello linux > a  说明:把echo的内容增加到a文件中
  * echo >>  重定向,不会覆盖，在末尾追加,echo hello linux >> a
##### chmod
> chmod使用方法：chmod 664 www 修改文件等权限
* r：可读，权限值是4
* w：可写，权限值是2
* x：可执行，权限值是1
* 无任何权限，权限值是0
##### clear
> clear:清屏
##### 帮助命令
* --help 使用方法：ls --lp
* man 使用方法：man ls
##### shutdown
* shutdown 选项 时间
* shutdown 不指定默认一分钟关机
* shutdown -r now 现在重启
* shutdown now 现在关机
* shutdown 20:00 今天晚上八点关机
* shutdown +10 十分钟后关机
* shutdown -c 取消关机
##### ifconfig
* ifconfig 查看网卡配置信息
##### vim
* 打开命令
* 打开单个文件名
  * vim 文件名
* 打开多个文件
  * vim 文件名1 文件名2
* 在vim窗口中打开一个新文件
  * :open 文件名
* 中新窗口中打开文件
  * :split 文件名
* 切换到下一个文件
  * :bn
* 切换到上一个文件
  * :bp
* 查看当前打开的文件列表,当前正在编辑的文件会用[]挂起来
  * :args
* 打开远程文件,比如ftp或者share folder
  * :e ftp://172.16.0.1/1.py
  * :e \desktop\demo\1.py
* vim的模式
  * 正常模式（按Esc或Ctrl+[进入） 左下角显示文件名或为空
  * 插入模式（按i键进入） 左下角显示–INSERT–
  * 可视模式（不知道如何进入） 左下角显示–VISUAL–
* 插入命令
  * i 在当前位置生前插入
  * I 在当前行首插入
  * a 在当前位置后插入
  * A 在当前行尾插入
  * o 在当前行之后插入一行
  * O 在当前行之前插入一行
* 查找命令
  * /text　　查找text，按n健查找下一个，按N健查找前一个。
  * ?text　　查找text，反向查找，按n健查找下一个，按N健查找前一个。
* 退出命令
  * :w 保存文件但不退出vi
  * :w file 将修改另外保存到file中，不退出vi
  * :w! 强制保存，不推出vi
  * :wq 保存文件并退出vi
  * :wq! 强制保存文件，并退出vi
  * :q 不保存文件，退出vi
  * :q! 不保存文件，强制退出vi
  * :e! 放弃所有修改，从上次保存文件开始再编辑命令历史
##### which
  + which:命令可以查看执行命令所在目录
##### ssh
```sh
# ssh [-p post] user@ip
ssh -p 22 root@172.16.0.1
```
##### scp
```sh
# 从远程复制到桌面
scp -P 22 user@ip:远程路径 复制本地的路径
# 从远程桌面上的1.py复制到当前目录
scp -P 22 root@172.16.0.1:desktop/1.py 
# 从本地复制到远程服务器
scp -P 22 需要复制的路径文件 用户名@ip:文件路径
scp -P 22 1.py root@172.16.0.1:desktop/1.py
# 从本地复制文件到服务器
scp -P 22 -r user@ip:文件路径 路径
# 从本地复制到服务器
scp -P 22 -r dist root@172.16.0.1:www/note.guodilin.com
```
* -r 目录及文件名，不加-r只能复制文件
* -p 若远程ssh服务器的端口不是22，需要使用大写字母-P选项指定端口
##### 免密码登陆
```sh
# 生成公钥和私钥
ssh-keygen
# 复制公钥至服务器
ssh-copy-id -p port user@ip
# 实例
ssh-copy-id root@172.16.0.1
```
##### 配置别名
> 配置别名可以减少端口号和地址的输入，配置后可以直接 ssh guodilin 就可以连接
+ 创建配置文件 config
```sh
vim config
```
+ 配置内容
```ini
Host 别名
    hostName ip地址
    User 用户名
    Port 22
; 实例
Host guodilin
    HostName 172.16.0.1
    User root
    Port 22
```
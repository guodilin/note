# 用户权限
##### 1. 代码说明
<table>
    <tr>
        <th>序号</th>
        <th>权限</th>
        <th>英文</th>
        <th>缩写</th>
        <th>数字代号</th>
    </tr>
    <tr align="center">
        <td>1</td>
        <td>读</td>
        <td>read</td>
        <td>r</td>
        <td>4</td>
    </tr>    
    <tr align="center">
        <td>2</td>
        <td>写</td>
        <td>write</td>
        <td>w</td>
        <td>2</td>
    </tr>
    <tr align="center">
        <td>3</td>
        <td>执行</td>
        <td>excute</td>
        <td>x</td>
        <td>1</td>
    </tr>
</table>

##### 2. 权限说明

<table>
	<tr>
	    <th>说明</th>
	    <th>目录</th>
	    <th colspan="3">拥有者</th>
	    <th colspan="3">组权限</th>
	    <th colspan="3">其他用户权限</th>
	</tr >
	<tr>
	    <td align="center">文件</td>
	    <td align="center">-</td>
	    <td>r</td>
	    <td>w</td>
	    <td>-</td>
	    <td>r</td>
	    <td>w</td>
	    <td>-</td>
	    <td>r</td>
	    <td>-</td>
	    <td>-</td>
	</tr>
	<tr>
	    <td align="center">文件夹</td>
	    <td align="center">d</td>
	    <td>r</td>
	    <td>w</td>
	    <td>x</td>
	    <td>r</td>
	    <td>w</td>
	    <td>x</td>
	    <td>r</td>
	    <td>-</td>
	    <td>x</td>
	</tr>
</table>

##### 3. 权限修改
```sh
# 文件减少权限
chmod -rw 文件名
# 文件增加权限
chmod +rw 文件名
# 文件夹减少权限
chmod -rwx 文件夹名
# 文件夹增加权限
chmod +rwx 文件夹名
```
##### 4. 超级用户
> root用户通常用于系统的维护和管理
> sudo命令，用户输入一次后有5分钟的有效期，过期限制必须重新输入密码
##### 5. 组管理
| 序号 | 命令 | 作用|
| :--: | :--: | :--: |
| 1 | groupadd 组名 | 添加组 |
| 2 | groupdel 组名 | 删除组 |
| 3 | cat /etc/group | cat查询确定组信息 |
| 4 | chgrp 组名 文件/文件夹名 | 修改文件/文件夹的所属组 |
> 如果没有权限，前面增加sudo命令，
+ 增加用户组dev: sudo groupadd dev
+ 删除用户组dev: sudo groupdel dev
+ 查看组信息: cat /etc/group
+ 修改文件所属组
  + 创建文件: mkdir study
  + 创建用户组: sudo groupadd dev
  + 修改文件所属组: sudo chgrp -R dve study/
##### 6. 用户管理
| 命令 | 作用 |
| :--: | :--: |
| useradd -m -g 组 新建用户名 | 添加新用户 |
| passwd 用户名 | 设置用户密码 |
| userdel -r 用户名 | 删除用户 |
| cat /etc/passwd｜grep 用户名 | 查询账号信息 |
+ 创建用户
  + sudo useradd -m 自己建立用户家目录
  + sudo useradd -m -g 指定用户所在的组，否则会建立一个同名的组
  + sudo useradd -m -g dev guodilin
+ 用户密码
  + sudo passwd 用户名
  + passwd 密码 如果是普通用户，直接用passwd可以修改自己账号密码
  + sudo passwd guodilin
+ 修改用户组
  + 修改用户主组
    + usermod -g 组 用户名
    + usermod -g 新用户组 guodilin
  + 修改用户附加组
    + usermod -G 组 用户名
    + usermod -G sudo guodilin
  + 默认 dash,修改bash
    + usermod -s /bin/bash guodilin
+ 删除用户
  + userdel -r 用户名
  + sudo userdel -r guodilin
> id guodilin 查询用户信息id
  + uid=1002(guodilin) gid=1001(dev) 组=1001(dev)
> guodilin: x :1002:1001::/home/guodilin
+ x 加密
+ 1002 用户id
+ 1001 是组id
+ /home/guodilin 用户家目录
##### 7. 查看用户信息
+ id 用户名 查看用户uid和gid信息
+ who 查看当前所登陆的用户列表
+ whoami 查看当前登录用户的账户名
##### 8.切换用户
  + su - 用户名
  + exit 可以退到切换前用户
  + su 不接用户名,可以直接切换到root用户
##### 9.修改文件权限
  + chown:修改拥有者
    + chown 用户名 文件名或目录名
  + chgrp:修改组
    + chgrp 用户组 文件名或目录名
  + chmod:修改权限
    + chmod -R 755 文件名或者目录名,加大写的R可以递归下一级权限
      + 第一个数字表示拥有者权限
      + 第二个数字表示是组的权限
      + 第三个数字表示是其他用户组的权限
##### 10. 系统信息相关命令
+ 时间日期
  + date:查看系统时间
  + cal:查看当前月日历，加-y可以查看一年的日历
+ 磁盘和目录空间
  + df:显示磁盘剩余空间
  + du:du -h 目录名 显示目录下的文件大小
+ 进程信息
  + ps aux 查看进程的详细状况
    + a显示终端上的所有进程，包含其他用户的进程
    + u显示进程的详细状态
    + x显示没有控制终端的进程
  + top 动态显示运行中并且排序
  + kill
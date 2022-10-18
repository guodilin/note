# 系统安装
##### ubantu 桌面版安装(21.10)
> 虚拟机中可以全程自动安装
###### 1. 设置语言环境
- 进入设置 settings
- 找到 region & language (区域与语言)
- 点击 manage installed languages 弹出点击install输入用户密码
- 点击 lnstall/remove language 找到 chinese(simplified)后面勾选,点击apply
- 回到安装页面，在language选项卡中的language for menus and window里将汉语拖拽到顶部
- 重新启动系统
- 不修改文件夹名称，不在询问，保留旧文件名
###### 2. 安装常用软件
+ 设置服务器镜像源
  + 系统设置
  + 关于 - 软件更新
  + 下载自 - 选择其他站点 选择 mirrors.aliyun.com
  + 关闭 - 弹窗 - 点击重新载入
###### 3. 在启动栏添加 终端 图标
* 设置软件快捷图标
  * 右键添加收藏夹
###### 4. apt 终端命令
* apt是ubuntu下的安装包管理工具
* 大部份软件使用apt命令来实现
```sh
# 安装软件
sudo apt install 软件名
# 卸载软件
sudo apt remove 软件名
# 更新可用软件包列表
sudo apt update
# 更新已安装的包
sudo apt upgrade
```
###### 5. 安装常用软件
```sh
# 安装ssh服务器
sudo apt install openssh-server
安装python
sudo apt install ipython
sudo apt install ipthon3
sudo apt install python-pip
sudo apt install 

```
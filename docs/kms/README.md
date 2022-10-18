
# KMS安装

> MKS 激活服务，`slmgr`命令激活windows系统、Office

##### 可用服务
* `kms.cangshui.net`
* `kms.03k.org`
* `skms.netnr.eu.org`

> `telnet skms.netnr.eu.org 1688` 测试服务是否可用

##### 安装服务

* ref: [下载](https://github.com/Wind4/vlmcsd/releases)
* windows: [下载](https://s1.netnr.eu.org/static/app/vlmcs-Windows.zip)

##### 安装服务(Linux)
```sh
# 一键安装脚本
wget --no-check-certificate https://raw.githubusercontent.com/teddysun/across/master/kms.sh && chmod +x kms.sh && ./kms.sh

netstat -nxtlp | grep 1688 # 查看端口
/etc/init.d/kms status # 状态
/etc/init.d/kms start # 启动
/etc/init.d/kms stop # 停止
/etc/init.d/kms restart # 重启
./kms.sh uninstall # 卸载
```
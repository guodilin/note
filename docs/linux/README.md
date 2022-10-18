# linux基础
## linux基础命令
| 命令  | 对应英文 | 作用 | 
| :--- | :--- | :---  | 
| ls  | list  | 查看当前文件夹下的内容 | 
| pwd  | print wrok directory  | 查看当前所在文件夹 | 
| cd [目录名]  | change directory  | 切换文件夹 | 
| touch [文件名]  | touch  | 如果文件不存在，新建文件 | 
| mkdir [目录名]  | make directory  | 创建目录 |
| cp[源文件] [目标文件] | copy  | 拷贝 |
| rm [文件名]  | remove  | 删除指定的文件名 | 
| rm -rf [目录名]| remove  | 删除指定的目录 | 
| mv [目录名] [新目录]| move  | 移动目录 |
| mv [文件名] [新路径]| move  | 移动文件 |
| cat [文件名]| concatenate  | 查看文件内容、创建文件、文件合并、追加文件内容等功能 |
| more [文件名]| more  | 分屏显示文件内容 |
| grep [需要搜索的内容] [文件名]| grep  | 搜索内容 |
| echo [需要搜索的内容] [文件名]| grep  | 搜索内容 |
| clear  | clear  | 清屏 | 
## 文件大小表示方式
| 单位  | 英文 | 含义 | 
| :--- | :--- | :---  | 
| 字节 | B(Byte)  | 在计算机中作为一个数字单元,一般为8位二进制数 | 
| 千 | K(Kibibyte)  | 1KB=1024B,千字节(1024=2**10) | 
| 兆 | M(Mebibyte)  | 1MB=1024KB,百万字节 | 
| 千兆 | G(Gigabyte)  | 1GB=1024MB,十亿字节,千兆字节 | 
| 太 | T(Terabyte) | 1TB=1024GB,万亿字节,太字节 | 
| 拍 | P(Petabyte)  | 1PB=1024TB,千万亿字节,拍字节 |
| 艾 | E(Exabyte)  | 1EB=1024PB,百亿亿字节,艾字节 | 
| 泽 | Z(Zettabyte)  | 1ZB=1024EB,十万亿亿字节,泽字节 | 
| 尧 | Y(Yottabyte)  | 1YB=1024ZB,一亿亿亿字节,尧字节 | 
## 通配符
```sh
*: 代表任意个数个字符
?: 代表任意一个字符,至少1个
[]: 表示可以匹配字符组中的任意一个
[a,b,c]: 匹配a、b、c中的任意一个
[a-f]: 匹配从a到f范围内的任意一个字符
```
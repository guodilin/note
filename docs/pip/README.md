# 基础入门

##### ①. 更新pip

```shell
# 更新pip
python -m pip install --upgrade pip
```

##### ②. 配置pip下载源

```shell
# 换源安装，临时换源
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple 模块名
# 快速配置阿里pip镜像
pip config set global.index-url https://mirrors.aliyun.com/pypi/simple/
pip config set install.trusted-host mirrors.aliyun.com
```

##### ③. 常用命令

```shell
# 普通安装
pip install 模块名
# 指定版本安装
pip install 模块名==版本
# 卸载
pip uninstall 模块名
# 查看已安装的版本及模块
pip list
# 查看已安装的版本及模块
pip freeze

# 自动生成已安装的依赖包和版本
pip freeze > requirements.txt
# 安装所生成的依赖包和版本
pip install -r requirements.txt

# 生成requirements.txt建议使用pipreqs
# 安装pipreqs
pip install pipreqs
# 保存至指定位置
pipreqs /home/project/location --encoding=utf8
# 保存当前项目根目录
pipreqs . --encoding=utf8
# 强制执行命令--force，覆盖原有的requirements.txt文件
pipreqs . --encoding=utf8 --force
```


# 单人开发

初始化git

```bash
git init	# 初始化git
```

配置开发用户

```bash
git config -l # 查看当前git配置
git config --global user.name "guodilin"	# 配置用户名
git config --global user.email "gz_lxkj@163.com"	# 配置邮箱
```

添加文件到暂缓区

```bash
git status	# 查看文件状态，是否被管理，显示红色的表示未被管理
git add index.js	# 添加指定文件至暂缓区
git add .		# 添加所有文件至暂缓区
git status	# 查看文件状态，是否被管理，显示绿色的表示被添加至缓存区
```

- git status命令
  - 执行后文件名显示红色表示未被管理
  - 执行后文件名显示绿色表示添加至缓存区
  - 执行后文件名未显示表示已经添加至仓库中，和仓库中一致

暂缓区添加至仓库

```bash
git commit -m "初始化项目，添加index.js"	# 添加至heade指针指向的仓库
```

查看文件的修改状况

```bash
git diff index.js	# 查看最近对指定文件的修改，修改的内容会用绿色所标记
```

查看文件的修改日志

```bash
git log index.js	# 查看文件修改日志
git log		# 查看所有文件修改日志
git reflog	# 查看文件修改日志
```

恢复某个版本

```bash
git reset --hard HEAD^	# 恢复上次添加仓库版本
git reset --hard 版本号	# 恢复指定版本
git reset --hard 3d7b12f	# 恢复指定版本的实例
```



# 基础配置

##### 全局配置
```sh
git config --global user.name "guodilin"
git config --global user.email "gz_lxkj@163.com"
```
##### 创建 git 仓库
```sh
mkdir note
cd note
git init 
touch README.md
git add README.md
git commit -m "first commit"
git remote add origin https://gitee.com/guodilin/note.git
git push -u origin "master"
```
##### 已有仓库
```sh
cd existing_git_repo
git remote add origin https://gitee.com/guodilin/note.git
git push -u origin "master"
```
##### 更新三部提交
```sh
git add .
git commit -m "1"
git push -u origin "master"
```
# 前言

## 安装

GIT下载地址：<https://git-scm.com/download>

## 忽略文件

新建一个文件，`.gitignore`

```bash
touch .gitignore	# 终端中创建.gitignore
```

文件配置

- 被过滤的文件就不会出现在git仓库中

```bash
*.css	# 表示忽略所有css文件
!lib.a	# 表示但lib.a除外
/todo	# 表示忽略根目录下的todo文件

bin/:	# 表示忽略当前路径下的bin文件夹，该文件夹下的内容都会被忽略
*.log:	# 表示忽略所有.log文件
```



# git基础命令

## 分支常用命令
```sh
# 列出所有本地分支
git branch
# 列出所有远程分支
git branch -r
# 新建一个分支，但停留在当前分支
git branch [branch-name]
# 新建一个分支，并切换到该分支
git checkout -b [branch]
# 合并指定分支到当前分支
git merge [branch]
# 删除分支
git branch -d [branch-name]
# 删除远程分支
git push origin --delete [branch-name]
git branch -dr [remote/branch]
```
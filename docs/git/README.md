# git基础命令
```sh
# 查看配置
git config -l
# 查看当前用户配置
git config --global --list
# 查看系统配置
git config --system --list
#名称
git config --global user.name "guoidlin"
#配置邮箱
git config --global user.email "guodilin@189.cn"
#初始化git仓库
git init
#添加所有文件到暂存区
git add .
#查看是否提交暂存区
git status
# 提交本地仓库
git commit -m “提交说明”

git push

git pull

git reset

git checkout
#克隆
git clone [url]
```
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
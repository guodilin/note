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
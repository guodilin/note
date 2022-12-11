# 多人开发

## 创建远程版本库

```bash
git init --bare		# 创建远程服务器上的共享版本库
```

## 下载远程版本库

```bash
# 从远程服务器上下载当前项目的共享版本库
git clone 远程服务器地址
git clone 
```

## 进入开发阶段

##### 配置

```bash
git config -l # 查看当前git配置
git config user.name "guodilin"	# 配置用户名
git config user.email "gz_lxkj@163.com"	# 配置邮箱
```

##### 编写代码

```js
// index.js
let a = 199;
```

##### 添加暂缓区

```bash
git add .
```

##### 添加到HEADER指向的分支

```bash
git commit -m "初始化项目，添加index.js"	# 添加至heade指针指向的仓库
```

##### 提交到远程分支

```bash
git push
git push [branch-name]
git push origin [branch-name]
```

##### 拉取远程

```bash
git pull	# 拉取更新后的代码
```

- 如果服务器上有其他开发人员更新的内容，我们必须先将其他开发更新的内容先更新本地，在提交
- 拉取远程代码后需要检查代码冲突，然后在提交
- 更新后的内容有冲突（修改了同一个文件的同一行代码），这个时候需要我们自己手动修改冲突，修改冲突后才能提交远程服务器

> 开发技巧

- 开发完了一个功能就要立即提交代码，因为在企业开发中谁提交谁负责解决冲突。

```bash
git pull	# 拉取更新后的代码
git push    # 先从远程服务器更新至本地才能提交代码
```

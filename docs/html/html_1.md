# 基础认知

## 语法规范

##### HTML的注释

> 注释的作用

1. 注释是给自己看的，是对代码的解释的说明，浏览器不会被渲染的

- 注释

```html
<!-- 注释，我的内容不会被浏览器渲染 -->
```

##### HTML标签的结构

1. 标签由`<`、`>`、`/`英文单词或字母组成，并且把标签中`<>`包括起来的英文单词或字母称之为标签名
2. 常见标签由两部分组成，我们称之为`双标签`前部分叫开始标签，后部分叫结束标签两部分之间包裹内容
3. 少数标签由一部分组成，我们称之为`单标签` 自成一体，无法包裹内容

```html
<!-- 双标签,有开始有结速,称之为双标签 -->
<strong>文字变粗</strong>
<!-- 单标签 -->
<input type="text">
```

##### 路径

- 绝对路径

```html
<!-- 盘符里的绝对路径 -->
<link rel="stylesheet" href="E:\webpack\src\css\style.css">
<!-- 网址里的绝对路径 -->
<link rel="stylesheet" href="https://www.guodilin.com/css/style.css">
```

- 相对路径

```html
<!-- 相对同级路径 -->
<link rel="stylesheet" href="style.css">
<link rel="stylesheet" href="./style.css">

<!-- 相对同级的下级路径 -->
<link rel="stylesheet" href="css/style.css">
<link rel="stylesheet" href="./css/style.css">
<!-- 相对同级的上级路径 -->
<link rel="stylesheet" href="../css/style.css">	<!-- css为上一级目录的里css文件夹 -->
```


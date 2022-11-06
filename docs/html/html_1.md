# 基础认知

```html
<!DOCTYPE html>
<html lang="zh-cn">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width= , initial-scale=1.0" />
    <title>网页的标题</title>
  </head>
  <body>
    <!-- 网页主体 -->
  </body>
</html>
```

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

##### 标题标签

> 在新闻和文章的页面中，都离不开标题，用来突出显示文章的主题

- 1~6级标题，重要程度依次递减
- 文字都有加粗，文字都有变大，并且从`h1-->h6`文字逐渐变小
- 块级元素，双标签

```html
<h1>1级标题</h1>
<h2>2级标题</h2>
<h3>3级标题</h3>
<h4>4级标题</h4>
<h5>5级标题</h5>
<h6>6级标题</h6>
```

##### 段落标签

> 在新闻和文章的页面中，用于分段显示

- 段落之间存在间隙
- 块级元素，双标签

```html
<p>我是一段文字</p>
```

##### 换行标签

> 让文字强制换行

- 块级元素，单标签

```html
<br>
```

##### 水平线标签

> 当内容的主题发生变化时，使用 <hr> 标签进行分隔

- 块级元素，单标签

```html
<hr>
```

##### 文本格式化标签

- 行内元素，双标签

```html
<b>加粗</b>
<strong>加粗</strong>
<u>下划线</u>
<ins>下划线</ins>
<i>倾斜</i>
<em>倾斜</em>
<s>删除线</s>
<del>删除线</del>
```

##### 图片标签

- 行内元素，单标签
- 属性
  - `src`：图片路径
  - `alt`：替换文本，当图片不显示的时候现实的文字
  - `title`：提示文本，当鼠标悬停的时候显示的文字
  - `width`：设置图片的宽度，如果只设置一个，会自动缩放比例，同时设置没有按照比例可能会变形
  - `height`：设置图片的高度，如果只设置一个，会自动缩放比例，同时设置没有按照比例可能会变形

```html
<img src="/logo.png" alt="我是替换文本" title="logo图标" width="500" heght="500">
```

##### 音频标签

- 行内元素，双标签
- 音频标签目前支持三种格式：`MP3`、`Wav`、`Ogg`

- 属性
  - `src`：音频的路径
  - `controls`：显示播放的控件
  - `autoplay`：自动播放，部分浏览器不支持
  - `loop`：循环播放

```html
<audio src="我爱你.mp3" controls autoplay loop></audio>
```

##### 视频标签

- 行内元素，双标签

- 属性
  - `src`：视频的路径
  - `controls`：显示播放的控件
  - `autoplay`：自动播放，谷歌浏览器中需要配合muted实现静音播放
  - `loop`：循环播放
  - `muted`：静音播放

```html
<audio src="向你求婚.mp4" controls autoplay loop muted></audio>
```

##### 链接标签

- 行内标签，双标签

- 属性
  - `href`：链接地址
  - `download`：指定下载链接
  - `target`：规定在何处打开目录`url`，仅在`href`属性存在时使用
    - `_blank`：新窗口打开。
    - `_parent`：在父窗口中打开链接。
    - `_self`：默认，当前页面跳转。
    - `_top`：在当前窗体打开链接，并替换当前的整个窗体(框架页)。

```html
<a href="/" rel="文章" target="_blank">我是一个链接</a>
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


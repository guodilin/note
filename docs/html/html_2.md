# HTML标签

## 块级元素

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

##### 列表标签

- 场景：在网页中按照展示关联性的内容，如新闻列表、排行榜等
- 特点：按照行的方式，整齐显示内容
- 种类：无序列表，有序列表，自定义列表

###### 无序列表

> 列表的每一项前默认显示圆点标识

```html
<ul>
    <li>无序列表标签</li>
    <li>无序列表标签</li>
</ul>
```

###### 有序列表

> 列表的每一项前默认显示序号标识

```html
<ol>
    <li>有序列表标签</li>
    <li>有序列表标签</li>
</ol>
```

###### 自定义列表

> `dd`前会默认显示缩进效果

```html
<dl>
    <dt>帮助中心</dt>
    <dd>账号管理</dd>
    <dd>购物指南</dd>
    <dd>订单操作</dd>
</dl>
```

##### 表格标签

- `<table>` 标签定义 HTML 表格。
-  简单的 HTML 表格由 `table` 元素以及一个或多个 `tr`、`th` 、`td` 元素组成。
-  `tr `元素定义表格行，`th` 元素定义表头，`td` 元素定义表格单元。
-  更复杂的 HTML 表格也可能包括 `caption`、`col`、`colgroup`、`thead`、`tfoot `、 `tbody `元素。
- 属性

  - `border`：表格边框宽度
  - `width`：表格宽度
  - `height`：表格高度


```html
<table border="1">
    <caption>
        学习成绩单
    </caption>
    <!-- tbody表格头部 -->
    <thead>
        <!-- tr表格行 -->
        <tr>
            <!-- 表头 -->
            <th>姓名</th>
            <th>成绩</th>
        </tr>
    </thead>
    <!-- tbody表格主题 -->
    <tbody>
        <tr>
            <!-- 表格单元 -->
            <td>小妹</td>
            <td>100</td>
        </tr>
    </tbody>
    <!-- tfoot表格尾部 -->
    <tfoot>
        <tr>
            <!-- 表格单元 -->
            <td colspan="2">合计</td>
            <td>100</td>
        </tr> 
    </tfoot>
</table>
```

###### 表格合并

- 通过左上原则，确定保留谁删除谁
  - 上下合并，只保留最上的，删除其他
  - 左右合并，只保留最左的，删除其他
- 属性
  - `rowspan`：跨行合并，将多行的单元格垂直合并
  - `colspan`：跨列合并，将多列的单元格水平合并

```html
<table border="1">
    <caption>
        学习成绩单
    </caption>
    <!-- tbody表格头部 -->
    <thead>
        <!-- tr表格行 -->
        <tr>
            <!-- 表头 -->
            <th>姓名</th>
            <th>成绩</th>
        </tr>
    </thead>
    <!-- tbody表格主题 -->
    <tbody>
        <tr>
            <!-- 表格单元 -->
            <td>小妹</td>
            <!-- 列合并 -->
            <td rowspan="2">100</td>
        </tr>
        <tr>
            <!-- 表格单元 -->
            <td>小妹</td>
        </tr>
    </tbody>
    <!-- tfoot表格尾部 -->
    <tfoot>
        <tr>
            <!-- 表格单元 -->
            <!-- 行合并 -->
            <td colspan="2">合计</td>
        </tr>
    </tfoot>
</table>
```

## 行内元素

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

## 表单标签

##### input

| 标签名 | type属性值     | 说明                      | 示例                                                      |
| ------ | -------------- | ------------------------- | --------------------------------------------------------- |
| input  | button         | 普通按钮，默认无功能      | `<input type="button" value="提交">`                      |
|        | checkbox       | 多选框                    | `<input type="checkbox" name="a" id="b">`                 |
|        | color          | 颜色选择器                | `<input type="color" name="b" id="">`                     |
|        | date           | 年月日选择器              | `<input type="date" name="" id="" />`                     |
|        | datetime       |                           | `<input type="datetime" name="" id="">`                   |
|        | datetime-local | 年月日时间选择器          | `<input type="datetime-local" name="" id="">`             |
|        | email          | 邮箱输入框，会有提示@符合 | `<input type="email" name="" id="">`                      |
|        | file           | 文件选择                  | `<input type="file" name="" id="">`                       |
|        | hidden         | 隐藏输入框，可以指定      | `<input type="hidden" name="aaa" value="秘密提交的内容">` |
|        | image          |                           | `<input type="image" src="" alt="">`                      |
|        | month          | 年月选择器                | `<input type="month" name="" id="">`                      |
|        | number         | 数字输入框                | `<input type="number" name="" id="">`                     |
|        | password       | 密码框，用于输入密码      | `<input type="password" name="" id="" />`                 |
|        | radio          | 单选框，用于多选一        | `<input type="radio" name="a" id="" />`                   |
|        | range          | 类似进度条                | `<input type="range" name="" id="">`                      |
|        | reset          | 重置按钮，用于重置        | ` <input type="reset" value="重置">`                      |
|        | search         | 搜索输入框                | `<input type="search" name="" id="">`                     |
|        | submit         | 提交按钮，用于提交        | `<input type="submit" value="提交">`                      |
|        | tel            | 电话输入框                | `<input type="tel" name="" id="">`                        |
|        | text           | 文本框，用于输入单行文本  | `<input type="time" name="" id="">`                       |
|        | time           | 时间选择器                | `<input type="time" name="" id="">`                       |
|        | url            | 网址输入框                | `<input type="url" name="" id="">`                        |
|        | week           | 周期选择器                | `<input type="week" name="" id="">`                       |
##### background(背景)

+ background-position：背景位置定位。X和Y轴，默认值x和y为0%，值：top、left、center、right、%、px
+ background-size：背景大小控制。值：px、%、cover，把背景图像扩展至足够大，以使背景图像完全覆盖背景区域。。
+ background-clip：背景的绘制区域。值：border-box，默认值，边框区域绘制背景。padding-box，背景内边距区域绘制背景。content-box，内容区域绘制背景。
+ background-origin：背景图片定位起点。值：padding-box，默认值，相对于内边距框来定位。border-box，相对于边框来定位。content-box，相对于内容框来定位。

```css
/* 连写 */
background：color image repeat attchment position;
/* 连写示例 */
background: #FF0000 url("images/bg.jpg") no-repeat  fixed center center;
background-color: red; /* 背景颜色 */
/* 设置背景图片 */
background-image: url('bg.png'); /* 背景图片,默认值none */
/* 背景是否平铺 */
background-repeat: no-repeat; /* 背景图片不平铺，只显示一张,默认值repeat */
background-repeat: repeat-x; /* 将在水平方向重复 */
background-repeat: repeat-y; /* 将在垂直方向重复 */
/* 背景图像是否固定或者随着页面的其余部分滚动 */
background-attachment: fixed; /* 固定背景图片不随页面滚动,默认值scroll */
/* 背景位置定位 */
background-position:;
/* 背景大小控制 */
background-size:;
/* 背景的绘制区域 */
background-clip:;
/* 背景图片定位起点 */
background-origin: padding-box;/* 相对于内边距框来定位 */
background-origin: border-box;/* 相对于边框来定位 */
background-origin: content-box;/* 相对内容框来定位 */
```



##### border(边框)

```css
/* 连写 */
border: 1px solid red; /* 边框宽度1px 边框样式实线solid 边框颜色为红色red*/
/* 边框宽度 */
border-width: 1px;	/* 边框宽度,值:px */
/* 边框样式 */
border-style: solid; /* 实线 */
border-style: dotted; /* 点状 */
border-style: dashed; /* 虚线 */
/* 边框颜色 */
border-color: red; /* 红色 */
/* 单独设置边框 */
border-top: 5px; /* 设置上边框 值：px */
border-right: 10px; /* 设置右边框 值：px */
border-bottom: 15px; /* 设置下边框 值：px */
border-left: 20px; /* 设置左边框 值：px */
```



##### margin(外边距)

```css
/* 连写 */
margin: 5px 10px 15px 20px; /* 设置一个值四个外边距相同，值为上右下左的顺序。值：auto,px,% */
margin: 5px 10px; /* 上下5px 左右10px */
/* 页面居中 */
margin: 0 auto;
/* 单独设置内边距 */
margin-top: 5px; /* 设置上外边距 值：px、% */
margin-right: 10px; /* 设置右外边距 值：px、% */
margin-bottom: 15px; /* 设置下外边距 值：px、% */
margin-left: 20px; /* 设置左外边距 值：px、% */
```



##### padding(内边距)

```css
/* 连写 */
padding: 5px 10px 15px 20px; /* 设置一个值四个内边距相同，值为上右下左的顺序。值：auto,px,% */
padding: 5px 10px; /* 上下5px 左右10px */
/* 单独设置内边距 */
padding-top: 5px; /* 设置上内边距 值：px、% */
padding-right: 10px; /* 设置右内边距 值：px、% */
padding-bottom: 15px; /* 设置下内边距 值：px、% */
padding-left: 20px; /* 设置左内边距 值：px、% */
```



##### CSS浮动（float）

```css
float: left; /* 向左浮动。脱离标准流。多个子元素时超出父元素宽将换行显示 */
float: right; /* 向右浮动。脱离标准流。多个子元素时超出父元素宽将换行显示 */
```



##### CSS定位（position）  

> "left", "top", "right" 以及 "bottom" 属性进行规定即定位位置。（如果出现隐藏可以使用z-index设置可以层次。）
```css
position: static; /*默认值，没有定位。元素为标准流*/
position: relative; /*相对定位，*/
position: absolute; /*决定定位。子绝父相使用，父元素设置relative，子元素设置absolute。*/
position: fixed; /*固定定位。相对于浏览器窗口进行定位。用于固定元素于浏览器某处。*/
```

## 文本属性

##### color

```css
color: red; 
```



##### line-height

```css
/* 值：px、em、% 设置行高和高可让文本垂直居中。 */
width: 60px;
line-height: 60px;	/* 文本将垂直居中 */
```



##### letter-spacing

```css
/* 字间距值：px、em */
letter-spacing: 9px; /* 每个字符9px的间距 */
```



##### text-align

```css
/* 字符左、右、居中显示 */
text-align: left;	/* 字符居左显示 */
text-align: center;	/* 字符居中显示 */
text-align: right;	/* 字符居右显示 */
```



##### text-decoration
  + 值：overline，定义文本上的一条线。line-through，定义文本中间的一条线。underline，定义文本下的一条线。
  + 示例：文本默认无线条。

```css
text-decoration: none; /*文本下划线*/
text-decoration: overline;	/* 文本上方显示一条线 */
text-decoration: line-through;	/* 文本中间显示一条线 */
text-decoration: underline;	/* 文本下方显示一条线 */
```



##### text-indent
  + 值：px、%、em。
  + 示例：首行缩进5个像素。

```css
text-indent: 5px;
```



##### text-transform
  + 值：lowercase，所有字母转换为小写字母。uppercase，把所有字母转换为大写。capitalize，首字母转换为大写。
  + 示例：所有字母转换为大写。

```css
text-transform: uppercase;
```



##### word-spacing
  + 值：px、em。说明：设置字符之间的间距。
  + 示例：设置字符之间的间距为9像素。和letter-spacing不一样的是，letter-spacing每个字母的间距。对汉字没有多大意义。

```css
word-spacing: 9px;
```



##### white-space
  + 值：normal，默认，忽略换行及空格。pre，换行和空格会保留。nowrap，永远不换行，直遇到br标签。

```css
white-space: pre;
```



## font(字体)

> font  连写：字体样式，粗细，字体大小/行间距

```css
font: italic bold 12px/12px "Microsoft YaHei";	/* 斜体，粗体，字体12像素，行间距12像素，字体为微软雅黑。 */
/* 字体样式 */
font-style: normal;		/* 标准字体,默认 */
font-style: italic;		/* 斜体 */
font-style: oblique;	/* 倾斜 */
/* 字体粗细 */
/* 数字100-900，定义由粗到细的字符。400 等同于 normal，而 700 等同于 bold。 */
font-weight: normal;	/* 字体粗细,默认值 */
font-weight: bold;	/* 字体粗体 */
font-size: 18px;	/* 字体大小 */
font-family："Microsoft YaHei";	/* 字体设置 */
```


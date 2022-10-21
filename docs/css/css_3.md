# CSS效果

## flex水平垂直居中

```html
<!doctype html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>flex水平垂直居中</title>
    <style>
        html {
            background-color: rgb(242, 242, 242, 1);
        }
        .box {
            display: flex;
            align-items: center; /*垂直居中*/
            justify-content: center; /*水平居中*/
            height: 100vh; /*垂直居中*/
        }
        .box1 {
            width: 390px;
            height: 356px;
            padding: 25px;
            background-color: #ffffff;
            text-align: center;
            border-radius: 15px; /* 圆角 */
        }
    </style>
</head>
<body>
    <div class="box">
        <div class="box1"></div>
    </div>
</body>
</html>
```

## 定位流水平垂直居中

```html
<!doctype html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>定位流水平垂直居中</title>
    <style>
        .main{
            width: 90px;
            height: 90px;
            background-color: red;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
        }
    </style>
</head>
<body>
    <div class="main"></div>
</body>
</html>
```

## 定位流水平垂直居中2

```html
<!doctype html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>定位流水平垂直居中2</title>
    <style>
        .main{
            position: relative;
            width: 100%;
            height: 800px;
        }
        .main .main_center{
            position: absolute;
            width: 300px;
            height: 300px;
            background-color: red;
            top: 50%;
            left: 50%;
            margin-top: -150px;
            margin-left: -150px;
            text-align: center;
        }
        .main .main_center span{
            line-height: 300px;
        }
    </style>
</head>
<body>
 <div class="main">
     <div class="main_center"><span>居中</span></div>
 </div>
</body>
</html>
```

## 水平居中

> margin: 0 auto

```html
<!doctype html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>水平居中</title>
    <style>
        div{
            width: 100px;
            height: 100px;
            margin: 0 auto;
            background-color: red;
        }
    </style>
</head>
<body>
    <div></div>
</body>
</html>
```

## 图片透明度，hover后图片不透明

```html
<!doctype html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>图片透明度，hover后图片不透明</title>
    <style>
        img{
            opacity:0.5;
            filter:alpha(opacity=50); /* 针对 IE8 以及更早的版本 */
        }
        img:hover{
            opacity:1.0;
            filter:alpha(opacity=100); /* 针对 IE8 以及更早的版本 */
        }
    </style>
</head>
<body>
<img src="bg.jpg" alt="" width="920" height="100%">
</body>
</html>
```

## 图片水平垂直居中

```html
<!doctype html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>图片水平垂直居中</title>
    <style>
        *{
            margin: 0;
            padding: 0;
        }
        .wrapper {
            width: 300px;
            height: 300px;
            border: 1px solid #ccc;
            position: relative;
        }
        .wrapper > img {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }
    </style>
</head>
<body>
<div class="wrapper">
    <img src="images/user.jpg" width="90" height="90">
</div>
</body>
</html>
```


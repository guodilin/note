# JavaScript基础入门

##### 1. 书写格式

> javascript书写格式和css书写格式一样

1. 行内样式

   ```html
   <div onclick="alert('hello world')">点击我弹窗</div>
   ```

2. 内嵌样式

   ```html
   <script>
     alert('hello world')
   </script>
   ```

3. 外链样式

   ```html
   <script src="/index.js" type="text/javascript" charset="utf-8"></script>
   ```
- 注意：
  1. 不推荐直接将`javascript`代码书写到标签内部；
  2. 浏览器默认情况从上至下解析网页，所以如果将`javascript`写到一对`head`标签中，并且需要通过`javascript`代码操作界面上的元素，那么就不能直接书写`javascript`代码，否则无效；
     1. 如果想将`javascript`写到一对`head`标签中，并且需要操作界面上的元素，需要加上`window.onload = function(){需要操作界面元素的javascript}`
     2. 如果需要操作界面元素，建议写到`body`结束标签的前面

##### 2.常见的输出方式

1. 通过弹出的方式来输出

   ```js
   alert('hello world') // 带确定按钮
   confirm(123); // 带确定和取消按钮
   prompt(); // 带输入框
   ```
   
2. 通过网页内容区域的方式来输出

   ```js
   document.write('hello world')
   ```
   
3. 通过开发者工具控制台的形式来输出

   ```js
   console.log("abc"); // 普通输出
   console.warn("abc"); // 带警告输出
   console.error("abc"); // 带错误输出
   ```
   
##### 3.常量

> 常量,常量定义后无法修改，`const 常量名称 = 常量取值`

1. 整型常量

   ```js
   1
   ```

2. 实型常量

   ```js
   1.1
   ```

3. 字符串常量

   ```js
   '123'
   ```

4. 布尔常量

   ```js
   true;
   false;
   ```

5. 自定义常量(es6新增)

   ```js
   const a = 'a'; // const 常量名称 = 常量取值
   ```

##### 4.变量

> 变量可以修改，格式：`var 变量名称;`

```js
var a; // 申明变量 未赋值值为 undefined
a = 1; // 赋值变量 
a = 2; // 修改变量，最终a = 2
var b = 'abc'; // 方式一，单一赋值
var c = true, d = false; // 方式二，批量赋值
```

10 40%

- 发起GET请求格式

```js
axios({
    method: 'GET', // 请求的类型
    url:'',	// 请求的URL地址
    params:{   // get使用get
        id:1
    },

}).then((result)=>{
    // .then 用来指定请求成功之后的回调函数
    // 形参中的result 是请求成功之后的结果
})
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<button id="btnPost">发起post请求</button>
<script src="js/axios.js"></script>
<script>
    document.querySelector('#btnPost').addEventListener('click', async function () {
        // 如果调用某个方法的返回值是Promise实例，则前面可以添加await
        // await只能用在被 async 修饰的方法中
        // 方法 1
        // 解构赋值的时候，使用 : 进行重命名
        const {data: res} = await axios({
            method: 'GET', // 请求的类型
            url: 'http://www.liulongbin.top:3006/api/getbooks',	// 请求的URL地址
            params: {
                id: 1
            }
        })
        console.log(res.data)
        // 方法2
        await axios({
            method: 'GET', // 请求的类型
            url: 'http://www.liulongbin.top:3006/api/getbooks',	// 请求的URL地址
            params: {
                id: 1
            }
        }).then((result) => {
            // .then 用来指定请求成功之后的回调函数
            // 形参中的result 是请求成功之后的结果
            console.log(result.data)
        })
    })
</script>
</body>
</html>
```



- 发起POST请求格式

```html
axios({
    method: 'POST', // 请求的类型
    url:'',	// 请求的URL地址
    data:{
		name:'zs',
		age:20
} // post使用data
}).then((result)=>{
    // .then 用来指定请求成功之后的回调函数
    // 形参中的result 是请求成功之后的结果
})
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<button id="btnPost">发起post请求</button>
<script src="js/axios.js"></script>
<script>
    document.querySelector('#btnPost').addEventListener('click', async function () {
        // 如果调用某个方法的返回值是Promise实例，则前面可以添加await
        // await只能用在被 async 修饰的方法中
        // 方法 1
        const {data} = await axios({
            method: 'POST', // 请求的类型
            url: 'http://www.liulongbin.top:3006/api/post',	// 请求的URL地址
            data: {
                name: 'zs',
                age: 20
            } // post使用data
        })
        console.log(data)
        // 方法2
        await axios({
            method: 'POST', // 请求的类型
            url: 'http://www.liulongbin.top:3006/api/post',	// 请求的URL地址
            data: {
                name: 'zs',
                age: 20
            } // post使用data
        }).then((result) => {
            // .then 用来指定请求成功之后的回调函数
            // 形参中的result 是请求成功之后的结果
            console.log(result.data)
        })
    })
</script>
</body>
</html>
```

- gte/post

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<button id="btnPost">Post请求</button>
<button id="btnGet">Get请求</button>
<script src="js/axios.js"></script>
<script>
    document.querySelector('#btnGet').addEventListener('click', async function () {
        const {data: res} = await axios.get('http://www.liulongbin.top:3006/api/getbooks', {
            params: {
                id: 1
            }
        })
        console.log(res)
        console.log(res.data)
    })
    document.querySelector('#btnPost').addEventListener('click', async function () {
        const {data: res} = await axios.post('http://www.liulongbin.top:3006/api/post', {
            // post 请求体
            name: 'ls',
            age: 28
        })
        console.log(res.body.data)
    })
</script>
</body>
</html>
```


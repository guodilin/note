# 二、基础语法

## 1. 常用指令

##### Mustache

vue提供的{{  }}语法，专门用来解决v-text会覆盖默认文本内容的问题，插值表达式

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>插值表达式</title>
    <script src="https://v2.cn.vuejs.org/js/vue.js"></script>
</head>
<body>
<div id="app">
    <!--  姓名：guodilin  -->
    <p>姓名：{{username}}</p>
    <!--  姓名：男  -->
    <p>性别：{{gender}}</p>
</div>
<script>
    // 创建vue的实例对象
    const vm = new Vue({
        el: '#app',
        data: {
            username: 'guodilin',
            gender: '男'
        }
    })
</script>
</body>
</html>
```



##### v-once

##### v-html

> 可以把带有标签的字符串渲染成真正的html内容

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>插值表达式</title>
    <script src="https://v2.cn.vuejs.org/js/vue.js"></script>
</head>
<body>
<div id="app">
    <!--  v-html指令  -->
    <div v-html="info"></div>
</div>
<script>
    // 创建vue的实例对象
    const vm = new Vue({
        el: '#app',
        data: {
            info:'<h4 style="color: red;font-weight: bold">hello vue.</h4>'
        }
    })
</script>
</body>
</html>
```

##### v-text
> v-text 指令会覆盖元素内默认的值

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>v-text 指令</title>
  <script src="https://v2.cn.vuejs.org/js/vue.js"></script>
</head>
<body>
<div id="app">
  <p v-text="username"></p>
  <!--性别会被替换成 男 -->
  <p v-text="gender">性别</p>
</div>
<script>
  const vm = new Vue({
    el: '#app',
    data: {
      username:'guodilin',
      gender:'男'
    }
  })
</script>
</body>
</html>
```

##### v-pre

##### v-block

## 2. 属性绑定

##### v-bind的介绍

在vue中，可以使用v-bind:指令，为元素的属性动态绑定值

`v-bind:`简写是 ` : `

在使用v-bind属性绑定期间，如果绑定内容需要进行动态拼接，则字符串外面应该用单引号包裹

##### v-bind的基础

```html
<div :title="'box'+index">div</div>
<script>
  const vm = new Vue({
    el: '#app',
    data: {
      index:3
    }
  })
</script>
```

```html
<div id="app">
  <!-- v-bind -->
  <input type="text" v-bind:placeholder="tips">
  <img v-bind:src="photo" alt="" width="300px">
  <!-- 简写 -->
  <div :style="sty">隐藏</div>
</div>
<script>
  // 创建vue的实例对象
  const vm = new Vue({
    el: '#app',
    data: {
      tips: '请输入用户名',
      photo: 'https://v2.cn.vuejs.org/images/logo.svg',
      sty:'display:none'
    }
  })
</script>
</body>
</html>
```



##### v-bind语法糖

##### 绑定class

##### 绑定样式

## 3. 事件监听

##### v-on介绍

`v-on:`简写是@

##### v-on基础

```html
<div id="app">
    <button @click="add">+1</button>
</div>
<script>
    // 创建vue的实例对象
    const vm = new Vue({
        el: '#app',
        // methods 的作用，就是定义事件的处理函数
        methods:{
            // 定义add
            add() {
                console.log('+n')
                // 如果在方法中药修改data中的数据，可以通过this访问到
                this.count+=1
            },
        },
    })
</script>
```



##### v-on参数

`$event`的应用场景：如果默认的事件对象e被覆盖了，则可以手动传递一个`$event`

```html
<div id="app">
  <p>{{ count }}</p>
  <button @click="add(1,$event)">+N</button>
</div>
<script>
  // 创建vue的实例对象
  const vm = new Vue({
    el: '#app',
    // methods 的作用，就是定义事件的处理函数
    methods:{
      add(n,e) {
        console.log(e)
        this.count+=n
        // 判断this.count的值是否为偶数,是修改颜色
        if (this.count % 2 === 0){
            e.target.style.backgroundColor = 'red'
        }else {
            e.target.style.backgroundColor = ''
        }
      }
    },
    data: {
      count:0
    }
  })
</script>
```



##### v-on修饰符

###### 事件修饰符

1. `.prevent`：阻止默认行为，例如阻止a连接的跳转、阻止表单的提交等

2. `.stop`：阻止事件冒泡

3. `.captyre`：以俘获模式触发当前的实际处理函数

4. `.once`：绑定的事件只触发一次

5. `.self`：只有在event.target是当前元素自身时触发事件处理函数

```html
<div id="app">
<!--禁止跳转-->
<a href="http://www.guodilin.com" @click.prevent="show">跳转到百度</a>
</div>
<script>
  // 创建vue的实例对象
  const vm = new Vue({
    el: '#app',
    data: {
    },
    methods: {
      show(){
        console.log('点击了')
      }
    }
  })
</script>
```

###### 按键修饰符

```html
  <div id="app">
      <input type="text" @keyup.esc="clearInput" @keyup.enter="ent">
  </div>
  <script>
    // 创建vue的实例对象
    const vm = new Vue({
      el: '#app',
      // methods 的作用，就是定义事件的处理函数
      methods:{
          clearInput(e) {
              // 给input重新赋值
              e.target.value=''
        },
          ent(e){
              console.log(`触发了enter`)
          }
      },
      data: {
        count:0
      }
    })
  </script>
```


## 4. 条件和循环

##### 条件渲染

- **v-if,v-else-if,v-else**

```html
<div id="app">
    <div v-if="age === 1">男</div>
    <div v-else-if="age === 2">女</div>
    <div v-else>未知</div>
</div>
<script>
    // 创建vue的实例对象
    const vm = new Vue({
        el: '#app',
        data: {
            // flag 为true 显示，false不显示被控制的元素
            age: 1,
        }
    })
</script>
```



##### v-show指令

##### v-if和v-show对比

- **v-if**：的原理是每次动态创建或者移除元素，实现元素的显示和隐藏

- **v-show**：的原理是，动态为元素添加或移除`display:none`样式来实现元素的显示和隐藏

```html
<div id="app">
    <p v-if="false">v-if</p>
    <!--    v-show是利用display:none-->
    <p v-show="false">v-show</p>
</div>
<script>
// 创建vue的实例对象
const vm = new Vue({
    el: '#app',
    data: {
        // flag 为true 显示，false不显示被控制的元素
        flag:true,
    }
})
</script>
```



##### v-for指令

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>v-for</title>
    <link rel="stylesheet" href=css/bootstrap.css>
    <script src="/js/vue.js"></script>
</head>
<body>
<div id="app">
    <table class="table table-bordered table-hover table-striped">
        <thead>
        <tr>
            <th>索引</th>
            <th>ID</th>
            <th>姓名</th>
        </thead>
        <tbody>
        <tr v-for="(item,index) in list" :key="item.id" :title="item.name">
            <td>{{ index }}</td>
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
        </tr>
        </tbody>
    </table>
</div>
<script>
    // 创建vue的实例对象
    const vm = new Vue({
        el: '#app',
        data: {
            list: [
                {id: 1, name: '张三'},
                {id: 2, name: '李四'},
                {id: 3, name: '王五'}
            ]
        }
    })
</script>
</body>
</html>
```



## 5. 计算属性

##### 认识和使用计算属性

##### 计算属性的setter和getter

##### 计算属性和方法对比

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .box{
            width: 300px;
            height: 300px;
        }
        input{
            display: block;
            
        }
    </style>
</head>
<body>
<div id="app">
    <input type="text" v-model="r">
    <input type="text" v-model="g">
    <input type="text" v-model="b">
    <hr>
    <!-- :style代表动态绑定一个样式对象，它的值是一个{ }样式对象 -->
    <div class="box" :style="{ background: `rgb(${r}, ${g}, ${b})` }">{{ `rgb(${r},${g},${b})` }}</div>
    <button @click="show">获取颜色</button>
</div>
<script src="js/jquery-3.6.1.min.js"></script>
<script src="js/vue.js"></script>
<script>
    // 创建vue的实例对象
    const vm =new Vue({
    el:'#app',
    data:{
        r:0,g:0,b:0
    },
    // 事件绑定
    methods: {
        show(){
            console.log(`rgb(${this.r},${this.g},${this.b})`)
        }
    },
     // 侦听器
    watch:{
        
    }
})
</script>
</body>
</html>
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .box{
            width: 300px;
            height: 300px;
        }
        input{
            display: block;            
        }
    </style>
</head>
<body>
<div id="app">
    <input type="text" v-model.number="r">
    <input type="text" v-model.number="g">
    <input type="text" v-model.number="b">
    <hr>
    <!-- :style代表动态绑定一个样式对象，它的值是一个{ }样式对象 -->
    <div class="box" :style="{ background: rgb }">{{ rgb }}</div>
    <button @click="show">获取颜色</button>
</div>
<script src="js/vue.js"></script>
<script>
    // 创建vue的实例对象
const vm =new Vue({
    // 绑定
    el:'#app',
    // 数据
    data:{
        r:0,
        g:0,
        b:0
    },
    // 事件绑定
    methods: {
        show(){
            console.log(this.rgb)
        }
    },
    // 计算属性
    computed:{
        // 方法属性
        // rgb 作为一个计算属性，被定义成方法格式
        rgb(){
            return `rgb(${this.r},${this.g},${this.b})`
        }
    },
    // 侦听器
    watch:{
        }
    }
});
    
console.log(vm);

</script>
</body>
</html>
```



## 6. 属性侦听器

##### watch

> 作用

允许开发者侦听数据的变化，从来针对数据的变化做特点的操作

- 方法格式的侦听器

```js
const vm = Vue({
    el:'#app',
    data:{
        username:guodilin
    },
    watch:{
        username(newVal,oldVal){
            console.log(newVal,oldVal)
            if(newVal==='') return
            // Ajax发起请求，判断是否占用
            $.get('https://www.escook.cn/api/finduser/'+newVal,function(result){
                console.log(result);
            })
        }
    }
})
```

- 对象格式的侦听器

```js
const vm =new Vue({
    el:'#app',
    data:{
        username:'guodilin'
    },
    watch:{
        // 定义对象格式的侦听器
        username:{
            handler(newVal,olVal){
                console.log(newVal,olVal);
                if(newVal==='') return
                // Ajax发起请求，判断是否占用
                $.get('https://www.escook.cn/api/finduser/'+newVal,function(result){
                    console.log(result);
                })
            },
            // true 进入首次触发,false首次进入不触发
            immediate: true
        }
    }
})
```

- 深度侦听器
  - deep: true

```js
    const vm =new Vue({
    el:'#app',
    data:{
        info:{
            username:'guodilin'
        }
    },
    watch:{
        // 定义对象格式的侦听器
        info:{
            handler(newVal,olVal){
                console.log(newVal,olVal);
                if(newVal==='') return
                // Ajax发起请求，判断是否占用
                $.get('https://www.escook.cn/api/finduser/'+newVal,function(result){
                    console.log(result);
                })
            },
            // true 进入首次触发,false首次进入不触发
            immediate: true,
            // true 开启深度触发，只要对象中任何一个属性变化了，都会触发对象侦听器
            deep: true
        }
    }
})
```

- 侦听对象子属性

```js
    // 创建vue的实例对象
    const vm =new Vue({
    el:'#app',
    data:{
        info:{
            username:'guodilin'
        }
    },
    watch:{
        // 如果要侦听的是对象的子属性的变化，则必须包裹一层单引号
        'info.username'(newVal,olVal){
            console.log(newVal,olVal);
        }
    }
})
```

## 7. 表单绑定

##### 基础使用

```html
<div id="app">
   <p>用户名：{{ username }}</p>
    <!--    双向绑定-->
    <input type="text" v-model="username">
    <!--    单项绑定-->
    <input type="text" v-bind:value="username">
    <hr>
    <select v-model="city">
        <option value="0" >请选择城市</option>
        <option value="1">北京</option>
        <option value="2">上海</option>
    </select>
</div>
<script>
  // 创建vue的实例对象
  const vm = new Vue({
    el: '#app',
    data: {
        username:'guodilin',
        city:'0'
    }
  })
</script>
```

##### v-model

##### 其他类型

##### 值绑定

###### .number

```html
<!--    自动转换为数值类型-->
<div id="app">
    <input type="text" v-model.number="n1">+
    <input type="text" v-model.number="n2">=
    <span>{{ n1 + n2 }}</span>
</div>
<script>
    // 创建vue的实例对象
    const vm = new Vue({
        el: '#app',
        data: {
            n1: 1,
            n2: 2
        }
    })
</script>
```

###### .trim

```html
<!--    自动过滤用户输入的首尾空白字符-->
<div id="app">
    <input type="text" v-model.trim="username">
    <button @click="showName">获取用户名</button>
</div>
<script>
    // 创建vue的实例对象
    const vm = new Vue({
        el: '#app',
        data: {
            username: 'guodilin',
        },
        methods:{
            showName(){
                console.log(`用户名是："${this.username}"`)
            }
        }
    })
</script>
```

###### .lazy

```html
<!--    失去焦点才会更新-->
<input type="text" v-model.lazy="username">
```

##### 修饰符

## 8. 阶段案例

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>v-for</title>
    <link rel="stylesheet" href=/css/bootstrap.css>
    <script src="/js/vue.js"></script>
</head>
<body>
<div id="app">
    <input type="text" v-model.trim="name">
    <button @click="add">添加用户</button>
    <table class="table table-bordered table-hover table-striped">
        <thead>
        <tr>
            <th>索引</th>
            <th>ID</th>
            <th>姓名</th>
        </thead>
        <tbody>
        <tr v-for="(item,index) in list" :key="item.id" :title="item.name">
            <td>{{ index }}</td>
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
        </tr>
        </tbody>
    </table>
</div>
<script>
    // 创建vue的实例对象
    const vm = new Vue({
        el: '#app',
        data: {
            name: "",
            nextId: 4,
            list: [
                {id: 1, name: '张三'},
                {id: 2, name: '李四'},
                {id: 3, name: '王五'}
            ]
        },
        methods: {
            add() {

                console.log(`ID是："${this.nextId}"`)
                console.log(`用户名是："${this.name}"`)
                this.list.push({id:this.nextId,name:this.name})
                this.name=''
                this.nextId ++
            }
        }
    })
</script>
</body>
</html>
```

## 过滤器

> 注意点

- 要定义到filters节点下，本质是一个函数
- 在过滤器函数中，一定要有return值
- 过滤器的形参永远都是管道费前面的那个值
- 如果全局过滤器和私有过滤器名字一致，调用私有过滤器

> 全局过滤器

```js
 // 全局过滤器
Vue.filter('capi',function(str){
    const first = str.charAt(0).toUpperCase()
    // 字符串的slice方法，可以截取从指定索引往后截取
    const other = str.slice(1)
    // 过滤器中，一定要有个返回值
    return first + other
})
```



```html
<div id="app">{{ username | capi }}</div>
<script>
    // 创建vue的实例对象
    const vm = new Vue({
        // el 属性是固定的写法，表示当前vm实例要控制页面上的哪个区域
        el: '#app',
        // data 对象就是要渲染到页面上的数据
        data: {
            username:'guodilin'
        },
        filters:{
            // 过滤器的形参永远都是管道费前面的那个值
            capi(val){
                console.log(val);
                // 过滤器方法
                // 字符串的charAt方法,可以获取指定位置的数据
                const first = val.charAt(0).toUpperCase()
                // 字符串的slice方法，可以截取从指定索引往后截取
                const other = val.slice(1)
                // 过滤器中，一定要有个返回值
                return first + other
            }
        }
    })
</script>
```
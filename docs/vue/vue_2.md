# 三、组件化开发

认识组件化

## 组件化基础

组件化高级

插槽slot

Provide/inject

动态组件

异步组件

```vue
<template>
  <div id="app">
    <Left msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// 引入子组件
import Left from "@/components/Left.vue"

export default {
  name: "App",
  components: {
    Left,
  }
}
</script>
```



##### 全局导入

- 在全局的main.js中导入

``` js
// 导入需要被全局注册的组件
import Count from "@/components/Count";
// 引入组件
Vue.component('Count',Count)
```

- 组件中使用Count组件

```vue
<Count></Count>
```

## 组件的props

> props 是组件的自定义属性，在封装通用组件的时候，合理的使用props可以极大的提高组件的复用性

```vue
<script>
export default {
  name: "Left",
  // 组件自定义属性props
  props: {
    msg: String,
  },
};
</script>
```

- props定义默认值，default，type

```vue
<script>
export default {  
props: {
    init: {
      // 如果外界使用init组件的时候没有传递，默认值生效
      default: 0,
      // 定义值类型
      type: Number
    },
  },
};
</script>
```

- props，required用于设置子组件必填项

```vue
<script>
export default {  
props: {
    init: {
      // 如果外界使用init组件的时候没有传递，默认值生效
      default: 0,
      // 定义值类型
      type: Number,
      // 子组件必填项
      required:true
    },
  },
};
</script>
```

## scoped

> 在style 增加 scoped

```css
<style scoped>
..
</style>
```

## deep

> deep 可以在父组件中修改子组件样式

```css
<style scoped>
/deep/ h5{
    color:pink;
}
</style>
```

## 数据共享

##### 父传子

- 父组件

```vue
<template>
  <div id="app">
    <Son :msg="message" :user="userinfo.name"></Son>
  </div>
</template>

<script>
import Son from "@/components/Son";
export default {
  name: "App",
  components: {
    Son,
  },
  data() {
    return {
      userinfo: {
        name: 'zs',
        age: 20
      },
    }
  }
}
</script>
```

- 子组件

```vue
<template>
  <div>
    <p>{{ msg }}</p>
    <p>{{ user }}</p>
  </div>
</template>

<script>
export default {
  name: "Son",
  props: {
    msg: String,
    user: Object
  }
}
</script>
```

##### 子传父

- 父模板

```vue
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png"/>
    <p>父组件：{{ countForm }}</p>
    <Left @numChange="getNewCount"></Left>
  </div>
</template>

<script>
import Left from "@/components/Left.vue"

export default {
  name: "App",
  components: {
    Left,
  },
  data() {
    return {
      countForm: 0
    }
  },
  methods: {
    getNewCount(val) {
      this.countForm = val
    }
  }
}
</script>
```

- 子组件

```vue
<template>
  <div>
    <p>子组件：{{ count }}</p>
    <button @click="add">+1</button>
  </div>
</template>
<script>
export default {
  name: "Left",
  data() {
    return {
      count: 0
    }
  },
  methods: {
    add() {
      this.count += 1
      // 修改数据时，通过$emit() 触发自定义事件
      // 自定义事件 numChange , 父组件绑定自定义事件来接收count
      this.$emit('numChange', this.count)
    }
  },
};
</script>
```

##### 兄弟组件之间的数据共享

1. 创建`eventBus.js`模块，并向外共享一个Vue的实例对象
2. 在数据发送方，调用`bus.$emit(‘事件名称’,要发送的数据)`方法触发自定义事件
3. 在数据接收方，调用`bus.$on('事件名称',事件处理函数)`方法注册一个自定义事件

- 子组件，发送方

```vue
<template>
  <div>
    <input type="text" v-model="msg">
    <button @click="sendMsg">发送</button>
  </div>
</template>
<script>
// 导入
import bus from './eventBus.js'
export default {
  name: "Left",
  data() {
    return {
      msg: 'hello vue.js'
    }
  },
  methods:{
    sendMsg(){
      bus.$emit('share',this.msg)
    }
  }
};
</script>
```

- 并向外共享一个vue的实例对象

```js
import Vue from 'vue'

export default new Vue()
```

- 子组件，接收方

```vue
<template>
  <div>
    <p>子组件right：{{ msgFromLeft }}</p>
  </div>
</template>
<script>
// 导入
import bus from './eventBus.js'

export default {
  name: "Right",
  data() {
    return {
      msgFromLeft: ''
    }
  },
  created() {
    bus.$on('share', val => {
      this.msgFromLeft = val
    })
  }

};
</script>
<style lang="lass">
</style>
```

## ref 

> ref原来辅助开发者在不依赖于jQuery的情况下，获取DOM元素或组件的引用

##### 操作DOM

```vue
<template>
  <div id="app">
	<p ref="myp">父组件：{{ countForm }}</p>
  </div>
</template>
<script>
export default {
   methods: {    
    show(){
       // this.$refs.myp  获取单前 DOM
      console.log(this.$refs.myp)
      this.$refs.myp.style.color='red'
    }
  }
}
</script>
```

##### 操作组件

```vue
<template>
  <div id="app">
    <el-button type="primary" @click="onReset">重置</el-button>
    <Left ref="myLeft"></Left>
  </div>
</template>

<script>
import Left from "@/components/Left.vue"

export default {
  name: "App",
  components: {
    Left,
  },
  methods: {
    onReset() {
      console.log(this.$refs.myLeft.$data)
      this.$refs.myLeft.$data.count=0
    }
  }
}
</script>
```

```vue
<!-- Left.vue-->
<template>
  <div>
    <el-row>
      <el-input v-model="count" placeholder="请输入内容"></el-input>
      <el-button @click="count+=1">+1</el-button>
      <el-button type="primary" @click="resetCount">重置</el-button>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "Left",
  data() {
    return {
      count: 0
    }
  },
  methods: {
    resetCount() {
      this.count = 0
    }
  }
};
</script>
```

##### `$nextTick(cb)`

> 组件的`$nextTick(cb)`方法，会把cb回调推迟到下一个DOM更新周期之后执行。
>
> 等组件的DOM更新完成之后，在执行cb回调函数，从而能保证cb回调函数可以操作到最新的DOM元素

```vue
<template>
  <div id="app">
    <el-row>
      <el-input
          v-model="count"
          v-if="inputVisible"
          @blur="showBut"
          ref="iptRef"
          placeholder="请输入内容"></el-input>
      <el-button
          @click="showIpt"
          v-else>展开输入框
      </el-button>
    </el-row>
  </div>
</template>

<script>

export default {
  name: "App",
  data() {
    return {
      inputVisible: false,
      count: ''
    }
  },
  methods: {
    showIpt() {
      // 失去焦点后显示button
      this.inputVisible = true
      // 展开后input自动获取焦点
      this.$nextTick(()=>{
        this.$refs.iptRef.focus()
      })
    },
    showBut(){
      // 点击展开输入框隐藏 button
      this.inputVisible = false
    }
  }
}
</script>
```
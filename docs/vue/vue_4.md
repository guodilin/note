# 五、核心语法

## 1. 生命周期

##### ①. beforeCreate

##### ②. created

- 一般用于AJX数据 请求

```js
<script>
export default {  
  methods:{
    initBooklist(){
      console.log(this.msg)
    }
  },
  created() {
    // 触发事件请求数据
    this.initBooklist()
  },
</script>
```

##### mounted

- 一样用于请求dom

```js
<script>
export default {  
mounted() {
    const dom = document.querySelector("#myh1")
    console.log(dom)
  }
}
</script>
```

##### ③. beforeMount

##### ④. beforeUpdate

##### ⑤. updated

- 已经根据最新的数据，完成了组件的dom结构的重新渲染

```js
<script>
export default {  
  updated() {
    console.log('更新成功')
  }
}
</script>
```

##### ⑥. beforeUnmount

##### ⑦. unmounted

## 2. Composition API

##### ①. 认识组合式API

##### ②. setup函数

##### ③. 生命周期钩子

##### ④. Provide/lnject

##### ⑤. 自定义Hook

## 3. Teleport的使用

## 4. Vue3过渡动画

## 5. 网络请求axios

##### ①. axios库介绍和安装

##### ②. axios库使用解析

##### ③. axios二次封装

##### ④. axios库的原理解析

## 6. Vue响应式原理

## 7. Element-Plus

## 8. Echarts 的使用


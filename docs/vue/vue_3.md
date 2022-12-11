# 四、Vue Cli详解

## webpack5

##### webpack基础配置



## vite2

##### vite工具集成配置



## vue cli4



## 安装

```bash
npm install -g @vue/cli
# OR
yarn global add @vue/cli
# 版本查看
vue --version
```

## 升级

```bash
npm update -g @vue/cli
# OR
yarn global upgrade --latest @vue/cli
```

## 创建一个项目

```bash
vue create vue-demo
```

- main.js

```js
new Vue({
  el: '#app',
  render: h => h(Test),
})
// Vue 实例的.$mount('#app') 或者 el:'#app'完全一样
new Vue({
  render: h => h(Test),
}).$mount('#app')
```

- Test.vue

```vue
<template>
  <div class="box">
    <h1>
      {{ username }}
    </h1>
    <button @click="chaName">修改用户名</button>
    <br />
    <button @click="add">{{ count }}</button>
  </div>
</template>
<script>
// 默认导出
export default {
  // 定义数据源
  data() {
    return {
      username: "zs",
      count: 0,
    };
  },
  // 点击事件
  methods: {
    chaName() {
      // 点击后修改值
      this.username = "ww";
    },
    add() {
      this.count += 1;
    },
  },
  // 侦听器
  watch: {
    // newVal 是变化后的值，oldVal 是变化前的旧值
    username(newVal, oldVal) {
      console.log(newVal, oldVal);
    },
  },
  // 计算属性
  computed: {},
  // 过滤器
  filters: {},
};
</script>
<style lang="less">
.box {
  background: yellow;
  h1 {
    color: red;
  }
}
</style>
```
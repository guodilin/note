# Vue Cli

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


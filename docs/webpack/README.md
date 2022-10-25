# 安装与配置

## 安装webpack

- **安装**

<CodeGroup>
  <CodeGroupItem title="YARN" active>

```bash
yarn add webpack --dev
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM">

```bash
npm install --save-dev webpack
```

  </CodeGroupItem>
</CodeGroup>

## 配置webpack

- **配置**：创建`webpack.config.js`文件

```json
module.exports = {
    mode: 'development'		// 开发模式打包
    // mode: 'production'	// 线上模式打包
    }
```

- **默认配置修改**：`entry`打包入口，`output`存放目录及生成的文件名

1. 默认的打包入口文件为`src --> index.js`
2. 默认的输出文件路径为`dist --> main.js`

```js
// node 导入 path
const path = require('path')
// 使用 Node.js 中的导入语法，向外导出一个webpack的配置对象
module.exports = {
    mode: 'development',
    // __dirname 当前文件目录
    entry: path.join(__dirname, './src/mode.js'),  // 打包入口文件的路径，默认index.js
    // 指定生成的文件要存放到哪里
    output: {
        // 存放目录
        path: path.join(__dirname, 'dist'),   // 打包入口文件的路径
        // 生成的文件名
        filename: 'bundle.js' // 默认：main
    }
}
```

## Plugins

##### webpack-dev-server

+ 类似node.js阶段用到的nodemon工具
+ 每当修改了源代码，webpack会自动进行项目的打包和构建

> 安装

```shell
# 安装 webpack-dev-server
npm install webpack-dev-server -D
```

> 配置

```json
 { 
	"scripts": {
    "dev": "webpack server",
    "build": "webpack"
  },
 }
```

##### html-webpack-plugin

webpack中的HTML插件(类似一个模板引擎插件)可以通过此插件自定制index.html页面的内容

- **安装**

<CodeGroup>
  <CodeGroupItem title="YARN" active>

```bash
yarn add --dev html-webpack-plugin
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM">

```bash
npm i --save-dev html-webpack-plugin
```

  </CodeGroupItem>
</CodeGroup>

- **配置**：在`webpack.config.js`中添加如下3步

```js
const path = require('path')
// 1. 导入html-webpack-plugin
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 使用 Node.js 中的导入语法，向外导出一个webpack的配置对象
module.exports = {
    // mode 用来指定构建模式，可选值有 development 和 production
    // development 开发模式，production 线上模式
    mode: 'development',
    // __dirname 当前文件目录
    entry: path.join(__dirname, './src/index.js'),  // 打包入口文件的路径
    // 指定生成的文件要存放到哪里
    output: {
        // 存放目录
        path: path.join(__dirname, 'dist'),   // 打包入口文件的路径
        // 生成的文件名
        filename: 'bundle.js'

    },
    devServer: {
        static: {
            directory: path.join(__dirname,'/')
        },     
    },
    plugins: [
        new HtmlWebpackPlugin({
            // 指定复制哪个页面
            template: './src/index.html',
            // 指定复制出来的文件名和存放路径
            filename: './index.html'
        })
      ]
}
```

- **引入**：调用内存中的js文件

```html
<!DOCTYPE html>
<html lang="zh-cn">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>webpack</title>
    <!-- 引用内存中的js文件 -->
    <script src="bundle.js"></script>
</head>
<body>
    <ul>
        <li>第 1 个li</li>
        <li>第 2 个li</li>
        <li>第 3 个li</li>
        <li>第 4 个li</li>
        <li>第 5 个li</li>
        <li>第 6 个li</li>
        <li>第 7 个li</li>
        <li>第 8 个li</li>
        <li>第 9 个li</li>
    </ul>
</body>
</html>
```

- **package.json**

```json
{
  "name": "webpack",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "webpack server",
    "build": "webpack"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "jquery": "^3.6.1"
  },
  "devDependencies": {
    "html-webpack-plugin": "^5.5.0",
    "webpack": "^5.74.0",
    "webpack-cli": "^4.10.0",
    "webpack-dev-server": "^4.11.1"
  }
}
```


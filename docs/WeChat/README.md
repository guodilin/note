# 项目结构
##### 文件说明
- pages 用来存放所有小程序的页面
  - index logs 
    - .js 页面的脚本文件，存放页面的数据、事件处理函数等
    - .json 当前页面的配置文件，配置窗口的外观、表现等
    - .wxml 页面的模板结构文件
    - .wxss 当前页面的样式表文件
- utils 用来存放工具性质的模块(如：格式化时间的自定义模块)
- app.js 小程序入口文件
- app.json 小程序全局的配置文件
- app.wxss 全局样式文件
- project.config.json 项目的配置文件
- sitemap.json 用来配置小程序及其他页面是否允许被微信索引

##### json配置文件的作用

> `json`是一种数据格式，在实际开发中，`json`总是以配置文件的形式出现。小程序项目中也不例外：通过不同的`.json`配置文件，可以对小程序项目进行不同级别的配置。

- 小程序项目中有`4种json`配置文件分别是：
  1. 项目根目录中的`app.json`配置文件
  2. 项目根目录中的`project.config.json`配置文件
  3. 项目根目录中的`sitemap.json`配置文件
  4. 每个页面文件夹中的`.json`配置文件

##### `app.json` 文件

> `app.json`是当前小程序的全局配置，包含了小程序的所有页面的路径、窗口外观、界面表现、底部tab等。

```json
{
    // 所有小程序的页面路径
  "pages":[
    "pages/index/index",
    "pages/logs/logs"
  ],
    // 定义所有页面的背景色、文字颜色等
  "window":{
    "backgroundTextStyle":"light",
    "navigationBarBackgroundColor": "#fff",
    "navigationBarTitleText": "Weixin",
    "navigationBarTextStyle":"black"
  },
  // 全局定义小程序组件所使用的样式版本
  "style": "v2",
  // 用来指明sitemap.json的位置
  "sitemapLocation": "sitemap.json"
}
```

##### `project.config.json` 文件

> 开发工具个性化配置文件

该文件详细文档：<https://developers.weixin.qq.com/miniprogram/dev/devtools/projectconfig.html>

```json
{
  "description": "开发工具项目配置文件",
  "packOptions": {
    "ignore": [],
    "include": []
  },
  "setting": {
    "bundle": false,
    "userConfirmedBundleSwitch": false,
    "urlCheck": true,
    "scopeDataCheck": false,
    "coverView": true,
    "es6": true,
    "postcss": true,
    "compileHotReLoad": false,
    "lazyloadPlaceholderEnable": false,
    "preloadBackgroundData": false,
    "minified": true,
    "autoAudits": false,
    "newFeature": false,
    "uglifyFileName": false,
    "uploadWithSourceMap": true,
    "useIsolateContext": true,
    "nodeModules": false,
    "enhance": true,
    "useMultiFrameRuntime": true,
    "useApiHook": true,
    "useApiHostProcess": true,
    "showShadowRootInWxmlPanel": true,
    "packNpmManually": false,
    "enableEngineNative": false,
    "packNpmRelationList": [],
    "minifyWXSS": true,
    "showES6CompileOption": false,
    "minifyWXML": true,
    "useStaticServer": true,
    "checkInvalidKey": true,
    "babelSetting": {
      "ignore": [],
      "disablePlugins": [],
      "outputPath": ""
    },
    "disableUseStrict": false,
    "useCompilerPlugins": false
  },
  "compileType": "miniprogram",
  "libVersion": "2.19.4",
  "appid": "wx91eb89fb3cc017e6",
  "projectname": "miniprogram-92",
  "condition": {},
  "editorSetting": {
    "tabIndent": "insertSpaces",
    "tabSize": 2
  }
}
```

##### `sitemap.json` 文件

> 小程序内的搜索，类似seo

该文件详细文档：<https://developers.weixin.qq.com/miniprogram/dev/framework/sitemap.html>

```json
{
  "desc": "SEO",
  "rules": [{
  "action": "allow", // 值：disallow不被索引
  "page": "*" // * 代表所有页面
  }]
}
```

##### 页面的.json配置

> 小程序中的每一个页面，可以使用.json文件来对本页面的窗口外观进行配置，页面中的配置会覆盖app.json的window中相同的配置项。页面的权限高于app.json

##### 新建小程序页面

> 只需要中pages中建立路径即可

```json
{
  "pages":[
    "pages/index/index",  //默认首页
    "pages/logs/logs",
    "pages/list/list"  //小程序会帮我们自己新建
  ],
}
```

##### 修改项目首页

只需要调整app.json -> pages数组中页面路径的前后顺序，即可修改项目的首页，小程序会把排在第一位的页面当作首页项目进行渲染。

```josn
{
  "pages":[
  	"pages/list/list",  //默认首页
    "pages/index/index",
    "pages/logs/logs"
  ],
}
```

##### WXML文件

> wxml是小程序框架设计的一套标签语言，用来构建小程序页面的结构，其作用类似于网页开发中的html。

1. 标签的名称不同

   - HTML (div,span,img,a)
   - WXML (view,text,image,navigator)

2. 属性节点不同

   ```html
   <a href = "#">超链接</a> 
   <navigator url="/pages/index/"></navigator>
   ```

3. 提供了类似于vue中的模板语法

   - 数据绑定
   - 列表渲染
   - 条件渲染

##### WXSS样式

1. 新增了`rpx`尺寸单位
   * `css`中需要手动进行像素单位换算
   * `wxss`在底层支持新的尺寸单位`rpx`，在不同大小的屏幕上小程序会自动进行换算
2. 提供了全局的样式和局部样式
   * 项目根目录中的`app.wxss`会作用于所有的小程序页面
   * 局部页面的`.wxss`样式只对当前页面生效
3. `wxss`支持部分的`css`选择器
   * `.class`和`#id`
   * `element`
   * 并集选择器、后代选择器
   * `::after`和`::before`等伪类选择器

##### .JS文件

1. app.js
   - 是整个小程序项目的入口文件，通过调用`App()`函数来启动整个小程序
2. 页面的.js
   - 是页面的入口文件，通过调用`Page()`函数来创建并运行页面
3. 普通的.js
   - 是普通的功能模块，用来封装公共的函数或属性供页面使用

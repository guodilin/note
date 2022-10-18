# 模板

## 1.设置模板

1. 在项目文件夹中创建`templates`文件夹

2. `settings.py`文件中找到`TEMPLATES`中的`DIRS`设置为
  ```python
  TEMPLATES = [
      {
          'BACKEND': 'django.template.backends.django.DjangoTemplates',   # 指定模板的引擎
         # 'DIRS': [os.path.join(BASE_DIR, 'templates')],
          'DIRS': [BASE_DIR / 'templates'],   # 模板的搜索目录。可以是一个或多个(4.0)
          'APP_DIRS': True,   # 是否要在应用中的templates文件夹中搜索模板文件
          'OPTIONS': {    # 有关模板的选项
              'context_processors': [
                  'django.template.context_processors.debug',
                  'django.template.context_processors.request',
                  'django.contrib.auth.context_processors.auth',
                  'django.contrib.messages.context_processors.messages',
              ],
          },
      },
  ]
  ```

3. 配置路由

```python
from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),	# 首页
]
```

4. 加载模板

> 方案一

```python
from django.http import HttpResponse
from django.template import loader

def index(request):
    t = loader.get_template('index.html')
    html = t.render()
    return HttpResponse(html)
```
> 方案二


```python
from django.shortcuts import render

def test_html(request):
    # F:\Django\guodilin\templates
   	return render(request, 'index.html') # 在模板目录创建index.html并指向该文件
```
5. 请求

```python
from django.shortcuts import render


def index(request):
    # 打开网页是get请求
    if request.method == 'GET':
        pass
    # 发送数据是post请求
    elif request.method == 'POST':
        pass
    else:
        pass
    return render(request, 'index.html', locals())
```

## 2.变量/标签/过滤器/继承/反向解析

##### 1.变量

1. 视图中函数中可以将python变量封装到字典中传递到模板

1. 模板中，我们可以用`{{ 变量名 }}`的语法调用视图传进来的变量

   ```html
   <div>{{ 变量名 }}</div>
   ```

1. 示例

   + views.py

     ```python
     def pc_inf(request):
         dic = {
              "ip": request.META['REMOTE_ADDR'],  # 客户端IP地址
             }
          return render(request, 'pc_inf.html', dic)
     ```

   + html页

     ```html
     <div>{{ ip }}</div>
     ```

##### 2.模板数据类型

1. 数据类型

   + str：字符串
   + int：整形
   + list：数组
   + tuple：元组
   + dict：字典
   + func：方法
   + obj：类实例化的对象

2. 模板中使用变量语法 

   + `{{ 变量名 }}`
   + `{{ 变量名.index }}`
   + `{{ 变量名.key }}`
   + `{{ 对象.方法 }}`
   + `{{ 函数名 }}`

3. 完整数据类型示例

   + view.py
   
     ```python
     from django.shortcuts import render
     
     # 创建函数
     def say_hi():
         return 'say_hi方法的内容'
     # 创建对象
     class Dog:
         def say(self):  # say方法
             return 'Dog对象中的say方法的内容'
     def test_param(request):
         dic = {}
         dic['int'] = 88  # 整形
         dic['str'] = 'guodilin'  # 字符串
         dic['lst'] = ['Tom', 'Jack', 'Lily']  # 数组
         dic['dict'] = {'a': 9, 'b': 8}  # 字典
         dic['func'] = say_hi  # 方法
         dic['class_obj'] = Dog()  # 对象
        
         return render(request, 'test_param.html', dic)
     ```
     
   + html页
   
     ```html
     <h3>int 是 {{ int }}</h3>	# 88
     <h3>str 是 {{ str }}</h3>	# guodilin
     <h3>lst 是 {{ lst }}</h3>	# ['Tom', 'Jack', 'Lily']
     <h3>lst 是 {{ lst.0 }}</h3>	# Tom
     <h3>dict 是 {{ dict }}</h3>	# # {'a': 9, 'b': 8}
     <h3>dict['a'] 是 {{ dict.a }}</h3>	# 9
     <h3>function 是 {{ func }}</h3>	# say_hi方法的内容
     <h3>class_obj 是 {{ class_obj.say }}</h3>	# Dog对象中的say方法的内容
     ```

##### 3.if标签

1. if 语法

   ```html
   {% if 条件表达式1 %}
   ...
   {% elif 条件表达式2 %}
   ...
   {% elif 条件表达式3 %}
   ...
   {% else %}
   ...
   {% endif %}
   ```

1. 示例

   + view页

   ```python
   def index_view(request):
       # 默认打开为get请求
       if request.method == 'GET':
           return render(request, 'index.html', locals())
       # 提交数据post请求
       elif request.method == 'POST':
           x = int(request.POST['x'])
           y = int(request.POST['y'])
           op = request.POST['op']
           # 判断单选项的值来计算
           result = 0
           if op == 'add':
               result = x + y
           elif op == 'sub':
               result = x - y
           elif op == 'mul':
               result = x * y
           elif op == 'div':
               result = x / y
           # dic = {'x': x, 'y': y, 'op': op}  # locals() 等同于自己拼接了一个dic(字典)
           return render(request, 'index.html', locals())
   ```
   
   + html页
   
     ```html
     <form action="/" method="post">
         <label>
             <input type="text" name="x" value="{{ x }}">
         </label>
         <label>
             <select name="op">
                 <option value="add" {% if op == 'add' %}selected{% endif %}>加</option>
                 <option value="sub" {% if op == 'sub' %}selected{% endif %}>减</option>
                 <option value="mul" {% if op == 'mul' %}selected{% endif %}>乘</option>
                 <option value="div" {% if op == 'div' %}selected{% endif %}>除</option>
             </select>
         </label>
         <label>
             <input type="text" name="y" value="{{ y }}">
         </label>=<span>{{ result }}</span>
         <div>
             <button type="submit">计算</button>
         </div>
     </form>
     ```
     

##### 4.for标签

1. 语法格式

   ```html
   {% for 变量 in 课迭代对象 %}
       ...循环语句
   {% empty %}
       ...可迭代对象，无数据时填充的语句
   {% endfor %}
   ```

2. 内置变量 - forloop

| 变量                | 描述                               |
| ------------------- | ---------------------------------- |
| forloop.counter     | 循环当前迭代（从1开始索引）        |
| forloop.counter0    | 循环当前迭代（从0开始索引）        |
| forloop.revcounter  | counter值得倒序                    |
| forloop.revcounter0 | revcounter值得倒序                 |
| forloop.first       | 如果这是第一次通过循环，则为真     |
| forloop.last        | 如果这是最后一次循环，则为真       |
| forloop.parentloop  | 当嵌套循环，parentloop表示外层循环 |

3. 示例

  + view页

    ```python
    def index_view(request):
        # 默认打开为get请求
        if request.method == 'GET':
            lst = ['张三', '王五', '郭迪霖']  # 循环演示数据
            return render(request, 'index.html', locals())
    ```

  + html页

    ```html
    {% for name in lst %}
        {% if forloop.first %} 第一次循环增加的数据{% endif %}
        <p>{{ forloop.counter }}{{ name }}</p>    {#前面新增序号#}
        {% if forloop.last %} 最后一次循环增加的数据{% endif %}
    {% empty %}
        无数据
    {% endfor %}
    ```

##### 5.模板过滤器

1. 说明
   + 定义：在变量输出时对变量的值进行处理

   + 作用：可以通过使用过滤器来改变变量的输出显示

   + 语法

     ```html
     {{ 变量|过滤器1:'参数值1'|过滤器2:'参数值2'... }}
     ```

   + 常用过滤器

   	| 过滤器            | 说明            |
   	| ----------------- | ---------------|
   	| lower             | 将字符串转换为全部小写         |
   	| upper             | 将字符串转换为大写形式         |
   	| safe              | 默认不对变量内的字符串进行html转义      |
   	| add:"n"           | 将value的值增加n                          |
   	| truncatechars:'n' | 如果字符串多余指定的字符数量，那么会被截断。截断的字符串将以可翻译的省略号序列（"..."）结尾 |
   	| ...               |                                         |

2. 示例

   + view页

     ```python
     from django.shortcuts import render
     
     def index(request):
         stt = 'guodiLin'
         num = 88
         scr = '<script>alert("hello world")</script>'
         return render(request, 'index.html', locals())
     ```

   + html页

     ```html
     {{ stt|lower }}		# guodilin
     <br>
     {{ stt|upper }}		# GUODILIN
     <br>
     {{ num|add:"2" }}	# 90
     <br>
     {{ scr|safe }}		# 弹窗 hello world
     <br>
     {{ stt|truncatechars:'3' }}...	# guo...
     ```

##### 6.模板的继承

> 语法

```html
{% extends 'heade.html' %}	# 继承父模板
{% block content %} {% endblock %}	# 需要不一样的内容用block标签标记，并用endblock结束，content别名
```

> 父模板

```html
<!doctype html>
<html lang="zh-cn">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    {% block title %}<title>title</title>{% endblock %}
    {% block css %}{% endblock %}
</head>
<body>
{% block content %} {% endblock %}
{% block js %} {% endblock %}
</body>
</html>
```

> 子模板

```html
<!--子模板-->
{% extends 'heade.html' %}
	{% block title %}<title>传承后</title>{% endblock %}
    {% block css %}<link rel="stylesheet" href="/style.css">{% endblock %}
</head>
<body>
{% block content %}
<H1>hello world 继承</H1>
{% endblock %}
{% block js %}
<script src="/layui.js"></script>
{% endblock %}
```



##### 7.url反向解析

> 模板语法

```html
<!-- blog应用 -->
<!-- blog应用首页 -->
<a href="/blog/">index</a>
<a href="{% url 'blog:index' %}">index</a>

<!-- page -->
<a href="/blog/page/100">page</a>

<a href="{% url 'blog:page' '100'%}">page</a> {# /blog/page/100 #}

```

```python
from django.urls import path
from . import views

app_name = 'blog'	# 标识
urlpatterns = [
    path('', views.index, name='index'),
    path('page/<int:pg>', views.page, name='page')
]
```

+ `url`：解析
+ `blog`：`app_name`的值
+ `index`：`path`里面的`name`值

> 视图

```python
from django.http import HttpResponseRedirect
from django.urls import reverse


def TestUrl(request):
    url = reverse('blog:index')
    return HttpResponseRedirect(url)
```



##### 8. 静态文件

1. 静态文件配置 `settings.py`

```python
STATIC_URL = '/static/' # 默认创建项目时候自带
STATIC_URL = 'static/'	# 4.0
```

2. 配置静态文件的存储路径`STATICFILES_DIRS`

```python
STATICFILES_DIRS = (os.path.join(BASE_DIR, "static"),)
STATICFILES_DIRS = [BASE_DIR / "static"]	# 4.0
```

3. 在项目中创建`static`文件夹

4. 通过`{% static %}`

   1. 加载static - `{% load static %}`
   2. 使用静态资源 - `{% static '静态资源路径' %}`
   3. 示例

   ```html
   {% load static %}
   <link rel="stylesheet" href="{% static 'layui-v2.7.6/css/layui.css' %}">
   ```

   

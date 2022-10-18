# 基础

## 1. 安装

##### 1. 终端安装

   ```shell
   py -m pip install Django   # 安装django
   py -m pip install Django==4.0 # 安装指定版本
   py -m django --version    # 版本查看
   django-admin startproject mysite  # 创建项目
   ```

##### 2. 启动django

```shell
py manage.py runserver 80  # 默认8000
py manage.py startapp # 创建应用
py manage.py migrate
```

##### 3. 常用命令

```shell
py manage.py runserver  # 启动项目
py manage.py startapp music   # 创建music应用，应用不能使用系统关键字
py manage.py migrate
python manage.py makemigrations	# 生成迁移文件
python manage.py migrate	# 执行迁移文件
```

##### 4. 项目示例

1. 创建项目

```shell
django-admin startproject mysite # 创建mysite项目
```

2. 启动项目（开发）

```shell
cd mysite   # 进入项目目录
py manage.py runserver 80  # 启动项目
```

3. 打开项目

  <http://localhost/>

##### 5.多应用

1. 创建应用

```python
# 创建应用 music
# /guodilin/
py manage.py startapp music
```

2. 配置应用

```python
# settings.py 在INSTALLED_APPS后面添加应用名称
# # /guodilin/guodilin/settings.py
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'blog',	# 应用名
]
```

3. 配置主路由

```python
# 主路由配置路由，urls.py
# /guodilin/guodilin/urls.py
from django.urls import path, include

urlpatterns = [
    path('blog/', include('blog.urls'), name='music'),
]
```

4. 配置子路由

```python
# 应用下的 urls.py
# /guodilin/blog/urls.py
from django.urls import path
from . import views

app_name = 'blog'
urlpatterns = [
    path('', views.index, name='index'),
    path('page/<int:pg>', views.page, name='page'),
    path('TestUrl/', views.TestUrl, name='TestUrl')
]
```

5. 视图

```python
from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.urls import reverse


# name='index'
# 应用首页  http://localhost/blog/
def index(request):
    return render(request, 'blog/index.html', locals())


# name='TestUrl'
# 302跳转，视图反向解析,访问testurl跳转到首页
def TestUrl(request):
    url = reverse('blog:index')
    return HttpResponseRedirect(url)


# name='page'
# http://localhost/blog/page/100
def page(request, pg):
    dic = {"pg": "pg"}
    return render(request, 'blog/page.html', locals())
```

6. 模板页

> index.html

`/guodilin/templates/blog/index.html`

```html
<!doctype html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>

</head>
<body>
<a href="{% url 'blog:index' %}">index</a>
<a href="{% url 'blog:page' '100' %}">page</a>
<a href="{% url 'blog:TestUrl' %}">TestUrl</a>
</body>
</html>
```

> page.html

+ `/guodilin/templates/blog/page.html`

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
{{ pg }}
</body>
</html>
```

## 2. 目录结构

##### 1.单应用模式 

```python
mysite
├── manage.py			# 命令
├── static				# 静态文件
├── templates			# 模板文件
├── mysite				# 主应用
│  	 ├── __init__.py  	# python包初始化文件
│  	 ├── settings.py	# 配置文件
│  	 ├── urls.py		# 路由
│  	 ├── asgi.py		# 网关
│  	 └── wsgi.py		# 网关
```

##### 2. 多应用模式

```python
mysite
├── manage.py
├── static
├── templates
├── app1
│  	 ├── migrations
│  	 │  	 ├── __init__.py
│  	 ├── templates
│  	 │  	 ├── app1
│  	 ├── __init__.py
│  	 ├── admin.py
│  	 ├── apps.py
│  	 ├── models.py
│  	 ├── tests.py
│  	 ├── urls.py
│  	 └── views.py
├── app2
├── ....
├── mysite
│  	 ├── __init__.py
│  	 ├── settings.py
│  	 ├── urls.py
│  	 ├── asgi.py
│  	 └── wsgi.py
```

## 3. 配置

+ 配置项分公有配置和自定义配置
+ 配置项格式例：`BASE_DIR=xxxx`

##### 1. settings.py

> 项目的配置文件，包含项目启动时需要的配置

```python
from django.conf import settings
```

###### BASE_DIR

+ 用于绑定当前项目的绝对路径，所有文件夹都可以依赖此路径

```python
BASE_DIR = Path(__file__).resolve().parent.parent
print(BASE_DIR)		# F:\Django\guodilin
```

###### SECRET_KEY



###### DEBUG

+ 用于配置Django项目的启动模式，取值True，False
+ True表示开发环境中使用开发调试模式，用于开发中
+ False表示当前项目运行在生产环境中

```python
DEBUG = True	# 默认开发模式
```

###### ALLOWED_HOSTS

+ 设置允许访问到本项目的host头值
+ `[]`，表示只有请求头中host为`127.0.0.1`，`localhost`能访问本项目，`DEBUG = True` 时有效
+ `['*']`表示如何请求头的host都能访问到当前项目
+ `['192.168.1.1','127.0.0.1']`表示只有当前两个host头值能访问当前项目

```python
ALLOWED_HOSTS = []	# 默认
```

###### INSTALLED_APPS

+ 指定当前项目中安装的应用列表

```python
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'blog',	# 应用名
]
```



###### MIDDLEWARE

+ 用于注册中间件

###### ROOT_URLCONF

+ 用于配置主`url`配置`'guodilin.urls'`，主路由

```python
ROOT_URLCONF = 'guodilin.urls'
```

###### TEMPLATES

+ 用于指定模板的配置信息

###### WSGI_APPLICATION

###### DATABASES

+ 用于指定数据库的配置信息

###### AUTH_PASSWORD_VALIDATORS

###### LANGUAGE_CODE

+ 用于指定语言配置

```python
LANGUAGE_CODE = 'en-us' 	# 英文，默认
LANGUAGE_CODE = 'zh-Hans' 	# 中文
```

###### TIME_ZONE

+ 用于指定当前服务器时区

```python
TIME_ZONE = 'UTC' # 默认，世界标准时间
TIME_ZONE = 'Asia/Shanghai' # 中国时区
```

###### USE_I18N



###### USE_TZ

```python
USE_TZ = False
TIME_ZONE = 'Asia/Shanghai'
# django中的时区变为东八区的时间如上
```




###### STATICFILES_DIRS

+ 静态文件目录

```python
# F:\Django\guodilin\static
# BASE_DIR = F:\Django\guodilin
STATICFILES_DIRS = [BASE_DIR / "static"]	# 应用主目录	
```

###### STATIC_URL

+ 静态文件路径，及远程路径

```python
STATIC_URL = 'static/'	# 默认，文件名
STATIC_URL = 'https://static.guodilin.com/'	# 远程静态，必须带 / 
```



###### DEFAULT_AUTO_FIELD


```python
# 引入所有配置项
from django.conf import settings
```

##### 2. urls.py

> 项目主路由配置，http请求进入时，优先调用该文件

1. path()

```python
# 导入
from django.urls import path
# 语法
paht(route,views,name=None)
# 示例
path('blog/', views.blog_view),
```

> 参数
  1. route：字符串类型，匹配的请求路径
  2. views：指定路径所对应的视图处理函数的名称
  3. name：为地址起别名，在模板中地址反向解析时使用

2. paht转换器
   
| 转换类型 |      作用      |      样列   |     匹配      |
| :------:| :-------------: |:----------:| :----: |
| str | 匹配除了'/'之外的非空字符串|"v1/users/<str:username>"|/v1/users/guodilin |
| int  |  匹配0或任何正整数，返回一个int | "page/<int:page>" | /page/100  |
| slug | 匹配任意由ASCII字母或者数字以及连字符和下划线组成的短标签|"detail/<slug:sl>" | /detail/this-isdjango   |
| path |  匹配非空字段，包含路径分隔符'/' |  "v1/users/<path:ph>" | /v1/goods/a/b/c     |

3. 示例1

```python
from django.contrib import admin
from django.urls import path
from . import views
# path的路由，第一位不需要带 / ,直接写参数
urlpatterns = [
    # /
    path('', views.index, name='index'),	# 首页
    # /admin/
    path('admin/', admin.site.urls),		# 默认
    # /v1/users/guodilin
    path('v1/users/<str:username>', views.user, name='users'),	# 个人页面
    # /page/100
    path('page/int:pg', views.page,name = page)	# page
    # /detail/this-isdjango
    path('datail/slug:sl', views.datail,name = datail)	# datail
    # /v1/goods/a/b/c
    page('v1/goods/path:ph',views.goods, name = goods)	# 
]
```

4. 示例2

```python
# urls.py
from django.urls import path
from . import views
urlpatterns = [
	path('page/int:pg', views.page,name = page)	# page
]

# views.py
from django.http import HttpResponse

def page(request, pg):
    html = "这是编号%s" % pg
    return HttpResponse(html)
```

5. 示例3

```python
# urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('<int:n>/<str:op>/<int:m>', views.cal, name='cal'),
]

# views.py
from django.http import HttpResponse


def cal(request, n, op, m):
    if op not in ['add', 'sub', 'mul']:
        return HttpResponse('Your op is wrong')
    if op == 'add':
        result = n + m
    elif op == 'sub':
        result = n - m
    elif op == 'mul':
        result = n * m
    return HttpResponse(f"结果为{result}")
```



##### 3. wsgi.py

> web服务网关的配置文件，正式启动时需要用到

##### 4. asgi.py
##### 5. views.py

> 视图文件

1. 引入

```python
from django.http import HttpResponse
```

2. 路由页面(urls.py)

```python
from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name = 'index'),  # 修改默认首页页面
]
```


3. 视图页面(views.py)
   
```python
# HttpResponse() 字符串
from django.http import HttpResponse
# def index(): 函数对应路由地址，参数必须带request
def index(request):
    html = "hello world"
    return HttpResponse(html)
```
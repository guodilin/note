# 模型

##### 1.Django应用及分布式路由

1. 创建应用

```shell
py manage.py startapp music # 创建多应用
```

2. 配置应用
3. 在`settings.py`的`INSTALLED_APPS`列表中配置安装此应用

```python
INSTALLED_APPS= [
    'user', # 用户信息模块
    'music', # 音乐模块
]
```

4. 分布式路由
   1. 主路由中调用`include`函数
   2. 语法：`include('app名字.url模块名')`
   3. 作用：用于将当前路由转到各个应用的路由配置文件的`urlpatterns`进行分布式处理

* 主路由下的urls.py

```python
from django.urls import path, re_path, include   # 引入include函数
urlpatterns = [
    path('', views.index_view,name='page_index'),  # 首页
    path('admin/', admin.site.urls),  # 后台
    path('music/', include('music.urls'))  #引入music子路由
]
```

* music应用下urls.py

```python
from django.urls import path, re_path
from . import views

urlpatterns = [
    path('', views.index_view)  #
]
```

4. 应用下配置
   1. 应用下手动创建`templates`文件夹
   2. `settings.py`中开启应用模板功能
      + `TEMPLATE`配置项中的`APP_DIRS`值为`True`
   3. 注意，应用下`templates`和外层`templates`都存在时
      + 优先查找外层`templates`目录下的模板
      + 按`INSTALLED_APPS`配置下的应用顺序逐层查找



##### 2.模型层

## 模型类

模型类创建

```python
# 模型类创建格式
from django.db import models
class 模型类名(models.Model):	# 表名=app名_类型类名
    字段名 = models.字段类型(字段选项)
# 类 = 数据表
# 对象 = 数据行
# 属性 = 字段
```

```shell
# 生成迁移文件
python manage.py makemigrations
# 执行迁移文件
python manage.py migrate
```

示例：

```python
from django.db import models


class Users(models.Model):
    UserName = models.CharField('用户名', max_length=100, default='')
    Password = models.CharField('用户密码', max_length=100, default='')
    Mobile = models.CharField('手机号', max_length=11, default='')
```

## 字段类型

```python
models.CharField()	# varchar
models.DecimalField() # 小数
models.TextField() # 大量文本
models.DateField() # 日期
```

##### `models.BooleanField()`

  + 数据库类型：`tinyint()`
  + 编程语言中：使用True或False来表示值
  + 在数据库中：使用1或0来表示具体的值

##### `models.CharField()`

  + 数据库类型：`varchar`

  + 注意：必须指定max_length参数值

##### `models.DateField()`

  + 数据库类型：data
  + 作用：表示日期
  + 参数
    + auto_now：每次保存对象时，自动设置该字段为当前时间（取值：True/False）
    + auto_now_add：当对象第一次创建时自动设置当前时间（取值：True/False）
    + default：设置当前时（取值：字符串格式时间如：’2019-6-1‘）
  + 注意：以上三个参数只能三选一

##### `models.TimeField()`

+ 作用：表示时间
+ 参数
  + auto_now：每次保存对象时，自动设置该字段为当前时间（取值：True/False）
  + auto_now_add：当对象第一次创建时自动设置当前时间（取值：True/False）

##### `models.DateTimeField`

+ 数据库类型：`datatime(6)`
+ 作用：表示日期和时间
+ 参数
  + auto_now：每次保存对象时，自动设置该字段为当前日期和时间（取值：True/False）
  + auto_now_add：当对象第一次创建时自动设置当前日期和时间（取值：True/False）
  + default：设置当前时（取值：字符串格式时间如：’2019-6-12 14:15:02‘）
+ 注意：以上三个参数只能三选一

##### `models.FlatField()`

+ 数据库类型：double
+ 编程语言中和数据库中都使用小数表示值

##### `models.DecimalField()`

  + 数据库类型：decimal(x,y)
  + 编程语言中：使用小数表示该列的值
  + 在数据库中：使用小数
  + 参数
    + max_digits：位数总数，包含小数点后的位数，该值必须大于等于decimal_places
    + decimal_places：小数点后的数字数量

  ```python
  # 例如，要存储最高为 999.99 的数字，精度为小数点后 2 位，你可以使用
  models.DecimalField(..., max_digits=5, decimal_places=2)
  # 例如，并以 10 位小数的精度来存储最多约 10 亿的数字
  models.DecimalField(..., max_digits=19, decimal_places=10)
  ```

##### `models.EmailField()`

+ 数据库类型：`varchar`
+ 编程语言和数据库中使用字符串
+ 存储邮箱，来检查该值是否为有效的电子邮件地址

##### `models.IntegerField()`

+ 数据库类型：`int`
+ 编程语言和数据库中使用整数
+ 说明
  + 一个整数。从 -2147483648 到 2147483647 的值在 Django 支持的所有数据库中都是安全的。
  + 它使用 `MinValueValidator `和 `MaxValueValidator `根据默认数据库支持的值来验证输入。
  + 当 localize 为 False 时是 `NumberInput `否则，该字段的默认表单部件是 `TextInput`。

##### `models.ImageField()`

+ 数据库类型：varchar(100)
+ 作用：在数据库中为了保存图片的路径
+ 编程语言和数据库中使用字符串
+ 参数
  + max_length：默认100

##### `models.TextField()`

+ 数据库类型：`longtext`
+ 作用：表示不定长的字符数据

##### `models.URLField()`

+ 作用：存储url
+ 参数
  + max_length：默认200

##### `models.UUIDField()`

作用：唯一标识符

```python
import uuid
from django.db import models

class MyUUIDModel(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    # other fields
```

## 字段选项

##### primary_key

如果设置为true，表示该列为主键，如果指定一个字段为主键，则此数据库表不会创建id字段

##### blank

设置为true时，字段可以为空，设置为false时，字段是必须填写的

##### null

如果设置true，表示该列值允许为空

默认为false，如果此选项为false建议加入default选项来设置默认值

##### default

设置所在列的默认值，如果字段选项null=false建议添加此选项

##### db_index

如果设置为true，表示为该列增加索引

##### unique

如果设置为true表示该字段在数据库中的值必须是唯一，不能重复出现的

##### db_column

指定列的名称，如果不指定的话则采用属性名作为列名

##### verbose_name

设置此字段在admin界面上的显示名称

##### 示例

创建一个属性，表示用户名称，长度30个字符，必须唯一的，不能为空，创建索引

```python
name = models.CharField(max_length=30, unique=True, null=False, db_index=True)
```

## 模型类-Meta类

```python
from django.db import models

class Book(models.Model):
    title = models.CharField(max_length=50, default='')
    price = models.DecimalField(max_length=7,default=0.0, decimal_places=2)

    class Meta:
        # 可改变当前模型类对应的表名
        db_table = 'users'

```



## 3.ORM

## 创建数据

```python
# 方案1
Users.objects.create(属性1=值1, 属性2=值2)
# 方案2
obj = Users(属性1=值1, 属性2=值2)
obj属性=值
obj.save()
```



```python
# 可以代替编写view一样
# 启动方式 
python manage.py shell
```

```python
# 插入数据
Users.objects.create(UserName='guodilin',Password='123456',)
# 查询所有数据，等于select * from users
Users.objects.all()
# 按需查询，等于select ID, UserName * from users
# 结果是字典
Users.objects.values('ID','UserName')
# 按需查询
# 结果是元组
Users.objects.values_list('ID','UserName')
# 排序，增
Users.objects.values('ID', 'UserName').order_by('-ID')
# 查询sql语句
print(Users.objects.values('ID', 'UserName').order_by('-ID').query) 
# 按多条件查询
# WHERE (Mobile = 18079797959 AND UserName = guodilin )
Users.objects.filter(UserName='guodilin',Mobile = 18079797959)
# 查询符合条件之外的全部数据
Users.objects.exclude(UserName='guodilin',Mobile = 18079797959)
# 只有一条数据才返回，多条和无数据则返回错误
Users.objects.get(UserName='guodilin')
# 正常
Users.objects.get(ID='c273600f62dc462fade09226551144c3')
# 查询谓词
Users.objects.filter(ID__exact='c273600f62dc462fade09226551144c3') 
__exact	# 等值查询
__contains	# 包含指定值，模糊查询	%w%
__startswith	# 以什么开始，模糊查询，w%
__endswith	# 以什么结束，模糊查询，%w
__gt	#大于
__gte	# 大于等于
__lt	# 小于
__lte	# 小于等于
__in	#	查找数据是否在指定范围内
user.objects.filter(country__in=['中国','美国'])
# select * from user where country in ('中国','美国');
__range	# 查询数据是否在指定区间范围内
user.objects.filter(age__range=(20,30))
# selecct * from user where age BETWEEN 20 and 30;
```

```python
all() 			# 查询全部记录
get()			# 查询符合条件的单一记录
filter()		# 查询符合条件的多条记录
exclude()		# 查询符合条件之外的全部记录
values()		# 按需查询，结果是字典类型
values_list()	# 按需查询，结果是元组
order_by()		# 排序，默认是按照升序排序 如果需要降序排序，在列前增加'-'表示

```


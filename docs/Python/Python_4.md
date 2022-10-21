# 五、基础操作

## 1. 文件操作

##### ①. 打开文件

> 可以打开一个已经存在的文件或者创建一个新文件

```python
# 语法
open(fileName, mode,encoding)
```

+ fileName：是要打开的目标文件名的字符串，可以包含文件所在的具体路径
+ mode：设置打开文件的模式（访问模式）；只读，写入，追加等。
+ encoding：编码格式（推荐使用UTF-8）
+ mode三种基础访问模式参数
  + `r`  ：以只读方式打开
  + `w` ：打开一个文件只用于写入
  + `a`  ：打开一个文件用于最加，如果文件存在，新的内容将会被写入到已有内容之后，不存在将创建新文件进行写入

```python
f = open("python.txt", mode="r", encoding="UTF-8")
```

```python
f = open("D:/python.txt", mode="r", encoding="UTF-8")
# 读取, 不传入参数读取所有数据，然后封装到列表中，可以按大小传入数值
print(f.read())

# 读取文件，读取一行
f.readline()
# 读取全部行，得到列表
f.readlines()
# for循环出每一行数据
for line in f:
    print(line)

# 关闭文件
f.close()

# 通过with open语法打开文件，可以自动关闭
with open("d:/python.txt", "r") as f:
    for line in f:
        print(line)
```

##### ②. 写入文件

1. 写入文件使用open函数里传入参数`mode="w"`进行写入
2. 写入的方法有：
    + `wirte()` 写入内容
    + `flush()` 刷新内容到硬盘中
3. 注意事项：
    + w模式，文件不存在，会创建新文件
    + w模式，不存在，会清空原有内容
    + .`close()`方法，带有flush()方法的功能

```python
f = open("d:/python.txt", mode="w", encoding="UTF-8")
# 写入文件
f.write("hello world")  # 内容写入到内存中

# 刷新
f.flush()   # 将内存中的内容写入到硬盘中

# 关闭文件，内置了flush方法
f.close()
```

```python
with open("d:/test.txt", mode="w", encoding="utf-8") as f:	# 把open转换给f
    f.write("hello world")
```

##### ③. 追加文件

1. 追加写入文件使用`open`函数里传入参数`mode="a"`进行追加写入
2. 追加写入的方法有和`w`模式一致
   + `wirte()`  写入内容
   + `flush()`  刷新内容到硬盘中
3. 注意事项
4. a模式，文件不存在，会创建新文件
5. a模式，文件存在，会在原有内容后面继续写入
6. 可以使用\n来写出换行符

```python
f = open("d:/python.txt", mode="a", encoding="UTF-8")
# 追加内容，在原有后面追加内容
f.write("hello world")  # 内容写入到内存中

# 刷新
f.flush()   # 将内存中的内容写入到硬盘中

# 关闭文件，内置了flush方法
f.close()
```

```python
with open("d:/test.txt", mode="a", encoding="utf-8") as f:	# 把open转换给f
    f.write("hello world")
```

##### ④. 实例

> 去除行中包含测试的内容，并新增备份

```python
fr = open("d:/test.txt", "r", encoding="utf-8")
fw = open("d:/test.txt.bak", "w", encoding="utf-8")
# 循环读取所有内容
for line in fr:
    # 去头去尾空格及换行符
    line.strip()
    # 条件满足的跳出内容写入
    if line.split(",")[4] == "测试":
        continue
    # 将内容写入备份
    fw.write(line)
    fw.write("\n")

# 关闭文件
fr.close()
fw.close()
```

## 2. 异常捕获

```python
# 异常捕获
try:
    # 可能出现错误的代码
    f = open("d:/p.txt", "r", encoding="UTF-8")
# 捕获指定异常
except AttributeError as e:  # 只捕获AttributeError异常
    # 如果出现异常执行的代码
    print(e)  # 打印异常错误
except(NameError, ZeroDivisionError) as e:
    print(e)
except Exception as e:  # 捕获所有异常
    print(e)
    f = open("d:/p.text", "w", encoding="UTF-8")
else:
    print("我是else，是没有出现异常的时候执行的代码")
finally:    # 不管有没有异常都执行
    print("我是finally，不管有没有异常的时候执行的代码")
    f.close()
```

##### ①. 异常的传递

> 异常是可以传递的

```python
def func1():
    print("func1开始执行")
    n = 1 / 0
    print("结束")
    return n


def func2():
    print("func2开始执行")
    func1()
    print("func2结束")


def main():
    try:
        func2()
    except Exception as e:
        print(f"出现异常{e}")


main()
```

## 3. python模块

```python
# 语法
[from 模块名] import [模块|类|变量|函数|*] [as 别名]
# 常用组合方式
import 模块名
from 模块名 import 类、变量、方法等
from 模块名 import *
import 模块名 as 别名
from 模块名 import 功能名 as 别名
```

```python
# 导入time模块
import time

print(time.time())
```

```python
# 单独调取 time 类
from time import time

print(time())
sleep(5)    # 无效，未导入sleep类
```

```python
# 改别名
from time import time as t

print(t())
```

```python
# 导入所有功能
from time import *
print(time())
sleep(5)
```

##### ①. 制作自定义模块

1. 新建一个python文件，命名为`my_module.py`

2. ```python
   import my_module	# 导入
   ```

3. `__main__`

   + 只有当程序直接执行的时候才会进入`if`内部，如果是被导入的，则`if`无法进入

   + ```python
     # 文件名（my_module.py）
     def test(a, b):
         print(a + b)
     
     # 测试函数体，导入模块的时候不会执行
     if __name__ == '__main__':
         test(1, 2)
         
     # 输出：3
     ```

   + ```python
     # 写入
     import my_module
     # 执行文件，不会返回 3
     ```

4. `__all__`

   + 可以控制`import *`的时候哪些功能可以导入
   + 也可以控制python包，在`__init__.py`里控制`import *`可导入的内容

   + ```python
     # 文件名（my_module.py）
     __all__ = ["test1"]
     
     
     def test1():
         return 1 + 1
     
     
     def test2():
         return 1 - 1
     ```

   + ```python
     from my_module import *
     
     test1()	# 2
     test2() # 不能使用,会报错
     ```

##### ②. python包

> 文件夹中包含了`__init__.py`就是python包

1. 导入包的语法

   + ```python
     import 包名.模块
     包名.模块.功能()
     from 包名 import 模块
     模块.功能()
     from 包名.模块 import 功能
     功能()
     ```

##### ③. 第三方包

1. 安装

```shell
# 默认
pip install 包名称
# 使用临时下载源
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple 包名称
# 快速配置阿里pip镜像
pip config set global.index-url https://mirrors.aliyun.com/pypi/simple/
pip config set install.trusted-host mirrors.aliyun.com
```

2. 导入包

```python
import numpy	
```

> pip更新

```python
# python 安装目录中运行
python.exe -m pip install --upgrade pip
```



## 4. `json`的数据转换

##### ①. 字典转换json

```python
import json

# 字典转换json
data = {"name": "周", "age": 28}

# 通过json.dumps(data)方法把字典转换为json数据
data = json.dumps(data, ensure_ascii=False)  # <class 'str'>
print(data)
print(type(data))

# 通过json.loads(data)方法把json数据转换为字典
data = json.loads(data)
print(data)
print(type(data))  # <class 'list'>
```

##### ②. 列表转换`json`

```python
import json

# 列表里嵌套字典类型的json数据转换
data = [{"name": "王", "age": 16}, {"name": "黄", "age": 19}]

# 通过json.dumps(data)方法把python数据转换为json数据
data = json.dumps(data, ensure_ascii=False)  # <class 'str'>
print(data)
print(type(data))
# 通过json.loads(data)方法把json数据转换为python数据(列表)
data = json.loads(data)
print(data)
print(type(data))  # <class 'list'>
```


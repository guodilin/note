# 三、基础语句

## 1. 条件语句

##### ①. if

> `if` 为`True`返回，否则，不返回

```python
age = 28

if age >= 18:
    print("成年人")  # 条件成立返回的语句
# 成年人
```

```python
a = True
if a:
   print("a")  # True 返回 ， False ,无返回
```

```python
def add(bool):
    if bool:
        print("a")  # True ,返回 ， False ,无返回


add(True)  # a
add(False)
```

##### ②. if else

```python
age = 16

if age >= 18:
    print("成年人")  # 条件成立返回的语句
else:
    print("未成年")  # 条件不成立返回的语句
# 未成年
```

##### ③. if elif else

> 完成多条件判断

```python
age = 18

if 0 <= age and age <= 6:  # 判断值是否在0~6之间
    print("童年")  # 条件成立返回的语句
elif 6 > age or age <= 17:  # 判断值是否在7~17之间
    print("少年")  # 条件不成立返回的语句
else:
    print("青年")  # 条件不成立返回的语句
```

+ 猜数字示例

```python
num = 5

if int(input("请猜一个数字：")) == num:
    print("恭喜您，第一次就猜对了！")
elif int(input("猜错了，请在猜一次：")) == num:
    print("恭喜您，第二次就猜对了！")
elif int(input("猜错了，请在猜一次：")) == num:
    print("恭喜您，最后一次猜对了！")
else:
    print("抱歉，猜错了哦")
```

##### ④. 判断语句嵌套

```python
if int(input("请输入您的年龄：")) > 17:  # 满足进入第二个if判断
    if int(input("您的VIP级别：")) > 8:
        print("您本月可以免费上网一天")
    else:
        print("抱歉，你本月没有免费上网时长")
else:
    print("抱歉，未成年禁止入内哦")
```

## 2.  循环语句

##### ①. while

> 循环注意事项：

+ 条件需提供布尔类型结果，True继续执行，False停止执行
+ 注意循环终止条件，否则进入无限循环

```python
i = 1

while i <= 100:  # i到101的时候,为False跳出循环，不在执行
    print(f"循环次数{i}")
    i += 1
```

```python
# 1-100累加的和
i = 1
s = 0

while i <= 100:
    s += i  # s = 0+1   s = 1+2 s = 3+3 s=6+4
    i += 1
print(s)
```

> while嵌套循环

```python
# 每天对她说我喜欢你10次，每次并送99朵玫瑰花
i = 1
while i <= 100:
    print(f"今天是第{i}天")
    a = 1
    while a <= 10:
        print("我喜欢你")
        a += 1
    print("送出99朵玫瑰花")
    i += 1
print(f"一共持续{i-1}天")
```

> 示例一

```python
import random

n = random.randint(1, 100)  # 生成随机数

print(n)
flag = True  # 默认循环
count = 0  # 默认次数
while flag:  # 先设置无限循环，成功后改为False跳过循环
    a = int(input("请输入值"))  # 进入循环输入一次
    count += 1  # 循环一次加一次
    if a < n:
        print("太小了")
    elif a > n:
        print("太大了")
    else:
        print("恭喜你，猜中了")
        flag = False
print(f"您一共猜了{count}次")
```

> 示例二 乘法表

```python
i = 1

while i <= 9:
    j = 1
    while j <= i:
        print(f"{j} * {i} = {j * i}\t", end="")
        j += 1
    i += 1
    print()
```



##### ②. for

> while循环和for循环区别

+ while循环的循环条件是`自定义`的，自行控制循环条件
+ for循环是一种`轮询`机制，是对一批内容进行逐个处理

1. 语法

```python
for 临时变量 in 待处理数据集
    循环满足条件时执行的代码
```

2. 遍历字符串示例

```python
name = "guodilin"
for item in name:
    print(item) # 输出如下所示
# g
# u
# o
# d
# i
# l
# i
# n
```

3. for嵌套

```python
# 乘法表
for i in range(1, 10):
    # 第一次 i = 1 下面循环完，后 i = 2，在次进入下方循环
    for j in range(1, i+1):
        # 第一次进入i = 1 j = 1 ,j 循环9次, 1*1,1*2~1*9
        print(f"{j} * {i} = {i * j}\t", end="")
    print()
```

##### ③. range()

> 功能：获取一个数字序列

+ 语法1 --- `range(num)`
+ 语法2 --- `range(num1, num2)`
+ 语法3 --- `range(num1, num2, step)`

```python
# 语法1 range(num)
for x in range(10):
    print(x)  # 1-10

# 语法2 range(num1, num2)
for x in range(5, 10):
    print(x)  # 5 6 7 8 9

# 语法3 range(num1, num2, step)
for x in range(5, 10, 2):
    # 从5开始，到10结束（不包含10本身）的一个数字序列，数字之间的间隔是2
    print(x)  # 5 7 9
```

> 注意事项

+ 语法1从0开始，到`num`结束（不含`num`本身）
+ 语法2从`num1`开始，到`num2`结束（不含`num2`本身）
+ 语法3从`num1`开始，到`num2`结束（不含`num2`本身），步长以`step`值为准
+ `range()`的用途很多，多数用在`for`循环场景

> 示例

```python
# 循环10次
for x in range(10):
    print("送玫瑰花")  # 循环10次

# 判断有几个偶数，取余。
num = 0
for i in range(1, 100):
    if i % 2 == 0:
        num += 1
print(num)  # 49
```

#####  ④. continue

> 作用：中断所在循环的当次执行，直接进入下一次

+ 用于中断 本次循环，直接进入下一次循环
+ for循环和while循环，效果一致

```python
for i in range(1, 6):
    print("语句1")    # 执行5次
    continue
    # 下面语句不进入循环
    print("语句2")
```

##### ⑤. break

> 作用：直接结束所在的循环

+ 用于直接结束循环体
+ for循环和while循环，效果一致

```python
for i in range(1, 6):
    print("语句1")    # 只执行1次
    break
    # 下面语句不进入循环
    print("语句2")
```

```python
for i in range(1, 6):
    print("语句1")  # 只执行1次
    for j in range(1, 6):  # 执行5次
        print("语句2")  # 执行1次就结束循环
        break
        # 下面语句不进入循环
        print("语句3")
    print("语句4")
# 结果是：语句1,语句2,语句4(一起执行5次)
```

##### ⑥. 练习案例

> 某公司，账户余额有1w元，给20名员工发工资。

+ 员工编号从1到20，从编号1开始，依次领工资，每人可以领取1000元
+ 领取工资时，财务判断员工的绩效分（1-10）（随机生成），如果低于5，不发工资，换下一位
+ 如果工资发完，结束发工资

```python
import random

money = int(10000)

for i in range(1, 21):
    score = random.randint(1, 10)  # 生成随机数
    # print(n)  # 得到随机1-10的数字
    if score < 5:
        print(f"员工{i},绩效分{score},不发工资")
        continue    # 低于5不发工资，跳过循环
    elif money <= 0:
        break
    else:
        money -= 1000
        print(f"员工{i}发放1000，账户余额还剩{money}元")
        # print(money)  # 剩余额度
print("工资发放完毕，下个月领取吧")
```

##  3. 函数

> 你可以定义一个由自己想要功能的函数，以下是简单的规则：

+ 函数代码块以 def 关键词开头，后接函数标识符名称和圆括号()。
+ 任何传入参数和自变量必须放在圆括号中间。圆括号之间可以用于定义参数。
+ 函数的第一行语句可以选择性地使用文档字符串—用于存放函数说明。
+ 函数内容以冒号起始，并且缩进。
+ return [表达式] 结束函数，选择性地返回一个值给调用方。不带表达式的return相当于返回 None。

##### ①. 语法

```python
def 函数名( 传入参数 ):
   # 函数体
   return 返回值
```

##### ②. 函数调用

```python
# 有参数带参数，如果无可不带参数
函数名(参数) 
函数名()
```

##### ③. 函数的传入参数

> 传入的参数不限制，传入的参数用逗号分隔

```python
def add(x, y):
    # 每次计算可以不固定值
    result = x + y
    # x y 在调用函数的时候指定
    print(f"{x} + {y} = {result}")


# 指定x y 为2和5
add(2, 5)
```

+ 函数的定义中，提供x和y，称之为`形式参数(行参)`，表示函数声明将要使用2个参数，参数之间使用逗号进行分隔
+ 函数调用中使用2和5，称之为`实际参数(实参)`表示函数执行时真正使用的参数值，传入的时候，按照顺序传入数据，使用逗号分隔

##### ④. 关键字传参

```python
def user_info(name, age, gender):
    print(f"您的名字是：{name}，年龄是：{age}，性别是{gender}")

user_info(name="小郭", age=28, gender="男")
```

##### ⑤. 参数默认值

```python
def printinfo(name, age=35):
    "打印任何传入的字符串"
    print("Name: ", name)
    print("Age ", age)
    return


# 调用printinfo函数
printinfo(age=50, name="miki")  # name miki age 50
printinfo(name="miki")  # name miki age 35
printinfo(123456)   # name:123456 age 35
```

##### ⑥. 不定长 - 位置

```python
# 不定长 - 位置 * 号  会得到一个元组
def user_info(*args):  # 一般命名为 args
    print(type(args))  # <class 'tuple'>
    print(args)

user_info(1, "hello", "python")

# (1, 'hello', 'python')
```

##### ⑦. 不定长 - 关键字

```python
# 不定长 - 关键字 ** 号    会得到一个字典
def user_info(**kwargs):  # 一般命名为 kwargs
    print(type(kwargs))  # <class 'dict'>
    print(kwargs)

user_info(name="小郭", age=28, gender="男")

# {'name': '小郭', 'age': 28, 'gender': '男'}
```



##### ⑧. return

```python
def add(x, y):
    result = x + y
    return result


r = add(1, 2)

print(r)	# 3
```

> None类型

+ 不带参数值值的`return`返回`None`，类型是`<class 'NoneType'>`

```python
# 无return语句的函数返回值
def say_hi():
    print("你好")


result = say_hi()
print(f"无返回值函数,返回的内容是：{result}")
print(f"无返回值函数,返回的内容类型是：{type(result)}")


# 主动返回None的函数
def say_hi2():
    print("你好")
    return None


result = say_hi2()
print(f"无返回值函数,返回的内容是：{result}")
print(f"无返回值函数,返回的内容类型是：{type(result)}")
```

+ None作用：

  + 用于表示空、无意义，用在函数无返回值上
  + 用于声明无内容的 变量上，定义暂时不需要变量有具体值，可以用None代替，name = None

+ if判断使用：

  + 在if判断中，None等同于False
  + 一般用于在函数中主动返回None，配合if判断做相关处理

  ```python
  def check_age(age):
      if age >= 18:
          return "成年人"
      return None
  
  
  print(check_age(16))  # None
  
  # check_age(18)  返回成年人
  if not check_age(16):  # not等于None返回未成年(等于空，false)
      print("未成年")
  ```

  

>  注意事项
+ 返回值如果不需要，可以省略

#####  ⑨. 变量作用域

+ 全局变量：函数外是全局变量，函数内也可以使用
+ 局部变量：函数内是局部变量，只能在函数内使用

```python
total = 0  # 这是一个全局变量


# 可写函数说明
def sum1(arg1, arg2):
    # 返回2个参数的和."
    total = arg1 + arg2  # total在这里是局部变量.
    print("函数内是局部变量 : ", total)
    return total


# 调用sum1函数
sum1(10, 20)  # 30
print("函数外是全局变量 : ", total)  # 0
```

> global 

+ global关键字可以设置函数内定义的变量为全局变量

```python
a = 200


def test_a():
    global a  # 设置内部定义的变量为全局变量
    a = 500
    print(f"test_a：{a}")


test_a()    # 500

# 外部的值
print(a)  # 500
```

##### ⑩. 匿名函数

1. def 方式定义

```python
# def方式定义匿名函数
def compute(x, y):
    return x + y

# 传入函数，用函数名作为参数
def test_func(compute):
    result = compute(1, 2)  # 作为参数方式传入
    print(result)

test_func(compute)
```

2. lambda方式定义

> lambda 传入参数:函数体(一行代码)

+ lambda是关键字，表示定义匿名函数
+ 传入参数表示匿名函数的形式参数，如：x，y表示接受2个形式参数
+ 函数体，就是函数的执行逻辑，要注意：只能写一行，无法写多行代码

```python
def test_fun(compute):
    re = compute(1, 2)
    print(re)
# 匿名函数定义方式,只能临时使用一次
test_fun(lambda x, y: x + y)
```



##### ⑩①. 示例

```python
# 计算字符串长度
def my_len(data):
    a = 0
    for _ in data:
        a += 1
    print(a)

str1 = "python"

my_len(str1)	# 6
```

```python
# 判断体温
def check(temperature):
    print("联信科技欢迎您")
    if temperature <= 37:
        print(f"你的体温是：{temperature},体温正常请进！")
    else:
        print(f"你的体温是：{temperature},您发热啦！")


check(40)
```

3. 银行存款、取款、查询示例

```python
# 查询余额
def query(show_header):
    if show_header:  # True 显示查询余额分割线，False 不显示
        print("-----查询余额------")
    print(f"{name},您的余额剩余：{money}")


# 取款
def get_money(num):
    global money
    money -= num
    print(f"取款{num}成功！")
    query(False)


# 存款
def saving(num):
    global money
    money += num
    print("-----存款------")
    print(f"存款{num}成功！")
    query(False)


# 主菜单
def menu():
    print("---主菜单---")
    print(f"{name},你好，欢迎来到银行。请选择操作")
    print("查询余额\t[输入1]")
    print("存款\t\t[输入2]")
    print("取款\t\t[输入3]")
    print("退出\t\t[输入4]")
    return input("请输入您的选择：")


money = 5000000
name = input("请输入姓名：")

while True:
    inp = menu()
    if inp == "1":
        query(True)
        b = input("输入任意键返回主菜单：")
        if b is not None:
            continue  # 进入下次循环
    elif inp == "2":
        a = int(input("请输入存款数"))
        saving(a)
        b = input("输入任意键返回主菜单：")
        if b is not None:
            continue
    elif inp == "3":
        a = int(input("请输入取款数"))
        get_money(a)
        b = input("输入任意键返回主菜单：")
        if b is not None:
            continue
    else:
        break  # 结束循环
```


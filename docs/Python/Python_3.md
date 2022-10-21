# 四、数据容器

## 1. list 列表

> 基本语法，以`[]`作为标识，以逗号隔开，可以存储多个数据，且可以为不同类型的数据，支持嵌套

```python
# 字面量
[元素1,元素2,...元素n]
# 定义变量
变量名称 = [元素1,元素2,...元素n]
#定义空列表
变量名称 = []
变量名称 = list()
# 嵌套
变量名称 = [1,[1,2,3],[4,5,6]]
```

> 实例

```python
# list列表
my_list = ["guodilin",1994,True]
print(type(my_list))	# <class 'list'>
# 嵌套列表
my_list = [1,[1,2,3],["guodilin",1994,True]]
```

##### ①. 读取元素

> 说明，下标索引（取数据）

+ 列表中的每一个元素，都有其位置下标索引
+ 从前向后的方向，从0开始，依次递增，或者可以从后向左，从-1开始，依次递减（-1，-2，-3....）
+ 一定不要超出范围否则会报错

```python
name_list = ['zhang', "wang", "guo"]
print(name_list[0]) # zhang
print(name_list[1]) # wang
print(name_list[2]) # guo
# 从右
print(name_list[-3]) # zhang
print(name_list[-2]) # wang
print(name_list[-1]) # guo
# 嵌套列表
my_list = ["abc",[1,2,3],["guodilin",1994,True]]
print(my_list[1][0])	# 1
print(my_list[2][0])	# guodilin

```

1. `index()`查找下标索引值

```python
my_list = ["guodilin",1994,True]
my = my_list.index("guodilin")
print(my)	# 0
# 查找元素不存在的会报错
my = my_list.index("guo")
print(my)	# 报错，is not guo
```



##### ②. 新增元素

1. `.insert()`

```python
# 语法
列表.insert(下标,元素)	# 指定下标位置，插入指定的元素
# 实例
my_list = ["guodilin",1994,True]
my_list.insert(1,"摩羯座")	# ["guodilin","摩羯座",1994,True]
```

2. `.append()`

> 单个元素增加，在列表尾部追加数据

```python
# 语法
列表.append(元素)
# 实例
my_list = ["guodilin",1994,True]
my_list.append("我爱学习")	# ["guodilin",1994,True,"我爱学习"]
```

3. `.extend()`

> 多个元素增加，依次在尾部追加数据

```python
# 语法
列表.append(其他列表元素)
# 实例
my_list = ["guodilin",1994,True]
my_list2 = ["我爱学习","python"]
my_list.extend(my_list2) 	# ["guodilin",1994,True,"我爱学习","python"]
```



##### ③. 删除元素

1. `del`

```python
# 语法
del 列表[下标]
# 实例
my_list = ["guodilin",1994,True,"我爱学习","python"]
del my_list[2]	# ["guodilin",1994,"我爱学习","python"]
```

2. `.pop`

```python
# 语法
列表.pop[下标]
# 实例
my_list = ["guodilin",1994,True,"我爱学习","python"]
element = my_list.pop(2)	# 通过pop方法删除，取出的内容赋值给element = True
print(my_list)  # ["guodilin",1994,"我爱学习","python"]
print(element)	# True
```

3. `.remove()`

```python
# 语法
列表.remove(元素)
# 实例
my_list = ["guodilin",1994,True,"我爱学习","python"]
my_list.remove(True)	# 从第一个开始匹配，如果需要删除两个，需要调用两次
print(my_list)	# ["guodilin",1994,"我爱学习","python"]
```

##### ④. 清空列表

`.clear()`

```python
# 语法
列表.clear()
# 实例
my_list = ["guodilin",1994,True,"我爱学习","python"]
my_list.clear()	
print(my_list)	# []
```



##### ⑤. 修改元素

> 语法

```python
列表[下标] = 值
```

```python
my_list = ["guodilin",1994,True]
my_list[1] = 19940113 # 修改后["guodilin",19940113,True]
```

##### ⑥. 统计元素

1. `.count()`

```python
# 语法
列表.count(元素)
# 实例
my_list = ["guodilin",1994,True]
Count = my_list.count(True)	# 计算该值出现过几次
print(Count) # 1
```

`len()`

```python
# 语法
len(列表)
# 实例
my_list = ["guodilin",1994,True]
Count = len(my_list)	# 计算总共元素数量
print(Count) # 3
```

##### 列表遍历

```python
# while
my_list = ["guodilin", 1994, True]
i = 0
while i < len(my_list):
		element = my_list[i]
  	i += 1

# for
for element in my_list:		# 直接从列表中一个一个赋值给临时变量
		print(element)
```

## 二、tuple 元组

> 元组一旦定义，就不可修改

##### ①. 元组语法

```pyton
# 定义元组字面量
(元素, 元素, ....)
# 定义元组变量
变量名称 = (元素, 元素, ....)
# 定义空元组
变量名称 = ()
变量名称 = tuple()
```

```python
t = ("guodilin", 1994, True)
print(type(t))	# <class 'tuple'>
```

> 注意

+ 元组不能修改，如果元组中有列表，元组中的列表才可修改
+ 和list基本相同（有序、任意数量元素、允许重复元素），唯一不同在于不可修改
+ 定义单独元组的时候需要加个逗号，否则不是元组，会是定义单独的元组类型

##### ②. 下标索取

```python
t = ("guodilin", 1994, True)
t[0]	# guodilin
t_tuple = ((1, 2, 3), (4, 5, 6))
t_tuple[0][2]	# 3
```

`.index()`

> 查找元组

```python
t = ("guodilin", 1994, True)
t.index("guodilin")	# 0

```

`.count()`

> 统计元组中出现多少个数据

```python
t = (1, 2, 3, 1, 4, 5)
t.count(1)	# 2
```

`len()`

> 统计总供元组里的数据总数

```python
t = (1, 2, 3, 1, 4, 5)
len(t)	# 6
```

##### ③. 遍历

```python
t = ("guodilin", 1994, True)
# while
i = 0
while i < len(t):
		element = t[i]	# 下标方式获取数据
  	print(element)	# 得到每个数据
  	i += 1
# for
for element in t:	# 直接从列表中一个一个赋值给临时变量
  print(element)	# 得到每个数据
```

## 三、str 字符串

> 字符串也是字符的容器，每一个也有下标

+ 字符串不可修改的容器
+ 只能存储字符串，支持下标索引，允许重复字符串存在，支持循环遍历

```python
my_str = "guodilin"
my_str[2]	# o
```

##### ①. index()

> 查找字符串下标

```python
my_str = "guodilin"
my_str.index("di")	# 3
```

##### ②. replace()

```python
m_str = "myguodilin"
my_str = m_str.replace("my", "我叫")	
print(my_str)	# 得到新字符串	"我叫guodilin"
```



##### ③. split()

> 字符串分割

+ 语法：字符串.split(分割字符串)
+ 功能：按照指定的分割符字符串，将字符串划分多个字符串，并存入列表对象中
+ 注意：字符串本身不变，而是得到一个列表对象 

```python
my_str = "hello python guodilin 好好学习"
my_str_list = my_str.split(" ")	# 用什么来分割
print(my_str_list)	# ["hello", "python", "guodilin", "好好学习"]
print(type(my_str_list))	# <class 'list'>
```

##### ④. strip()

> 字符串的规整操作（去前后字符串）

1. 字符串的规整操作（去前后空格）

```python
# 语法：字符串.strip()
my_str = " guodilin "
# 不传参数，去除前后空格
print(my_str.strip())	# "guodilin"
# 
```

2. 字符串的规整操作（去前后指定字符串）

```python
# 语法：字符串.strip(字符串)
my_str = "12guodilin21"
# 按照单个字符去除
print(my_str.strip("12"))	# "guodilin"
```

+ 注意：传入的是`"12"` 其实就是：`"1"`和`"2"`都会移除，是按照单个字符。

##### ⑤. count()

```python
my_str = "abcabdabdd"
my_srt.count("ab")	# 3
```

##### ⑥. len()

```python
my_str = "abcabdabdd"
len(my_str)	# 10
```

##### ⑦. 遍历

```python
my_str = "guodilin"
# while
i = 0
while i < len(my_str):
		print(my_str[i])
  	i+=1

# for
for i my_str:
  	print(i)
```

## 四、序列

> 语法：序列[起始下标:结束下标:步长]

+ 序列是指：内容连续、有序，可使用下标索引的一类数据容器
+ 列表、元组、字符串，均可以视为序列
+ 起始下标从何处开始，可以留空，留空视为从头开始
+ 结束下标表示何处结束，可以留空，留空视为截取到结尾
+ 步长表示，依次取元素的间隔
  + 步长1表示，一个个取元素
  + 步长2表示，每次跳过1个元素取
  + 步长n表示，每次跳过n-1个元素取
  + 步长为负数表示，反向取（注意，起始下标和结束下标也要反向标记）

```python
# 对list进行切片，从1开始，4结束，步长1
my_list = [0,1,2,3,4,5,6]
new_list = my_list[1:4]	# 步长默认是1，可以省略
print(new_list)	# [1,2,3]	# 不含4本身
# 对tuple进行切片，从头开始，到最后结束，步长1
my_tuple = (0,1,2,3,4,5,6)
my_tuple[:]	# 开始结束步长为1可以可以省略不写
# 对str进行切片，从头开始，到最后结束，步长为2
my_str = "01234567"
new_str= my_str[::2]
print(new_srt) # 0246
# 对str进行切片，从头开始，到最后结束，步长-1
my_str = "01234567"
new_str = my_str[::-1]	# 等同于序列反转了
print(new_str)	# 76543210
# 对列表进行切片，从3开始，到1结束，步长-1
my_list = [0,1, 2,3,4,5,6]
new_list= my_list[3:1:-1]
print(new_list) # [3, 2]
# 对元组进行切片，从头开始，到尾结束，步长-2
my_tuple = (0,1,2,3,4,5,6)
new_tuple = my_tuple[::-2]
print(new_tuple) # (6,4,2,0)
```

```python
my_str = "行看我,nohtyp学,nilidoug"
# 切取字符串，倒序
print(my_str[4:10][::-1])
# 倒序字符串，切取
print(my_str[::-1][10:16])
# split分割","在取列表1中的nohtyp学，利用.replace删除学，在倒序
print(my_str.split(",")[1].replace("学", "")[::-1])
```

## 五、set 集合

> 不支持元素重复（自带去重功能）、并且内容无序

```python
# 定义集合字面量
{元素, 元素, ..., 元素}
# 定义集合变量
变量名称 = {元素, 元素, ..., 元素}
#定义空集合
变量名称 = set()
```

##### ①. add()

> 添加元素

```python
my_set = {"hello world", "python", "我爱学习"}
# 添加元素
my_set.add("我爱编程")
print(my_set)	# {"hello world", "python", "我爱学习", "我爱编程"}
```

##### ②. remove()

> 移除元素

```python
my_set = {"hello world", "python", "我爱学习"}
my_set.remove("python")	# {"hello world", "我爱学习"}
```

##### ③. pop()

> 随机取出一个元素

```python
my_set = {"hello world", "python", "我爱学习"}
element = my_set.pop()  # 随机得到一个元素
print(element)
```

##### ④. clear()

> 清空集合

```python
my_set = {"hello world", "python", "我爱学习"}
my_set.clear()  # {}
```

##### ⑤. difference()

> 取2集合差

+ 语法：`集合1.difference(集合2)`
+ 功能：取出集合1和集合2的差集(集合1有而集合2没有的)

```python
set1 = {1, 2, 3}
set2 = {1, 5, 6}
set3 = set1.difference(set2)  # 得到新的集合
print(set3)  # {2, 3}
```

##### ⑥. difference_update()

> 消除2个集合的差集

+ 语法：`集合1.difference_update(集合2)`
+ 功能：对比集合1和集合2，在集合1内，删除和集合2相同的元素
+ 结果：集合1被修改，集合2不变

```python
set1 = {1, 2, 3}
set2 = {1, 5, 6}
set1.difference_update(set2)  # 消除差集
print(set1)  # {2, 3}
# 2个集合合并为一个
# 统计集合元素数量
```

##### ⑦. union

> 两个集合合并

+ 语法：`集合1.union(集合2)`

+ 功能：将集合1和集合2组合成新集合
+ 结果：得到新集合，集合1和集合2不变，如果有集合1和集合2有相同的元素，只保留一个元素

```python
set1 = {1, 2, 3}
set2 = {1, 5, 6}
set3 = set1.union(set2)
print(set3)  # {1, 2, 3, 5, 6}
```

##### ⑧. len()

```python
set1 = {1, 2, 3}
set2 = len(set1)
print(set2)  # 3
```

⑨. 遍历

+ 集合无序号，所以不能使用`while`循环遍历，只能使用`for`循环

```python
set1 = {1, 2, 3}
for i in set1:
    print(i)
```

##### ⑩. 实例

> 列表去重

```python
my_list = ['zhang', "wang", "guo", 'zhang', "wang", "guo"]
my_set = set()  # 定义空集合
for i in my_list:
    my_set.add(i)  # 新增集合
print(my_set)  # {'wang', 'guo', 'zhang'}

# 转换回列表
new_list = []
for i in my_set:
    new_list.insert(0, i)
print(new_list)  # ['zhang', 'guo', 'wang']
```

## 六、dict 字典

> 字典的定义，同样使用`{}`，不过存储的元素是一个个的`键值对`

+ 字典不可以重复，也没有下标序号
+ key不可以为字典

```python
# 定义字典字面量
{key:value, key:value, ..., key:value}
# 定义字典变量
my_dict = {key:value, key:value, ..., key:value}
# 定义空字典
my_dict = {}
my_dict = dict()
```

##### ①. 取字典的值

> 使用key获取value

```python
my_dict = {"王力": 99, "王五": 98}
print(my_dict["王力"])    # 99
```

##### ②. 字典嵌套

```python
my_dict = {
    "王力": {"语文": 99, "数学": 100, "英语": 120},
    "王五": {"语文": 120, "数学": 99, "英语": 120}
}
print(my_dict["王力"]["数学"])  # 100
```

##### ③. 新增元素

+ 语法：`字典[key] = value` 
+ 结果：字典被修改，新增了元素

```python
my_dict = {"语文": 99, "数学": 100, "英语": 120}

# 新增
my_dict["化学"] = 99.5

print(my_dict)  # {'语文': 99, '数学': 100, '英语': 120, '化学': 99.5}
```



##### ④. 更新元素

+ 语法：`字典[key] = value` 
+ 结果：字典被修改，元素被更新
+ 和新增一样，如果字典中key存在则更新，如果没有则新增

```python
my_dict = {"语文": 99, "数学": 100, "英语": 120}

# 更新
my_dict["语文"] = 120

print(my_dict)  # {'语文': 120, '数学': 100, '英语': 120}
```

##### ⑤. pop()

> 删除元素

+ 语法：`字典.pop(key)`
+ 结果：获取指定的key的value，同时字典被修改，指定的key的数据被删除

```python
my_dict = {"语文": 99, "数学": 100, "英语": 120}

# 删除
my_dict.pop("英语")

print(my_dict)  # {'语文': 99, '数学': 100}
```

##### ⑥. clear()

> 清空字典

+ 语法：`字典.clear()`
+ 结果：字典被修改，元素被清空

```python
my_dict = {"语文": 99, "数学": 100, "英语": 120}

# 清空字典
my_dict.clear()
print(my_dict)  # {}
```

##### ⑦. keys()

> 获取全部的key

+ 语法：字典.keys()
+ 结果：得到字典中的全部key

```python
my_dict = {"语文": 99, "数学": 100, "英语": 120}

print(my_dict.keys())  # dict_keys(['语文', '数学', '英语'])
```

##### ⑧. values()

> 获取全部的value

```python
my_dict = {"语文": 99, "数学": 100, "英语": 120}

print(my_dict.values())
```

##### ⑨. 遍历

```python
my_dict = {"语文": 99, "数学": 100, "英语": 120}

keys = my_dict.keys()  # 获取key

# 方法1
for i in keys:	# 获取到的key给临时变量
    print(i, my_dict[i])

# 方法2
for i in my_dict:	# 直接遍历
    print(i, my_dict[i])
```

##### ⑩. len()

> 统计key数量

```python
my_dict = {"语文": 99, "数学": 100, "英语": 120}

print(len(my_dict))  # 3
```

##### ⑩①. 实例

> 级别为1的人员，级别加1和工资加1000

```python
my_dict = {
    "王力鸿": {"部门": "科技部", "工资": 3000, "级别": 1},
    "周杰伦": {"部门": "市场部", "工资": 5000, "级别": 2},
    "林俊杰": {"部门": "市场部", "工资": 7000, "级别": 3},
    "张雪": {"部门": "科技部", "工资": 4000, "级别": 1},
    "王五": {"部门": "市场部", "工资": 6000, "级别": 2}
}

for i in my_dict:
    if my_dict[i]["级别"] == 1:
        my_dict[i]["级别"] = 2  # 级别+1
        my_dict[i]["工资"] += 1000  # 工资+1000
    else:
        continue  # 跳过循环
print(my_dict)
# {
# '王力鸿': {'部门': '科技部', '工资': 4000, '级别': 2},
# '周杰伦': {'部门': '市场部', '工资': 5000, '级别': 2},
# '林俊杰': {'部门': '市场部', '工资': 7000, '级别': 3},
# '张雪': {'部门': '科技部', '工资': 5000, '级别': 2},
# '王五': {'部门': '市场部', '工资': 6000, '级别': 2}
# }
```

##### ⑩②. 总结

> 数据容器可以从以下视觉进行简单的分类

+ 是否支持下标索引
  + 支持：列表、元组、字符串 - 序列类型
  + 不支持：集合、字典 - 非序列类型
+ 是否支持重复元素
  + 支持：列表、元组、字符串 - 序列类型
  + 不支持：集合、字典 - 非序列类型
+ 是否可以修改
  + 支持：列表、集合、字典
  + 不支持：元组、字符串

|          |   列表   |   元组   |  字符串  |   集合   |                         字典                         |
| :------: | :------: | :------: | :------: | :------: | :--------------------------------------------------: |
| 元素数量 | 支持多个 | 支持多个 | 支持多个 | 支持多个 |                       支持多个                       |
| 元素类型 |   任意   |   任意   |  仅字符  |   任意   | `key:value`；key：除字典外任意类型 ；value：任意类型 |
| 下标索引 |   支持   |   支持   |   支持   |  不支持  |                        不支持                        |
| 重复元素 |   支持   |   支持   |   支持   |  不支持  |                        不支持                        |
| 可修改性 |   支持   |  不支持  |  不支持  |   支持   |                         支持                         |
| 数据有序 |    是    |    是    |    是    |    否    |                          否                          |
|   语法   |    []    |    ()    |    ""    |    {}    |                    `{key:value}`                     |



```python
my_list = [1, 2, 3, 4, 5, 6]
my_tuple = (1, 2, 3, 4, 5, 6)
my_str = "abcdefgh"
my_set = {1, 2, 3, 4, 5, 6}
my_dict = {"ad": 99, "da": 199}

# 通用统计
# 长度
print(len(my_list))  # 6
print(len(my_tuple))  # 6
print(len(my_str))  # 8
print(len(my_set))  # 6
print(len(my_dict))  # 2
# 最大
print(max(my_list))  # 6
print(max(my_tuple))  # 6
print(max(my_str))  # h
print(max(my_set))  # 6
print(max(my_dict))  # da
# 最小
print(min(my_list))  # 1
print(min(my_tuple))  # 1
print(min(my_str))  # a
print(min(my_set))  # 1
print(min(my_dict))  # ad
# 通用转换功能
# list()    将给定容器转换为列表
print(f"元组转列表：{list(my_tuple)}")  # [1, 2, 3, 4, 5, 6]
print(f"字符转列表：{list(my_str)}")  # ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
print(f"集合转列表：{list(my_set)}")  # [1, 2, 3, 4, 5, 6]
print(f"字典转列表：{list(my_dict)}")  # ['ad', 'da']
# str()  将给定容器转换为字符串
print(f"列表转字符：{str(my_list)}")  # [1, 2, 3, 4, 5, 6]
print(f"元组转字符：{str(my_tuple)}")  # (1, 2, 3, 4, 5, 6)
print(f"集合转字符：{str(my_set)}")  # {1, 2, 3, 4, 5, 6}
print(f"字典转字符：{str(my_dict)}")  # {'ad': 99, 'da': 199}
# tuple()    将给定容器转换为元组
print(f"列表转元组：{tuple(my_list)}")  # (1, 2, 3, 4, 5, 6)
print(f"字符转元组：{tuple(my_str)}")  # ('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h')
print(f"集合转元组：{tuple(my_set)}")  # (1, 2, 3, 4, 5, 6)
print(f"字典转元组：{tuple(my_dict)}")  # ('ad', 'da')

# set()  将给定容器转换为集合 会去重
print(f"列表转集合：{set(my_list)}")  # {1, 2, 3, 4, 5, 6}
print(f"字符转集合：{set(my_str)}")  # {'d', 'b', 'g', 'c', 'h', 'a', 'f', 'e'}
print(f"元组转集合：{set(my_tuple)}")  # {1, 2, 3, 4, 5, 6}
print(f"字典转集合：{set(my_dict)}")  # {'da', 'ad'}

# 进行容器的排序，排序完后是列表类型 <class 'list'>
# sorted()
print(f"列表对象的排序结果：{sorted(my_list)}")  # [1, 2, 3, 4, 5, 6]
print(f"元组对象的排序结果：{sorted(my_tuple)}")  # [1, 2, 3, 4, 5, 6]
print(f"字符对象的排序结果：{sorted(my_str)}")  # ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
print(f"集合对象的排序结果：{sorted(my_set)}")  # [1, 2, 3, 4, 5, 6]
print(f"字典对象的排序结果：{sorted(my_dict)}")  # ['ad', 'da']
# 进行容器的反向排序，排序完后是列表类型 <class 'list'>
# sorted(容器, reverse=True)
print(f"列表对象的反向排序结果：{sorted(my_list, reverse=True)}")  # [6, 5, 4, 3, 2, 1]
print(f"元组对象的反向排序结果：{sorted(my_tuple, reverse=True)}")  # [6, 5, 4, 3, 2, 1]
print(f"字符对象的反向排序结果：{sorted(my_str, reverse=True)}")  # ['h', 'g', 'f', 'e', 'd', 'c', 'b', 'a']
print(f"集合对象的反向排序结果：{sorted(my_set, reverse=True)}")  # [6, 5, 4, 3, 2, 1]
print(f"字典对象的反向排序结果：{sorted(my_dict, reverse=True)}")  # ['da', 'ad']
```


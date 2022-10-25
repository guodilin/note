# 四. 数据库类型

##### 1. 整数类型

| 参数名称  | 说明 | 有符号 | 无符号 |
| :--- | :--- | :---  | :---  |
| TINYINT  | 1  | (-128,127) | (0,255) |
| SMALLINT  | 2  | (-32768,32767) | (0,65 535) |
| MEDIUMINT  | 3  | (-8 388 608,8 388 607) | (0,16 777 215) |
| INT或INTEGER  | 4  | (-2 147 483 648,2 147 483 647) | (0,4 294 967 295) |
| BIGINT | 8  | (-9 223 372 036 854 775 808,9 223 372 036 854 775 807) | (0,18 446 744 073 709 551 615) |

###### 1.数据类型有符号和无符号
* 有符号和无符号
  * 默认情况下整型就是有符号的
  * 需要在数据类型后面增加 `unsigned` 来将数据类型改为无符号
```sql
-- 实例
CREATE table person(
    id int,
    age TINYINT unsigned
)
```
* 位宽
  * 如果默认没有指定位宽，那么会自动补空格
  * 如果需要补位宽需要在类型后面增加 `zerofill` （0填充）
```sql
-- 实例
CREATE table person(
    id int,
    age TINYINT(2) zerofill #zerofill 用0补充位宽
)
```

###### 2.浮点类型

> 专门用来保存小数点的

| 类型 |参数|  字节 | 说明 |
| :-----| :---- | :----: | :---- |
| float | (m,d) | 4 | 单精度 |
| double | (m,d) | 8 | 单精度 |

> m总位数,d小数位数

- `float`和`double`的区别
  - 占用存储空间大小不一样
  - 默认保留的小数位数不同
  - 保存数据的有效精度不同
- 浮点类型特点
  - 浮点型是不准确的
  - 开发中千万不要使用浮点数来保存用户准确的信息,财务相关

```sql
CREATE TABLE person(
  id INT,
  weight FLOAT,
  height DOUBLE
);
INSERT INTO person VALUES (1,1.1234567890123456789,1.1234567890123456789)
-- weight: 1.12346
-- height: 1.1234567890123457
CREATE TABLE person1(
  id INT,
  weight FLOAT(10,6), --总10位，6位小数位
  height DOUBLE(10,6) --总10位，6位小数位
);
INSERT INTO person1 VALUES (1,1.1234567890123456789,1.1234567890123456789)
-- weight: 1.123457
-- height: 1.123457
CREATE TABLE person2(
  id INT,
  weight FLOAT(20,19), --总20位，19位小数位
  height DOUBLE(20,19) --总20位，19位小数位
);
INSERT INTO person2 VALUES (1,1.1234567890123456789,1.1234567890123456789)
-- weight: 1.1234568357467651000
-- height: 1.1234567890123457000
```

###### 3.定点类型

| 类型 | 参数 | 字节 | 说明 |
| :-----| ----: | ----: | :---- |
| DECIMAL | (m,d) | 4 | 小数值 |

+ m是表示有效数字的数的精度，范围是1-65
+ d是表示小数点的位数，范围是0-30。要求m小于或等于d

```sql
  content DECIMAL(m)
  -- 相当于
  content DECIMAL(m,0)
  -- m的默认值为10
  content DECIMAL
```

> 示例:

```sql
CREATE TABLE person(
  id INT,
  weight DOUBLE,
  height DECIMAL
);
INSERT INTO person VALUES (1,1.1234567890123456789,1.1234567890123456789);
-- weight: 1.1234567890123457
-- height: 1
CREATE TABLE person1(
  id INT,
  weight DOUBLE(10,6),
  height DECIMAL(10,6)
);
INSERT INTO person1 VALUES (1,1.1234567890123456789,1.1234567890123456789);
-- weight: 1.123457
-- height: 1.123457
CREATE TABLE person2(
  id INT,
  weight DOUBLE(20,19),
  height DECIMAL(20,19)
);
INSERT INTO person2 VALUES (1,1.1234567890123456789,1.1234567890123456789);
-- weight: 1.1234567890123457000
-- height: 1.1234567890123456789
CREATE TABLE person3(
  id INT,
  weight DOUBLE(30,22),
  height DECIMAL(30,22)
);
INSERT INTO person3 VALUES (1,1.1234567890123456789,1.1234567890123456789);
-- weight: 1.1234567890123457000000
-- height: 1.1234567890123456789000
```

##### 2. 字符类型

> 专门用来存储字符的

| 类型 | 参数 | 字节 | 说明 |
| :-----| ----: | ----: | :---- |
| char | (0-255) | 0-255 | 定长字符串 |
| varchar | (0-65535) | 0-65535 | 变长字符串 |

+ char和varchar区别
  + 能够保存的数据容量不一样
  + char不会回收多余的字符，要多少给多少
  + varchar会回收多余的字符，用多少给多少
    + 通过 char(2) 存储数据'a',存储结果是 ' a'
    + 通过 varchar(2) 存储数据'a',存储结果是 'a'
+ 由于是字符类型，所以传递值建议用单引号''
+ varchar理论上可以存储65535个字节，但是实际会随着当前的数据库字符集有关

##### 3. 文本类型

| 类型 | 参数 | 字节 | 说明 |
| :-----| :----: | ----: | :---- |
| TINYTEXT | (0-255) | 0-255 | 短文本字符串 |
| TEXT | (0-65535) | 0-65535 | 长文本数据 |
| MEDIUMTEXT | (0-16777215) | 0-16777215 | 中等长度文本数据 |
| LONGTEXT | (0-4294967295) | 0-4294967295 | 极大文本数据 |

##### 4. 枚举类型

> 如果某个字段的取值只能是固定的几个值那么就可以使用枚举，这有点像 HTML 中的单选框

**参考:**

- 格式：`enum(values1,values2)`
- 示例：

```sql
CREATE TABLE person(
  id INT,
  gender ENUM('男','女','未知')
);
-- 只能插入固定中的值
INSERT INTO person VALUES (1,'男');
-- 会报错
INSERT INTO person VALUES (1,123);
```

::: warning
* MYSQL中的枚举类型是通过整型来实现的
* 和其他编程语言不同的是，其他编程枚举是从0开始的，而MySQL是从1开始的
:::

##### 5. 集合类型

> 如果某个字段的取值只能是几个固定值中的几个，那么就可以使用集合型，这有点像 HTML 中的 复选框

**参考:**

- 格式：`set(values1,values2,...)`
- 示例：

```sql
CREATE TABLE person(
  id INT,
  hobby SET('篮球','足球','乒乓球','球')
);
-- 只能插入固定中的值
INSERT INTO person VALUES (1,'篮球,足球');
-- 会报错
INSERT INTO person VALUES (1,'橄榄球,羽毛球,足球');
```

::: warning
* MYSQL中的集合类型也是通过整型来实现的
* MySQL的集合类型是按照2(n)的方式来实现的
:::

##### 6.布尔类型
> 专门用来保存真假的

```sql
CREATE TABLE person(
  id INT,
  flag BOOLEAN
);
-- 只能插入固定中的值
INSERT INTO person VALUES (1,TRUE);
INSERT INTO person VALUES (1,FALSE);
-- 非零即是真，不会报错
INSERT INTO person VALUES (1,3);
-- 会报错
INSERT INTO person VALUES (1,'字符');
```

::: warning
* MYSQL中的布尔类型也是使用整形来实现的，0表示假，1表示真
  * 底层的本质是因为MySQL是使用c/c++来实现的，所以就是非零即真
  :::

##### 7.日期类型
> 专门用来保存时间的

| 类型 | 字节 | 说明 |
| :----- | :----: | :---- |
| DATE | 3 | 日期值 |
| TIME | 3 | 时间值或持续时间 |
| DATETIME | 8 | 混合日期和时间值 |

**示例:**

```sql
CREATE TABLE person(
  id INT,
  filed1 DATE,
  filed2 TIME,
  filed3 DATETIME
);
INSERT INTO person VALUES (1,'2022-04-21','11:30:00','2022-04-21 11:30:00');
```

::: warning
* 在存储时间的时候，需要用单引号将时间括起来
:::
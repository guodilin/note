

# 基础入门

##### 注释

```java
// 单行注释
/* 多行注释 */
/** 文档注释 */
```

##### 关键字

> 关键字的字母全部小写

```java
// class 表示定义一个类，后面跟随类名
public class Min{
    
}
```

##### 字面量类型

1. 整数类型：不带小数点的数字
2. 小数类型：带小数点的数字
3. 字符串类型：用双引号括起来的内容
4. 字符类型：用单引号括起来的，内容只能有一个
5. 布尔类型：布尔值，表示真假，true false
6. 空类型：一个特殊的值，空值，值是null

```java
public class Main {
    public static void main(String[] args) {
        // 整数
        System.out.println(666);
        // 小数
        System.out.println(99.9);
        // 字符串
        System.out.println("hello world");
        // 字符
        System.out.println('男');
        // 布尔
        System.out.println(true);
        // 空
        System.out.println("null");
    }
}
```

## 变量

> 格式：数据类型 变量名 = 数据值;

```java
public class Main {
    // 主入口
    public static void main(String[] args) {
        // 整数
        int num = 66;
        // 小数
        double d = 99.9;
    }
}
```

1. 变量名字不能重复
2. 变量使用之前一定要进行赋值

##### 定义变量

```java
// 声明数据类型
int a;
// 给变量赋值
a = 100;
// 初始化变量，声明整形变量并赋值
int a = 66;
// 小数
double d = 99.9;
// 定义多个变量
int a = 10, b = 20, c = 30;
```

##### 修改变量

```java
int num = 66;
// 修改变量
num = 6;
```

##### 使用变量

```java
int a = 66;
int b = ++a;
System.out.print(b);	# 67
```

## 数据类型

| 数据类型 | 关键字  | 取值范围                                 |
| :------: | :-----: | :--------------------------------------- |
|   整数   |  byte   | -128~127                                 |
|          |  short  | -32768~32767                             |
|          |   int   | -2147483648~2147483647                   |
|          |  long   | -9223372036854775808~9223372036854775807 |
|  浮点数  |  float  | -3401298e-38到3402823e+38                |
|          | double  | -49000000e-38到1797693e+308              |
|   字符   |  char   | 0~65535                                  |
|   布尔   | boolean | true，false                              |

##### 整数

整数的小数取值范围大小关系

`double > float > long > int>short > byte`

###### byte

```java
// byte -128~127
byte a = 10;
```

###### short

```java
// short -32768~32767
short b = 10;
```

###### int

```java
// int -2147483648~2147483647
int c = 10;
```

###### long

```java
// long -9223372036854775808~9223372036854775807
long d = 10L;	// long 需要在后面加L
```

##### 浮点型

###### float

```java
// float -3401298e-38到3402823e+38
float e = 10.1F; // float 需要在后面加个F
```

###### double

```java
// -49000000e-38到1797693e+308
double f = 10.1;
```

##### 字符

###### char

> 字符型类型，只能存储一个字符

```java
// 0~65535
char g = 'a';
```

##### 字符串

###### String

```java
// String
String str = "hello world";
```

##### 布尔

###### boolean

```java
// boolean true false
boolean h = true;
boolean i = false;
```

## 标识符命名规则

> 标识符：就是给类，方法，变量等起的名字

+ 注意点
  + 由数字、字母、下划线_和美元符组成$
  + 不能以数字开头
  + 不能是关键字
  + 区分大小写

小驼峰命名法：方法、变量

规范1：标识符是一个单词的时候，全部小写

范例1：name

规范2：标识符由多个单词组成的时候，第一个单词首字母小写，其他单词首字母大写

范例2：firstName

大驼峰命名法：类名

规范1：标识符是一个单词的时候，首字母大写

范例1：Student

规范2：标识符由多个单词组成的时候，每个单词的首字母大写

范例2：GoodStudent

常量命名全部大写，单词间用下划线隔开

## 键盘录入

```java
// 导包
import java.util.Scanner;
public class Main {
    // 主入口
    public static void main(String[] args) {
        // 创建对象
        Scanner s = new Scanner(System.in);
        // 接受int类型数据
        int a = s.nextInt();
        // 打印接受数据
        System.out.print(a);
    }
}
```

## 运算符

##### 算术运算符

| 符号 | 作用       | 范例           | 范例结果                              |
| :--: | ---------- | -------------- | ------------------------------------- |
|  +   | 加         | `int a = 1+1`  | 返回2                                 |
|  -   | 减         | `int a = 1-1`  | 返回0                                 |
|  *   | 乘         | `int a = 1*1`  | 返回1                                 |
|  /   | 除         | `int a = 10/3` | 返回3，整数除整数返回整数，小数会抹除 |
|  %   | 取模、取余 | `int a = 10%5` | 返回0                                 |

+ 注意事项
  + `/` 和`%`的区别：两个数据做除法，`/` 取结果的商，`%`取结果的余数。
  + 整数操作只能得到整数，要想得到小数，必须有浮点数参与运算

###### 数字相加

> 隐式转换

1. 数据类型不一样不能参与运算，需要转成一样的，才能运算
2. 取值范围小的，和取值范围大的进行运算，小的会先提升为大的，在进行运算
3. `byte` `short` `char` 三种类型的数据在运算的时候，都会直接提升为`int`，然后在进行运算
4. `double > float > long > int>short > byte`

```java
byte a1 = 10;	// 计算会提升为 int
byte a2 = 20;	// 计算会提升为 int
int result = a1 + a2;	// result int 类型

int b1 = 10;
long b2 = 100L;		// long 大于 int
double b3 = 20.0;	// double 大于 long
double result = b1 + b2 + b3; // result double 类型

byte d1 = 10;	// 计算会自动提升为 int
short d2 = 20;	// 计算会自动提升为 int
long d3 = 100L;	// long 大于int
long result = d1 + d2 + d3; // result long 类型
```

> 强制转换

1. 如果把一个取值范围大的数值，赋值给取值范围小的变量，是不允许直接赋值的，如果一定要转换需要加入强制转换

2. 格式：

   ```java
   // 目标数据类型 变量名 = (目标数据类型)被强制的数据;
   double a = 12.3;
   int b = (int) a;
   // 运算强制转换方式
   byte a = 10;
   byte b = 20;
   byte c = (byte)(a+b);
   ```

> 字符串的 + 操作

当 + 操作中出现字符串时，这个 + 是字符串连接符，而不是运算符

```java
"123" + 123; // "123123"
1 + 2 + "年"; // "3年",没有字符串的先运算在拼接，从左到右执行
1 + 2 + "abc" + 4 + 5; // "3abc45",从左到右执行
```

> 字符的 + 操作

1. 当`字符 + 字符`时，会把字符通过`ASCII`码表查询到对应的数字再进行计算

2. 当`字符 + 数字`时，会把字符通过`ASCII`码表查询到对应的数字再进行计算

```java
1 + 'a'; // 98  a对应ascii是97,结果是int类型
'a' + "abc"; // "aabc"  
```

##### 自增自减运算符

| 符号 | 作用 |   说明    |
| :--: | :--: | :-------: |
|  ++  |  加  | 变量值加1 |
|  --  |  减  | 变量值减1 |

```java
int a = 10;
a++;
System.out.print(a); // 11
++a;
System.out.print(a); // 12
a--;
System.out.print(a); // 11
--a;
System.out.print(a); // 10

```

自增和自减在前面先运算，在后面后运算

```java
// 先用后加
int a = 10;
int b = a++;	// b,10 a,11
```

```java
// 先加后用
int a = 10;
int b = ++a;	// b,11 a,11
```

##### 赋值运算符

| 符号 | 作用       | 范例         | 说明            |
| :--: | ---------- | ------------ | --------------- |
|  =   | 赋值       | `int a = 10` | 将10赋值给变量a |
|  +=  | 加后赋值   | `a += b`     | 将a+b的值给a    |
|  -=  | 减后赋值   | `a -= b`     | 将a-b的值给a    |
|  *=  | 乘后赋值   | `a *= b`     | 将a*b的值给a    |
|  /=  | 除后赋值   | `a /= b`     | 将a/b的商给a    |
|  %=  | 取余后赋值 | `a %= b`     | 将a%b的余数给a  |

> +=、-=、*=、/=、%=底层都隐藏了强制类型转换

```java
int a = 10;
int b = 20;
a += b;		// a = a + b
System.out.print(a); // 30
System.out.print(b); // 20 
```

##### 关系运算符

| 符号 | 说明                                                      |
| :--: | --------------------------------------------------------- |
|  ==  | a == b ,判断a和b的值是否相等，成立为true，不成立为false   |
|  !=  | a != b ,判断a和b的值是否不相等，成立为true，不成立为false |
|  >   | a > b ,判断a是否大于b，成立为true，不成立为false          |
|  >=  | a >= b ,判断a是否大于等于b，成立为true，不成立为false     |
|  <   | a < b ,判断a是否小于，成立为true，不成立为false           |
|  <=  | a >= b ,判断a是否小于等于b，成立为true，不成立为false     |

##### 逻辑运算符

> 逻辑运算符

| 符号 | 作用         | 说明                                     |
| :--: | :----------- | :--------------------------------------- |
|  &   | 逻辑与（且） | 并且，两边都为真，结果才是真，一个假为假 |
|  \|  | 逻辑或       | 或者，两个都为假，结果才是假，一个真为真 |
|  ^   | 逻辑异或     | 相同为false不同为true                    |
|  !   | 逻辑非       | 取反                                     |

> 短路逻辑运算符

| 符号 | 作用   | 说明                     |
| :--: | :----- | :----------------------- |
|  &&  | 短路与 | 遇到假返回假，两个真为真 |
| \|\| | 短路或 | 遇到真返回真，两个为假   |

> 练习

```java
// 导包
import java.util.Scanner;
public class Main {
    // 主入口
    public static void main(String[] args) {
        // 第一次和第二次其中输入的整数为6或者是6的倍数返回true
        Scanner s = new Scanner(System.in);
        System.out.print("请输入第一个整数");
        int num1 = s.nextInt();
        System.out.print("请输入第二个整数");
        int num2 = s.nextInt();
        boolean b = num1 == 6 || num2 == 6 || (num1+num2) % 6 == 0;
        System.out.println(b);
    }
}
```

##### 三元运算符

> 格式

+ 关系表达式 `?` 表达式1` : `表达式2

> 计算规则

+ 首先计算关系表达式的值
+ 如果值为true，运行表达式1
+ 如果值为false，运行表达式2

```java
public class Main {
    // 主入口
    public static void main(String[] args) {
        // 获取两个整数的最大值
        int number1 = 10;
        int number2 = 20;
        int max = number1 > number2 ? number1 : number2;
        System.out.print(max); // 20
    }
}
```

## 流程控制

##### if语句

```java
// 格式
if (关系表达式) {
      // 语句体     
   }
```

> 执行流程

+ 首先计算关系表达式的值
+ 如果关系表达式为true就执行
+ 如果关系表达式为false就直接跳过，不会执行语句体

> 示例

```java
// 导入键盘输入包
import java.util.Scanner;

public class Main {
    // 主入口
    public static void main(String[] args) {
        Scanner age = new Scanner(System.in);
        System.out.print("请输入整数");
        int num = age.nextInt();
        if (num == 10) {
            System.out.print("num等等于10哦");
        }
    }
}
```

##### if else语句

```java
if (条件表达式) {
    // 条件表达式为true执行
} else {
    // 条件表达式为false执行
}
```

> 示例

```java
// 导入键盘输入包
import java.util.Scanner;

public class Main {
    // 主入口
    public static void main(String[] args) {
        Scanner age = new Scanner(System.in);
        System.out.print("请输入整数");
        int num = age.nextInt();
        if (num == 10) {
            // 条件为true执行
            System.out.print("num等等于10哦");
        } else {
            // 条件为false执行
            System.out.print("num不等于10哦");
        }
    }
}
```

##### if else if else语句

> 格式

```java
if (关系表达式1) {
    // 语句体1;
} else if (关系表达式2) {
    // 语句体2;
} else if (关系表达式3) {
    // 语句体3;
...
} else {
    // 如果都不满足执行;
}
```

> 示例

```java
// 导入键盘输入包
import java.util.Scanner;

public class Main {
    // 主入口
    public static void main(String[] args) {
        Scanner age = new Scanner(System.in);
        System.out.print("请输入您的年龄");
        int num = age.nextInt();
        if (0 >= num) {
            System.out.print("儿童");
        } else if (num <= 17) {
            System.out.print("少年");
        } else if (num <= 40) {
            System.out.print("青年");
        } else if (num <= 65) {
            System.out.print("中年");
        } else {
            System.out.print("老年");
        }
    }
}
```

> 练习二

```java
// 导入键盘输入包

import java.util.Scanner;

public class Main {
    // 主入口
    public static void main(String[] args) {
        double price = 1000.00;
        Scanner age = new Scanner(System.in);
        System.out.print("请输入会员等级");
        int num = age.nextInt();
        if (num == 1) {
            // 条件为true执行
            System.out.print("实际支付"+ (price *0.9));
        } else if (num == 2) {
            // 条件为false执行
            System.out.print("实际支付"+ (price *0.8));
        } else if (num == 3) {
            // 条件为false执行
            System.out.print("实际支付"+ (price *0.7));
        }else {
            System.out.print("实际支付"+ price);
        }
    }
}
```

##### switch 语句

```java
switch (表达式){
    case 值1:
	// 语句体1;
	break;
    case 值2:
	// 语句体1;
	break;
	// ...
	default:
	// 语句体;
	break;
}
```

> 执行流程

+ 首先计算表达式的值
+ 依次和case后面的值进行比较，如果有对应的值，就会被执行，在执行过程中，遇到break就会结束
+ 如果所有的case后面的值和表达式的值都不匹配，就会执行default里面的语句体，然后结束整个switch语句

```java
int tag = 2;
switch (tag){
	case 1:
	// 语句体1;
	System.out.print("结果为1的时候执行");
	break;
	case 2,4,6:
	// 语句体1;
	System.out.print("结果为2,4,6的时候执行");
	break;
	// ...
	default:
	// 语句体;
	System.out.print("如果都不存在我才显示");
	break;
}
```

- tag可以是`byte, short, int, char, String`类型的常量表达式。
- 多个标签可以合并，之间用逗号分隔
- 每个标签中的 statement 部分是一条语句，也可以是`{}`包裹的一个块
- 顺序匹配，进入第一个与 tag 相匹配的 case 执行
- 进入某个 case 执行后，若没有 break，将顺序执行下面的 case 而不再进行匹配

##### 增强型 switch

> java 12 版本以后才支持

```java
switch (1 + 1) {
	case 1 -> {
	// 语句体1;
	System.out.print("结果为1的时候执行");
	}
	case 2 -> {
	// 语句体1;
	System.out.print("结果为2的时候执行");
	// ...
    }
	default -> {
	// 语句体;
	System.out.print("如果都不存在我才显示");
	}
}
// 如果只有一行执行代码，可以直接如下方式书写
switch (tag) {
	case 1 -> System.out.print("结果为1的时候执行");
	case 2,4,6 -> System.out.print("结果为2,4,6的时候执行");
	default -> System.out.print("如果都不存在我才显示");
}
```

> 示例

```java
int tag = 1;
String s = switch (tag) {
	case 1 -> "111";
	case 2 -> "222";
	default -> "else";
};
System.out.print(s); // s "111"
```

## 循环结构

##### for循环

> 格式

```java
for(初始化语句;条件判断语句;条件控制语句){
  //循环体
}
// 示例
for(int i = 1;i<=10;i++){
	// 循环10次如下语句
	System.out.println("hello-world");
}
```

> 执行流程

+ 初始化语句只执行一次
+ 判断语句为true，循环继续
+ 判断语句为false，循环结束

> 示例一

```java
// 乘法表
public class Main {
    // 主入口
    public static void main(String[] args) {
        for (int i = 1; i <= 9; i++) {
            /*
            i =1 1*1=1 循环一次
            for (int y = 1; y <= 1; y++) {
            i = 2 循环两次，1*2=2	2*2=4  以此类推
            for (int y = 1; y <= 2; y++) {
            */
            for (int y = 1; y <= i; y++) {
                System.out.print(y + "*" + i + "=" + i * y + "\t"); // \t 空格
            }
            System.out.println(); // 换行
        }
    }
};
```

> 示例二

```java
// 打印1-100的和
int  num = 0;
for (int i = 1; i <= 100; i++) {
	num += i;
}
System.out.println(num); // 5050
```

```java
// 100的基数有多少个
int num = 0;
for (int i = 1; i <= 100; i++) {
	if (i % 2 == 0) {	// 取基数
		num += i;
	}
}
System.out.println(num);
```

```java
// 统计范围内的数字，可以被3整除，又能被5整除的有多少个
public class Main {
    // 主入口
    public static void main(String[] args) {
        int num = 0;
        int start = 60;
        int end = 100;
        for (int i = start; i <= end; i++) {
            if (i % 3 == 0 && i % 5 == 0) {
//                System.out.println(i);
                ++num;
            }
        }
        System.out.println(num);
    }
};
```

##### while

> 格式

```java
初始化语句;
while (条件判断语句){
    循环体语句;
    条件控制语句;
}
```

```java
// 示例
int i = 1;
while (i<=100){
    System.out.println(i);
    i++;
}
```

> for和while的区别

+ for循环中，知道循环次数或者循环的范围
+ while循环中，不知道循环的次数和范围，只知道循环的结束条件

```java
// for也可以这样书写
int i = 0;
for (; i <= 5; i++) {
    System.out.println(i);
}
```

```java
// 
int i = 1;
while (i<=5){
    System.out.println(i);
    i++;
}
```


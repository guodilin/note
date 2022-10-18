# 入门

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



##### 变量

> 格式：数据类型 变量名 = 数据值;

```java
public class Main {
    // 主入口
    public static void main(String[] args) {
        // 数据类型 变量名 = 数据值;

        // 整数
        int num = 66;
        // 小数
        double d = 99.9;
        
    }
}
```


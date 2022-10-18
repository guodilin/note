# 五. 完整性

## 1. 实体完整性

- 表中一行数据就是一个实体
- 保证实体完整性就是保证每一行数据的唯一性
- 实体完整性的约束类型
  - 主键约束`primary key`
  - 唯一约束`unique`
  - 自动增长列`auto_increment`

##### 1. 主键约束

> 主键用于唯一标识表中的每一条数据`primary key`

```sql
CREATE TABLE person(
-- 只需要添加 PRIMARY KEY
  id INT PRIMARY KEY,
  name VARCHAR(10)
);
-- 插入数据
INSERT INTO person VALUES (1,'gdl')
INSERT INTO person VALUES (2,'gdl') -- id不允许重复
```

> 注意

1. 如果将某一个字段设置成了主键，那么这个字段的取值就不能重复，而且不能是null。
2. 一张表中只能有一个主键，不能出现多个主键
3. 我们除了可以在字段数据后面添加，将这个字段变成主键以外，还可以写在最后 `primary key(字段)`

```sql
CREATE TABLE person(
  id INT,
  name VARCHAR(10),
  PRIMARY KEY(id)
);
```

##### 2. 联合主键

> 联合主键，同时将多个字段作为主键来使用，两个字段组合不重复即可

```sql
CREATE TABLE person(
  name VARCHAR(10),
	age int ,
	PRIMARY key(name,age) -- 只需要在key中加入两个字段
);
INSERT INTO person VALUES('gdl',99)
INSERT INTO person VALUES('gdl',199) -- 两个字段组合不重复即可
INSERT INTO person VALUES('mysql',199)
```



##### 3. 唯一约束

> 唯一约束用于保证某个字段的值永远不能重复`unique`

```sql
CREATE TABLE person(
-- 添加 unique
  id INT unique,
  name VARCHAR(10)
);
INSERT INTO person VALUES (3,'gdl')
```

主键和唯一键异同：

- 唯一约束和主键约束一样，被约束的字段的取值都不能重复
- 主键在一张表中只能有一个，而唯一约束可以在表中可以有多个
- 主键的取值不能为null，而唯一约束的取值可以是null

##### 3. 自动增长列

> 自动增长约束的作用是让某个字段的取值从1开始递增，从而保证实体完整性`auto_incremnt`

```sql
CREATE TABLE person(
  -- 添加 AUTO_INCREMENT 该字段将会自动增长
  id INT AUTO_INCREMENT,
  name VARCHAR(10),
	PRIMARY KEY(ID)
);
-- 插入数据取值可以是null或者default
INSERT INTO person VALUES(null,'a')
INSERT INTO person VALUES(default,'a')
```

注意点：

- 如果某个字段是自动增长的，那么这个字段必须是主键才可以
- 如果只是主键，那么取值不能是null，但是如果主键还是自动增长的，那么取值就可以是`null`或`default`
- 在企业开发中我们应该如何选择主键
- 最少性：能用一个字段作为主键，就不要使用多个字段
- 稳定性：能用不被操作的字段作为主键，就不要使用会被操作的字段作为主键
- 一般情况下我们会定义一个名称叫做id

##### 4. 修改约束

1. 修改主键约束

   ```sql
   ALTER TABLE 表名 ADD PRIMARY KEY(字段);
   ALTER TABLE person ADD PRIMARY KEY(id);
   ```

2. 修改唯一约束

   ```sql
   ALTER TABLE 表名 ADD UNIQUE(字段);
   ALTER TABLE person ADD UNIQUE(id);
   ```

3. 修改自动增长约束

   ```sql
   ALTER TABLE 表名 MODIFY 字段名称 数据类型 AUTO_INCREMENT;
   -- 修改前提,该字段需要是主键
   ALTER TABLE person MODIFY id int AUTO_INCREMENT;
   ```

## 2. 域完整性

##### 1. 域完整性

1. 使用非空约束`not null`,该字段将不允许为空

   ```sql
   CREATE TABLE person(
     id INT AUTO_INCREMENT,
   	-- 不允许为空，后面加not null
     name VARCHAR(10) NOT NULL,
   	PRIMARY KEY(ID)
   );
   ```

2. 使用默认值约束`default`，如果该字段未给值，将使用默认值

   ```sql
   CREATE TABLE person(
     id INT AUTO_INCREMENT,
   	-- 设置默认值，default
     name VARCHAR(10) default 'guodilin',
   	PRIMARY KEY(ID)
   );
   ```

   注意点：

   - 哪怕设置了默认值，传入了null之后，也不会使用默认值

## 2.参照完整性

##### ①. 参照完整性

1. 语法格式

```sql
-- 格式,在尾部添加
FOREIGN key(外键字段名称) REFERENCES 主表名称(主表主键名称)
```

2. 参照完整性示例

```sql
-- 主表
CREATE TABLE stu(
	id INT AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(20),
	gender ENUM('男','女','未知')
);
-- 成绩表
CREATE TABLE grade(
	id int AUTO_INCREMENT PRIMARY KEY,
	km VARCHAR(20),
	score DOUBLE,
	uid int,
  -- 两个表之间类型需要一样
	FOREIGN key(uid) REFERENCES stu(id)
)
```

- 注意点：
  - 只有innoDB的存储引擎才支持外键约束
  - 外键的数据类型必须和指向的主键一样
  - 在一对多的关系中，外键一般定义在多的一方（一个学生有多门成绩，那么外键定义在成绩表中）
  - 定义外键的表我们称之为从表，被外键引用的表我们称之为主表

##### ②. 动态添加外键

```sql
ALTER TABLE 从表表名 ADD FOREIGN KEY (从表字段) REFERENCES 主表表名(主表主键字段);
```

##### ③. 查看外键

```sql
SHOW CREATE TABLE 从表表名;
```

##### ④. 动态删除外键

```sql
ALTER TABLE 从表表名 DROP FOREIGN KEY 外键字段;
```
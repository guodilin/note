# 三. 表数据处理
##### 1. select
1. select
   ```sql
   -- 精确列名称查询
   select 列名称 from 表名称;
   -- 查询表所有数据
   select * from 表名称;
   ```
2. distinct
   ```sql
   -- 去重 去除列中重复的数据
   select distinct 列名称 from 表名称; 
   ```
3. where
   ```sql
   -- 筛选列中的值
   select 列名称 from 表名称 where 列 运算符 值;
   ```
4. and or
   1. and
      ```sql
      -- and语法
      select 列名称 from 表名称 where 列 运算符 值 and 列 运算符 值;
      -- 使用 and 来显示所有姓为 "carter" 并且名为 "thomas" 的人
      select * from persons where firstname='thomas' and lastname='carter'; 
      ```
   2. or
      ```sql
      -- or语法
      select * from persons where 列 运算符 值 or 列 运算符 值;
      -- 使用 or 来显示所有姓为 "carter" 或者名为 "thomas" 的人
      select * from persons where firstname='thomas' or lastname='carter'; 
      ```
   3. and or 把 and 和 or 结合使用（使用圆括号来组成复杂的表达式）
      ```sql
      select * from persons where (firstname='thomas' or firstname='william')and lastname='carter';
      ```
##### 2. insert into
###### insert into 语法
```sql
insert into 表名称 values (值1, 值2,....)
-- 我们也可以指定所要插入数据的列
insert into table_name (列1, 列2,...) values (值1, 值2,....)
```
##### 3. update
###### update 语法
> update 语句用于修改表中的数据。
```sql
update 表名称 set 列名称 = 新值 where 列名称 = 某值;
```
##### 4. delete
###### delete 语法
> delete 语句用于删除表中的行。
```sql
delete from 表名称 where 列名称 = 值;
-- 包含"fred wilson" 行会被删除：
delete from person where lastname = 'wilson';
-- 如果不加条件，则删除表中所有记录
delete from 表名称;
-- 删除表推荐使用以下方式，效率更高，先删除表，然后再创建一张一样的表
TRUNCATE TABLE 表名;
```
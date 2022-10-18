# 二. 数据库基本操作
##### 1. 库增删改查
1. 创建数据库
   ```sql
   create database 数据库名;
   create database if not exists 数据库名;-- 如果不存在即创建
   ```
3. 删除数据库
   ```sql
   drop database 数据库名;
   drop database if exists 数据库名;-- 如果存在即删除
   ```
4. 修改数据库
   ```sql
   alter database 数据库名 charset=字符集;
   ```
5. 查询数据库
   ```sql
   show databases;
   show create database 数据库名称;-- 查询指定数据库
   ```
##### 2. 表增删改查
1. 创建表
   ```sql
   create table 表名(
       字段名称 字段类型,
       字段名称 字段类型
       );
   -- 示例1
   create table users(
        id int,
        name varchar(2)
        );
   -- 示例2,不存在即创建，有跳过
   create table if not exists 表名(
        id int,
        name varchar(2)
        );
   ```
1. 删除表
   ```sql
   drop table 表名;
   -- 示例1
   drop table study;
   -- 示例2,存在即删除，没有跳过
   drop table if exists 表名;
   ```
2. 修改表
   ```sql
   rename table 原表名 to 新表名;
   ```
3. 查询表
   ```sql
   desc 表名;
   desc users;
   show tables;-- 查看所有表
   ```
##### 3. 字段增删改查
1. 新增表字段
   ```sql
   alter table 表名 add 新增字段名称 新增字段数据类型 [位置];
   alter table users add age float [位置]; 
   alter table users add age float; -- 默认为最后面
   alter table users add age float first; -- 新增最前面
   alter table users add age float after name; -- 新增至name后面
   ```
2. 删除表字段
   ```sql
   alter table 表名 drop 字段;
   ```
3. 修改表字段
   ```sql
   -- 修改表字段类型
   alter table 表名 modify 需要修改的字段名称 新的数据字段类型;
   alter table users modify id int;-- 将users表中的id 改为数据类型为int
   -- 修改表字段名
   alter table 表名 change 原始字段名称 新的字段名称 新的数据字段类型;
   alter table users change id uid int;-- 将users表中的id 改为uid，数据类型为int
   ```
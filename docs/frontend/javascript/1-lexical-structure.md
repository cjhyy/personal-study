---
autoGroup-2:JavaScript权威指南
title: 词法结构
---

## 介绍

编程语言的词法结构是一套基础性规则。作为语法的基础


## 字符集

JavaScript程序使用Unicode字符集编写的。Unicide是ASCII和Latin-1的超集

### 1. 区分大小写

HTML不区分大小写  JavaScript区分大小写  例：HTML可以写onClick 但是JS中必须写onclick

### 2. 空格、换行符和格式控制符

JavaScript会忽略空格，多数情况忽略换行符

### 3.Unicode转义序列

JavaScript定义一种特殊序列，使用6个ASCII字符代表任意16位Unicode内码。 \u为前缀，后跟4个十六进制数。    

例如：“cafe” === “caf\u00e9”  为true

## 直接量

直接量（literal），就是程序中直接使用的数据值

## 标识符和保留字

### 标识符

标识符用来对变量和函数进行命名，JavaScript标识符必须以字符、下划线(\_)或者美元符（$）开始

### 保留字

JavaScript把一些标识符拿出来做自己的关键字。

## 可选的分号

JavaScript再缺少了分号就无法正确解析代码的时候，JavaScript才会填补分号
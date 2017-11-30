# 列表

1. 何如创建一个列表
2. 列表的抽象数据类型定义
3. 如何实现该抽象数据类型（ADT）
4. 列表适合解决的实际问题, 一个简单影片租赁查询，rent.js

**列表的抽象数据类型定义**

列表： 一组有序的数据。每个列表中的数据项称为*元素*

抽象数据类型定义：

方法、属性 | 描述
--- | ---
listsize | 列表的元素个数
pos | 列表的当前位置
length | 返回列表中的元素个数
clear | 清空列表中的所有元素
toString | 返回列表的字符串形式
getElement | 返回当前位置的元素
insert | 在现有元素后插入新元素
append | 在列表的末尾添加新元素
remove | 从列表中删除元素
front | 将列表的当前位置设移动到第一个元素
end | 将列表的当前位置设移动到最后一个元素
prev | 将当前位置后移一位
next | 将当前位置前移一位
hasNext | 判断后一位
hasPrev | 判断前一位
curPos | 返回列表的当前位置
moveTo | 将当前位置移动到指定位置


**实现列表类**

注：书中的pre，next等方法是实现用户在列表上自由移动，数据本身没有改变。我实现的是pre，next等移动的方法是移动数据本身。
书中的更适合

书本demo见`./list2.js` 的 `List`。我的实现见`./list.js`。rent.js是书本的代码的实现

**使用迭代器访问列表**

与使用数组索引的方式相比，使用迭代器的一些优点：

- 访问列表元素时不必关心底层的数据存储结构
- 当为列表添加一个元素时，索引的值就不对了，此时只用更新列表，而不用更新迭代器。
- 可以用不同类型的数据存储方式实现cList类(List中实现的prev，next， front， end，currPos就实现了一个cList类 )，迭代器为访问列表里的元素提供了一种统一的方式。

<span color="red">注意：</span>对这些优点还不明白。

下面是一个使用迭代器访问列表的例子

```js
for (names.front(); names.hasNext(); names.next()) {
    console.log(names.getElement())
}

```

**一个基于列表的应用**
源码见`rent.js`


**使用的模块简介**
[readline-sync](https://www.npmjs.com/package/readline-sync) 与命令行交互
[nodeJS 中从命令行等待并读入用户输入实现与用户交互的方法](https://lzw.me/a/nodejs-stdin.html)
注意：win10下cmd没有提示，Linux下完美

简单使用
```
var readlineSync = require('readline-sync');

// Wait for user's response.
var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');

// Handle the secret text (e.g. password).
var favFood = readlineSync.question('What is your favorite food? ', {
  hideEchoBack: true // The typed text on screen is hidden by `*` (default).
});
console.log('Oh, ' + userName + ' loves ' + favFood + '!');
```
输出

    May I have your name? CookieMonster
    Hi CookieMonster!
    What is your favorite food? ****
    Oh, CookieMonster loves tofu!

**todo**
书本练习
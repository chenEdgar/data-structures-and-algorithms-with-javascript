# 字典
字典是一种以键值对形式存储数据的数据结构，js中的Object类就是以字典的形式设计的。demo将以Object类的特性实现一个Dictionary类。

字典通常通过键取值，一般不太注重数据的存储顺序，但人们希望看到有序的字典
## dictionary类的实现
Dictionary类的基础是Array 类，而不是Object类，因为我们想对字典中的键排序。因为js中Array支持对键排序，而不支持对Object的键排序。

Dictionary类的实现见`./dictionary.js`

*注意*数组中，如果键是字符串，数组length的值是0

## todo
课后练习
1. 
2. 
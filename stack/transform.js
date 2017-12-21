const Stack = require('./stack')

/**
 * 数制间的相互转换
 * 
 * 转换算法
 * 1. 最高位为n%b，将此位压入栈
 * 2. 使用n/b代替n(向下取整)
 * 3. 重复步骤1,2，直到n等于0，且没有余数
 * 4. 将站内元素依次弹出并排列，得到转换后数字的字符串形式
 * 
 * 注意：此算法只针对基数为2-9的情况
 * */

 function mulBase(num, base) {
     var s = new Stack()
     do {
         s.push(num % base)
         num = Math.floor(num /= base)
     } while(num > 0)
     var converted = ''
     while(s.length() > 0) {
         converted += s.pop()
        
     }
    return converted
 }

 // 测试
 var num = 32
 var base = 2
 var newNum = mulBase(num, base)
 console.log(num + 'converted to base ' + base + ' is ' + newNum) 
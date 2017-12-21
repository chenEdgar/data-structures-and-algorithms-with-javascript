const Stack = require('./stack')
/**
 * 使用栈模拟递归调用过程
 */
function fact(n) {
    var s = new Stack()
    while( n > 1) {
        s.push(n--)
    }
    var product = 1
    while(s.length() > 0) {
        product *= s.pop()
    }
    return product
}
console.log(fact(5))
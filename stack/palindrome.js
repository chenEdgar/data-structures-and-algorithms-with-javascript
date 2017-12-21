const Stack = require('./stack')
/**
 * 回文
 * 从前开始或者从后开始读都是一样的成为回文，如dad，101
 */

 function isPalindrome(word) {
    var s = new Stack()
    for(var i  = 0; i < word.length; ++i) {
        s.push(word[i])
    }
    var rword = ''
    while(s.length() > 0) {
        rword += s.pop()
    }
    if (word === rword) {
        return true
    }
    return false
 }

 // test
 var word = 'hello'
 var rword = 'dad'
 console.log(isPalindrome(word) ? `${word} is a palindrome` : `${word} isn't a palindrome`)
 console.log(isPalindrome(rword) ? `${rword} is a palindrome` : `${rword} isn't a palindrome`)
 

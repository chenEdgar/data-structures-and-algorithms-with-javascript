function Stack() {
  this.dataStore = [] // 存储值
  this.top = 0 // 可插入或出栈游标
  this.push = push // 压栈
  this.pop = pop // 出栈
  this.peek = peek // 查栈顶值
  this.clear = clear
  this.length = length
}

function push(ele) {
  this.dataStore[this.top++] = ele
}

function pop() {
  return this.dataStore[--this.top]
}

function peek() {
  return this.dataStore[this.top - 1]
}

function clear() {
  this.top = 0
}

function length() {
  return this.top
}

module.exports = Stack
// 测试

// var s = new Stack()
// s.push('nina')
// s.push('hera')
// s.push('sara')
// console.log(s.length())
// console.log(s.peek())
// s.pop()
// console.log(s.peek())

// 基于对象的链表实现

/**
 * 表示节点
 * @param {Object} ele
 *
 */
function Node(ele) {
  this.ele = ele
  this.next = null
  this.previous = null
}

/**
 * 链表的基础操作方法实现
 * 插入、删除、显示列表元素等
 */
function LinkedList() {
  this.head = new Node('head') // 表示头节点，next为 null
  this.find = find
  this.findLast = findLast
  this.dispReverse = dispReverse
  // this.findPrevious = findPrevious
  this.insert = insert
  this.remove = remove
  this.display = display
}

function find(item) {
  var currNode = this.head
  while (currNode.ele != item) {
    currNode = currNode.next
  }
  return currNode
}

function findLast(item) {
  var currNode = this.head
  while (!(currNode.next == null)) {
    currNode = currNode.next
  }
  return currNode
}
function  dispReverse() {
  var currNode = this.head
  currNode = this.findLast()
  while (!(currNode.previous == null)) {
    console.log(currNode.ele)
    currNode = currNode.previous
  }
}

// function findPrevious(item) {
//   var currNode = this.head
//   while (!(currNode.next == null) && (currNode.next.ele != item)) {
//     currNode = currNode.next
//   }
//   return currNode
// }

/**
 *
 * @param {string} newEle
 * @param {string} item
 * 此处的插入类似jQuery中的insertAfter，在当前节点后插入
 */
function insert(newEle, item) {
  var newNode = new Node(newEle)
  var currNode = this.find(item)
  newNode.next = currNode.next
  newNode.previous = currNode
  currNode.next = newNode
}

function remove(item) {
  var currNode = this.find(item)
  if (!(currNode.next == null)) {
    currNode.previous.next = currNode.next
    currNode.next.previous  = currNode.previous
    currNode.next = null
    currNode.previous = null
  }
}

function display() {
  var currNode = this.head
  while (!(currNode.next == null)) { // 判断条件有疑问
    console.log(currNode.next.ele)
    currNode = currNode.next
  }
}
// 测试
var cities = new LinkedList()
cities.insert('A', 'head')
cities.insert('B', 'A')
cities.insert('C', 'B')
cities.display() // A, B, C
cities.remove('B')
cities.display() // A, C
cities.dispReverse()
cities.display()
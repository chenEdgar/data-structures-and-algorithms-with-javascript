function List() {
  this.listSize = 0
  this.pos = 0
  this.dataStore = []
  this.clear = clear
  this.find = find
  this.toString = toString
  this.insert = insert
  this.append = append
  this.remove = remove
  this.front = front
  this.end = end
  this.prev = prev
  this.next = next
  this.hasPrev = hasPrev
  this.hasNext = hasNext
  this.length = length
  this.currPos = currPos
  this.moveTo = moveTo
  this.getElement = getElement
  this.contains = contains

}

function append(ele) {
  this.dataStore[this.listSize++] = ele
}

function find(ele) {
  for (var i = 0, len = this.dataStore.length; i < len; ++i) {
    if (this.dataStore[i] === ele) {
      return i
    }
  }
  return -1
}
function remove(ele) {
  var foudAt = this.find(ele)

  if (foudAt > -1) {
    this.dataStore.splice(foudAt, 1)
    --this.listSize
    return true
  }

  return false
}

function length () {
  return this.listSize
}

function toString () {
  return this.dataStore
}

function insert (ele, after) {
  var insertPos = this.find(after)
  if (insertPos > -1) {
    this.dataStore.splice(insertPos + 1, 0, ele)
    ++this.listSize
    return true // 表明插入成功
  }
  return false
}

function clear () {
  delete this.dataStore
  this.dataStore.length = 0 // 创建一个新数组
  this.listSize = this.pos = 0
}

function contains (ele) {
  if (this.find(ele) > -1) {
    return true
  }
  return false
}

// 遍历列表

function front () {
  this.pos = 0
}

function end () {
  this.pos = this.listSize - 1
}

function prev () {
  --this.pos
}
function next () {
  if (this.pos  < this.listSize) {
    ++this.pos
  }
}

function hasPrev () {
  return this.pos >= 0
}

function hasNext () {
  return this.pos < this.listSize
}

function currPos () {
  return this.pos
}

function moveTo (posi) {
  this.pos = posi  
}

function getElement () {
  return this.dataStore[this.pos]
}
module.exports = List
// 测试
// var names = new List()

// names.append('Edgar')
// names.append('Fufuya')
// names.append('Rachel')
// names.append('Betty')
// names.append('Demo')

// 移动到列表中第一个元素比显示它
// names.front()
// console.log(names.getElement()) // Edgar
// 向前移动一个单位并显示它
// names.next()
// console.log(names.getElement()) // Fufuya

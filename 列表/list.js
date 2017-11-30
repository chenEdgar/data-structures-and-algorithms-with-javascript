// 注：书中的pre，next等方法是实现用户在列表上自由移动，数据本身没有改变。我实现的是pre，next等移动的方法是移动数据本身。
// 书中的更适合
function List() {
  this.listSize = 0
  this.pos = 0
  this.dataStore = []
  this.clear = clear
  this.find = find
  this.toString = toString
  this.insertBefore = insertBefore
  this.insertAfter = insertAfter
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
  return this.dataStore.toString()  
}

//书中的insert实现
// function insert (ele, after) {
//   var insertPos = this.find(after)
//   if (insertPos > -1) {
//     this.dataStore.splice(insertPos + 1, 0, ele)
//     ++this.listSize
//     return true // 表明插入成功
//   }
//   return false
// }

function insertBefore (ele, before) {
  var foudAt = this.find(before)
  this.dataStore.splice(foudAt - 1, 0, ele)
  ++this.listSize
}

function insertAfter (ele, after) {
  var foudAt = this.find(after)
  this.dataStore.splice(foudAt + 1, 0, ele)
  ++this.listSize
}

function clear () {
  this.dataStore = []
  this.listSize = this.pos = 0

  // 例子中
  // delete this.dataStore
  // this.dataStore.length = 0 // 创建一个新数组
  // this.listSize = this.pos = 0
}

function contains (ele) {
  if (this.find(ele) > -1) {
    return true
  }
  return false
}

function front (ele) {
  var foudAt = 0
  if (this.find(ele) > -1) {
    foudAt = this.find(ele)
    var moveTarget = t
    his.dataStore.splice(foudAt, 1)
    this.dataStore = moveTarget.concat(this.dataStore)
  }
  return false
}

function end (ele) {
  var foudAt = 0
  if (this.find(ele) > -1) {
    foudAt = this.find(ele)
    var moveTarget = this.dataStore.splice(foudAt, 1)
    this.dataStore = this.dataStore.concat(moveTarget)
  }
  return false
}

function prev (ele) {
  var foudAt = 0
  if (this.find(ele) > -1) {
    if (this.length() === 0) {
      console.log('当前元素是第一个元素')
      return false
    }
    foudAt = this.find(ele)
    return this.dataStore[foudAt - 1]
  }
  return false
}
function next (ele) {
  var foudAt = this.find(ele)
  if (foudAt > -1) {
    if (foudAt === this.length() - 1) {
      console.log('当前元素是最有一个元素')
      return false
    }
    return this.dataStore[foudAt + 1]
  }
  return false
}

function hasPrev (ele) {
  if (this.find(ele) > -1) {
    if (this.find(ele) === 0) {
      return false
    }
    return true
  }
  return false
}

function hasNext (ele) {
  if (this.find(ele) > -1) {
    if (this.find(ele) === this.length() - 1) {
      return false
    }
    return true
  }
  return false
}

function currPos (ele) {
  return this.find(ele)
}

// posi 取值为 [1, listSize]
function moveTo (ele, posi) {
  var foudAt = this.find(ele)
  if (foudAt > -1) {
    if (posi >= 1 || posi <= this.listSize) {
      var moveTarget = this.dataStore.splice(foudAt, 1)
      this.dataStore.splice(posi, 0, moveTarget[0])
      return true
    }
    return false
  }
  return false
}

function getElement (posi) {
  return this.dataStore[posi]
}
// 测试
var names = new List()
names.append('Edgar')
names.append('Rachel')
console.log(names.toString())
names.remove('Rachel')
console.log(names.toString())
names.insertBefore('Lala', 'Edgar')
names.insertAfter('Michel', 'Edgar')
console.log(names.toString())
console.log(names.contains('Edgar'))
console.log(names.next('Edgar'))
console.log(names.next('Michel'))
console.log('初始值', names.toString())
names.front('Edgar')
console.log('移到最前', names.toString())
names.end('Edgar')
console.log('移到最后', names.toString())
console.log(names.hasPrev('Edgar'))
console.log(names.hasNext('Edgar'))
names.moveTo('Lala', 5) // 超过listsize长度，为什么结果是正确的？
console.log('moveTo', names.toString())


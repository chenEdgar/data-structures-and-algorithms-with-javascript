function Dictionary() {
  this.datastore = []
  this.add = add
  this.remove = remove
	this.showAll = showAll
	this.count = count
	this.clear = clear
}

function add(key, value) {
  this.datastore[key] = value
}

function find(key) {
  return this.datastore[key]
}

function remove(key) {
  delete this.datastore[key]
}

function showAll() {
  // for (const key in this.datastore) {
  //   if (this.datastore.hasOwnProperty(key)) {
  //     const value = this.datastore[key]
  //     console.log(`key:${key} => value:${value}`)
  //   }
	// }
	Object.keys(this.datastore).sort().forEach(key => { // 字典展示顺序，按键排序
		console.log(`key:${key}=>value: ${this.datastore[key]}`)
	})
}
function count() {
	return Object.keys(this.datastore).length
}

function clear() {
	for (const key in this.datastore) {
		if (this.datastore.hasOwnProperty(key)) {
			delete this.datastore[key]
		}
	}
}
// 例子
let pbook = new Dictionary()

pbook.add('A', 1)
pbook.add('D', 4)
pbook.add('C', 3)
pbook.add('B', 2)

pbook.showAll()
console.log('count=>', pbook.count())
pbook.clear()
console.log('清除count=>', pbook.count())
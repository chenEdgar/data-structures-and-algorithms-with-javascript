/**
 * 创建一个记录学生成绩的对象，提供一个添加成绩的方法，以及一个显示学生平均成绩的方法
 */
function StdsGrades() {
  this.total = []
}

/**
 *
 * @param id 学生id Number
 * @param grades 学生成绩，Array [90,89]
 */
StdsGrades.prototype.add = function add(id, grades) {
  if (this.total[id]) {
    this.total[id].push(grades)
  } else { // 第一次使用
    this.total[id] = grades
  }
}
/**
 * 一个学生的成绩平均值
 * @param id 学生id Number
 */
StdsGrades.prototype.avg = function avg(id) {
  var avg = 0
  if (!this.total[id]) {
    console.log('id=' + id + '学生不存在')
    return
  }
  var sum = this.total[id].reduce(function (num1, num2) {
    return num1 + num2
  })
  avg = sum / this.total[id].length
  console.log('学生' + id + '的平均成绩为：', avg.toFixed(2))
  return avg.toFixed(2)
}

/**
 * 所有学生的平均值
 */
StdsGrades.prototype.avgs = function avgs() {
  var avgs = 0
  var sum = 0
  if (!this.total.length) {
    console.log('请录入学生成绩')
    return
  }
  this.total.forEach(function (item) {
    var eachAvg = item.reduce(function (num1, num2) {
      return num1 + num2
    })
    sum += eachAvg / item.length
  })
  avgs = (sum / this.total.length).toFixed(2)
  console.log('所有学生平均成绩为：', avgs)
  return avgs
}

// 使用
var gradesSys = new StdsGrades()
gradesSys.add(0, [89, 99, 78, 88])
gradesSys.avg(0)
gradesSys.add(1, [88, 89, 89.9, 78.9])
gradesSys.avg(1)

gradesSys.avgs()

var gradesSys1 = new StdsGrades()
gradesSys1.avgs()
// gradesSys1.add(0, [89, 99, 78, 88])

let fs = require('fs')
let readlineSync = require('readline-sync');
let List = require("./list2.js")

function readFile (fname) {
/* var readFilePromise = new Promise(function (resolve, reject) {*/
  return new Promise((resolve, reject) => {
    let movies = []
    fs.readFile(fname, 'utf-8', (err, data) => { // 异步执行
      if (err) {
        console.log('Error: readFile Error', err)
        reject(err)
      } else {
        movies = data.split(/\r\n/)
        movies.forEach((movie) => {
          movie.trim()
        })
      }
      resolve(movies)
      // return movies
    })
  })
/*  readFilePromise.then((response) => {
    console.log('success', response)
  }).catch(err => {
    console.log('err', err)
  })*/
}

function displayList(list) {
  // for (list.front(); list.currPos < list.length(); list.next()) { // 注意：list.currPos 是一个方法, list.front()，list.next()返回undefined也是会执行的
  //   list.getElement()
  // }
  // console.log(list.length(), list.currPos(), list.front(), list.next())
  for (list.front(); list.currPos() < list.length(); list.next()) {
    if(list.getElement() instanceof Customer) {
      console.log(list.getElement()['name'] + ',' + list.getElement()['movie'])
    } else {
      console.log(list.getElement())
    }
  }
}

function Customer(name, movie) {
  this.name = name
  this.movie = movie
}

function checkOut(name, movie, movieList, customerList) {
  if(movieList.contains(movie)) {
    let c = new Customer(name, movie)
    customerList.append(c)
    movieList.remove(movie)
  } else {
    console.log(movie + ' is not available')
  }
}

// 测试
let movies = readFile('./movie.txt')
movies.then(response => {
  console.log('movie', response)
  // testCheckOut(response)
  // 增加交互，读取命令行输入
  testCheckOutEnhance(response)
}).catch(err => {
  console.log('err', err)
})

function testCheckOut(movies) {
  let movieList = new List()
  let customers = new List()
  
  for (let i = 0, len = movies.length; i < len; ++i) {
    movieList.append(movies[i])
  }
  console.log('---avalible movies: ---\n')
  displayList(movieList)
  checkOut('控方证人 Witness for the Prosecution', '美丽人生 La vita è bella', movieList, customers)
  console.log('---customer rentals movies:---\n')
  displayList(customers) // 控方证人 Witness for the Prosecution,美丽人生 La vita è bella
  
}
function testCheckOutEnhance(movies) {
  let movieList = new List()
  let customers = new List()
  
  for (let i = 0, len = movies.length; i < len; ++i) {
    movieList.append(movies[i])
  }
  console.log('---avalible movies: ---\n')
  displayList(movieList)
  
  // Wait for user's response.
  let name = readlineSync.question('May I have your name? ') // wind10 cmd 看不到提示
  console.log('Hi ' + name + '!')
  let movie = readlineSync.question('What movie would you like? ')
  
  checkOut(name, movie, movieList, customers)
  console.log('---customer rentals movies:---\n')
  displayList(customers) // 控方证人 Witness for the Prosecution,美丽人生 La vita è bella
  
}
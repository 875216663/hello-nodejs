//流数据，stream就是把一个数据直接通过pipe流入到另一个数据中，不占内存

var fs = require('fs')

var myReadStream = fs.createReadStream(__dirname + '/readMe.txt')    //指定路径的文件readMe.txt中读取数据
//获取编码的是文本而不是二进制数字
myReadStream.setEncoding('utf8')
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt')
var data = ''

//有数据获取就激发回调函数，数据多的话就会分段处理
myReadStream.on('data', function (chunk) {
    date +=chunk
    console.log('new chunk received')
    console.log(chunk)                   //打印出当前数据块的内容。数据块以Buffer的形式提供，可以是文本也可以是二进制数据。
    myWriteStream.write(chunk)
})

//获取代码后施行的
myReadStream.on('end', function () {
    console.log(data)
})

// var writeData = 'hello world'
// myWriteStream.write(writeData)
// myWriteStream.end()
// myWriteStream.on('finish', function () {
//     console.log('finished')
// })


// // 使用管道，代码量更少
// myReadStream.pipe(myWriteStream)
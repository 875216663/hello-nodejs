//异步函数和同步函数，一个是顺序执行，一个是执行主线程，有回调函数放在事件队列，等空闲时候执行

var fs = require('fs')//

// 同步读写文件，顺序执行，如果读取时间很长，会阻塞进程
var readMe = fs.readFileSync('readMe.txt', 'utf8')  //读文档用utf8输出并且给变量readMe赋值
fs.writeFileSync('writeMe.txt', readMe)     //同步写一个文档，并且文档内容是readMe
fs.writeFileSync('writeMe.txt', readMe)   

console.log(readMe)
console.log('finished sync')

// 异步读写文件
// 异步事件，Nodejs 放到一个事件队列，注册事件，完成后执行主线程
// 当主线程空闲时，取出执行事件，从线程池中发起线程执行事件， 当事件执行完成后通知主线程。这就是异步高效的原因。

//最后一个是回调函数
var readMe = fs.readFile('readMe.txt', 'utf8', function (err, data) {
    fs.writeFile('writeMe.txt', data, function () {
        console.log('writeMe has finished')
    })
})

console.log('end')

var http = require('http')
var fs = require('fs')  //可以引入数据流

//有请求时候发起
var onRequest = function (req, res) {
    console.log('request received')
    // res.writeHead(200, { 'Content-Type': 'text/html' })
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    //创建一个读取流来读取当前目录下的 index.html 文件
    var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8')
    // 使用 pipe 方法将文件的内容直接发送到响应
    myReadStream.pipe(res)
}
    

var server = http.createServer(onRequest)
server.listen(3000)
console.log('server started on http://127.0.0.1:3000')


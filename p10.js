var http = require('http') //导入 Node.js 的 http 模块

//创建服务器，有人访问就会响应
var onRequest=function (req, res) {
    console.log('request received')
    res.writeHead(200, { 'Content-Type': 'application/json' })  //设置响应的状态码和头部，是json类型的文件
    var myObj = {
        name: 'able',
        job: 'programmer',
        age: 27
    }
    res.end(JSON.stringify(myObj))   //将这个json编程为字符串类型的，叫做序列化
    //反序列化需要用到JSON.parse()
}

//创建一个 HTTP 服务器
var server = http.createServer(onRequest)

server.listen(3000)
console.log('server started on http://127.0.0.1:3000')


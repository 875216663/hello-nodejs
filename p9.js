var http = require('http') //导入 Node.js 的 http 模块

//创建一个服务器，这个响应有请求和回应，在接受请求也就是输入浏览器网址，可以给出相应回应
//当有人通过浏览器访问我们的服务器时，这个函数就会被调用。
var onRequest=function (req, res) {
    console.log('request received')
    res.writeHead(200, { 'Content-Type': 'text/plain'})  //告诉访问者的第一条消息：“嗨，一切都很好（这就是那个数字 200 的意思），并且我给你的回应就是简单的文本（text/plain）”。
    res.end('hello from out application')  //给访问者的回应：“你好，这是我们的应用程序”
}
//创建一个 HTTP 服务器
var server = http.createServer(onRequest);

//这告诉服务器：“请在 3000 这个频道上等待人们的访问，并只在这台计算机上运行”。127.0.0.1 是计算机的一个特殊地址，意味着“这台计算机”
server.listen(3000,'127.0.0.1')
//给自己的另一个“便条”，告诉自己：“好了，服务器已经启动，它正在 http://127.0.0.1:3000 这个地址上等待人们的访问”
console.log('server started on http://127.0.0.1:3000')


var http = require('http')
var url = require('url') //处理解析url
var querystring = require('querystring')//

function startServer(route, handle) {
    var onRequest = function (req, res) {
        console.log('request received ' + req.url)
        var pathname = url.parse(req.url).pathname

        var data = ""
        req.on("error", function (err) {
            console.error(err)
        }).on("data", function (chunk) {   //请求的数据到达服务器时，这个事件会被触发
            data += chunk
        }).on("end", function () {   //当所有请求数据都已接收完毕时，这个事件会被触发。

            if (req.method === "POST") {
                if (data.length > 1e6) {
                    req.connection.destroy() // 如果数据很大，就断开
                }
                route(handle, pathname, res, querystring.parse(data))
            } else {
                //不是POST请求，则解析URL中的查询参数并调用`route`函数
                var params = url.parse(req.url, true).query
                route(handle, pathname, res, params)
            }
        })
        // 或者
        // var data = []
        // data.push(chunk)
        // data = Buffer.concat(data).toString()

    }
    var server = http.createServer(onRequest)
    server.listen(3000)
    console.log('server started on http://127.0.0.1:3000')
}

module.exports.startServer = startServer
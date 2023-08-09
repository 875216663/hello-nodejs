var server = require('./p12')
var router = require('./router')
var handler = require('./handler')

var handle = {}
// // key是路径，value是处理函数
//通过在 handle 对象中建立路径到这些处理函数的映射
handle['/'] = handler.home
handle['/home'] = handler.home
handle['/review'] = handler.review
handle['/api/v1/records'] = handler.api_records

// server.startServer(router.route, handle)

//p12
server.startServer(router.route,handler);
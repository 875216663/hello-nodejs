//全局对象

console.log('hello world');



// 箭头函数，es6的写法
setTimeout(() => {
    console.log("3 seconds have passed 1");
}, 3000);
//正常语法
setTimeout(function () {
    console.log("3 seconds have passed 2");
}, 3000);



// 每间隔2秒,不断执行
setInterval(function () {
    console.log("2 seconds have passed");
}, 2000);
//每间断两秒，执行并且加上变量
var time = 0
setInterval(function () {
    time +=2;
    console.log(time+ " seconds have passed");
}, 2000);


var time = 0
var timer = setInterval(function () {
    time += 2;
    console.log(time + " seconds have passed");
    if (time > 6) {
        clearInterval(timer);//清除间隔器
        console.log("clearInterval")
    }
}, 2000)



// 输出当前目录名称
console.log(__dirname)

//带绝对路径的文件名，到达文件名字
console.log(__filename)

console.log('end')
console.dir(global)

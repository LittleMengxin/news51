const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'root',
    database:'newsql'
})
//渲染页面
exports.shouSignin = (req, res)=>{
    res.render('signin.html')
}
//登陆请求
exports.handleSignin = (req, res)=>{
    const body = req.body
    alert('测试成功')
}
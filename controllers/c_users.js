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


    const sqlstr = "SELECT *FROM 'users' WHERE email = ?"
    connection.query(sqlstr, body.email, (err, data)=>{
        if(err){
            return res.send(err)
        }
        if(!data[0]){
            return res.send('该邮箱不存在，快注册一个')
        }
        if(boyd.password != data[0].password){
            return res.send('密码不正确')
        }
        res.redirect('./')
    })
}
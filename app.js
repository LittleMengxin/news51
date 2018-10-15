const express = require('express')
const router = require('./router')
const bodyparser = require('body-parser')
const app = express()

app
    .engine('html', require('express-art-template'))

    .use('/public', express.static('./public'))
    .use('/node_modules', express.static('./node_modules'))
    .use(bodyparser.urlencoded({
        extended: false
    }))



    .use(router)

    .listen(22222, () => {
        console.log('success to run 22222!!!!');

    })
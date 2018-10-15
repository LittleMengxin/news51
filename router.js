const express = require('express')
const c_user = require('./controllers/c_users')
const router = express.Router()
router.get('/signin', c_user.shouSignin)
router.post('/signin', c_user.handleSignin)


module.exports = router
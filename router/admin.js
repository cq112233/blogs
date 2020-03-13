//引入数据加密模块
const bcrypt = require('bcrypt')
// 引入数据库用户文件
const {User,usercreate} = require('../database/user.js')
//创建路由需要express模块
const express = require('express')
//创建home路由
const admin = express.Router()
//登入界面
admin.get('/login',require('./functionalBlock/Interface.js'))
//登入路由功能
admin.post('/login',require('./functionalBlock/LoginFunction.js'))
//用户页面
admin.get('/user',require('./functionalBlock/userface.js'))
//用户页面
admin.post('/user-edit',require('./functionalBlock/usereditFunctional.js'))
//退出功能
admin.get('/exit',require('./functionalBlock/userexit.js'))
//新增用户功能
admin.get('/addUser',require('./functionalBlock/adduser.js'))

admin.post('/addUser',require('./functionalBlock/adduserFunctional.js'))
// admin.get('/article',(req,res)=>{
// 	res.render('admin/article')
// })

// admin.get('/article-edit',(req,res)=>{
// 	res.render('admin/article-edit')
// })

// 向外暴露admin
module.exports = admin
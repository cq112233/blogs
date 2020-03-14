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
//修改用户
admin.post('/user-edit',require('./functionalBlock/usereditFunctional.js'))
//退出功能
admin.get('/exit',require('./functionalBlock/userexit.js'))
//新增/修改用户跳转页面
admin.get('/addUser',require('./functionalBlock/adduser.js'))
//添加用户功能
admin.post('/addUser',require('./functionalBlock/adduserFunctional.js'))
//删除用户
admin.get('/delete',require('./functionalBlock/deleteUser.js'))
//文章界面
admin.get('/article',require('./functionalBlock/article.js'))
//编辑/修改文章
admin.get('/article-edit',require('./functionalBlock/article-edit.js'))
//编辑/修改文章功能
admin.post('/article-add',require('./functionalBlock/article-add.js'))
//修改文章功能
admin.post('/editArticle',require('./functionalBlock/editArticle.js'))
//删除文章
admin.get('/deleteArticle',require('./functionalBlock/deleteArticle.js'))

// admin.get('/article',(req,res)=>{
// 	res.render('admin/article')
// })

// admin.get('/article-edit',(req,res)=>{
// 	res.render('admin/article-edit')
// })

// 向外暴露admin
module.exports = admin
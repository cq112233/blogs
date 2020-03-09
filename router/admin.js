//创建路由需要express模块
const express = require('express')
//创建home路由
const admin = express.Router()
//匹配一级路由路径
admin.get('/login',(req,res)=>{
	res.render('admin/login')
})

admin.get('/user',(req,res)=>{
	res.render('admin/user')
})

admin.get('/article',(req,res)=>{
	res.render('admin/article')
})
admin.get('/article-edit',(req,res)=>{
	res.render('admin/article-edit')
})
admin.get('/user-edit',(req,res)=>{
	res.render('admin/user-edit')
})
// 向外暴露admin
module.exports = admin
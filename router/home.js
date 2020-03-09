//创建路由需要express模块
const express = require('express')
//创建home路由
const home = express.Router()
//匹配一级路由路径
home.get('/login',(req,res)=>{
	//访问文件的路径
	res.render('admin/login')
})
// 向外暴露home
module.exports = home
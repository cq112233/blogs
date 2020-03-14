//创建路由需要express模块
const express = require('express')
// const template = require('art-template')
// const dateformat = require('dateformat')
// template.defaults.imports.dateformat = dateformat
//创建home路由
const home = express.Router()
//前台展示界面
home.get('/',require('./home/index.js'))
//文章展示界面
home.get('/article',require('./home/article.js'))
//文章提交功能
home.post('/comment',require('./home/comment.js'))
//退出功能
home.get('/exit',require('./home/homeexit.js'))
// 向外暴露home
module.exports = home
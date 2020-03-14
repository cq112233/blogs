//引入文章数据库
const {Article} = require('../../database/article.js')
const path = require('path')
// 引入表单二进制文件解析模块 formidable
const formidable = require('formidable')
// const {User} = require('../../database/user.js')
//创建实例对象
const form = new formidable.IncomingForm()
//拼接地址
const adress = path.join(__dirname,'../','../','uploadDir')

form.uploadDir = adress
//保留二进制文件的后缀
form.keepExtensions = true
module.exports = (req,res) =>{
	let id = req.query.id
	//根据id修改内容
	form.parse(req,async (err,fields,files)=>{
		// res.send(fields)
		// console.log(id)
		await Article.updateOne({_id:id},{
			title:fields.title,
			author:fields.author,
			date:fields.date,
			cover:files.cover.path.split('blog')[1],
			content:fields.content
		})
		res.redirect('/admin/article')
	})	
}
//引入文章集合
const {Article} = require('../../database/article.js')
//引入分页功能
const sexPage = require('mongoose-sex-page')
module.exports = async (req,res)=>{
	let currentPage = req.query.page
	req.app.locals.extendlink = 'article'
	//page 第一页
	//size 每页显示条数
	//display显示多少页
	//exec 向数据中查询
	let allArticle = await sexPage(Article).find().page(currentPage).size(2).display(3).populate('author').exec()
	// res.send(allArticle)
	res.render('admin/article',{
		allArticle
	})
}
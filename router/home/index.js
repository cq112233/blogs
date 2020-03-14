const {Article} = require('../../database/article.js')
const sexPage = require('mongoose-sex-page')
module.exports = async (req,res)=>{
	// res.send(req.query.page)
	//访问文件的路径
	let userArticle = await sexPage(Article).page(req.query.page).size(4).display(3).find().populate('author').exec()
	// res.send(userArticle)
	res.render('home/default',{
		userArticle,
		// yanse:'ni'
	})
	// res.send('ok')
}
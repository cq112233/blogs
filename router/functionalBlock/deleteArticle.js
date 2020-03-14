const {Article} = require('../../database/article.js')
module.exports =async (req,res)=>{
	// res.send(req.query.id)
	// res.render('admin/user')
	await Article.findOneAndDelete({_id:req.query.deleteArticle})
	res.redirect('/admin/article')
}
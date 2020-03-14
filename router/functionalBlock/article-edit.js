//引入文章数据库
const {Article} = require('../../database/article.js')
module.exports = async (req,res)=>{
	//获取修改文章id
	let editArticleId = req.query.id
	req.app.locals.extendlink = 'article'
	//修改文章
	let editArticle = await Article.findOne({_id:editArticleId}).populate('author')
	// res.send(editArticle)
	//修改的
	if(editArticleId){
		res.render('admin/article-edit',{
			link:'/admin/editArticle?id='+editArticleId,
			editArticle
		})
		console.log('修改文章');
	}else{
		res.render('admin/article-edit',{
			link:'/admin/article-add'
		})
		console.log('添加文章');
	}	
}
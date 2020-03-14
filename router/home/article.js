const {Article} = require('../../database/article.js')
const {Comment} = require('../../database/comment.js')
module.exports = async (req,res)=>{
	//传过来文章的id
	let id = req.query.id
	//根骨文章id获取文章信息
	let article = await Article.findOne({_id:id}).populate('author')
	//根据该文章id评论数据
	let comments = await Comment.find({aid:id}).populate('uid')
	// res.send(comments)
	//访问文件的路径
	res.render('home/article',{
		article,
		comments
	})
}
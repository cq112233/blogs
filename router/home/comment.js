const {Comment} = require('../../database/comment.js')
module.exports = async (req,res)=>{
	const {content,aid,uid} = req.body
	//创建评论
	await Comment.create({
		content:content,
		aid:aid,
		uid:uid,
		date:new Date()
	})
	res.redirect('/home/article?id=' + aid)
}
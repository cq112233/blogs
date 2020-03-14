//映入数据库模块
const mongoose = require('mongoose')
// 创建文章集合规则
const commentSchema = mongoose.Schema({
	//评论文章
	aid:{
		type: mongoose.Schema.Types.ObjectId,
		ref:'article',
		// required:[true,'请填写作者']
	},
	// 评论用户
	uid:{
		type: mongoose.Schema.Types.ObjectId,
		ref:'user',
		// required:[true,'请填写作者']
	},
	//评论时间
	date:{
		type:Date,
	},
	// 评论内容
	content:{
		type:String,
	}
})
// 创建文章集合
const Comment = mongoose.model('comment',commentSchema)

// 向外创建接口
module.exports = {
	Comment
}
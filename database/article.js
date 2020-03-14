//映入数据库模块
const mongoose = require('mongoose')
// 创建文章集合规则
const articleSchema = mongoose.Schema({
	title:{
		type:String,
		maxlength:20,
		minlength:2,
		required:[true,'请填写文章标题']
	},
	author:{
		type: mongoose.Schema.Types.ObjectId,
		//集合的名字
		ref:'user',
		required:[true,'请填写作者']
	},
	date:{
		type:Date,
		default:Date.now
	},
	cover:{
		type:String,
		default:null
	},
	content:{
		type:String,
		
	}
})
// 创建文章集合
const Article = mongoose.model('article',articleSchema)

// 向外创建接口
module.exports = {
	Article
}
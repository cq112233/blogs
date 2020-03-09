// 第一步需要引入 mongoose 依赖包
const mongoose = require('mongoose')
//第二步创建数据库
mongoose.connect('mongode://localhost/blog')
.then(data => console.log('数据库接连成功'))
.catch(err => console.log('数据库接连失败'))
//第三步创建集合规则
const blogSchema = new mongoose.Schema({
	name:{
		type:String,
	},
	// name:{
	// 	type:String,
	// },
	// name:{
	// 	type:String,
	// }
})
// 第四步通过规则创建集合
const blogdata =  mongoose.model('user',blogSchema)
//向外暴露接口
module.exports = blogdata
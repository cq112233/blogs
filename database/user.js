//引入数据加密模块
const bcrypt = require('bcrypt')
// 第一步需要引入 mongoose 依赖包
const mongoose = require('mongoose')
//第三步创建集合规则
const blogSchema = new mongoose.Schema({
	//用户名
	username:{
		type:String,
		required:true,
		minlength:2,
		maxlength:10
	},
	//邮箱
	email:{
		type:String,
		//保证邮箱地址不重复
		unique:true,
		required:true
	},
	//密码
	password:{
		type:String,
		required:true
	},
	//admin//normol//角色
	roles:{
		type:String,
		required:true
	},
	//状态
	state:{
		type:Number,
		default:0
	},
})
// 第四步通过规则创建集合
const User =  mongoose.model('user',blogSchema)

//创建第测试用户
// async function usercreate(obj) {
// 	let salt = await bcrypt.genSalt(10)
// 	let hash = await bcrypt.hash(obj,salt)
// 	await User.create({
// 		username:'cq',
// 		email:"1549914423@qq.com",
// 		password:hash,
// 		roles:'admin',
// 		state:1
// 	})
// }
// usercreate('123456')

//向外暴露开放接口
module.exports = {
	User
}
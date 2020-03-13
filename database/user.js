//引入数据加密模块
const bcrypt = require('bcrypt')
// 第一步需要引入 mongoose 依赖包
const mongoose = require('mongoose')
//第三步创建集合规则
//验证规则
const joi = require('joi')
const blogSchema = new mongoose.Schema({
	//用户名
	username:{
		type:String,
		required:true,
		minlength:2,
		maxlength:100
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
async function usercreate(obj) {
	let salt = await bcrypt.genSalt(10)
	let hash = await bcrypt.hash(obj.password,salt)
	// let state = 0
	// if(obj.state == '启用'){
	// 	state = 0
	// }else{
	// 	state = 1
	// }
	await User.create({
		username:obj.username,
		email:obj.email,
		password:hash,
		roles:obj.roles,
		state:obj.state
	})
}
//初始化创建用户
// usercreate({
// 	username:"cq",
// 	email:'1549914423@qq.com',
// 	password:'123456',
// 	roles:'admin',
// 	state:'1'
// })
const adduserSchema = async (obj,next) => {
	//验证注册用户的数据格式
	const SChema = {
		username:joi.string().min(2).max(12).required().error(new Error('usename属性没有通过验证')),
		// birth:joi.number().min(1900).max(2300).error(new Error('birth没有通过验证'))
		email:joi.string().email().required().error(new Error('邮箱没有通过验证')),
		password:joi.string().regex(/^[0-9a-zA-z]{3,30}$/).required().error(new Error('密码没有通过验证')),
		roles:joi.string().valid('normal','admin').required().error(new Error('角色没有通过验证')),
		state:joi.string().valid('0','1').required().error(new Error('状态值没有通过验证')),
	}
	try{
		await joi.validate(obj,SChema)
	}catch(er){
		return next(JSON.stringify({path:'/admin/addUser',message:er.message}))
		// return res.redirect('/admin/addUser?message='+er.message)
	}
	console.log('验证通过');
}

//向外暴露开放接口
module.exports = {
	User,
	usercreate,
	adduserSchema,
}
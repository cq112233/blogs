//引入验证模块
const joi = require('joi')
// 引入数据库用户文件
const {User,usercreate,adduserSchema} = require('../../database/user.js')
//添加用户功能
module.exports = async (req,res,next) =>{
	//验证规则
	adduserSchema(req.body,next)
	//创建/注册用户
	let isUserName = await User.find({username:req.body.username})
	let isEmail = await User.find({email:req.body.email})
	if (isUserName.length == 0 && isEmail.length == 0) {
		usercreate(req.body)
		// res.send('创建用户成功')
		res.redirect('/admin/user')
	}else{
		return next(JSON.stringify({path:'/admin/addUser',message:'用户名或邮箱地址已存在'}))
		// res.redirect('/admin/addUser?message='+'用户名或邮箱地址已存在')
	}
}
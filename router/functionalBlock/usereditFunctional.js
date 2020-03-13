const {User} = require('../../database/user.js')
const bcrypt = require('bcrypt')
module.exports = async (req,res,next)=>{
	//获取表单中的数据
	let body = req.body
	//获取地址栏中数据
	let id = req.query.id
	//根据地址栏中id数据获取修改对象
	let edituser = await User.findOne({_id:req.query.id})
	//比对对象中密码与输入密码
	let isVailde = await bcrypt.compare(req.body.password,edituser.password)
	if(isVailde){
		//如果密码正确,将更改数据库中的值
		let data= await User.updateOne({_id:req.query.id},{	
			username:req.body.username,
			email:req.body.email,
			roles:req.body.roles,
			state:req.body.state
		})
		//切换到用户列表
		res.redirect('/admin/user')
	}else{
		//设置传递对象
		let props = {path:'/admin/addUser',message:'密码比对失败',id:id}
		//将对象转化成字符串,传递到错误处理中间件
		next(JSON.stringify(props))
	}
}
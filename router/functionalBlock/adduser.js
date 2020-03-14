const {User} = require('../../database/user.js')
//引入数据加密模块
const bcrypt = require('bcrypt')
//添加/修改用户界面
module.exports = async (req,res)=>{
	req.app.locals.extendlink = 'user'
	//如果过来id,则是修改操作
	let id = req.query.id
	if (id) {
		let editUser = await User.findOne({_id:id})
		
		// res.send(editUser)
		res.render('admin/user-edit',{
			message:req.query.message,
			id:req.query.id,
			editUser,
			link:'/admin/user-edit?id='+id,
			button:'修改'
			// pass
		})
	} 
	//如果没有传来id,则是添加用户
	else{
		// res.send('ok')
		res.render('admin/user-edit',{
			message:req.query.message,
			link:'/admin/addUser',
			button:'添加'
		})
	}
}
//引入数据库中的用户数据
const { User } = require('../../database/user.js')
//用户界面
module.exports = async (req,res)=>{
	// -----------分页功能---------
	//获取请求中页码
	let page = req.query.page || 1
	//获取用户数目
	let count = await User.countDocuments({})
	//设置每页数目
	let pages = 2
	//得到总页数
	let pageNum = Math.ceil(count/pages)
	//页码
	let skipPage = (page-1)*2
	//显示的用户
	let Usercollent = await User.find().limit(pages).skip(skipPage)
	// Usercollent.forEach(item =>{
	// 	console.log(item)
	// 	res.render('admin/user',{
	// 		id:item._id,
	// 		name:item.username,
	// 		email:item.email,
	// 		roles:item.roles,
	// 		state:item.state
	// 	})
	// })
	res.render('admin/user',{
		Usercollent,
		page,
		pageNum,
	})
	
}
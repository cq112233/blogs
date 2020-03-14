//登入功能
// 引入数据库用户文件
const {User} = require('../../database/user.js')
//引入数据加密模块
const bcrypt = require('bcrypt')

module.exports = async (req,res)=>{
	// es6结构解构解析出客户端发来的数据,前台后台度可以实现
	let {userEmail,userPassword} = req.body
	// console.log(req.body);
	//检测邮箱输入是否为空
	if(userEmail.trim().length == 0){
		res.render('admin/error',{
			msg:'错误文件'
		})
		return
	}
	//检测密码是否为空
	if(userPassword.trim().length == 0){
		res.status(404).send('请输入密码')
		return
	}
	// console.log(typeof User);
	//返回的是promise对象
	let backdata = await User.findOne({email:userEmail})
	// console.log(backdata);
	//如果查询到用户了
	if(backdata){
		// 获取数据库中的用户对象中的密码,与输入密码进行比较,如果成功返回布尔值
		let isvaild =  await bcrypt.compare(userPassword,backdata.password )
		//如果比对密码成功,进入用户页面
		if(isvaild){
			//向客户端发送cookie令牌,将数据库用户对象的name赋值给请求对象等下次来访问时就携带请求属性
			req.session.username = backdata.username
			req.session.roles = backdata.roles
			//将放回来的对象挂载到app.locals对象
			req.app.locals.info = backdata
			//判断用户是 普通用户还是后台管理用户
			if(backdata.roles == 'admin'){
				res.redirect('/admin/user')
			}else{
				res.redirect('/home')
			}
		}
		//密码输错
		else{
			res.render('admin/error',{
				msg:'你输入的密码错误'
			})
			return 
		}
	}
	//没查到用户
	else{
		res.render('admin/error',{
			msg:'你输入的用户不存在'
		})
		return 
	}
}
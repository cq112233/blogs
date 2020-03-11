//引入session令牌登记
const session = require('express-session')
// 第一步引入 express依赖包
const express = require('express')
// 第二步 创建服务器
const app = express()
// 第九步引入数据库
require('./database/database.js')
//第十一步引入body-parser
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))
// 第七步,开放静态资源目录,可以通过地址直接访问静态文件,如图片,样式
const path = require('path')
const adress = path.join(__dirname,'public')
app.use(express.static(adress))  
//第十二步密码加密
//第十三步令牌加密
app.use(session({secret:'abc'}))
// 第四步创建数据库或或引入数据库

// 第八步,设置模板路径,设置默认后缀,用什么来渲染模板后缀模板
app.set('views',path.join(__dirname,'views'))
app.set('view engine','art')
app.engine('art',require('express-art-template'))
// 第五步创建模块化路由

////第十思步,请求拦截判读用户是否登入
app.use('/admin',(req,res,next)=>{
	if(req.url != '/login' && !req.session.username){
		// console.log(1);
		res.redirect('/admin/login')
	}else{
		// console.log(req.session.username);
		next()
	}
})
// 第六步 引入路由模块 admin主页 home主页
const home = require('./router/home.js')
const admin = require('./router/admin.js')

//为路由对象匹配请求路径,一级路径
// app.use('/',admin)
app.use('/home',home)
app.use('/admin',admin)
  
//第十步引入user
// const User = require('./database/user.js')
//开始登入

// 第三步 监听80端口
app.listen(80)
// 第四步 提示服务器创建成功
console.log('博客服务器创建成功');
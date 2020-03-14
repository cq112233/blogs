//引入日期处理格式模块
const config = require('config')
//引入日期处理格式模块
const morgan = require('morgan')
//引入日期处理格式模块
const dateformat = require('dateformat')
//引入日期处理格式模块
const template = require('art-template')
//引入session令牌登记
const session = require('express-session')
// 第一步引入 express依赖包
const express = require('express')
// 第二步 创建服务器
const app = express()
// 第九步连接数据库
require('./database/database.js')
//第十一步引入body-parser,解析post请求参数
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
console.log(config.get('title'));
if (process.env.NODE_ENV == 'development') {
	console.log('开发者环境');
	app.use(morgan('dev'))
} else{
	console.log('生产环境');
}
// console.log(process.env.NODE_ENV);


////第十四步,请求拦截判读用户是否已经登入
app.use('/admin',require('./middleData/dengru.js'))
// 第六步 引入路由模块 admin主页 home主页
const home = require('./router/home.js')
const admin = require('./router/admin.js')
//为路由对象匹配请求路径,一级路径
//登入界面
app.get('/',(req,res)=>{
	res.redirect('/admin/login')
})
app.use('/home',home)
app.use('/admin',admin)
//错误处理中间件
app.use((err,req,res,next)=>{
	let result = JSON.parse(err)
	let attr = []
	for(let key in result){
		if(key != 'path'){
			attr.push(key + "=" + result[key])
		}
	}
	// console.log(attr)
	res.redirect(result.path + "?"+ attr.join('&'))
})
//第十步引入user
template.defaults.imports.dateformat = dateformat
// 第三步 监听80端口
app.listen(80)
// 第四步 提示服务器创建成功
console.log('博客服务器创建成功');
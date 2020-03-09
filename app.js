// 第一步引入 express依赖包
const express = require('express')
// 第二步 创建服务器
const app = express()

// 第五步创建模块化路由

// 第六步 引入路由模块 admin主页 home主页
const home = require('./router/home.js')
const admin = require('./router/admin.js')
//为路由对象匹配请求路径
app.use('/',home)
app.use('/home',home)
app.use('/admin1',admin)
// 第七步,开放静态资源目录,可以通过地址直接访问静态文件,如图片,样式
const path = require('path')
const adress = path.join(__dirname,'public')
app.use(express.static(adress))    
// 第八步,设置模板路径,设置默认后缀,用什么来渲染模板后缀模板
app.set('views',path.join(__dirname,'views'))
app.set('view engine','art')
app.engine('art',require('express-art-template'))

// 第三步 监听80端口
app.listen(80)
// 第四步 提示服务器创建成功
console.log('博客服务器创建成功');
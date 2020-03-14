// 第一步需要引入 mongoose 依赖包
const mongoose = require('mongoose')
// config 模块
const config = require('config')
// 第二步创建数据库
// mongoose.connect(`mongodb://${config.get(db.user)}:${config.get(db.pwd)}@$${config.get(db.host)}:${config.get(db.port)}/${config.get(db.name)}`,{useUnifiedTopology: true,useNewUrlParser: true})
mongoose.connect('mongodb://localhost/blog',{useUnifiedTopology: true,useNewUrlParser: true})
.then(data => console.log('数据库接连成功'))
.catch(err => console.log('数据库接连失败'))

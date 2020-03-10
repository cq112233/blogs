// 第一步需要引入 mongoose 依赖包
const mongoose = require('mongoose')
// 第二步创建数据库
mongoose.connect('mongodb://localhost/blog',{useUnifiedTopology: true,useNewUrlParser: true})
.then(data => console.log('数据库接连成功'))
.catch(err => console.log('数据库接连失败'))

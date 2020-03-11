//引入数据加密模块
const bcrypt = require('bcrypt')
//生成随机字符串
// 返回随机生成的字符串
async function run (obj) {
	let salt = await bcrypt.genSalt(10)
	let hash = await bcrypt.hash(obj,salt)
    return hash
}

run("1234").then(data =>console.log(data))
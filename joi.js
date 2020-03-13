const joi = require('joi')
// 定义规则
const SChema = {
	username:joi.string().min(3).max(10).required().error(new Error('usename属性没有通过验证')),
	birth:joi.number().min(1900).max(2300).error(new Error('birth没有通过验证'))
};
async function run(){
	try{
		await joi.validate({username:'abc',birth:1800},SChema)
	}catch(er){
		console.log(er.message);
		return
	}
	console.log('验证通过');
}
run()
//拦截所有请求,判断请求地址是否登入
module.exports = (req,res,next)=>{
	if(req.url != '/login' && !req.session.username){
		// console.log(1);
		res.redirect('/admin/login')
	}else{
		if(req.session.roles == 'normal'){
			res.redirect('/home')
			return
		}
		// console.log(req.session.username);
		next()
	}
}
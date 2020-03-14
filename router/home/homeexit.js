module.exports = (req,res)=>{
	req.session.destroy(function(){
		// res.send('ok')
		//删除cookie
		res.clearCookie()
		// // 跳转到登入页面
		res.redirect('/admin/login')
		// //删除用户信息
		req.app.locals.info = null
	})
}
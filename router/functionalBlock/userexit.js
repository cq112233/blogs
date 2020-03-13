module.exports = (req,res)=>{
	//删除cookie,跳转到登入页面
	req.session.destroy(function(){
		res.clearCookie()
		res.redirect('/admin/login')
	})
}
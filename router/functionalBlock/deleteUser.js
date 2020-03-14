const {User} = require('../../database/user.js')
module.exports =async (req,res)=>{
	// res.send(req.query.id)
	// res.render('admin/user')
	await User.findOneAndDelete({_id:req.query.id})
	res.redirect('/admin/user')
}
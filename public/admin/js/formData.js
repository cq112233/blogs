//表单数据获取
function formData(obj){
	//获取表单数据
	let form =obj.serializeArray()
	let arrt = {}
	//将表单内容添加到表单数据
	form.forEach(function(v,i){
		arrt[v.name] = v.value
	})
	return arrt
}
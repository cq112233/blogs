const fs = require('fs')
const promisify = require('util').promisify
const readFile = promisify(fs.readFile)
const adress = path.join(__dirname,'public','home','default.html')
const doc = async function(){
	return await readFile(adress)
}
console.log(doc());
const path = require('path')
app.get('/',(req,res)=>{
	res.send(home)
})
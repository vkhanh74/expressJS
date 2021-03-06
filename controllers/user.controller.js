var db = require('../db');
var shortid = require('shortid')

module.exports.index = function(req, res){
	return res.render('users/users', {
		users: db.get('users').value() //Lay du lieu tu file db.json su dung lowdb
	})
}

module.exports.search = function(req, res){
	var q = req.query.q // Lay gia tri cua q 
	var valueGot = db.get('users').value()
	var matchedUser = valueGot.filter(function(user) {
		return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
	});
	return res.render('users/users', {
		users: matchedUser
	}) 
}

module.exports.create = function(req, res){
	return res.render('users/create')
}

module.exports.view = function(req,res){ //Route parameter (Có 1 get request gửi đến 1 cái gì đó thì sẽ chạy callback)
	var id = req.params.id; //Cái gì đó được lưu trong 1 biến nằm trong request
	var user = db.get('users').find({id: id}).value() //Method của lowDB
	res.render('users/view', {
		user: user
	})
}

module.exports.postCreate = function(req, res){
	req.body.id = shortid.generate();
 	req.body.avatar = req.file.path.split('\\').slice(1).join('/');
	db.get('users').push(req.body).write() // Ghi du lieu vao db.json su dung lowdb
	res.redirect('/users') //Xong khi ghi du lieu xong chuyen nguoi dung ve trang user
}
// module.exports = {
// 	a: 1,
// 	b: 2
// }

//Tương đương
// module.exports.a = 1
// module.exports.b = 2
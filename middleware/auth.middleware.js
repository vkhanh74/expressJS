var db = require('../db');

module.exports.requireAuth = function(req,res,next){
	if(!req.signedCookies.userId){
		res.redirect('/auth/login');
		return;
	}

	var user = db.get('users').find({
		id: req.signedCookies.userId
	}).value();

	if(!user){
		res.redirect('/auth/login');
		return;
	}

	res.locals.user = user; //Biến res.locals chỉ tồn tại tại vòng đời req res trong request nào đó, nó không bị ảnh hưởng bởi các request khác

	next();
}
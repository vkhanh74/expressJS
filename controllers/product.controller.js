var db = require('../db');

module.exports.productDetail = function(req,res){
	var page = parseInt(req.query.page) || 1; //n
	var perPage = 8; // x

	var start = (page - 1) * perPage;
	var end = page * perPage;

	var productNumber = db.get('products').size().value();
	var pageNumber = Math.ceil(productNumber/8)

	res.render('product/product', {
		products: db.get('products').value().slice(start,end),
		pageNumber: pageNumber,
		currentPage: page,
	});
}
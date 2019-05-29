module.exports.postCreate = function(req,res,next) {
	var errors = []; // Tạo 1 emty array để lưu lỗi vào trong
	
	if(!req.body.name) {
		errors.push('Name is require')
	} // Nếu input name rỗng thì lỗi sẽ được đẩy vào trong mảng errors
	if(!req.body.phone) {
		errors.push('Telephone is require')
	} // Tương tự với phone
	if(errors.length) {
		res.render('users/create', {
			errors: errors,
			values: req.body
		})
		return;
	} //Nếu mảng errors có giá trị thì render lại trang create. Trong đó tạo 1 oject chứa errors = mảng errors tạo ban đầu để dùng cho file pug
	next();
}
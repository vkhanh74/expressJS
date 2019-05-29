const express = require('express');

var controller = require('../controllers/user.controller')
var validate = require('../validate/user.validate')
var authMiddleware = require('../middleware/auth.middleware')

var router = express.Router()

router.get('/', controller.index)

router.get('/cookie', function(req,res,next){
	res.cookie('user-id', 12345)
	res.send('Hello')
})

// Tìm kiếm users
router.get('/search', controller.search)

// Tạo người dùng mới
router.get('/create', controller.create)

// Tạo view user 
router.get('/:id', controller.view)

// Ghi dữ liệu vào database
router.post('/create', validate.postCreate, controller.postCreate)

module.exports = router;


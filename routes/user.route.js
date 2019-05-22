const express = require('express');

var controller = require('../controllers/user.controller')

var router = express.Router()

router.get('/', controller.index)

// Tìm kiếm users
router.get('/search', controller.search)

// Tạo người dùng mới
router.get('/create', controller.create)

// Tạo view user 
router.get('/:id', controller.view)

// Ghi dữ liệu vào database
router.post('/create', controller.postCreate)

module.exports = router;

const express = require('express');

var controller = require('../controllers/product.controller')

var router = express.Router()

router.get('/product', controller.productDetail)

module.exports = router;
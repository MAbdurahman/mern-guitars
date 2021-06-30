const express = require('express');
const productController = require('../controllers/productController');
const auth = require('../middleware/auth');
const { addProductValidator } = require('../middleware/validators');

const router = express.Router();

router.post('/', auth('createAny', 'product'),addProductValidator, productController.addProduct)







module.exports = router;
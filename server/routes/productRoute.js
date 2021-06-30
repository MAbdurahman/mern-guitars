const express = require('express');
const productController = require('../controllers/productController');
const auth = require('../middleware/auth');
const { addProductValidator } = require('../middleware/validators');

const router = express.Router();

router.post(
	'/',
	auth('createAny', 'product'),
	addProductValidator,
	productController.addProduct
);

router
	.route('/product/:id')
	.get(productController.getProductById)
	.patch(auth('updateAny', 'product'), productController.updateProductById)
	.delete(auth('deleteAny', 'product'), productController.deleteProductById);

router.get('/all', productController.allProducts);

module.exports = router;

const express = require('express');
const brandController = require('../controllers/brandController');
const auth = require('../middleware/auth');
const router = express.Router();


router
	.route('/brand/:id')
	.get(brandController.getBrand)
	.delete(auth('deleteAny', 'brand'), brandController.deleteBrandById);

router.post('/brand', auth('createAny', 'brand'), brandController.addBrand);

router.get('/all', brandController.getBrands);

module.exports = router;


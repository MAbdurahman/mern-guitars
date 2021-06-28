const express = require('express');
const brandController = require('../controllers/brandController');
const auth = require('../middleware/auth');
const router = express.Router();




router.post('/brand', auth('createAny', 'brand'), brandController.addBrand);


module.exports = router;


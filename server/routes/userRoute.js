const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/userControllers');
const auth = require('../middleware/auth');

router.route('/profile')
   .get(auth('readOwn', 'profile'), userControllers.profile)




module.exports = router;

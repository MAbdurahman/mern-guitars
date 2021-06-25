const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/userControllers');
const auth = require('../middleware/auth');

router
	.route('/profile')
	.get(auth('readOwn', 'profile'), userControllers.profile)
	.patch(auth('updateOwn', 'profile'), userControllers.updateProfile);

   router.patch(
		'/email',
		auth('updateOwn', 'profile'),
		userControllers.updateUserEmail
	);




module.exports = router;

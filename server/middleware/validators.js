const { check, validationResult } = require('express-validator');
const httpStatus = require('http-status');

const addProductValidator = [
	check('model')
		.trim()
		.not()
		.isEmpty()
		.withMessage('A guitar model is required!')
		.bail()
		.isLength({ min: 3 })
		.withMessage('Three characters minimum is  required!')
		.bail(),
	check('brand').trim().not().isEmpty().withMessage('A guitar brand is required!'),
	(req, res, next) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(httpStatus.BAD_REQUEST).json({
				errors: errors.array(),
			});
		}
		next();
	},
];

module.exports = {
	addProductValidator,
};
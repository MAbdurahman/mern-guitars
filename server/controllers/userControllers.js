const httpStatus = require('http-status');
const { ApiError } = require('../middleware/apiError');
const { userService, authService } = require('../services/serviceIndex');

const userControllers = {
	async profile(req, res, next) {
		try {
			const user = await userService.findUserById(req.user._id);
			if (!user) {
				throw new ApiError(httpStatus.NOT_FOUND, 'User Not Found!');
			}
         
			res.json(res.locals.permission.filter(user._doc));

		} catch (error) {
			next(error);
		}
	},
};

module.exports = userControllers;

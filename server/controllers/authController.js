const { authService } = require('../services/serviceIndex');
const httpStatus = require('http-status');

const authController = {
	//api/v1.0/auth/register
	async register(req, res, next) {
		try {
			const { email, password } = req.body;

         const user = await authService.createUser(email, password);

         const token = await authService.genAuthToken(user);


         res.cookie('x-access-token', token).status(httpStatus.CREATED).send({
            user, token
         });
      
			// const user = await authService.createUser(email, password);
			// const token = await authService.genAuthToken(user);

			//// send register email
			// await emailService.registerEmail(email, user);


		} catch (error) {
			next(error);

		}
	},

	//api/v1.0/auth/signin
	async signin(req, res, next) {
		try {
			const { email, password } = req.body;
			const user = await authService.signInWithEmailAndPassword( email, password );
			const token = await authService.genAuthToken(user); 

			res.cookie('x-access-token', token).send({ user, token });

		} catch (error) {
			next(error);
		}
	},

	async isauth(req, res, next) {
		res.json(req.user);
	},
};


module.exports = authController;
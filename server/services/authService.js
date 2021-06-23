const { User } = require('../models/userModel');
const { ApiError } = require('../middleware/apiError');
const httpStatus = require('http-status');
const userService = require('./userService');

const createUser = async ( email, password ) => {
   try {

      if (await User.emailTaken(email)) {
         throw new ApiError(httpStatus.BAD_REQUEST, `${email} already exists!`);
      
      }
         
      const user = new User({
         email, password
      });


      await user.save();
      return user;

   } catch (error) {
      console.log(`${error}`);
      throw error;
   }

}

const genAuthToken = user => {
	const token = user.generateAuthToken();
	return token;

};

const signInWithEmailAndPassword = async (email, password) => {
	try {
		const user = await userService.findUserByEmail(email);

		if (!user) {
			throw new ApiError(httpStatus.UNAUTHORIZED, `Email or Password is unauthorized!`);
		}
		if (!(await user.comparePassword(password))) {
			throw new ApiError(httpStatus.UNAUTHORIZED, `Email or Password is unauthorized!`);
		}

		return user;

	} catch (error) {
		throw error;
	}
};


module.exports = {
   createUser,
   genAuthToken,
   signInWithEmailAndPassword
}
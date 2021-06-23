const { User } = require('../models/userModel');
const { ApiError } = require('../middleware/apiError');
const httpStatus = require('http-status');

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


module.exports = {
   createUser,
   genAuthToken
}
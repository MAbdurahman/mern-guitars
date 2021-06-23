const { User } = require('../models/userModel');

const createUser = async ( email, password ) => {
   try {

      if (await User.emailTaken(email)) {
         console.log(`${email} already exists!`);
         
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
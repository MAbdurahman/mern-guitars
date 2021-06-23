const { User } = require('../models/userModel');
const { ApiError } = require('../middleware/apiError');
const httpStatus = require('http-status');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const validateToken = async token => {
	return jwt.verify(token, process.env.JWT_SECRET);
};

const findUserByEmail = async email => {
	return await User.findOne({ email: email });
};

const findUserById = async _id => {
	return await User.findById(_id);
};






module.exports = {
	findUserByEmail,
	findUserById,
	// updateUserProfile,
	// updateUserEmail,
	validateToken,
};

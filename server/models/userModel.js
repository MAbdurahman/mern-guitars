const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

//**************** variables ****************//
const name_pattern = /^([a-zA-Z]{2,}\s[a-zA-z]{1,}'?-?[a-zA-Z]{1,}\s?([a-zA-Z]{1,})?)/i;
const email_pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const password_pattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[-+_!@#$%^&*?]).{8,}$/i;
const lowercase_pattern = /^(?=.*[a-z])/g;
const uppercase_pattern = /^(?=.*[A-Z])/g;
const digit_pattern = /^(?=.*\d{1,})/g;
const special_pattern = /(?=.*[-+_!@#$%^&*?])/g;

const userSchema = mongoose.Schema({
   name: {
      type: String,
      trim: true,
      // required: [true, 'First and last name is required!'],
      match: [name_pattern, 'Enter first and last name!'],
      maxLength: 34,
      default: ''
   },
	email: {
		type: String,
		trim: true,
		required: [true, 'Email is required!'],
		unique: [true, 'Email already exists!'],
		match: [email_pattern, 'Enter a valid email!'],
	},
	password: {
		type: String,
		trim: true,
		required: [true, 'Password is required!'],
		match: [lowercase_pattern, 'Password must have a lowercase character!'],
		match: [uppercase_pattern, 'Password must have a uppercase character!'],
		match: [digit_pattern, 'Password must have a digit character!'],
		match: [
			special_pattern,
			`Password must include at least one: '-+_!@#$%^&*?'`,
		],
		match: [password_pattern, 'Password must have at least 8 characters!'],
	},
	role: {
		type: String,
		enum: ['user', 'admin'],
		default: 'user',
	},
	cart: {
		type: Array,
		default: [],
	},
	history: {
		type: Array,
		default: [],
	},
	verified: {
		type: Boolean,
		default: false,
	},
});

userSchema.pre('save', async function (next) {
	let user = this;

	if (user.isModified('password')) {
		const salt = await bcrypt.genSalt(10);
		const hash = await bcrypt.hash(user.password, salt);
		user.password = hash;
	}

	next();
});

userSchema.methods.generateAuthToken = function () {
	let user = this;
	const userObj = { sub: user._id.toHexString(), email: user.email };
	const token = jwt.sign(userObj, process.env.JWT_SECRET, { expiresIn: '1d' });
	return token;
};

userSchema.methods.generateRegisterToken = function () {
	let user = this;
	const userObj = { sub: user._id.toHexString() };
	const token = jwt.sign(userObj, process.env.JWT_SECRET, { expiresIn: '10h' });
	return token;
};

userSchema.statics.emailTaken = async function (email) {
	const user = await this.findOne({ email });
	return !!user;
};

userSchema.methods.comparePassword = async function (candidatePassword) {
	/// candidate password = unhashed password.
	const user = this;
	const match = await bcrypt.compare(candidatePassword, user.password);
	return match;
};

const User = mongoose.model('User', userSchema);
module.exports = { User };

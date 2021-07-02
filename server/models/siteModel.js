const mongoose = require('mongoose');

//**************** variables ****************//
const phone_pattern = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s.]{0,1}[0-9]{3}[-\s.]{0,1}[0-9]{4}$/i;
const email_pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const siteSchema = mongoose.Schema({
	address: {
		type: String,
      trim: true,
		required: [true, 'Address is required!'],
	},
	hours: {
		type: String,
      trim: true,
		required: [true, 'Hour is required!'],
	},
	phone: {
		type: String,
      trim: true,
		required: [true, 'Phone number is required!'],
		match: [phone_pattern, 'Preferred phone pattern is:  123-456-7890!'],
	},
	email: {
		type: String,
      trim: true,
		required: [true, 'Email address is required!'],
		match: [email_pattern, 'Enter valid email address!'],
	},
});

const Site = mongoose.model('Site', siteSchema);
module.exports = { Site };

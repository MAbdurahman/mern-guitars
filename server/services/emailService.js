const nodemailer = require('nodemailer');
const Mailgen = require('mailgen');
require('dotenv').config();

let transporter = nodemailer.createTransport({
	service: 'Gmail',
	secure: true,
	auth: {
		user: process.env.EMAIL,
		pass: process.env.EMAIL_PASSWORD,
	},
});

const registerEmail = async (userEmail, user) => {
	try {
		const emailToken = user.generateRegisterToken();
		let mailGenerator = new Mailgen({
			theme: 'default',
			product: {
				name: '🎸G-Spot',
				link: `${process.env.EMAIL_MAIL_URL}`,
			},
		});

		const email = {
			body: {
				name: userEmail,
				intro:
					"Thanks for registering to G-Spot! We're very excited to have you on board.🎸🪕🎻",
				action:{
					instructions: 'To validate your account, click here:',
					button:{
						color: '#1a73e8',
						text: 'Validate Account',
						link: `${process.env.SITE_DOMAIN}verification?t=${emailToken}`,
					},
				},
				outro:
					"Need help, or have questions? Just reply to this email, we'd love to help.",
			},
		};

		let emailBody = mailGenerator.generate(email);
		let message = {
			from: process.env.EMAIL,
			to: userEmail,
			subject: 'Welcome to G-Spot!',
			html: emailBody,
		};

		await transporter.sendMail(message);
		return true;

	} catch (error) {
		throw error;
	}
};

module.exports = {
	registerEmail,
};

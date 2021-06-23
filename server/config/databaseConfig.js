const mongoose = require('mongoose');
/* const colors = require('colors');

colors.enable(); */

const connectDatabase = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false,
		});

		console.log(
			`MongoDB connected with mongoose at: ${conn.connection.host}`.cyan
		);
      
	} catch (error) {
		console.error(`Error: ${error.message}`.red);
		process.exit(1);
	}
};

module.exports = connectDatabase;

//**************** imports ****************//
const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');

const connectDatabase = require('./config/databaseConfig');

//**************** variables ****************//
const app = express();
const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV;

//**************** config setup ****************//
dotenv.config();
colors.enable();

//**************** middleware ****************//
if (process.env.NODE_ENV === 'DEVELOPMENT') {
	app.use(morgan('dev'));
}
app.use(express.json());

//**************** routes ****************//

//**************** app listening ****************//
const server = app.listen(PORT, () => {
	console.log(
		`The server is listening at - http://127.0.0.1:${PORT} in ${NODE_ENV} mode🔥`
			.yellow
	);
});

















//**************** imports ****************//
//**************** imports ****************//
//**************** imports ****************//
//**************** imports ****************//
//**************** imports ****************//
//**************** imports ****************//
//**************** imports ****************//
//**************** imports ****************//
//**************** imports ****************//
//**************** imports ****************//
//**************** imports ****************//
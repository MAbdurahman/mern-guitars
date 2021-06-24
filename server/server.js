//**************** imports ****************//
const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const xss = require('xss-clean');
const mongoSanitize = require('express-mongo-sanitize');
const passport = require('passport');
const { jwtStrategy } = require('./middleware/passport');

const routes = require('./routes/routeIndex');
const connectDatabase = require('./config/databaseConfig');
const { handleError, convertToApiError } = require('./middleware/apiError');

//**************** variables ****************//
const app = express();
const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV;

//**************** config setup ****************//
dotenv.config();
colors.enable();
connectDatabase();
//**************** middleware ****************//
if (process.env.NODE_ENV === 'DEVELOPMENT') {
	app.use(morgan('dev'));
}
app.use(express.json());
app.use(xss());
app.use(mongoSanitize());
app.use(passport.initialize());
passport.use('jwt', jwtStrategy);

//**************** app routes ****************//
app.use('/api/v1.0', routes);

//**************** routes ****************//
app.get('/', (req, res) => {
	res.send(`<h1 style="text-align: center">API is at Home</h1>`);
});

//**************** custom errorHandling ****************//
app.use(convertToApiError);
app.use((err, req, res, next) => {
	handleError(err, res);
});
//**************** app listening ****************//
const server = app.listen(PORT, () => {
	console.log(
		`The server is listening at - http://127.0.0.1:${PORT} in ${NODE_ENV} mode🔥`
			.yellow
	);
});

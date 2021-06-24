const express = require('express');
const authRoute = require('./authRoute');
const userRoute = require('./userRoute');
const router = express.Router();


const routesIndex = [
	{
		path: '/auth',
		route: authRoute,
	},
	{
		path: '/users',
		route: userRoute
	}
];













routesIndex.forEach(route => {
	router.use(route.path, route.route);
});

module.exports = router;
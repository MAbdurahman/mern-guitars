const express = require('express');
const authRoute = require('./authRoute');
const userRoute = require('./userRoute');
const brandRoute = require('./brandRoute');
const router = express.Router();


const routesIndex = [
	{
		path: '/auth',
		route: authRoute,
	},
	{
		path: '/users',
		route: userRoute
	},
	{
		path: '/brands',
		route: brandRoute
	}
];













routesIndex.forEach(route => {
	router.use(route.path, route.route);
});

module.exports = router;
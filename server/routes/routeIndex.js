const express = require('express');
const authRoute = require('./authRoute');
const userRoute = require('./userRoute');
const brandRoute = require('./brandRoute');
const productRoute = require('./productRoute');
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
	},
	{
		path: '/products',
		route: productRoute
	}
];













routesIndex.forEach(route => {
	router.use(route.path, route.route);
});

module.exports = router;
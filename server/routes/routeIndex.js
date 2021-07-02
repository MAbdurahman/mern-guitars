const express = require('express');
const authRoute = require('./authRoute');
const userRoute = require('./userRoute');
const brandRoute = require('./brandRoute');
const productRoute = require('./productRoute');
const siteRoute = require('./siteRoute');
const router = express.Router();


const routesIndex = [
	{
		path: '/auth',
		route: authRoute,
	},
	{
		path: '/users',
		route: userRoute,
	},
	{
		path: '/brands',
		route: brandRoute,
	},
	{
		path: '/products',
		route: productRoute,
	},
	{
		path: '/site',
		route: siteRoute,
	}
];













routesIndex.forEach(route => {
	router.use(route.path, route.route);
});

module.exports = router;
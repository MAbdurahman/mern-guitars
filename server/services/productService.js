const mongoose = require('mongoose');
const httpStatus = require('http-status');
const { Product } = require('../models/productModel');
const { ApiError } = require('../middleware/apiError');


const addProduct = async body => {
	try {
		const product = new Product({
			...body,
		});
		await product.save();
		return product;

	} catch (error) {
		throw error;
	}
};








// {
//     "model":"Jet bt gold",
//     "brand":"6049a1ad9c9a2615b86c04f2",
//     "frets":22,
//     "woodtype":"Mahogany",
//     "description":"This is the content of the post",
//     "price":239,
//     "available":19,
//     "itemsSold":10,
//     "shipping":true
// }

module.exports = {
   addProduct
}
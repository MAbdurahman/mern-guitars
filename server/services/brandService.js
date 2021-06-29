const { Brand } = require('../models/brandModel');
const { ApiError } = require('../middleware/apiError');
const httpStatus = require('http-status');

const addBrand = async brandname => {
	try {
      if (await Brand.brandTaken(brandname)) {
         throw new ApiError(httpStatus.BAD_REQUEST, `The ${brandname} brand already exists!`);
      }

		const brand = new Brand({
			name: brandname,
		});

		await brand.save();
		return brand;

	} catch (error) {
		throw error;
	}
};

const getBrandById = async id => {
	try {
		const brand = await Brand.findById(id);
		if (!brand) throw new ApiError(httpStatus.NOT_FOUND, 'Brand Not Found!');
		return brand;

	} catch (error) {
		throw error;
	}
};

const deleteBrandById = async id => {
	try {
		const brand = await Brand.findByIdAndRemove(id);
		return brand;

	} catch (error) {
		throw error;
	}
};

const getBrands = async args => {
	try {
		let order = args.order ? args.order : 'desc';
		let limit = args.limit ? args.limit : 8;

		const brands = await Brand.find({})
			.sort([['_id', order]])
			.limit(limit);

		if (!brands) throw new ApiError(httpStatus.NOT_FOUND, 'Brands Not Found!');
		return brands;

	} catch (error) {
		throw error;
	}
};

module.exports = {
	addBrand,
	getBrandById,
	deleteBrandById,
	getBrands,
};

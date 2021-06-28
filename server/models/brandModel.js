const mongoose = require('mongoose');

const brandSchema = mongoose.Schema({
	name: {
      type: String,
      trim: true,
		required: [true, 'Brand name is required!'],
		unique: [true, 'Brand name already exists!'],
		maxlength: 80,
	},
});

brandSchema.statics.brandTaken = async function(brandname) {
	const newBrand = await this.findOne({brandname});
	return !!newBrand;
}


const Brand = mongoose.model('Brand', brandSchema);

module.exports = { Brand };

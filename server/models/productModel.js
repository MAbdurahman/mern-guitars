const mongoose = require('mongoose');
const aggregatePaginate = require('mongoose-aggregate-paginate-v2');
const Schema = mongoose.Schema;

const productSchema = mongoose.Schema({
	model: {
      type: String,
		required: [true, 'A guitar model is required!'],
		unique: [true, 'This guitar model already exists!'],
		maxlength: 250,
	},
	brand: {
		type: Schema.Types.ObjectId,
		ref: 'Brand',
		required: true,
	},
	frets: {
		type: Number,
		required: [true, 'The number of frets is required!']
	},
	woodtype: {
		type: String,
		required: [true, 'The wood type is required!']
	},
	description: {
      type: String,
		required: [true, 'A description is required!'],
		maxlength: 10000,
	},
	price: {
		type: Number,
		required: [true, 'The price is required!'],
		maxlength: 255,
	},
	available: {
		type: Number,
		required: [true, 'The quantity available is required!'],
		maxlength: 5000,
		default: 0,
	},
	itemSold: {
		type: Number,
		required: [true, 'The number sold is required!'],
		default: 0,
	},
	shipping: {
		type: Boolean,
		required: [true, 'Specify, free shipping or not!'],
		default: false,
	},
	images: {
		type: Array,
		default: [],
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

productSchema.statics.modelTaken = async function(model) {
   const newModel = await this.findOne({model});
   return !!newModel;
}

productSchema.plugin(aggregatePaginate);

const Product = mongoose.model('Product', productSchema);
module.exports = {
	Product,
};

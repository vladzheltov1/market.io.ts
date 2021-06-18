import { model, Schema } from 'mongoose';

const ProductSchema = new Schema({
    product_title: {type: String, required: true},
    product_description: {type: String, required: true},
    product_category: {type: String, required: true},
    product_price: {type: Number, required: true},
    product_sold: {type: Number, default: 0},
    product_available: {type: Number, default: 0},
    product_photo: {type: String, required: true}
});

module.exports = model('Product', ProductSchema);



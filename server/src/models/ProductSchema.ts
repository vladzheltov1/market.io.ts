import { model, Schema } from 'mongoose';

const ProductSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    sold: { type: Number, default: 0 },
    available: { type: Number, default: 0 },
    photo: { type: String, required: true }
});

module.exports = model('Product', ProductSchema);



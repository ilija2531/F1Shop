import { Schema, model } from 'mongoose';

const productSchema = new Schema({
    name: { type: String, required: true },
    image: { type: String},
    brand: { type: String },
    category: {type: String },
    description: { type: String },
    price: { type: Number, required: true },
    countInStock: { type: Number, required: true, default: 0 },
},{ timestamps: true });

export default model('Product', productSchema);
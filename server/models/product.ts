import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        default: 0,
    },
    picture: {
        type: String,
        required: true,
    },
    published: {
        type: Boolean,
        default: false,
    },
    category: {
        type: String, 
        required: true,
    },
    itemUrl: {
        type: String,
        required: true,
    },
     createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    }
});

const Product = mongoose.model('Product', productSchema);
export default Product;
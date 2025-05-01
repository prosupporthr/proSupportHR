import mongoose from 'mongoose';

export enum LabelEnum {
    Single = 'Single',
    Bundle = 'Bundle',
    Complete = 'Complete'
}

export const ProductCategories = [
    'All',
    'Health care',
    'Hiring & Onboarding',
    'Payroll & benefits',
    'Performance & employee relations',
    'Workspace operations & processes',
    'Free resources'
];

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
    files: {
        type: mongoose.Schema.Types.Array,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    tags: {
        type: mongoose.Schema.Types.Array,
        default: [],
    },
    tagline: {
        type: String,
        required: false,
    },
    label: {

    }
});

const Product = mongoose.model('Product', productSchema);
export default Product;
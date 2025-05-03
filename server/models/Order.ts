import mongoose from 'mongoose';

export enum OrderStatus {
    PENDING = 'PENDING',
    PAID = 'PAID',
    FAILED = 'FAILED',
}

const orderSchema = new mongoose.Schema({
    productId: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: false,
    },
    stripeReference: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: OrderStatus,
        default: OrderStatus.PAID,
    },
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);
export default Order;
import Order, { OrderStatus } from "~/server/models/Order";

export default defineEventHandler(async (event) => {
    const { id } = event.context.params as { id: string };
    const { status } = getQuery<{ status: OrderStatus }>(event);

    // find order
    const orderExists = await Order.findById(id);

    if (!orderExists) {
        throw createError({
            statusCode: 404,
            statusMessage: 'Order not found',
        });
    }

    if (orderExists.status === status) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Order already has this status',
        });
    }

    if (orderExists.status === OrderStatus.PAID) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Order already paid',
        });
    }

    if (orderExists.status === OrderStatus.FAILED) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Order already failed',
        });
    }
    
    // validate status
    const validStatuses = ['PENDING', 'PAID', 'FAILED'];
    if (!validStatuses.includes(status)) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Invalid status',
        });
    }

    const updatedOrder = await Order.findByIdAndUpdate(id, { status }, { new: true });

    if (!updatedOrder) {
        throw createError({
            statusCode: 404,
            statusMessage: 'Order not found',
        });
    }

    return {
        message: 'Order updated successfully!',
        data: updatedOrder,
        status: 'success',
    };
});
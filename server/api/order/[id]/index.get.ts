import Order from "~/server/models/Order";

export default defineEventHandler(async (event) => {
    const { id } = event.context.params as { id: string };

    // Find order
    const order = await Order.findById(id);

    if (!order) {
        throw createError({
            statusCode: 404,
            statusMessage: 'Order not found',
        });
    }

    return {
        message: 'Order fetched successfully',
        data: order,
        status: 'success',
    };
}); 
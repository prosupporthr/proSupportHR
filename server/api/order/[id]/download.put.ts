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

    // Check if download limit is reached
    if (order.numberoFDownloads >= 2) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Maximum download limit reached',
        });
    }

    // Increment download count
    const updatedOrder = await Order.findByIdAndUpdate(
        id,
        { $inc: { numberoFDownloads: 1 } },
        { new: true }
    );

    if (!updatedOrder) {
        throw createError({
            statusCode: 404,
            statusMessage: 'Order not found',
        });
    }

    return {
        message: 'Download count updated successfully',
        data: updatedOrder,
        status: 'success',
    };
}); 
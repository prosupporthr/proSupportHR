import { z } from 'zod';
import Order from '~/server/models/Order';

export default defineEventHandler(async (event) => {
    const orderSchema = z.object({
        productId: z.string().nonempty(),
        email: z.string().email('Invalid email address').nonempty(),
        phone: z.string().nonempty(),
        stripeReference: z.string().nonempty(),
    });

    const body = await readBody(event);

    const { success, error } = orderSchema.safeParse(body);
    if (!success) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Invalid request: ' + error.message,
        });
    }

    const newOrder = new Order({ ...body });
    const val = await newOrder.save();

    // send them an email

    return {
        message: 'order created!',
        data: val,
        status: 'success',
    }
});
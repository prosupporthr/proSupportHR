import { z } from 'zod';
import Order from '~/server/models/Order';
import Product from '~/server/models/product';
import Email from '~/server/utils/resend';

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

    const product = await Product.findById(body?.productId as string).exec();

    if (!product) {
        throw createError({
            statusCode: 400,
            statusMessage: 'This product was not found',
        });
    }

    if (Number(product?.price) < 1) {
        throw createError({
            statusCode: 400,
            statusMessage: 'This is a free product',
        });
    }

    const newOrder = new Order({ ...body, isFree: true });
    const val = await newOrder.save();


    // send them an email
    const { data, error: emailError } = await sendProductEmail({
        to: body?.email,
        productLinks: Array.isArray(product.files) ? product.files.map(file => `${useRuntimeConfig().HOST}/${file}`) : [],
        productDetails: {
            customerFirstName: newOrder?.email,
            downloadAttempts: 2,
            downloadDays: 30,
            downloadUrl: `${useRuntimeConfig().BASE_URL}/order/${newOrder?._id}`,
            moreTemplatesUrl: Array.isArray(product.files) ? product.files.map(file => `${useRuntimeConfig().HOST}/${file}`) : [],
            supportEmail: 'contact@prosupporthr.ca.',

            // description: product?.description as string,
            // name: product?.title as string,
            // price: product?.price as number,
            // imageUrl: product?.picture as string,
        },
    });

    if (emailError) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Invalid request: ' + emailError.message,
        });
    }

    console.log(data);

    return {
        message: 'order created!',
        data: val,
        status: 'success',
    }
});
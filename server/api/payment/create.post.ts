import { createPaymentIntent } from '~/server/utils/stripe';

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event);
        const { amount, currency = 'usd' } = body;

        if (!amount || isNaN(amount)) {
            throw createError({
                statusCode: 400,
                message: 'Amount is required and must be a number'
            });
        }

        const paymentIntent = await createPaymentIntent(amount, currency);

        return {
            clientSecret: paymentIntent.client_secret
        };
    } catch (error: any) {
        throw createError({
            statusCode: error.statusCode || 500,
            message: error.message || 'Error creating payment intent'
        });
    }
}); 
import { loadStripe } from '@stripe/stripe-js';

export const useStripe = () => {
    const config = useRuntimeConfig();
    const stripePromise = loadStripe(config.public.stripePublishableKey);

    const processPayment = async (amount: number) => {
        try {
            // Create payment intent
            const { clientSecret } = await $fetch('/api/payment/create', {
                method: 'POST',
                body: {
                    amount,
                    currency: 'usd'
                }
            });

            console.log(clientSecret);

            // Load Stripe
            const stripe = await stripePromise;
            if (!stripe) throw new Error('Stripe failed to initialize');

            // Initialize Elements
            const elements = stripe.elements({
                clientSecret: clientSecret as any
            });
            const paymentElement = elements.create('payment');
            paymentElement.mount('#payment-element');

            // Confirm the payment
            const { error } = await stripe.confirmPayment({
                elements,
                confirmParams: {
                    return_url: `${window.location.origin}/payment/success`,
                },
            });

            if (error) {
                throw error;
            }

            return true;
        } catch (error) {
            console.error('Payment error:', error);
            throw error;
        }
    };

    return {
        processPayment
    };
}; 
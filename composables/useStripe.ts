import { loadStripe } from '@stripe/stripe-js';
import { useUserState } from '~/assets/composables/useUserState';

export const useStripe = () => {
    const config = useRuntimeConfig();
    const stripePromise = loadStripe(config.public.stripePublishableKey);
    let elements: any = null;
    let paymentElement: any = null;

    const initializePayment = async (amount: number) => {
        try {
            // Create payment intent
            const { clientSecret } = await $fetch('/api/payment/create', {
                method: 'POST',
                body: {
                    amount,
                    currency: 'usd'
                }
            });

            if (!clientSecret) {
                throw new Error('Failed to create payment intent');
            }

            // Load Stripe
            const stripe = await stripePromise;
            if (!stripe) throw new Error('Stripe failed to initialize');

            // Initialize Elements
            elements = stripe.elements({
                clientSecret,
                appearance: {
                    theme: 'stripe',
                    variables: {
                        colorPrimary: '#4f46e5',
                        colorBackground: '#ffffff',
                        colorText: '#30313d',
                        colorDanger: '#df1b41',
                        fontFamily: 'Ideal Sans, system-ui, sans-serif',
                        spacingUnit: '4px',
                        borderRadius: '4px',
                    },
                },
            });

            paymentElement = elements.create('payment');
            paymentElement.mount('#payment-element');

            return true;
        } catch (error) {
            console.error('Payment initialization error:', error);
            throw error;
        }
    };

    const processPayment = async () => {
        try {
            const stripe = await stripePromise;
            if (!stripe || !elements || !paymentElement) {
                throw new Error('Payment not initialized');
            }

            const { email, phone, productId } = useUserState();
            // Validate the payment element
            // const { error: validationError } = await paymentElement.validateUserOn();
            // if (validationError) {
            //     throw new Error(validationError.message);
            // }



            console.log(elements);

            // Confirm the payment
            const { error } = await stripe.confirmPayment({
                elements,
                confirmParams: {
                    return_url: `${window.location.origin}/payment/success?email=${email?.value}&phone=${phone?.value}&productId=${productId?.value}`,
                    // receipt_email: ``
                },
            });

            if (error) {
                throw new Error(error.message || 'Payment failed. Please try again.');
            }

            return true;
        } catch (error) {
            console.error('Payment error:', error);
            throw error;
        }
    };

    return {
        initializePayment,
        processPayment
    };
}; 
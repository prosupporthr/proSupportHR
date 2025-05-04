<template>
  <div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-6">
      <!-- Test Mode Banner -->
      <div class="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <div class="flex">
          <div class="flex-shrink-0">
            <svg class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
            </svg>
          </div>
          <div class="ml-3">
            <h3 class="text-sm font-medium text-yellow-800">Test Mode</h3>
            <div class="mt-2 text-sm text-yellow-700">
              <p>This is a test payment. Use test card numbers:</p>
              <ul class="mt-2 list-disc list-inside">
                <li>4242 4242 4242 4242 - Success</li>
                <li>4000 0000 0000 9995 - Decline</li>
              </ul>
              <p class="mt-2">Use any future date for expiry and any 3 digits for CVC</p>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mb-8">
        <h1 class="text-2xl font-bold text-gray-900">Complete Your Payment</h1>
        <p class="mt-2 text-gray-600">Enter your payment details to complete the purchase</p>
      </div>

      <div class="space-y-6">
        <!-- Order Summary -->
        <div class="border rounded-lg p-4">
          <h2 class="text-lg font-semibold text-gray-900">Order Summary</h2>
          <div class="mt-4 space-y-2">
            <div class="flex justify-between">
              <span class="text-gray-600">Item</span>
              <span class="text-gray-900">{{ singleProduct.title }}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-600">Amount</span>
              <span class="text-gray-900">${{ singleProduct.price }}</span>
            </div>
          </div>
        </div>

        <!-- Payment Form -->
        <div class="space-y-4">
          <!-- Stripe Elements Container -->
          <div id="payment-element" class="border rounded-lg p-4"></div>

          <button
            @click="handlePayment"
            :disabled="isProcessing"
            class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span v-if="isProcessing">Processing...</span>
            <span v-else>Pay Now</span>
          </button>

          <!-- Error Message -->
          <div v-if="error" class="mt-4 p-4 bg-red-50 rounded-md">
            <div class="flex">
              <div class="flex-shrink-0">
                <svg class="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                </svg>
              </div>
              <div class="ml-3">
                <h3 class="text-sm font-medium text-red-800">Payment Error</h3>
                <div class="mt-2 text-sm text-red-700">
                  <p>{{ error }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserState } from '~/assets/composables/useUserState';
import { useProductsById } from '~/services/product';
  
const { initializePayment, processPayment } = useStripe();
const isProcessing = ref(false);
const error = ref<string | null>(null);
const route = useRoute()
const { email, phone, productId, updateEmail, updatePhone, updateProductId } = useUserState();
const id = route.params.id

console.log(email?.value)


  const { fetchProducts, singleProduct, loading } = useProductsById()

  fetchProducts(id+"")

// Initialize the payment form when the component mounts
// onMounted(async () => {
//   console.log(singleProduce?.price)
//   try {
//     await initializePayment(singleProduct?.value?.price);
//   } catch (err: any) {
//     error.value = err.message || 'Failed to initialize payment form';
//   }
// });

watchEffect(async () => { 
  if(singleProduct?.value?.price){
    try {
      await initializePayment(singleProduct?.value?.price);
    } catch (err: any) {
      error.value = err.message || 'Failed to initialize payment form';
    }
  }
})

const handlePayment = async () => {
  try {
    isProcessing.value = true;
    error.value = null;

    // make sure to validate your own form first
    // eg email, phone
    
    await processPayment();
    
    // If we get here, the payment was successful
    // The user will be redirected to the success page
  } catch (err: any) {
    error.value = err.message || 'An error occurred during payment';
  } finally {
    isProcessing.value = false;
  }
};

definePageMeta({
  layout: 'empty',
})

</script> 
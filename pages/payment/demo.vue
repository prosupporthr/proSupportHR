<template>
  <div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-6">
      <div class="text-center mb-8">
        <h1 class="text-2xl font-bold text-gray-900">Product Checkout</h1>
        <p class="mt-2 text-gray-600">Complete your purchase securely with Stripe</p>
      </div>

      <div class="space-y-6">
        <!-- Product Details -->
        <div class="border rounded-lg p-4">
          <h2 class="text-lg font-semibold text-gray-900">Premium Plan</h2>
          <p class="mt-1 text-gray-600">Access all premium features</p>
          <div class="mt-4 flex items-center justify-between">
            <span class="text-2xl font-bold text-gray-900">$99.99</span>
            <span class="text-sm text-gray-500">USD</span>
          </div>
        </div>

        <!-- Payment Form -->
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <span class="text-gray-700">Total Amount</span>
            <span class="text-lg font-semibold">$99.99</span>
          </div>

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
            <p class="text-sm text-red-700">{{ error }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { processPayment } = useStripe();
const isProcessing = ref(false);
const error = ref<string | null>(null);

const handlePayment = async () => {
  try {
    isProcessing.value = true;
    error.value = null;
    
    await processPayment(99.99);
    
    // If we get here, the payment was successful
    // The user will be redirected to the success page
  } catch (err: any) {
    error.value = err.message || 'An error occurred during payment';
  } finally {
    isProcessing.value = false;
  }
};
</script> 
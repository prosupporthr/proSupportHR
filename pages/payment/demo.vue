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

          <NuxtLink
            to="/payment/checkout"
            class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Proceed to Payment
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// No payment logic needed here anymore
</script> 
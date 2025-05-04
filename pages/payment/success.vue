<template>
  <div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-6">
      <div class="text-center">
        <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
          <svg class="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 class="mt-4 text-2xl font-bold text-gray-900">Payment Successful!</h1>
        <p class="mt-2 text-gray-600">Thank you for your purchase.</p>
        
        <div class="mt-6">
          <NuxtLink
            to="/"
            class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Return to Home
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserState } from '~/assets/composables/useUserState';
import { ApiService } from '~/services/product';
const route = useRoute()

const { email, phone, productId, updateEmail, updatePhone } = useUserState();
const clientSecret = route.query.payment_intent_client_secret 
console.log(email?.value)

// UI state
const isLoading = ref(false);
const apiResponse = ref<{
  data?: any;
  error?: string;
} | null>(null);

// Form submission handler
const handleSubmit = async () => {
  isLoading.value = true;
  apiResponse.value = null;

  const response = await ApiService.createPost({
    productId: productId?.value,
    email: email?.value,
    phone: phone?.value,
    stripeReference: clientSecret
  });
  
  apiResponse.value = response;
  isLoading.value = false;

  if (response.data) {
    console.log('Post created:', response.data);
    // Reset form or redirect
    // formData.value = { title: '', body: '', userId: 1 };
  }
};

watchEffect(async () => { 
  if(email?.value && phone?.value && productId?.value && clientSecret){
    handleSubmit()
  }
})   

  definePageMeta({
    layout: 'empty',
  })
 
// You can add any additional logic here, such as verifying the payment status
// or updating the user's account status
</script> 
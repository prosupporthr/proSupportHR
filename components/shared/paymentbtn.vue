<template> 
<!-- <button
    @click="handlePayment"
    :disabled="isProcessing"
    class="w-full cursor-pointer disabled:cursor-not-allowed lg:block text-white font-semibold text-sm h-[50px] rounded-4xl bg-blue-bg mt-4"
    >
        <span v-if="isProcessing">Processing...</span>
        <span v-else>${{ item }}</span> 
    </button> -->

  <UModal title="Make Payment">
    <!-- <UButton label="Open" color="neutral" variant="subtle" /> -->
    <button
    @click="handlePayment"
    :disabled="isProcessing"
    class="w-full cursor-pointer disabled:cursor-not-allowed lg:block text-white font-semibold text-sm h-[50px] rounded-4xl bg-blue-bg mt-4"
    >
        <!-- <span v-if="isProcessing">Processing...</span> -->
        <span >${{ item }}</span> 
    </button>
    <template #body> 
        <div id="payment-element" class="rounded-lg"></div>
        <button
        @click="handlePayment"
        :disabled="isProcessing"
        class="w-full cursor-pointer disabled:cursor-not-allowed lg:block text-white font-semibold text-sm h-[50px] rounded-4xl bg-blue-bg mt-4"
        >
            <span v-if="isProcessing">Processing...</span>
            <span v-else>${{ item }}</span> 
        </button>
    </template>
  </UModal>
</template>



<script setup lang="ts"> 
    const { processPayment } = useStripe();
        const props = defineProps<{
            item: number;
        }>();
    const isProcessing = ref(false);
    const error = ref<string | null>(null);

    const handlePayment = async () => {
    try {
        isProcessing.value = true;
        error.value = null;
        
        // const result = await processPayment(props?.item);

        // console.log(result)
        
        // If we get here, the payment was successful
        // The user will be redirected to the success page
    } catch (err: any) {
        error.value = err.message || 'An error occurred during payment';
    } finally {
        isProcessing.value = false;
    }
    };
</script> 
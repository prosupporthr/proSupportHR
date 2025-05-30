<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import type { IProduct } from '~/type/product';
import { findImageBySimilarName } from '~/services/findImageByName';

const route = useRoute();
const orderId = route.params.orderid;
const order = ref<any>(null);
const product = ref<IProduct | null>(null);
const loading = ref(true);
const error = ref<string | null>(null);
const downloadCount = ref(0);

const fetchOrderDetails = async () => {
  try {
    const response = await axios.get(`/api/order/${orderId}`);
    order.value = response.data.data;
    downloadCount.value = order.value.numberoFDownloads;
    
    // Fetch product details
    const productResponse = await axios.get(`/api/product/${order.value.productId}`);
    console.log(productResponse?.data);
    product.value = productResponse.data.data;
  } catch (err: any) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
};

const handleDownload = async () => {
  if (downloadCount.value >= 2) {
    error.value = 'You have reached the maximum number of downloads (2)';
    return;
  }

  try {
    const response = await axios.put(`/api/order/${orderId}/download`);
    downloadCount.value = response.data.data.numberoFDownloads;
    
    // Trigger file downloads for all files
    if (product?.value?.files && product.value?.files?.length > 0) {
      product.value.files.forEach((fileUrl: string, index: number) => {
        const link = document.createElement('a');
        link.href = fileUrl;
        // Extract filename from URL or use a default name
        const fileName = fileUrl.split('/').pop() || `file-${index + 1}`;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
    }
  } catch (err: any) {
    error.value = err.message;
  }
};

onMounted(() => {
  fetchOrderDetails();
});
</script>

<template>
  <div class="w-full flex flex-col gap-6 relative pt-[100px]">
    <div class="lg:py-20 w-full flex flex-col justify-center items-center text-primary-text relative lg:px-0 px-3 gap-1">
      <div class="relative z-10 lg:max-w-[85%] w-full h-full gap-4 flex flex-col">
        <div v-if="loading" class="w-full flex justify-center">
          Loading...
        </div>
        
        <div v-else-if="error" class="w-full flex justify-center text-red-500">
          {{ error }}
        </div>
        
        <div v-else class="w-full flex flex-col gap-6">
          <!-- Order Details -->
          <div class="w-full rounded-2xl flex flex-col h-full border-[0.36px] border-border-color p-6">
            <h1 class="text-2xl font-bold mb-4">Order Details</h1>
            
            <!-- Product Card -->
            <!-- <div v-if="product" class="w-full rounded-2xl flex flex-col h-full border-[0.36px] border-border-color mb-6">
              <div class="w-full lg:h-[220px] rounded-t-2xl">
                <img :src="product.picture" class="w-full object-cover h-full rounded-t-2xl" />
              </div>
              <div class="p-4 w-full flex gap-4 flex-col rounded-b-xl">
                <p class="text-base-color text-sm tracking-[4.2px]">{{ product.category }}</p>
                <p class="text-primary-text text-xl font-bold">{{ product.title }}</p>
                <p class="text-primary-text text-lg">{{ product.description }}</p>
              </div>
            </div> -->

            <div v-if="product" class=" w-full p-2 rounded-2xl h-full cursor-pointer flex gap-2 flex-col ">
              <div class=" w-[60px] h-[70px]" >
                <img :src="findImageBySimilarName(product?.category+'')" alt="image" class=" w-full " />
              </div>
              <p class=" text-lg font-bold " >{{ product?.title }}</p> 
              <p class=" font-medium text-primary-text ">Price: <span>{{ product?.price ? "$"+product?.price+" CAD" : "Free" }}</span></p>
            </div>

            <!-- Download Section -->
            <div class="mt-6">
              <div class="flex justify-between items-center mb-4">
                <h2 class="text-xl font-semibold">Downloads</h2>
                <p class="text-sm text-gray-600">
                  Downloads used: {{ downloadCount }}/2
                </p>
              </div>
              
              <div v-if="(product?.files?.length as number) > 0" class="mb-4">
                <h3 class="text-lg font-medium mb-2">Available Files:</h3>
                <ul class="list-disc pl-5 space-y-1">
                  <li v-for="(file, index) in product?.files" :key="index" class="text-sm text-gray-600">
                    {{ file.split('/').pop() || `File ${index + 1}` }}
                  </li>
                </ul>
              </div>
              
              <button
                @click="handleDownload"
                :disabled="downloadCount >= 2"
                class="w-full lg:w-auto px-6 py-3 text-white font-semibold text-sm rounded-4xl bg-blue-bg disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                Download All Files
              </button>
              
              <p class="mt-2 text-sm text-gray-600">
                Note: You have up to 2 download attempts within 30 days of your purchase.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 
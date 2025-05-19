<script setup lang="ts">

import ShopHeroSection from '../../components/shop/shopHeroSection.vue'
import ShopCard from '../../components/shared/shopCard.vue'
import NeedHelpSection from '../../components/shared/needHelpSection.vue'
import type { IProduct } from '../../type/product';
import { ref, watch } from 'vue';
// Adjust path as needed  
import { useCategory, useProducts } from '~/services/product';
import { shopcategories } from '~/assets/databank/shop';
import axios, { AxiosError, type AxiosResponse } from 'axios'

const route = useRoute()
  
const router = useRouter()
const searchTerm = ref(route.query.key as string); 
useColorMode().preference = 'light'  

useHead({
  title: `Shop`
})
// Component state  
const category = ref('All') 
const price = ref('') 
const title = ref('') 
const page = ref(1)
const contentRef = ref(<any>null); 

const { products, loading, fetchProducts, data } = useProducts() 


console.log(searchTerm.value);
console.log(`THIS IS THE SEARCH TERM -> ${searchTerm.value}`)

  const items = ref(['1', '2', '3', '4', '5', '6'])


  watchEffect(async() => {
    const request = await axios.get(`/api/product`, {
      params: {
        category: searchTerm.value !== '' ? searchTerm.value: "",
        title: title?.value,
        limit: 10,
        page: page.value
      }
    })
    console.log(request)
    products.value = request?.data?.data
  })




watch(page, (newPage) => {
  // Scroll after the page changes
  nextTick(() => {
    if (contentRef.value) {
      contentRef.value?.scrollIntoView({ behavior: 'smooth' });
    }
  });
}); 
  
</script>
<template>
  <div class="w-full flex flex-col lg:gap-0 gap-6 ">
    <ShopHeroSection />
    <div class=" w-full flex relative justify-center lg:pt-20 ">
      <div class=" absolute -top-40 " ref="contentRef" />
      <div class=" lg:max-w-[85%] flex lg:px-0 px-3 w-full gap-6 flex-col lg:gap-10  ">
        <div v-if="searchTerm" class=" w-full flex lg:flex-row flex-col gap-3 justify-between items-center ">
          <!-- <div class=" flex gap-3 w-full ">
            <USelect placeholder="Shop Category" color="primary" variant="none" v-model="category" :items="categories"
              class=" placeholder:text-fondation-text-500 w-full max-w-44 bg-[#EEEEEE] text-primary-text font-semibold rounded-full h-[49px] border-transparent border-0 " />
            <UInput placeholder="Price" color="primary" type="number" variant="none" v-model="price"
              class=" w-full max-w-24 bg-[#EEEEEE] text-primary-text font-semibold rounded-full h-[49px] border-transparent border-0 " />
          </div> -->
          <div class=" items-center flex gap-3 w-full "> 
            <div class=" cursor-pointer " @click="router.back()" >
              <UIcon name="i-lucide-chevron-left" class="size-7 text-black " />
            </div>
            <UInput icon="i-lucide-search" type="search" variant="none" v-model="title" placeholder="Search..."
              class=" placeholder:text-fondation-text-500 w-full lg:max-w-[300px] bg-[#EEEEEE] text-primary-text font-semibold rounded-full h-[49px] border-transparent border-0 " />
          </div>
        </div> 
        <div v-if="loading" class=" w-full flex justify-center font-semibold " >
          {{ loading ? "Loading..." : "" }}
        </div>
        <div :class=" products?.length === 0 && !loading ? ' flex ' : ' hidden ' " class=" w-full flex justify-center font-semibold " >
          {{ products?.length === 0 && !loading ? "No Record Found" : "" }}
        </div>
        <div v-if="!loading" class=" w-full grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4">
          <div v-for="item in products" :key="item._id">
            <ShopCard :item="item" />
          </div>
        </div> 
      </div>
    </div>
        <div v-if="!loading" class=" w-full flex justify-center pt-6 " > 
          <UPagination active-color="secondary"  size="xl" v-model:page="page"   
            :page-count="data?.totalPages"
            :total="data?.total"
            :items-per-page="data?.limit"
            @update:modelValue="page = $event"
          />
        </div>
    <NeedHelpSection />
  </div>
</template>
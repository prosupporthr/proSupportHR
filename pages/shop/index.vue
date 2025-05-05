<script setup lang="ts">

import ShopHeroSection from '../../components/shop/shopHeroSection.vue'
import ShopCard from '../../components/shared/shopCard.vue'
import NeedHelpSection from '../../components/shared/needHelpSection.vue'
import type { IProduct } from '../../type/product';
import { ref, watch } from 'vue';
// Adjust path as needed  
import axios from 'axios'
import { useCategory, useProducts } from '~/services/product';
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

const { fetchProducts: fetch, categories } = useCategory() 

  const items = ref(['1', '2', '3', '4', '5', '6'])
  fetch() 
  watchEffect(async () => { 
    fetchProducts({price: price.value, category: category?.value === "All" ? "" : category?.value, title: title?.value, page: page.value})
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
        <div class=" w-full flex lg:flex-row flex-col gap-3 justify-between items-center ">
          <div class=" flex gap-3 w-full ">
            <USelect placeholder="Shop Category" color="primary" variant="none" v-model="category" :items="categories"
              class=" placeholder:text-fondation-text-500 w-full max-w-44 bg-[#EEEEEE] text-primary-text font-semibold rounded-full h-[49px] border-transparent border-0 " />
            <UInput placeholder="Price" color="primary" type="number" variant="none" v-model="price"
              class=" w-full max-w-24 bg-[#EEEEEE] text-primary-text font-semibold rounded-full h-[49px] border-transparent border-0 " />
          </div>
          <div class=" flex gap-3 w-full lg:justify-end ">
            <!-- <USelect placeholder="Sort by" color="primary" variant="none" v-model="value" :items="items"
              class=" w-full max-w-24 bg-[#EEEEEE] text-primary-text font-semibold rounded-full h-[49px] border-transparent border-0 " /> -->
            <UInput icon="i-lucide-search" variant="none" v-model="title" placeholder="Search..."
              class=" placeholder:text-fondation-text-500 w-full lg:max-w-52 bg-[#EEEEEE] text-primary-text font-semibold rounded-full h-[49px] border-transparent border-0 " />
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
<script setup lang="ts">

import ShopHeroSection from '../../components/shop/shopHeroSection.vue'
import ShopCard from '../../components/shared/shopCard.vue'
import NeedHelpSection from '../../components/shared/needHelpSection.vue'
import { ref, watch } from 'vue';
// Adjust path as needed  
import { useProducts } from '~/services/product';
 
const route = useRoute()  
const searchTerm = route.query.key as string 

useHead({
  title: `Shop`
})
// Component state  
const title = ref('') 
const page = ref(1)
const contentRef = ref(<any>null); 

const { products, loading, fetchProducts, data } = useProducts() 

  watchEffect(async() => {
    const request = fetchProducts({ category: searchTerm ? searchTerm :'', page: page.value, title: title.value });
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
        <div class=" border-l-[5px] border-l-red-color pl-5 py-1 flex items-center " >
          <p class=" font-bold text-[30px] lg:text-[44px] text-primary-text leading-[46px] lg:leading-[52.8px] " >{{searchTerm}}</p>
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
        <div v-if="!loading && data?.totalPages > 1" class=" w-full flex justify-center pt-6 " > 
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
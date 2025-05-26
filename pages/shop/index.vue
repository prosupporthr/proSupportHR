<script setup lang="ts">

import ShopHeroSection from '../../components/shop/shopHeroSection.vue'
import NeedHelpSection from '../../components/shared/needHelpSection.vue'
import { shopcategories } from '~/assets/databank/shop'; 

const router = useRouter() 

useHead({
  title: `Shop`
})


</script>
<template>
  <div class="w-full flex flex-col lg:gap-0 gap-6 ">
    <ShopHeroSection />
    <div class=" w-full flex relative justify-center lg:pt-20 ">

      <div class=" lg:max-w-[85%] flex lg:px-0 px-3 w-full gap-6 flex-col lg:gap-10  "> 
        <div class=" border-l-[5px] border-l-red-color pl-5 py-1 flex items-center " >
          <p class=" font-bold text-[30px] lg:text-[44px] text-primary-text leading-[46px] lg:leading-[52.8px] " >Shop Templates by Category</p>
        </div>
        <div class=" w-full grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4">
          <div 
            v-for="item in shopcategories" @click="router?.push(`/shop/category?key=${encodeURIComponent(item?.name.toString())}`)" class=" w-full p-2 rounded-2xl cursor-pointer flex gap-2 flex-col ">
            <div class=" w-[60px] h-[70px]" >
              <img :src="item?.image" alt="image" class=" w-full " />
            </div>
            <p class=" text-lg font-bold " >{{ item?.name }}</p>
            <p class=" text-[#667085] " >{{ item?.detail }}</p>
            <div class=" mt-4 flex gap-2 items-center " >  
              <p class=" font-medium text-[#0890FF] " >View Template</p>
              <UIcon name="i-lucide-arrow-right" class="size-7 mt-[1px] text-[#0890FF] " />
            </div> 
          </div>
        </div>
      </div>
    </div>

    <NeedHelpSection />
  </div>
</template>
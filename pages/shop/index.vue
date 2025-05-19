<script setup lang="ts">

import ShopHeroSection from '../../components/shop/shopHeroSection.vue'
import NeedHelpSection from '../../components/shared/needHelpSection.vue'
import { shopcategories } from '~/assets/databank/shop';
const route = useRoute()

const router = useRouter()
useColorMode().preference = 'light'

useHead({
  title: `Shop`
})


</script>
<template>
  <div class="w-full flex flex-col lg:gap-0 gap-6 ">
    <ShopHeroSection />
    <div class=" w-full flex relative justify-center lg:pt-20 ">

      <div class=" lg:max-w-[85%] flex lg:px-0 px-3 w-full gap-6 flex-col lg:gap-10  ">
        <!-- <div v-if="searchTerm" class=" w-full flex lg:flex-row flex-col gap-3 justify-between items-center "> 
          <div class=" flex gap-3 w-full "> 
            <UInput icon="i-lucide-search" type="search" variant="none" v-model="title" placeholder="Search..."
              class=" placeholder:text-fondation-text-500 w-full lg:max-w-[300px] bg-[#EEEEEE] text-primary-text font-semibold rounded-full h-[49px] border-transparent border-0 " />
          </div>
        </div>   -->
        <div class=" w-full grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4">
          <div
            @click="router?.push(`/shop/category?key=${encodeURIComponent(item?.name.toString())}`)"
            v-for="item in shopcategories" class=" w-full rounded-2xl cursor-pointer flex flex-col ">
            <img :src="item?.image" alt="image" />
          </div>
        </div>
      </div>
    </div>

    <NeedHelpSection />
  </div>
</template>
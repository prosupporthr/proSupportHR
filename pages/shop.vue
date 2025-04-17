<script setup lang="ts">
 
import ShopHeroSection from '../components/shop/shopHeroSection.vue'
import ShopCard from '../components/shared/shopCard.vue'
import NeedHelpSection from '../components/shared/needHelpSection.vue' 
import { ref } from 'vue'
useColorMode().preference = 'light'
  
const selected = ref(null)
const options = ['Option 1', 'Option 2', 'Option 3']


const items = ref(['Backlog', 'Todo', 'In Progress', 'Done'])
const value = ref('') 

definePageMeta({
  layout: 'default',
})

</script>
<template>
  <div class="w-full flex flex-col lg:gap-0 gap-6 "> 
    <ShopHeroSection />
    <div class=" w-full flex justify-center lg:pt-20 " >
        <div class=" lg:max-w-[85%] flex lg:px-0 px-3 w-full gap-6 flex-col lg:gap-10  " >
            <div class=" w-full flex lg:flex-row flex-col gap-3 justify-between items-center " > 
                <div class=" flex gap-3 w-full " > 
                    <USelect placeholder="Shop Category" color="primary" variant="none" v-model="value" :items="items" class=" placeholder:text-fondation-text-500 w-full max-w-40 bg-[#EEEEEE] text-primary-text font-semibold rounded-full h-[49px] border-transparent border-0 " />
                    <USelect placeholder="Price" color="primary" variant="none" v-model="value" :items="items" class=" w-full max-w-24 bg-[#EEEEEE] text-primary-text font-semibold rounded-full h-[49px] border-transparent border-0 " />
                </div>
                <div class=" flex gap-3 w-full lg:justify-end " >  
                    <USelect placeholder="Sort by" color="primary" variant="none" v-model="value" :items="items" class=" w-full max-w-24 bg-[#EEEEEE] text-primary-text font-semibold rounded-full h-[49px] border-transparent border-0 " />
                    <UInput icon="i-lucide-search" variant="none" placeholder="Search..." class=" placeholder:text-fondation-text-500 w-full max-w-52 bg-[#EEEEEE] text-primary-text font-semibold rounded-full h-[49px] border-transparent border-0 " />
                </div>
            </div>
            <div class=" w-full grid grid-cols-1 lg:grid-cols-3 gap-4" >
                <ShopCard />
                <ShopCard />
                <ShopCard />
                <ShopCard />
                <ShopCard />
                <ShopCard /> 
            </div>
        </div>
    </div>
    <NeedHelpSection />
  </div>
</template>
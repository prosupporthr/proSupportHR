<script setup lang="ts"> 

import ServiceHeroSection from '../components/service/serviceHeroSection.vue'
import ServiceCard from '../components/shared/serviceCard.vue'
import NeedHelpSection from '../components/shared/needHelpSection.vue' 
import { ServiceData } from "../assets/databank/services"

useHead({
  title: `Services`
})

definePageMeta({
  layout: 'default',
}); 
</script>
<template>
  <div class="w-full flex flex-col lg:gap-0 gap-6 ">
    <ServiceHeroSection />
    <div class=" w-full flex flex-col items-center lg:py-20 lg:gap-0 gap-6 ">
      <div class=" lg:px-0 px-3 lg:max-w-[85%] w-full flex flex-col gap-6 ">
        <p class=" text-3xl lg:text-[32px] text-black ">At ProSupport HR Partners, we provide strategic and compliance-focused HR services designed specifically for small businesses in Ontario. Our goal is to simplify your people processes, reduce legal risks, and help you build a stronger, more professional business foundation.</p>
        <div class="w-full grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-4 lg:mt-10 ">
          <div v-for="item in ServiceData" :key="item.title" >
            <ServiceCard :item='item' />
          </div>
        </div>
      </div>
      <NeedHelpSection />
    </div>

  </div>
</template>
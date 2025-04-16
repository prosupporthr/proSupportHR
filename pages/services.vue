<script setup lang="ts">

import ServiceHeroSection from '../components/service/serviceHeroSection.vue'  
import ServiceCard from '../components/shared/serviceCard.vue' 
import NeedHelpSection from '../components/shared/needHelpSection.vue'


definePageMeta({
  layout: 'default',
})

</script>
<template>
  <div class="w-full">
    <ServiceHeroSection /> 
    <div class=" w-full flex flex-col items-center py-20 " >
        <div class=" max-w-[85%] w-full flex flex-col gap-6 " >
            <p class=" text-[32px] text-black max-w-[950px] " >Aligning Services with Our Vision to Empower Small Businesses Through HR Compliance and Process Excellence</p> 
            <div class="w-full grid grid-cols-3 gap-4 mt-10 " >
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
            </div>
        </div>
        <NeedHelpSection />
    </div>
    
  </div>
</template>
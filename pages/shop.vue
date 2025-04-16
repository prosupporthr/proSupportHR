<script setup lang="ts">
 
import ShopHeroSection from '../components/shop/shopHeroSection.vue'
import ShopCard from '../components/shared/shopCard.vue'
import NeedHelpSection from '../components/shared/needHelpSection.vue'


definePageMeta({
  layout: 'default',
})

</script>
<template>
  <div class="w-full"> 
    <ShopHeroSection />
    <div class=" w-full flex justify-center py-20 " >
        <div class=" max-w-[85%] w-full gap-10  " >
            <div class=" w-full flex justify-between items-center " >

            </div>
            <div class=" w-full grid grid-cols-3 gap-4" >
                <ShopCard />
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
<script setup lang="ts">
 
import ContactHeroSection from '../components/contact/contactHeroSection.vue' 
import InformationSection from '../components/contact/informationSection.vue' 


definePageMeta({
  layout: 'default',
})

</script>
<template>
    <div class=" w-full flex flex-col " >
        <ContactHeroSection />
        <InformationSection />
    </div>
</template>
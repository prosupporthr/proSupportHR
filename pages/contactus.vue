<script setup lang="ts">
 
import ContactHeroSection from '../components/contact/contactHeroSection.vue' 
import ContactUsSection from '../components/contact/contactusSection.vue' 
import InformationSection from '../components/contact/informationSection.vue' 
import MapSection from '../components/contact/contactmap.vue' 

useHead({
  title: `Contact Us`
})

definePageMeta({
  layout: 'default',
})

</script>
<template>
    <div class=" w-full flex flex-col lg:gap-0 gap-6 " >
        <ContactHeroSection />
        <InformationSection />
        <ContactUsSection />
        <MapSection />
    </div>
</template>
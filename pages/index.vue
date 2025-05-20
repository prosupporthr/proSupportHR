<script setup lang="ts">

import HeroSection from '../components/home/heroSection.vue'
import AboutUsSection from '../components/home/aboutUsSection.vue'
import PartnerSection from '../components/home/partnerSection.vue'
import OurValuesSection from '../components/home/ourValuesSection.vue'
import OurServiceSection from '../components/home/ourServiceSection.vue'
import TestimoniolsSection from '../components/home/testimonialsSection.vue'
import NeedHelpSection from '../components/shared/needHelpSection.vue'
import OurMission from '../components/home/ourMission.vue'
import OurShop from '../components/home/ourShop.vue'


useHead({
  title: `Home`
})

definePageMeta({
  layout: 'default',
})

</script>
<template>
  <div class="w-full max-w-screen overflow-x-hidden flex flex-col lg:gap-0 gap-12">
    <HeroSection />
    <AboutUsSection />
    <OurMission />
    <OurValuesSection />
    <OurServiceSection />
    <OurShop />
    <PartnerSection />
    <TestimoniolsSection />
    <NeedHelpSection />
  </div>
</template>
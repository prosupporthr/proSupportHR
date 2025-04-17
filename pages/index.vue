<script setup lang="ts">

import HeroSection from '../components/home/heroSection.vue'
import AboutUsSection from '../components/home/aboutUsSection.vue'
import PartnerSection from '../components/home/partnerSection.vue'
import OurValuesSection from '../components/home/ourValuesSection.vue'
import OurServiceSection from '../components/home/ourServiceSection.vue'
import TestimoniolsSection from '../components/home/testimonialsSection.vue'
import NeedHelpSection from '../components/shared/needHelpSection.vue'


definePageMeta({
  layout: 'default',
})

</script>
<template>
  <div class="w-full flex flex-col lg:gap-0 gap-12">
    <HeroSection />
    <AboutUsSection />
    <OurValuesSection />
    <OurServiceSection />
    <PartnerSection />
    <TestimoniolsSection />
    <NeedHelpSection />
  </div>
</template>
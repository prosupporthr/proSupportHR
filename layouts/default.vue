<script setup >
import Footer from '../components/shared/footer.vue'
 
</script> 
<template>
  <div className=" w-full h-screen flex flex-col lg:gap-0 gap-12 relative " > 
    <slot />
    <Footer />
  </div>
</template>
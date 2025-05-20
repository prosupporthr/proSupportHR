<script setup >
import Footer from '../components/shared/footer.vue'
import Navbar from '../components/shared/navbar.vue'
 
</script> 
<template>
  <div className=" w-full max-w-screen overflow-x-hidden overflow-y-auto h-screen flex flex-col lg:gap-0 gap-12 relative " > 
    <div class=" w-full fixed top-0 z-50 " > 
        <Navbar />
    </div> 
    <slot />
    <Footer />
  </div>
</template>
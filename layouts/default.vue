<script>
import Footer from '../components/shared/footer.vue'

export default {
  components: {
    Footer
  }
}
</script>

<template>
  <div className=" w-full h-screen relative " > 
    <slot />
    <Footer />
  </div>
</template>
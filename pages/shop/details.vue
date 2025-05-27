
<script setup lang="ts">
  import NeedHelpSection from '../../components/shared/needHelpSection.vue' 
  import axios from 'axios'
  import type { IProduct } from '~/type/product'

    const route = useRoute()
     
    const searchTerm = route.query.key  

    const posts = ref<IProduct | any>(null) 
    const loading = ref(false)
    const error = ref<string | null>(null)

    const fetchPosts = async () => {
      loading.value = true
      try {
        const response = await axios.get(`/api/product/${searchTerm}`) 

        useHead({
          title: `${response?.data?.data?.title} | My Store`
        })
        
        posts.value = response.data?.data
      } catch (err: any) {
        error.value = err.message
      } finally {
        loading.value = false
      }
    } 
    
    onMounted(() => {
      fetchPosts()
    })   
 
</script>
<template>
  <div v-if="loading" class="w-full flex flex-col gap-6 relative justify-center items-center h-[70vh] " >
    Loading...
  </div>
    <div v-if="!loading" class="w-full flex flex-col gap-6 relative "> 
      <ShopHeroDetailSection :item='posts' />
      <div class="  lg:py-20 w-full flex flex-col justify-center items-center text-primary-text relative lg:px-0 px-3 gap-1 " > 
          <div class=" relative z-10 lg:max-w-[85%] w-full h-full gap-4 text-white flex flex-col " >
            <div class=" w-full flex flex-col gap-6 " >
              <p class=" font-bold leading-[120%] text-[40px] lg:text-[50px] text-black max-w-[600px] " >{{ posts?.title?.replace("(updated Clean)", "")?.replace("(updated clean)", "") }}</p>

              <!-- <button class=" w-[230px] text-white font-semibold text-sm h-[50px] rounded-4xl bg-blue-bg " >Course Overview</button> -->
            </div>
            <div class=" w-full " />
          </div>
      </div>
      <!-- <div class="  lg:pb-20 w-full flex flex-col justify-center items-center text-black relative lg:px-0 px-3 gap-1 " > 
        <div class=" relative z-10 lg:max-w-[85%] w-full h-full gap-4 text-white flex flex-col " >
          <p class=" text-2xl text-black font-medium " >Introducing</p>  
          <p class=" text-[36px] font-medium text-black " >ProSupport HR</p>
          <p class=" text-black " >HR ProSupport now provides more for those who want more. Access the ProSupport ecosystem for $5 USD per month including unlimited access to world-class HR training programmes, with costs ranging in value from $1,500 to $12,500 USD. With the support of our partners, ProSupport can offer all eligible learners access to our programmes with programme costs waived.</p>
          <div class=" w-fit grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 " >
              <div>
                <p class=" text-black " >Programme Value</p> 
                <p class=" text-black text-lg font-medium " >$7500</p>
              </div>
              <div>
                <p class=" text-black " >Programme Duration</p> 
                <p class=" text-black text-lg font-medium " >8 Months</p>
              </div>
              <div>
                <p class=" text-black " >All Access</p> 
                <p class=" text-black text-lg font-medium " >$5 a month</p>
              </div>
              <div>
                <p class=" text-black " >All Access Plus</p> 
                <p class=" text-black text-lg font-medium " >$49 a year</p>
              </div>
          </div>
        </div>
      </div> -->

    <NeedHelpSection />
    </div>
</template>
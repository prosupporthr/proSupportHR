<script setup lang="ts">
 
  import ShopHeroSection from '../../components/shop/shopHeroSection.vue'
  import ShopCard from '../../components/shared/shopCard.vue'
  import NeedHelpSection from '../../components/shared/needHelpSection.vue' 
  import type { IProduct } from '../../type/product'; 
  import { ref, onMounted } from 'vue';
  // Adjust path as needed  
  import axios from 'axios'
  // useColorMode().preference = 'light' 


  const items = ref(['Backlog', 'Todo', 'In Progress', 'Done'])
  const value = ref('') 

  const posts = ref(<Array<IProduct>>[])
  const loading = ref(false)
  const error = ref(null)

  const fetchPosts = async () => {
    loading.value = true
    try {
      const response = await axios.get('/api/product')

      console.log(response?.data?.data);
      
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
  <div class="w-full flex flex-col lg:gap-0 gap-6 "> 
    <ShopHeroSection />
    <div class=" w-full flex justify-center lg:pt-20 " >
        <div class=" lg:max-w-[85%] flex lg:px-0 px-3 w-full gap-6 flex-col lg:gap-10  " >
            <div class=" w-full flex lg:flex-row flex-col gap-3 justify-between items-center " > 
                <div class=" flex gap-3 w-full " > 
                    <USelect placeholder="Shop Category" color="primary" variant="none" v-model="value" :items="items" class=" placeholder:text-fondation-text-500 w-full max-w-40 bg-[#EEEEEE] text-primary-text font-semibold rounded-full h-[49px] border-transparent border-0 " />
                    <USelect placeholder="Price" color="primary" variant="none" v-model="value" :items="items" class=" w-full max-w-24 bg-[#EEEEEE] text-primary-text font-semibold rounded-full h-[49px] border-transparent border-0 " />
                </div>
                <div class=" flex gap-3 w-full lg:justify-end " >  
                    <USelect placeholder="Sort by" color="primary" variant="none" v-model="value" :items="items" class=" w-full max-w-24 bg-[#EEEEEE] text-primary-text font-semibold rounded-full h-[49px] border-transparent border-0 " />
                    <UInput icon="i-lucide-search" variant="none" placeholder="Search..." class=" placeholder:text-fondation-text-500 w-full max-w-52 bg-[#EEEEEE] text-primary-text font-semibold rounded-full h-[49px] border-transparent border-0 " />
                </div>
            </div>
            <div>
              {{ loading ? "Loading..." : ""}}
            </div>
            <div class=" w-full grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4" >
              <div  v-for="item in posts" :key="item._id"  >
                <ShopCard :item="item" /> 
              </div>  
            </div>
        </div>
    </div>
    <NeedHelpSection />
  </div>
</template>
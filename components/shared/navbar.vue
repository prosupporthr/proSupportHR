<!--  
<script  >  
    const isOpen = ref(false)
    export default {
        data() {
            return {
                atTopOfPage: true,
                open: false
            }
        },
        mounted() {
            window.addEventListener('scroll', this.handleScroll)
        },
        beforeDestroy() {
            window.removeEventListener('scroll', this.handleScroll)
        },
        methods: {
            handleScroll() {
            // Check if we've scrolled past 50px (adjust as needed)
                this.atTopOfPage = window.scrollY < 50
            },
            setOpen(){
                this.open = !this.open
            }
        }
    }
</script> -->
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue' 
const atTopOfPage = ref(true)
const open = ref(false)
useColorMode().preference = 'light'

const handleScroll = () => {
  // Check if we've scrolled past 50px (adjust as needed)
  atTopOfPage.value = window.scrollY < 50
}

const setOpen = () => {
  open.value = !open.value
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
    <div :class=" atTopOfPage ? ' shadow-none ' : ' scrolled shadow-2xl ' " class=" navbar w-full max-w-screen overflow-x-hidden h-fit flex flex-col-reverse lg:flex-col z-50 justify-center items-center " >
        <div :class=" { 'none': !atTopOfPage } " class=" note flex gap-2 lg:gap-4 items-center py-4 " >
            <UIcon name="i-lucide-mail" class="size-5 text-white " />
            <p class=" text-[10px] lg:text-sm text-white " >Need Free Consultation?</p> 
            <NuxtLink to="/contactus">
                <p class=" text-[10px] lg:text-sm underline font-semibold cursor-pointer text-white " >Contact Us Now</p>
            </NuxtLink>
            <div class=" lg:ml-4 flex gap-2 lg:gap-4 items-center justify-center " >  
                <NuxtLink target="_blank" to="https://www.facebook.com/share/1581Vrk6Pp/?mibextid=wwXIfr" >
                    <UIcon name="i-lucide-facebook" class="size-7 text-white " />
                </NuxtLink> 
                <NuxtLink target="_blank" to="https://www.linkedin.com/company/prosupport-hr-partners" >
                    <UIcon name="i-lucide-linkedin" class="size-5 text-white " />
                </NuxtLink>
                <NuxtLink target="_blank" to="https://www.instagram.com/prosupporthr/profilecard/?igsh=ZDY1OWw1N3ZiNHQ3" >
                    <UIcon name="i-lucide-instagram" class="size-5 text-white " />
                </NuxtLink>  
            </div>
        </div>
        <div class=" sticky top-0 w-full z-50 flex justify-center h-[56px] lg:px-0 px-3 lg:bg-transparent  " >
            <div class=" w-full lg:w-[85%] flex justify-between items-center " >
                <NuxtLink to="/" class=" w-[64px] lg:w-[120px] cursor-pointer" >  
                    <img :src="atTopOfPage ? '/images/whitelogo.png' : '/images/blacklogo.png' " class=" h-full object-contain " />
                </NuxtLink>
                <div :class="atTopOfPage ? ' bg-navbar-bg border-[0.5px] border-foundation-stroke ' : ' bg-#8033b5e5 ' " class=" w-fit px-10 h-full rounded-[100px] hidden lg:flex items-center justify-center gap-8 " >
                    <NuxtLink to="/" :class="atTopOfPage ? ' text-white ' : ' text-black '" class="flex gap-4 cursor-pointer font-medium text-sm " >
                        <p>Home</p>
                    </NuxtLink>
                    <NuxtLink to="/services" :class="atTopOfPage ? ' text-white ' : ' text-black '" class="flex gap-4 cursor-pointer font-medium text-sm " >
                        <p>Services</p>
                    </NuxtLink> 
                    <NuxtLink to="/shop" :class="atTopOfPage ? ' text-white ' : ' text-black '" class="flex gap-4 cursor-pointer font-medium text-sm " >
                        <p>Shop</p>
                    </NuxtLink>
                    <NuxtLink to="/contactus" :class="atTopOfPage ? ' text-white ' : ' text-black '" class="flex gap-4 cursor-pointer font-medium text-sm " >
                        <p>Contact</p>
                    </NuxtLink>
                    <NuxtLink to="/#testimonials" :class="atTopOfPage ? ' text-white ' : ' text-black '" class="flex gap-4 cursor-pointer font-medium text-sm " >
                        <p>Testimonials</p>
                    </NuxtLink>
                </div>
                <!-- <button class=" w-[174px] lg:block hidden text-white font-semibold text-sm h-[50px] rounded-4xl bg-blue-bg border border-white " >Get Started</button> -->
                <div class=" w-[124px] lg:block hidden" />
                <div class=" lg:hidden " >   

                    <UPopover :open="open" 
                        :ui="{
                        background: 'bg-white', 
                        }" >
                        <UButton  @click="setOpen" label="Open" color="white" variant="subtle" >
                            <div class=" w-8 h-8 flex justify-center items-center cursor-pointer " >
                                <svg v-if="!open" width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.5 0.860352H16.5M1.5 6.36035H16.5M1.5 11.8604H10.5" :stroke=" atTopOfPage ? 'white' : 'black' " stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <UIcon v-if="open" name="i-lucide-x" :class=" atTopOfPage ? 'text-white' : 'text-black' "  class="size-10" />
                            </div>
                        </UButton>

                        <template #content>  
                            <div class=" flex flex-col gap-3 min-w-[200px] max-w-[600px] px-4 py-4 " > 
                                <NuxtLink @click="setOpen" to="/" class="flex gap-4 text-black cursor-pointer font-medium text-sm " >
                                    <p>Home</p>
                                </NuxtLink> 
                                <NuxtLink @click="setOpen" to="/services" class="flex gap-4 text-black cursor-pointer font-medium text-sm " >
                                    <p>Services</p>
                                </NuxtLink> 
                                <NuxtLink @click="setOpen" to="/shop" class="flex gap-4 text-black cursor-pointer font-medium text-sm " >
                                    <p>Shop</p>
                                </NuxtLink>
                                <NuxtLink @click="setOpen" to="/contactus" class="flex gap-4 text-black cursor-pointer font-medium text-sm " >
                                    <p>Contact</p>
                                </NuxtLink>
                                <NuxtLink @click="setOpen" to="/#testimonials" class="flex gap-4 text-black cursor-pointer font-medium text-sm " >
                                    <p>Testimonials</p>
                                </NuxtLink>
                            </div>
                        </template>
                    </UPopover>
<!-- 
                    <div class=" w-8 h-8 flex justify-center items-center cursor-pointer " >
                        <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.5 0.860352H16.5M1.5 6.36035H16.5M1.5 11.8604H10.5" :stroke=" atTopOfPage ? 'white' : 'black' " stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div> -->
                    <!-- <UDrawer direction="right" 
                        v-model:open="open"
                        :dismissible="false" 
                        :handle="false"
                        :ui="{ header: 'flex items-center justify-end bg-white ',  container: ' bg-white ' }"
                    >  

                    <template #header> 
                        <UButton class="text-primary-text cursor-pointer " variant="ghost" icon="i-lucide-x" @click="setOpen" />
                    </template>
                    <template #body> 
                            <div class=" flex flex-col gap-3 min-w-96 pt-4 " > 
                                <NuxtLink @click="setOpen" to="/services" class="flex gap-4 text-primary-text cursor-pointer font-medium text-sm " >
                                    <p>Services</p>
                                </NuxtLink> 
                                <NuxtLink @click="setOpen" to="/shop" class="flex gap-4 text-primary-text cursor-pointer font-medium text-sm " >
                                    <p>Shop</p>
                                </NuxtLink>
                                <NuxtLink @click="setOpen" to="/contactus" class="flex gap-4 text-primary-text cursor-pointer font-medium text-sm " >
                                    <p>Contact</p>
                                </NuxtLink>
                                <NuxtLink @click="setOpen" to="/#testimonials" class="flex gap-4 text-primary-text cursor-pointer font-medium text-sm " >
                                    <p>Testimonials</p>
                                </NuxtLink>
                            </div>
                        </template>
                    </UDrawer> -->
                </div>
            </div>
        </div>
    </div>
</template> 

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: transparent;
  transition: background-color 0.3s ease;
  /* padding: 20px 0; */
}

.navbar.scrolled {
  background-color: #fff; 
  padding: 20px 0px
}

.note.none {
    display: none;
}
</style>
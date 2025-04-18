import { defineComponent } from 'vue'
import type { DropdownMenuItem } from '@nuxt/ui'
import DropDown from './dropDown.vue'
import { UIcon } from '#components'

<!-- export default defineComponent({
    render() { 
        return ( -->
<script setup lang="ts">
    const open = ref(false)
</script>

<template>
    <div class=" w-full flex flex-col-reverse lg:flex-col justify-center items-center " >
        <div class=" flex gap-2 lg:gap-4 items-center py-4 " >
            <UIcon name="i-lucide-mail" class="size-5 text-white " />
            <p class=" text-[10px] lg:text-sm text-white " >Need Free Consultation?</p>
            <p class=" text-[10px] lg:text-sm underline font-semibold cursor-pointer text-white " >Contact Us Now</p>
            <div class=" lg:ml-4 flex gap-2 lg:gap-4 items-center justify-center " > 
                <UIcon name="i-lucide-facebook" class="size-5 text-white " />
                <UIcon name="i-lucide-instagram" class="size-5 text-white " />
                <UIcon name="i-lucide-linkedin" class="size-5 text-white " /> 
            </div>
        </div>
        <div class=" w-full flex justify-center h-[56px] lg:px-0 px-3 lg:bg-transparent bg-[#7474741A] lg:border-b-0 border-b-[0.5px] border-[#545454] " >
            <div class=" w-full lg:w-[85%] flex justify-between items-center " >
                <NuxtLink to="/" class=" w-[64px] lg:w-[120px] cursor-pointer" > 
                    <img src='/images/logo.png' class=" h-full object-contain " />
                </NuxtLink>
                <div class=" w-fit px-10 h-full bg-navbar-bg rounded-[100px] border-[0.5px] border-foundation-stroke hidden lg:flex items-center justify-center gap-8 " >
                    <NuxtLink to="/" class="flex gap-4 cursor-pointer text-white font-medium text-sm " >
                        <p>Home</p>
                    </NuxtLink>
                    <NuxtLink to="/services" class="flex gap-4 cursor-pointer text-white font-medium text-sm " >
                        <p>Services</p>
                    </NuxtLink>
                    <NuxtLink to="/resources" class="flex gap-4 cursor-pointer text-white font-medium text-sm " >
                        <p>Resources</p>
                    </NuxtLink>
                    <NuxtLink to="/shop" class="flex gap-4 cursor-pointer text-white font-medium text-sm " >
                        <p>Shop</p>
                    </NuxtLink>
                    <NuxtLink to="/contactus" class="flex gap-4 cursor-pointer text-white font-medium text-sm " >
                        <p>Contact</p>
                    </NuxtLink>
                    <NuxtLink to="/#testimonials" class="flex gap-4 cursor-pointer text-white font-medium text-sm " >
                        <p>Testimonials</p>
                    </NuxtLink>
                </div>
                <button class=" w-[174px] lg:block hidden text-white font-semibold text-sm h-[50px] rounded-4xl bg-blue-bg border border-white " >Get Started</button>
                
                <div class=" lg:hidden " >  
                    <UDrawer direction="right" 
                        v-model:open="open"
                        :dismissible="false" 
                        :handle="false"
                        :ui="{ header: 'flex items-center justify-end bg-white ',  container: ' bg-white ' }"
                    > 
                        <UIcon  label="Open" name="i-lucide-menu" class="size-5 text-white " />  

                    <template #header> 
                        <UButton class="text-primary-text " variant="ghost" icon="i-lucide-x" @click="open = false" />
                    </template>
                    <template #body>
                        <!-- <Placeholder class="min-w-96 min-h-96 size-full m-4" /> -->
                            <div class=" flex flex-col gap-3 min-w-96 pt-4 " > 
                                <NuxtLink @click="open = false" to="/services" class="flex gap-4 text-primary-text cursor-pointer font-medium text-sm " >
                                    <p>Services</p>
                                </NuxtLink>
                                <NuxtLink @click="open = false" to="/resources" class="flex gap-4 text-primary-text cursor-pointer font-medium text-sm " >
                                    <p>Resources</p>
                                </NuxtLink>
                                <NuxtLink @click="open = false" to="/shop" class="flex gap-4 text-primary-text cursor-pointer font-medium text-sm " >
                                    <p>Shop</p>
                                </NuxtLink>
                                <NuxtLink @click="open = false" to="/contactus" class="flex gap-4 text-primary-text cursor-pointer font-medium text-sm " >
                                    <p>Contact</p>
                                </NuxtLink>
                                <NuxtLink @click="open = false" to="/#testimonials" class="flex gap-4 text-primary-text cursor-pointer font-medium text-sm " >
                                    <p>Testimonials</p>
                                </NuxtLink>
                            </div>
                        </template>
                    </UDrawer>
                </div>
            </div>
        </div>
    </div>
</template>
        <!-- )
    }
}) -->
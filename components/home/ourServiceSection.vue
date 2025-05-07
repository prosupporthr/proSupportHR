<script setup lang="ts">

    import ServiceCard from '../shared/serviceCard.vue'
import { ServiceData } from "../../assets/databank/services" 
 
    import { ref, onMounted } from 'vue'
    import { gsap } from "gsap"
    import { ScrollTrigger } from "gsap/ScrollTrigger"

    gsap.registerPlugin(ScrollTrigger)
    const box1 = ref(null)
    const box2 = ref(null) 

    onMounted(() => {
    //   Animate each box with staggered delays
        [box1, box2].forEach((boxRef, index) => {
            if(index === 0) {
                gsap.from(boxRef.value, {
                    opacity: 0,
                    y: 50,
                    duration: 0.8,
                    delay: index * 0.15,
                    scrollTrigger: {
                        trigger: boxRef.value,
                        start: "top 50%"
                    }
                })
            } else if (index === 1){
                gsap.from(boxRef.value, {
                    opacity: 0, 
                    x: 200,
                    duration: 1.2,
                    delay: index * 0.15,
                    scrollTrigger: {
                        trigger: boxRef.value,
                        start: "top 50%"
                    }
                })
            }  
        })
    }) 
</script>

<template>
    <div class=" lg:py-20 w-full flex justify-center lg:px-0 px-3 relative  " >
        <!-- <div class=" absolute inset-0 flex flex-col " > 
            <img src="/images/aboutforebg.png" alt="forbg" class=" w-full object-cover h-full  " /> 
            <img src="/images/aboutforebg.png" alt="forbg" class=" w-full object-cover lg:block hidden h-full  " />
        </div> -->
        <div class=" w-full lg:w-[85%] flex flex-col items-center gap-1 " >
            <div ref="box1" class=" flex flex-col gap-1 items-center " > 
                <p class=" font-semibold text-[30px] lg:text-[44px] text-primary-text " >Our Services</p>
                <p class=" lg:text-lg text-secondary font-medium " >HR Solutions for Ontario Businesses</p>
            </div>
            <div ref="box2" class=" w-full " > 
                <div class="w-full hidden lg:grid grid-cols-1 lg:grid-cols-3 gap-4 mt-12 " >
                    <div v-for="item in ServiceData" :key="item.title" >
                        <ServiceCard :item='item' />
                    </div>
                </div>
                <div class="w-full lg:hidden grid grid-cols-1 lg:grid-cols-3 gap-4 mt-12 " >
                    <div v-for="item in ServiceData.slice(0, 3)" :key="item.title" >
                        <ServiceCard :item='item' />
                    </div>
                </div>
            </div>
            <NuxtLink to="/services" >
                <button class=" w-[174px] mt-4 cursor-pointer text-white font-semibold text-sm h-[50px] rounded-4xl bg-blue-bg border border-white " >Explore All Services</button>
            </NuxtLink>
        </div>
    </div>
</template>
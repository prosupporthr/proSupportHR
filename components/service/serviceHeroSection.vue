<script setup >
import Navbar from '../shared/navbar.vue'

import { ref, onMounted } from 'vue'
    import { gsap } from "gsap"
    import { ScrollTrigger } from "gsap/ScrollTrigger"

    gsap.registerPlugin(ScrollTrigger)
    const box1 = ref(null)
    const box2 = ref(null)  

    onMounted(() => {
    //   Animate each box with staggered delays
        [box1, box2].forEach((boxRef, index) => {
            if (index === 0){
                gsap.from(boxRef.value, {
                    opacity: 0, 
                    x: -100,
                    duration: 0.8,
                    delay: index * 0.15,
                    scrollTrigger: {
                        trigger: boxRef.value,
                        start: "top 80%"
                    }
                })
            } else if (index === 1){
                gsap.from(boxRef.value, {
                    opacity: 0, 
                    y: 100,
                    duration: 0.8,
                    delay: index * 0.15,
                    scrollTrigger: {
                        trigger: boxRef.value,
                        start: "top 80%"
                    }
                })
            }  
        })
    }) 
</script> 

<template>
    <div class=" w-full h-[80vh] flex relative flex-col bg-white items-center border-b"> 
        <div ref="box2" class=" w-full absolute top-0 inset-x-0 z-50 " > 
            <Navbar />
        </div>
        <div class=" w-full h-full relative " >
            <img src="/images/servicebg.jpeg" alt="servicebg" class=" w-full h-[80vh] object-cover " />
            <div ref="box1" class=" absolute inset-x-0 bottom-0 top-[120px] z-20 flex items-center justify-center " >
                <div class=" w-full lg:px-0 px-3 lg:w-[85%] h-full flex justify-center pb-12 items-center flex-col gap-2 text-white " > 
                    <p class=" text-white " >Our services</p>
                    <p class=" font-bold max-w-[850px] text-center text-[46px] lg:leading-[51.6px] lg:text-[48px] text-white " >HR Services for Small Businesses</p>
                </div>
            </div>
        </div> 
        <div class=" absolute inset-0 bg-dark-bg z-10 " /> 
    </div>
</template>
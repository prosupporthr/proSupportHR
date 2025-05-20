<script setup lang="ts"  > 
 
    import Navbar from '../shared/navbar.vue'
    import { ref, onMounted } from 'vue'
    import { gsap } from "gsap"
    import { ScrollTrigger } from "gsap/ScrollTrigger"
    const route = useRoute()

    const searchTerm = route.query.key

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
    <div class=" w-full h-[60vh] lg:h-[80vh] flex relative flex-col bg-white items-center border-b"> 
        <!-- <div ref="box2" class=" w-full absolute top-0 inset-x-0 z-50 " > 
            <Navbar />
        </div> -->
        <div class=" w-full h-full relative " >
            <img src="/images/shop.jpg" alt="servicebg" class=" w-full  h-[60vh] lg:h-[80vh] object-cover " />
            <div ref="box1" class=" absolute inset-x-0 bottom-0 top-[120px] z-20 flex items-center justify-center " >
                <div class=" lg:w-[85%] lg:px-0 px-3 h-full flex justify-center pb-12 items-center flex-col gap-2 text-white " >  
                    <p v-if="searchTerm" class=" font-bold max-w-[700px] lg:text-center leading-[120%] text-[40px] lg:text-[50px] text-white " >{{ searchTerm.toString().replaceAll('-', ' ') }}</p>
                    <p v-if="!searchTerm" class=" font-bold max-w-[700px] lg:text-center leading-[120%] text-[40px] lg:text-[50px] text-white " >HRGenie - The HR Compliance Toolkit</p>
                    <p class=" text-white " >Get ready-to-use HR templates for your business! Download instantly after purchase.</p>
                </div>
            </div>
        </div> 
        <div class=" absolute inset-0 bg-dark-bg z-10 " /> 
    </div>
</template>
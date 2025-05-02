<script setup lang="ts" >
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
                        start: "top 60%"
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
                        start: "top 60%"
                    }
                })
            }  
        })
    }) 
</script>

<template>
    <div class=" w-full flex bg-red-400 relative flex-col  items-center border-b"> 
        <!-- <div ref="box2" class=" w-full absolute top-0 inset-x-0 z-50 " > 
            <Navbar />
        </div> -->
        <div class=" w-full h-[80vh] lg:h-full relative " >
            <img src="/images/herosection.png" alt="hero" class=" w-full lg:h-full h-[80vh] object-cover lg:object-contain " />
            <div ref="box1" class=" absolute inset-x-0 bottom-0 top-[50px] lg:top-[120px] z-10 lg:px-0 px-3 flex items-center justify-center " >
                <div class=" w-full lg:w-[85%] h-full flex pt-16 flex-col gap-4 text-white " >
                    <p class="lg:text-xl font-semibold " >Welcome to ProSupport HR Partners</p>
                    <p class=" font-bold text-4xl lg:text-[60px] max-w-[1000px] leading-[40px] lg:leading-[81px] " >HR Compliance & People Management—Simplified for Your Business</p>
                    <p class=" max-w-[650px] lg:text-lg " >Stay compliant, reduce risks, and focus on growth. Expert HR solutions for Ontario businesses.</p>
                    <button class=" px-5 w-fit cursor-pointer border-t-[0.6px] lg:text-base text-xs border-l-[0.6px] border-[2px] rounded-[40px] h-[64px] border-white " >Get Your Free Compliance Checklist</button>
                </div>
            </div>
        </div> 
        <!-- <div class=" w-[85%] h-[157px] flex justify-around items-center px-8  " >
            <div class=" items-center flex flex-col gap-2 " >
                <p class=" text-primary-text text-[50px] font-bold leading-[100%] " >1,485<span class=" text-blue-bg " >+</span></p>
                <p class=" text-blue-bg font-semibold text-sm " >Trusted Client</p>
            </div>
            <div class=" items-center flex flex-col gap-2 " >
                <p class=" text-primary-text text-[50px] font-bold leading-[100%] " >100<span class=" text-blue-bg " >+</span></p>
                <p class=" text-blue-bg font-semibold text-sm " >Ontario Businesses Supported</p>
            </div>
            <div class=" items-center flex flex-col gap-2 " >
                <p class=" text-primary-text text-[50px] font-bold leading-[100%] " >25<span class=" text-blue-bg " >+</span></p>
                <p class=" text-blue-bg font-semibold text-sm " >Years Combined HR Expertise</p>
            </div>
            <div class=" items-center flex flex-col gap-2 " >
                <p class=" text-primary-text text-[50px] font-bold leading-[100%] " >100<span class=" text-blue-bg " >%</span></p>
                <p class=" text-blue-bg font-semibold text-sm " >Years Combined HR Expertise</p>
            </div>
        </div> -->
    </div>
</template>
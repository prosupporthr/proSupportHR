<template>
    <div ref="box1" class=" w-full max-w-screen overflow-x-hidden flex lg:px-0 px-4 justify-center items-center relative py-9 lg:py-28 text-white  " >
        <img src="/images/shoplanding.jpg" alt="shopland" class=" w-full h-full object-cover absolute inset-0 " />
        <div class=" bg-black opacity-60 absolute inset-0 z-10 " />
        <div class=" w-full h-full flex flex-col justify-center items-center z-30 gap-4 " >
            <p class="  text-[30px] text-center lg:text-[44px] leading-[120%] font-bold " >Get Your Free HR Compliance Guide!</p>
            <p class=" lg:text-lg text-center leading-[120%] " >Download our free eGuide to learn key HR Compliance Business</p>
            <NuxtLink to="/shop" >
                <button class=" w-[174px] text-white font-semibold text-sm h-[50px] rounded-4xl bg-blue-bg border border-white " >Download Now</button>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup >
    import { ref, onMounted } from 'vue'
    import { gsap } from "gsap"
    import { ScrollTrigger } from "gsap/ScrollTrigger"

    gsap.registerPlugin(ScrollTrigger)
    const box1 = ref(null) 

    onMounted(() => {
    //   Animate each box with staggered delays
        [box1].forEach((boxRef, index) => {
            if(index === 0) {
                gsap.from(boxRef.value, {
                    opacity: 0,
                    x: 100,
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
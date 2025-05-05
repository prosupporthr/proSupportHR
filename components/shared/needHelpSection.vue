
<script setup >
    import { ref, onMounted } from 'vue'
    import gsap from 'gsap'
    import ScrollTrigger from 'gsap/ScrollTrigger'

    gsap.registerPlugin(ScrollTrigger)
    const box1 = ref(null) 

    onMounted(() => {
    //   Animate each box with staggered delays
        [box1].forEach((boxRef, index) => {
            if(index === 0) {
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
    <div class=" w-full flex lg:py-20 justify-center lg:px-0 px-3 " >
        <div ref="box1" class=" lg:max-w-[85%] w-full h-[418px] rounded-2xl relative " >
            <img src="/images/needhelp.jpeg" alt="needhelp" class=" w-full h-[418px] object-cover rounded-2xl " />
            <div class=" absolute inset-0 bg-dark-bg rounded-2xl z-10 " />
            <div class=" absolute inset-0 flex justify-center items-center flex-col z-20 lg:px-0 px-3 " >
                <p class=" font-semibold text-[30px] lg:text-[40px] text-white " >Need Help?</p>
                <p class=" lg:text-lg text-foundation-color lg:max-w-[700px] text-center " >Not sure which course is right for you? <br/> We're here to help you find the best fit for your professional goals.</p> 
                <button class=" lg:w-[250px] w-[223px] cursor-pointer bg-blue-bg border-t-[0.6px] border-l-[0.6px] border-[2px] rounded-[40px] h-[64px] border-white text-xl mt-8 font-semibold text-white " >Contact Us</button>
            </div>
        </div>
    </div>
</template>
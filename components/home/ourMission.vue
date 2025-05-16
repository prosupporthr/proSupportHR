<template>

    <div  ref="box1" class=" lg:py-20 w-full flex justify-center lg:px-0 px-3 relative  " >
        <div class=" w-full lg:w-[85%] flex gap-6 lg:flex-row flex-col lg:gap-8 "  >
            <div style="box-shadow: 0px 20px 70px 0px #C2C2C21A" class=" rounded-xl w-full py-4 px-6 flex flex-col gap-4 lg:px-12 bg-white "  >
                <img src="/images/mission.png" alt="mission" class=" w-[45px] " />
                <div class=" w-full flex flex-col gap-2 " >
                <p class=" text-[32px] font-bold " >Our Mission</p>
                <p class=" text-sm " >We empower businesses by transforming HR into a strategic asset—ensuring compliance, streamlining processes, and enhancing workplace culture. Our solutions help small businesses thrive with confidence, knowing their HR operations are handled by experts.</p>
                </div>
            </div>
            <div style="box-shadow: 0px 20px 70px 0px #C2C2C21A" class=" rounded-xl w-full py-4 px-6 flex flex-col gap-4 lg:px-12 bg-white "  >
                <img src="/images/mission.png" alt="mission" class=" w-[45px] " />
                <div class=" w-full flex flex-col gap-2 " >
                <p class=" text-[32px] font-bold " >Our Vision</p>
                <p class=" text-sm " >To be the go-to HR partner for small businesses in Ontario—recognized for driving compliance, efficiency, and business growth through expert HR solutions</p>
                </div>
            </div>
            <div style="box-shadow: 0px 20px 70px 0px #C2C2C21A" class=" rounded-2xl w-full relative py-4 px-6 flex flex-col lg:px-12 text-white "  > 
                <img src="/images/missionbg.jpg" alt="mision" class=" object-cover absolute h-full w-full inset-0 rounded-2xl "  />
                <img src="/images/tpbg.png" alt="mision" class=" object-cover absolute h-full w-full inset-0 rounded-2xl z-10 "  /> 
                <div class=" w-full flex items-center gap-2 z-20 " >
                    <p class=" text-[66px] font-semibold leading-[120%]" >15</p>
                    <p class=" text-lg font-medium max-w-[154px] " >Years Of Practical Experience</p>
                </div>
                <div class=" w-full flex flex-col gap-2 z-20 " >
                    <p class=" text-[24px] font-medium leading-[120%] " >Building Stronger Teams, Together</p>
                    <p class=" text-sm " >Transforming HR processes through strategic guidance and support, ensuring your business thrives and employees excel.</p>
                </div>
            </div>
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
                    y: 50,
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
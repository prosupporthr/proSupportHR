
<script setup >
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
                    x: -200,
                    duration: 0.8,
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
    <div class=" w-full flex flex-col gap-10 bg-white relative lg:py-20 " > 
        <p ref="box1" class=" text-[30px] text-center lg:text-[44px] text-primary-text font-semibold " >Our Values</p>
        <div class=" w-full flex justify-center " >
            <div ref="box2" class=" w-full lg:w-[85%] flex lg:flex-row flex-col lg:justify-around gap-12 items-center " >
                <div class=" justify-center items-center flex flex-col gap-4 max-w-[260px] w-full " >
                    <div class=" w-[60px] h-[60px] rounded-full border border-blue-bg bg-light-blue flex justify-center items-center text-blue-bg font-semibold text-2xl " >
                        1
                    </div>
                    <div class=" flex flex-col gap-1 justify-center items-center " >
                        <p class=" text-2xl font-semibold text-fondation-text-500 " >Partnership</p>
                        <p class=" lg:text-lg text-fondation-text-500 text-center " >Building lasting relationships with our clients</p>
                    </div>
                </div>
                <div class=" justify-center items-center flex flex-col gap-4 max-w-[260px] w-full " >
                    <div class=" w-[60px] h-[60px] rounded-full border border-blue-bg bg-light-blue flex justify-center items-center text-blue-bg font-semibold text-2xl " >
                        2
                    </div>
                    <div class=" flex flex-col gap-1 justify-center items-center " >
                        <p class=" text-2xl font-semibold text-fondation-text-500 " >Integrity</p>
                        <p class=" lg:text-lg text-fondation-text-500 text-center " >Conducting business with transparency and honesty</p>
                    </div>
                </div>
                <div class=" justify-center items-center flex flex-col gap-4 max-w-[260px] w-full " >
                    <div class=" w-[60px] h-[60px] rounded-full border border-blue-bg bg-light-blue flex justify-center items-center text-blue-bg font-semibold text-2xl " >
                        3
                    </div>
                    <div class=" flex flex-col gap-1 justify-center items-center " >
                        <p class=" text-2xl font-semibold text-fondation-text-500 " >Excellence</p>
                        <p class=" lg:text-lg text-fondation-text-500 text-center " >Delivering the highest quality HR solutions</p>
                    </div>
                </div>
                <div class=" justify-center items-center flex flex-col gap-4 max-w-[260px] w-full " >
                    <div class=" w-[60px] h-[60px] rounded-full border border-blue-bg bg-light-blue flex justify-center items-center text-blue-bg font-semibold text-2xl " >
                        4
                    </div>
                    <div class=" flex flex-col gap-1 justify-center items-center " >
                        <p class=" text-2xl font-semibold text-fondation-text-500 " >Innovation</p>
                        <p class=" lg:text-lg text-fondation-text-500 text-center " >Continuously evolving our services to meet client needs</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
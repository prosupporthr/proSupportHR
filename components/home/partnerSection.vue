
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
                    x: 100,
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
                    x: -100,
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
    <div class=" w-full max-w-screen overflow-x-hidden flex justify-center relative " > 
        <!-- <div class=" absolute inset-0 flex flex-col " > 
            <img src="/images/aboutforebg.png" alt="forbg" class=" w-full object-cover h-full  " />  
        </div> -->
        <div class=" lg:py-20 max-w-[85%] w-full h-full gap-4 text-white flex flex-col " > 
            <div class=" w-full flex py-8 flex-col-reverse lg:gap-0 gap-8 lg:flex-row-reverse " >
                <div ref="box1" class=" w-full flex justify-center itrm " >
                    <img src="/images/partner.png" alt="aboutone" />
                </div>
                <div ref="box2" class=" w-full flex h-full my-auto justify-center flex-col gap-3 " > 
                    <div class=" border-l-[5px] border-l-red-color pl-5 py-1 flex items-center " >
                        <p class=" font-bold text-[30px] lg:text-[44px] text-primary-text lg:leading-[52.8px] " >Why Partner with us?</p>
                    </div>
                    <div class=" flex flex-col gap-5 " > 
                        <p class=" text-black " >Managing HR in-house is expensive and time-consuming. We provide tailored, legally compliant HR solutions so you can focus on what matters—growing your business.</p>
                        <ul class=" list-decimal pl-5 text-black flex flex-col gap-4 ">
                            <li class=" text-black " ><span class=" font-bold " >HR Compliance Experts</span> - We don't just advise—we implement. Stay legally compliant with tailored policies and audits.</li>
                            <li class=" text-black " ><span class=" font-bold " >Cost-Effective HR Solutions</span> - Cut down on expensive HR overhead by outsourcing to experts.</li>
                            <li class=" text-black " ><span class=" font-bold " >Efficiency & Productivity</span> - Streamlined HR processes save time.</li>
                            <li class=" text-black " ><span class=" font-bold " >Legal Protection</span> - Confidence that HR policies comply with regulations and reduce legal risks.</li>
                            <li class=" text-black " ><span class=" font-bold " >Hands-On Support</span> - We act as your HR partner, offering direct consulting, documentation solutions, and policy development.</li>
                        </ul>
                    </div>
                </div>
            </div> 
        </div> 
    </div>
</template>
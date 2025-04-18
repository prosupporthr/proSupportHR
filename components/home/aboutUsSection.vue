<template>
    <div class=" w-full flex flex-col justify-center items-center text-primary-text lg:px-0 px-3 gap-1 " >
        <div class=" lg:pt-10 lg:max-w-[85%] w-full h-full gap-4 text-white flex flex-col " >
            <p ref="box5" class=" font-semibold text-[30px] lg:text-[44px] text-primary-text  " >Who We Are</p>
            <div class=" w-full flex lg:flex-row flex-col-reverse pt-8 " >
                <div ref="box1" class=" w-full flex justify-center rounded-2xl lg:py-0 py-4 " >
                    <img src="/images/aboutone.png" alt="aboutone" class=" lg:h-[512px] h-[386px] rounded-2xl lg:block lg:object-contain object-cover  " />
                    <img src="/images/aboutone.jpeg" alt="aboutone" class=" lg:w-[80%] h-[386px] rounded-2xl lg:hidden lg:object-contain object-cover  " />
                </div>
                <div ref="box2" class=" w-full flex h-full my-auto justify-center flex-col gap-3 " >
                    <p class=" font-medium text-blue-bg " >About Us</p>
                    <div class=" border-l-[5px] border-l-red-color pl-5 py-1 flex items-center " >
                        <p class=" font-bold text-[30px] lg:text-[44px] text-primary-text leading-[46px] lg:leading-[48px] " >About ProSupport HR Partners</p>
                    </div>
                    <p class=" text-secondary " >At ProSupport HR Partners, we believe small businesses deserve big-business HR solutions. Our mission is simple—help Ontario businesses navigate HR compliance with ease, so they can focus on growth. We combine deep Human Resources Management knowledge with practical, ready-to-use solutions.</p>
                </div>
            </div> 
        </div> 
        <div class=" lg:pt-10 lg:max-w-[85%] w-full h-full gap-4 text-white flex lg:flex-row-reverse flex-col-reverse " > 
            <div ref="box4" class=" w-full flex justify-center rounded-2xl " >
                <img src="/images/abouttwo.png" alt="aboutone"  class=" lg:h-[512px] h-[386px] rounded-2xl object-cover  "  />
            </div>
            <div ref="box3" class=" w-full flex h-full my-auto justify-center flex-col gap-3 " >
                <p class=" font-medium text-blue-bg " >About Us</p>
                    <div class=" border-l-[5px] border-l-red-color pl-5 py-1 flex items-center " >
                        <p class=" font-bold text-[30px] lg:text-[44px] text-primary-text leading-[46px] lg:leading-[52.8px] " >Why We Started</p>
                </div>
                <p class=" text-secondary " >ProSupport HR Partners was founded by an experienced HR professional and entrepreneur with first hand experience in building and managing businesses. Unlike traditional HR consultants, ProSupport HR Partners understands the challenges business owners face—from compliance hurdles to scaling a team. This real-world experience allows ProSupport HR Partners to provide practical, business-focused HR solutions that go beyond theory, helping entrepreneurs navigate HR with confidence.</p>
            </div> 
        </div>
    </div>
</template>

<script setup >
    import { ref, onMounted } from 'vue'
    import gsap from 'gsap'
    import ScrollTrigger from 'gsap/ScrollTrigger'

    gsap.registerPlugin(ScrollTrigger)
    const box1 = ref(null)
    const box2 = ref(null)
    const box3 = ref(null)
    const box4 = ref(null)
    const box5 = ref(null)

    onMounted(() => {
    //   Animate each box with staggered delays
        [box1, box2, box3, box4, box5].forEach((boxRef, index) => {
            if(index === 0) {
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
                    x: 100,
                    duration: 0.8,
                    delay: index * 0.15,
                    scrollTrigger: {
                        trigger: boxRef.value,
                        start: "top 80%"
                    }
                })
            } else if (index === 2) {
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
            } else if (index === 3){
                gsap.from(boxRef.value, {
                    opacity: 0,
                    x: 100,
                    duration: 0.8,
                    delay: index * 0.15,
                    scrollTrigger: {
                        trigger: boxRef.value,
                        start: "top 80%"
                    }
                })
            } else if (index === 4){
                gsap.from(boxRef.value, {
                    opacity: 0,
                    y: 40,
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
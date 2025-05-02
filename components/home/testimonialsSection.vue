
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
                    y: -50,
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
    <div id="testimonials" class=" w-full lg:py-20 flex justify-center " >
        <div class=" lg:max-w-[85%] lg:px-0 px-2 w-full flex flex-col gap-6 " >
            <div ref="box1" class=" w-full flex justify-between items-center " >
                <div class=" border-l-[5px] border-l-red-color pl-5 py-1 flex items-center " >
                    <p class=" font-bold text-[30px] lg:text-[44px] text-primary-text leading-[52.8px] " >Testimonials</p>
                </div>
                <div class=" w-fit flex gap-4 items-center " >
                    <div class=" w-[42px] lg:w-[72px] h-[42px] lg:h-[72px] cursor-pointer rounded-full flex items-center justify-center border border-gray50 " >

                    </div>
                    <div class=" w-[42px] lg:w-[72px] h-[42px] lg:h-[72px] cursor-pointer rounded-full flex items-center justify-center border border-gray50 " >

                    </div>
                </div>
            </div>
            <div ref="box2" class=" w-full flex overflow-x-auto " >
                <div class=" w-auto flex gap-6 p-2 " > 
                    <div class=" w-[80vw] lg:w-[392px] gap-3 rounded-2xl bg-white p-6 shadow-md " >
                        <div class=" w-10 h-10 rounded-full bg-red-300 " >

                        </div>
                        <p class=" text-xl font-bold text-base-color " >Alex M</p>
                        <p class=" text-sm text-secondary " >Project Coordinator</p>
                        <p class=" text-base-color text-sm mt-4 " >I gained so much confidence in managing complex projects after attending the Project Management webinar. The real-world examples shared by the speaker were invaluable.</p>
                    </div>
                    <div class=" w-[80vw] lg:w-[392px] gap-3 rounded-2xl bg-white p-6 shadow-md " >
                        <div class=" w-10 h-10 rounded-full bg-red-300 " >

                        </div>
                        <p class=" text-xl font-bold text-base-color " >Alex M</p>
                        <p class=" text-sm text-secondary " >Project Coordinator</p>
                        <p class=" text-base-color text-sm mt-4 " >I gained so much confidence in managing complex projects after attending the Project Management webinar. The real-world examples shared by the speaker were invaluable.</p>
                    </div>
                    <div class=" w-[80vw] lg:w-[392px] gap-3 rounded-2xl bg-white p-6 shadow-md " >
                        <div class=" w-10 h-10 rounded-full bg-red-300 " >

                        </div>
                        <p class=" text-xl font-bold text-base-color " >Alex M</p>
                        <p class=" text-sm text-secondary " >Project Coordinator</p>
                        <p class=" text-base-color text-sm mt-4 " >I gained so much confidence in managing complex projects after attending the Project Management webinar. The real-world examples shared by the speaker were invaluable.</p>
                    </div>
                    <div class=" w-[80vw] lg:w-[392px] gap-3 rounded-2xl bg-white p-6 shadow-md " >
                        <div class=" w-10 h-10 rounded-full bg-red-300 " >

                        </div>
                        <p class=" text-xl font-bold text-base-color " >Alex M</p>
                        <p class=" text-sm text-secondary " >Project Coordinator</p>
                        <p class=" text-base-color text-sm mt-4 " >I gained so much confidence in managing complex projects after attending the Project Management webinar. The real-world examples shared by the speaker were invaluable.</p>
                    </div>
                    <div class=" w-[80vw] lg:w-[392px] gap-3 rounded-2xl bg-white p-6 shadow-md " >
                        <div class=" w-10 h-10 rounded-full bg-red-300 " >

                        </div>
                        <p class=" text-xl font-bold text-base-color " >Alex M</p>
                        <p class=" text-sm text-secondary " >Project Coordinator</p>
                        <p class=" text-base-color text-sm mt-4 " >I gained so much confidence in managing complex projects after attending the Project Management webinar. The real-world examples shared by the speaker were invaluable.</p>
                    </div>
                    <div class=" w-[80vw] lg:w-[392px] gap-3 rounded-2xl bg-white p-6 shadow-md " >
                        <div class=" w-10 h-10 rounded-full bg-red-300 " >

                        </div>
                        <p class=" text-xl font-bold text-base-color " >Alex M</p>
                        <p class=" text-sm text-secondary " >Project Coordinator</p>
                        <p class=" text-base-color text-sm mt-4 " >I gained so much confidence in managing complex projects after attending the Project Management webinar. The real-world examples shared by the speaker were invaluable.</p>
                    </div>
                    <div class=" w-[80vw] lg:w-[392px] gap-3 rounded-2xl bg-white p-6 shadow-md " >
                        <div class=" w-10 h-10 rounded-full bg-red-300 " >

                        </div>
                        <p class=" text-xl font-bold text-base-color " >Alex M</p>
                        <p class=" text-sm text-secondary " >Project Coordinator</p>
                        <p class=" text-base-color text-sm mt-4 " >I gained so much confidence in managing complex projects after attending the Project Management webinar. The real-world examples shared by the speaker were invaluable.</p>
                    </div>
                    <div class=" w-[80vw] lg:w-[392px] gap-3 rounded-2xl bg-white p-6 shadow-md " >
                        <div class=" w-10 h-10 rounded-full bg-red-300 " >

                        </div>
                        <p class=" text-xl font-bold text-base-color " >Alex M</p>
                        <p class=" text-sm text-secondary " >Project Coordinator</p>
                        <p class=" text-base-color text-sm mt-4 " >I gained so much confidence in managing complex projects after attending the Project Management webinar. The real-world examples shared by the speaker were invaluable.</p>
                    </div>
                    <div class=" w-[80vw] lg:w-[392px] gap-3 rounded-2xl bg-white p-6 shadow-md " >
                        <div class=" w-10 h-10 rounded-full bg-red-300 " >

                        </div>
                        <p class=" text-xl font-bold text-base-color " >Alex M</p>
                        <p class=" text-sm text-secondary " >Project Coordinator</p>
                        <p class=" text-base-color text-sm mt-4 " >I gained so much confidence in managing complex projects after attending the Project Management webinar. The real-world examples shared by the speaker were invaluable.</p>
                    </div>
                    <div class=" w-[80vw] lg:w-[392px] gap-3 rounded-2xl bg-white p-6 shadow-md " >
                        <div class=" w-10 h-10 rounded-full bg-red-300 " >

                        </div>
                        <p class=" text-xl font-bold text-base-color " >Alex M</p>
                        <p class=" text-sm text-secondary " >Project Coordinator</p>
                        <p class=" text-base-color text-sm mt-4 " >I gained so much confidence in managing complex projects after attending the Project Management webinar. The real-world examples shared by the speaker were invaluable.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
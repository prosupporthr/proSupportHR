<script>
import Navbar from '../shared/navbar.jsx'

export default {
  components: {
    Navbar
  }
}
</script>

<template>
    <div class=" w-full flex relative flex-col bg-white items-center border-b"> 
        <div class=" w-full absolute top-0 inset-x-0 z-50 " > 
            <Navbar />
        </div>
        <div class=" w-full h-full relative " >
            <img src="/images/herosection.png" alt="hero" class=" w-full " />
            <div class=" absolute inset-x-0 bottom-0 top-[120px] z-10 flex items-center justify-center " >
                <div class=" w-[85%] h-full flex pt-16 flex-col gap-4 text-white " >
                    <p class="text-xl font-semibold " >Welcome to ProSupport HR Partners</p>
                    <p class=" font-bold text-[60px] max-w-[1000px] leading-[81px] " >HR Compliance & People Management—Simplified for Your Business</p>
                    <p class=" max-w-[650px] text-lg " >Stay compliant, reduce risks, and focus on growth. Expert HR solutions for Ontario businesses.</p>
                    <button class=" px-5 w-fit cursor-pointer border-t-[0.6px] border-l-[0.6px] border-[2px] rounded-[40px] h-[64px] border-white " >Get Your Free Compliance Checklist</button>
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
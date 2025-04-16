<script>
import Navbar from '../shared/navbar.jsx'

export default {
  components: {
    Navbar
  }
}
</script>

<template>
    <div class=" w-full h-[80vh] flex relative flex-col bg-white items-center border-b"> 
        <div class=" w-full absolute top-0 inset-x-0 z-50 " > 
            <Navbar />
        </div>
        <div class=" w-full h-full relative " >
            <img src="/images/shop.jpeg" alt="servicebg" class=" w-full h-[80vh] object-cover " />
            <div class=" absolute inset-x-0 bottom-0 top-[120px] z-20 flex items-center justify-center " >
                <div class=" w-[85%] h-full flex justify-center pb-12 items-center flex-col gap-2 text-white " >  
                    <p class=" font-bold max-w-[850px] text-center leading-[50.4px] text-[50px] text-white " >HR Policies and Compliance</p>
                    <p class=" text-white " >Get ready-to-use HR templates for your business! Download instantly after purchase.</p>
                </div>
            </div>
        </div> 
        <div class=" absolute inset-0 bg-dark-bg z-10 " /> 
    </div>
</template>
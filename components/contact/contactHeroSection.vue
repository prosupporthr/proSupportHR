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
            <img src="/images/contact.jpeg" alt="servicebg" class=" w-full h-[80vh] object-cover " />
            <div class=" absolute inset-x-0 bottom-0 top-[120px] z-20 flex items-center justify-center " >
                <div class=" w-[85%] h-full flex justify-center pb-12 items-center flex-col gap-2 text-white " >  
                    <p class=" font-bold max-w-[850px] text-center leading-[50.4px] text-[48px] text-white " >Contact Us</p>
                    <p class=" text-white max-w-[650px] text-center " >We're here to help! If you have any questions, feedback, or need assistance, feel free to reach out to us.</p>
                </div>
            </div>
        </div> 
        <div class=" absolute inset-0 bg-dark-bg z-10 " /> 
    </div>
</template>
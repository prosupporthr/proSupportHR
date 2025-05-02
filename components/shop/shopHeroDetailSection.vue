<template>
    <div class=" w-full h-[900px] relative lg:h-[80vh] flex flex-col bg-white items-center "> 
        <!-- <div ref="box2" class=" w-full absolute top-0 inset-x-0 z-50 " > 
            <Navbar />
        </div> -->
        <div class=" w-full h-[900px] auto relative " >
            <img src="/images/shop.jpeg" alt="servicebg" class=" w-full lg:relative absolute z-10 h-[900px] lg:h-[80vh] object-cover " />
            <div ref="box1" class=" lg:absolute relative inset-x-0 bottom-0 top-[120px] z-20 flex items-center justify-center " >
                <div class=" lg:w-[85%] lg:px-0 px-3 h-fit lg:h-full flex justify-center pb-12 lg:flex-row flex-col items-center gap-4 lg:gap-2 text-white " >  
                    <div class=" w-full flex flex-col " > 
                        <p class=" text-[32px] tracking-[4.2px] " >HEALTH SECTOR</p>
                        <p class=" font-bold leading-[120%] text-[40px] lg:text-[50px] text-white " >Infection Prevention and Control  Policy</p>
                        <p class=" text-white mt-5 " >Get ready-to-use HR templates for your business! Download instantly after purchase.</p>
                    </div>
                    <div class=" w-full " >
                        <div class=" w-full lg:w-[450px] lg:ml-10 lg:absolute lg:-bottom-[180px] rounded-4xl " >
                            <div class=" w-full h-[180px] lg:h-[280px] bg-amber-400 rounded-t-4xl " >

                            </div>
                            <div style="backdrop-filter: blur(100px)" class=" p-6 flex flex-col rounded-b-4xl" >
                                <div class=" w-full pb-3 border-b-[0.5px] border-[#6F6F6F] " >
                                    <p class=" text-xl lg:text-[27px] font-semibold " >Course Information</p>
                                </div>
                                <div class=" w-full py-3 flex flex-col gap-2 border-b-[0.5px] border-[#6F6F6F] " >
                                    <p class=" font-medium text-xs lg:text-sm " >Courses Tittle</p>
                                    <p class=" font-bold lg:text-base text-sm " >{{ props.item?.title }}</p>
                                </div>
                                <div class=" w-full py-3 flex flex-col gap-2 border-b-[0.5px] border-[#6F6F6F] " >
                                    <p class=" font-medium text-xs lg:text-sm " >Enter Email</p>
                                    <input class=" w-full h-[40px] bg-white rounded-md text-black px-3 outline-none " />
                                </div> 
                                <button :disable="true" class=" w-full cursor-pointer disabled:cursor-not-allowed lg:block text-white font-semibold text-sm h-[50px] rounded-4xl bg-blue-bg mt-4 " >Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        <div class=" absolute inset-0 bg-dark-bg z-10 " /> 
    </div>
</template>



<script setup lang="ts">
 
    import { type IProduct } from '~/type/product'; 
    const props = defineProps<{
        item: IProduct;
    }>();

    console.log(props?.item)

</script>
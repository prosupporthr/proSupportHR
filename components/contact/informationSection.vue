<template>
    <div class=" w-full flex justify-center lg:px-0 px-3 lg:py-20 " >
        <div class=" lg:max-w-[85%] w-full flex gap-8 lg:flex-row flex-col " >
            <div class=" w-full shadow-md rounded-lg p-6 flex flex-col gap-4 " >
                <div class=" w-[90px] h-[90px] border border-dotted border-blue-bg rounded-full p-1 " >
                    <div class=" w-full h-full bg-blue-bg rounded-full flex justify-center items-center " > 
                        <UIcon name="i-lucide-map-pin" class="size-5 text-white " />   
                    </div>
                </div>
                <p class=" mb-2 text-base-color tracking-[4.2px] uppercase text-sm " >Office location</p>
                <p class=" mt-auto text-primary-text font-medium text-2xl " >Mississauga,Province Canada</p>
            </div>
            <div class=" w-full shadow-md rounded-lg p-6 flex flex-col gap-4 " >
                <div class=" w-[90px] h-[90px] border border-dotted border-blue-bg rounded-full p-1 " > 
                    <div class=" w-full h-full bg-blue-bg rounded-full flex justify-center items-center " >  
                        <UIcon name="i-lucide-phone" class="size-5 text-white " />   
                    </div>
                </div>
                <p class=" mb-2 text-base-color tracking-[4.2px] uppercase text-sm " >Give us a call</p>
                <p class=" mt-auto text-primary-text font-medium text-2xl " >2896281484</p>
            </div>
            <div class=" w-full shadow-md rounded-lg p-6 flex flex-col gap-2 " >
                <div class=" w-[90px] h-[90px] border border-dotted border-blue-bg rounded-full  p-1" >
                    <div class=" w-full h-full bg-blue-bg rounded-full flex justify-center items-center " > 
                        <UIcon name="i-lucide-mail" class="size-5 text-white " />   
                    </div>
                </div>
                <p class=" mb-2 text-base-color tracking-[4.2px] uppercase text-sm " >send us a message</p>
                <p class=" mt-auto text-primary-text font-medium text-2xl " >contact@prosupporthr.ca</p>
            </div>
        </div>
    </div>
</template>
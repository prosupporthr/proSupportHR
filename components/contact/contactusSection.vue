<template>
    <div class=" w-full flex justify-center " >  

        <div class=" w-full lg:w-[85%] lg:py-20 flex lg:flex-row flex-col gap-6 " > 
            <div class=" w-full " > 
                <img src="/images/contactform.png" alt="contact" class=" w-full lg:w-[90%] " />
            </div>
            <div class=" w-full flex flex-col gap-4 lg:px-0 px-3 " >
                <div class=" lg:max-w-[500px] w-full flex flex-col justify-center h-full gap-4 " > 
                    <div class=" w-full flex gap-1 flex-col " >
                        <p class=" font-medium text-primary-text " >Name</p> 
                        <input class=" w-full h-[52px] border border-border-color px-3 rounded-lg " />
                    </div>
                    <div class=" w-full flex gap-1 flex-col " >
                        <p class=" font-medium text-primary-text " >Email</p> 
                        <input class=" w-full h-[52px] border border-border-color px-3 rounded-lg " />
                    </div> 
                    <div class=" w-full flex gap-1 flex-col " >
                        <p class=" font-medium text-primary-text " >Phone Number (Optional)</p> 
                        <input class=" w-full h-[52px] border border-border-color px-3 rounded-lg " />
                    </div>
                    <button class=" w-full h-[56px] bg-blue-bg rounded-full text-white font-semibold mt-4 " >Send</button>
                </div>
            </div>
        </div>
    </div>
</template>
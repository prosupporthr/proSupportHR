
<template>
    <div class=" w-full bg-footer-color flex flex-col items-center " >
        <div class=" max-w-[85%] w-full pt-20 pb-8 flex justify-between gap-12 " >
            <div class="w-fit " >
                <div class=" w-[300px] flex flex-col gap-6 items-center " >
                    <img src="/images/logo.png" alt="logo" class=" w-[205px] " />
                    <div class=" w-full flex justify-between " >  
                        <div class=" w-6 h-6 bg-amber-400 " />
                        <div class=" w-6 h-6 bg-amber-400 " />
                        <div class=" w-6 h-6 bg-amber-400 " />
                        <div class=" w-6 h-6 bg-amber-400 " />
                        <div class=" w-6 h-6 bg-amber-400 " /> 
                    </div>
                </div>
            </div>
            <div class=" w-full flex gap-4 justify-end " >
                <div class=" max-w-[180px] w-full flex flex-col gap-4 " >
                    <p class=" font-semibold text-2xl text-foundation-color " >Quick Links</p>
                    <div class=" flex flex-col gap-2 " >
                        <p class=" text-sm text-white " >Home</p>
                        <p class=" text-sm text-white " >About Us</p>
                        <p class=" text-sm text-white " >Services</p>
                        <p class=" text-sm text-white " >Shop</p>
                        <p class=" text-sm text-white " >Testimonials</p>
                        <p class=" text-sm text-white " >Blogs</p>
                        <p class=" text-sm text-white " >Contact Us</p>
                    </div>
                </div>
                <div class=" max-w-[250px] w-full flex flex-col gap-4 " >
                    <p class=" font-semibold text-2xl text-foundation-color " >Useful Links</p>
                    <div class=" flex flex-col gap-2 " >
                        <div class=" flex items-center gap-3 " >
                            <UIcon name="i-lucide-mail" class="size-5" />
                            <p class=" text-white " >contact@prosupporthr.ca</p>
                        </div>
                        <div class=" flex items-center gap-3 " >
                            <UIcon name="i-lucide-phone" class="size-5" />
                            <p class=" text-white " >2896281484</p>
                        </div>
                        <div class=" flex items-center gap-3 " >
                            <UIcon name="i-lucide-map-pin" class="size-5" />
                            <p class=" text-white " >Mississauga, Province Canada</p>
                        </div>
                    </div>
                </div>
                <div class=" max-w-[350px] w-full flex flex-col ml-4 gap-4 " >
                    <p class=" font-medium text-lg text-white " >Newsletter</p>
                    <div class=" flex flex-col gap-2 " > 
                        <p class=" text-foundation-color " >Subscribe to get latest updates on our offers</p>
                        <div class=" w-full border flex border-footer-border rounded-2xl bg-white p-1 h-[56px] " >
                            <input class="w-full h-full px-3 placeholder:text-[#111114] " placeholder="contact email address" />
                            <div class=" w-fit h-full " >
                                <button class=" rounded-4xl w-[120px] h-full bg-blue-bg font-semibold text-sm " >Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class=" w-full flex justify-center py-1 mb-2 border-b border-[#FFFFFF29] " >  
            <p class=" text-white text-sm " >Copyright © 2024 ProSupport HR Partners. All rights reserved.</p>
        </div>
    </div>
</template>
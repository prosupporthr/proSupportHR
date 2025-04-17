
<template>
    <div class=" w-full bg-footer-color flex flex-col items-center lg:px-0 lg:gap-0 gap-4 p-3 " >
        <div class=" lg:max-w-[85%] w-full pt-20 pb-8 flex lg:flex-row flex-col lg:justify-between gap-10 lg:gap-12 " >
            <div class=" w-full lg:w-fit " >
                <div class=" w-full lg:w-[300px] flex flex-col gap-6 lg:items-center " >
                    <img src="/images/logo.png" alt="logo" class=" w-[205px] " />
                    <div class=" w-full flex gap-6 lg:justify-center " >   
                        <UIcon name="i-lucide-facebook" class="size-7 text-white " />
                        <UIcon name="i-lucide-twitter" class="size-7 text-white " />
                        <UIcon name="i-lucide-linkedin" class="size-5 text-white " />
                        <UIcon name="i-lucide-instagram" class="size-5 text-white " />
                        <UIcon name="i-lucide-youtube" class="size-5 text-white " />
                    </div>
                </div>
            </div>
            <div class=" w-full flex lg:flex-row flex-col gap-10 lg:gap-4 justify-end " >
                <div class=" w-full lg:w-[250px] flex flex-col gap-6 " >
                    <p class=" font-semibold text-2xl text-foundation-color " >Quick Links</p>
                    <div class=" flex flex-col gap-4 " >
                        <p class=" text-white " >Home</p>
                        <p class=" text-white " >About Us</p>
                        <p class=" text-white " >Services</p>
                        <p class=" text-white " >Shop</p>
                        <p class=" text-white " >Testimonials</p>
                        <p class=" text-white " >Blogs</p>
                        <p class=" text-white " >Contact Us</p>
                    </div>
                </div>
                <div class=" w-full lg:w-[250px] flex flex-col gap-6 " >
                    <p class=" font-semibold text-2xl text-foundation-color " >Useful Links</p>
                    <div class=" flex flex-col gap-4 " >
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
                <div class=" lg:max-w-[350px] w-full flex flex-col lg:ml-4 gap-4 " >
                    <p class=" font-medium text-lg text-white " >Newsletter</p>
                    <div class=" flex flex-col gap-4 " > 
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
            <p class=" text-white text-[10px] text-center lg:text-sm " >Copyright © 2024 ProSupport HR Partners. All rights reserved.</p>
        </div>
    </div>
</template>
import { defineComponent } from 'vue'
import type { DropdownMenuItem } from '@nuxt/ui'
import DropDown from './dropDown.vue'
import { UIcon } from '#components'

export default defineComponent({
    render() { 
        return (
            <div class={" w-full flex flex-col justify-center items-center "} >
                <div class={" flex gap-4 items-center py-4 "} >
                    <UIcon name="i-lucide-mail" class="size-5 text-white " />
                    <p class={"text-sm"} >Need Free Consultation?</p>
                    <p class={"text-sm underline font-semibold cursor-pointer "} >Contact Us Now</p>
                    <div class={" ml-4 flex gap-4 items-center justify-center "} >

                        {/* <UIcon icon="i-lucide-facebook" class="size-5 text-black " />
                        <UIcon name="i-lucide-instagram" class="size-5 text-black " />
                        <UIcon name="i-lucide-linkedin" class="size-5 text-black " /> */}

                    </div>
                </div>
                <div class=" w-full flex justify-center h-[56px] " >
                    <div class={" w-[90%] flex justify-between items-center "} >
                        <NuxtLink to="/" class={" w-[120px] cursor-pointer"} > 
                            <img src='/images/logo.png' class={" h-full object-contain "} />
                        </NuxtLink>
                        <div class={" w-fit px-10 h-full bg-navbar-bg rounded-[100px] border-[0.5px] border-foundation-stroke flex items-center justify-center gap-8 "} >
                            <NuxtLink to="/services" class={"flex gap-4 cursor-pointer font-medium text-sm "} >
                                <p>Services</p>
                            </NuxtLink>
                            <NuxtLink to="/resources" class={"flex gap-4 cursor-pointer font-medium text-sm "} >
                                <p>Resources</p>
                            </NuxtLink>
                            <NuxtLink to="/shop" class={"flex gap-4 cursor-pointer font-medium text-sm "} >
                                <p>Shop</p>
                            </NuxtLink>
                            <NuxtLink to="/contact" class={"flex gap-4 cursor-pointer font-medium text-sm "} >
                                <p>Contact</p>
                            </NuxtLink>
                            <NuxtLink to="/testimonials" class={"flex gap-4 cursor-pointer font-medium text-sm "} >
                                <p>Testimonials</p>
                            </NuxtLink>
                        </div>
                        <button class={" w-[174px] text-white font-semibold text-sm h-[50px] rounded-4xl bg-blue-bg border border-white "} >Get Started</button>
                    </div>
                </div>
            </div>
        )
    }
})
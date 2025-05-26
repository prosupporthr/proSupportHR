<template>
    <div class=" w-full h-full relative lg:h-[80vh] flex flex-col bg-white items-center ">
        <!-- <div ref="box2" class=" w-full absolute top-0 inset-x-0 z-50 " > 
            <Navbar />
        </div> -->
        <div class=" w-full h-full relative ">
            <img src="/images/shopdetail.jpg" alt="servicebg"
                class=" w-full lg:relative absolute z-10 h-full lg:h-[80vh] object-cover " />
            <div ref="box1"
                class=" lg:absolute relative lg:inset-x-0 lg:bottom-0 lg:pt-0 pt-[120px] lg:top-[120px] z-20 flex items-center justify-center ">
                <div
                    class=" lg:w-[85%] lg:px-0 px-3 h-fit lg:h-full flex justify-center pb-12 lg:flex-row flex-col items-center gap-4 lg:gap-2 text-white ">
                    <div class=" w-full flex flex-col gap-3 ">
                        <p class=" text-xl lg:text-[32px] tracking-[4.2px] ">{{ item?.category }}</p>
                        <p class=" font-bold leading-[120%] text-[28px] lg:text-[50px] text-white ">{{ props.item?.title }}</p>
                        <!-- <p class=" text-white mt-5 ">{{ props.item?.description }}</p> -->
                    </div>
                    <div class=" w-full ">
                        <div class=" w-full lg:w-[450px] lg:ml-10 lg:absolute lg:-bottom-[180px] rounded-4xl ">
                            <!-- <div class=" w-full h-[240px] lg:h-[280px] rounded-t-4xl ">
                                <img  :src=" item?.picture " alt="image" class="rounded-t-4xl w-full object-cover h-[240px] lg:h-[280px]  " />
                            </div> -->
                            <div style="backdrop-filter: blur(100px)"  class=" w-full py-4 px-6 rounded-t-4xl ">
                                <div v-if="props?.item?.category" class=" w-[60px] h-[70px]" >
                                    <img :src="findImageBySimilarName(props?.item?.category?.toLowerCase().trim())" alt="image" class=" w-full " />
                                </div>
                            </div>
                            <div style="backdrop-filter: blur(100px)" class=" p-6 flex flex-col rounded-b-4xl">
                                <div class=" w-full pb-3 border-b-[0.5px] border-[#6F6F6F] ">
                                    <p class=" text-xl lg:text-[27px] font-semibold ">Users Information</p>
                                </div>
                                <div class=" w-full py-3 flex flex-col gap-2 border-b-[0.5px] border-[#6F6F6F] ">
                                    <p class=" font-medium text-xs lg:text-sm ">Enter Email</p>
                                    <UInput placeholder="example@gmail.com" type="email" variant="none"
                                        v-model="email" @input="updateEmail(email)"
                                        class=" w-full bg-[#EEEEEE] !text-primary-text font-medium rounded-2xl h-[49px] border-transparent border-0 " />
                                </div>
                                <div class=" w-full py-3 flex flex-col gap-2 border-b-[0.5px] border-[#6F6F6F] ">
                                    <p class=" font-medium text-xs lg:text-sm ">Enter Phone Number</p>
                                    <UInput placeholder="Phone Number" type="phone" variant="none"
                                        v-model="phone" @input="updatePhone(phone)"
                                        class=" w-full bg-[#EEEEEE] text-primary-text font-medium rounded-2xl h-[49px] border-transparent border-0 " />
                                </div>
                                <button @click="clickHandler" :disabled="isLoading"
                                    class=" w-full cursor-pointer disabled:cursor-not-allowed lg:block text-white font-semibold text-sm h-[50px] rounded-4xl bg-blue-bg mt-4 ">
                                    <span v-if="isLoading">Processing...</span>
                                    <span v-else>Make Payments</span>
                                </button>
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

import { useUserState } from '~/assets/composables/useUserState';
import { type IProduct } from '~/type/product';
import { ApiService } from '~/services/product';
import { validateEmail, validatePhone } from '~/services/validator';
import { findImageBySimilarName } from '~/services/findImageByName'; 
const toast = useToast()
const isLoading = ref(false);
const route = useRoute()

const searchTerm = route.query.key 
const router = useRouter();
const { email, phone, updateEmail, updatePhone, updateProductId } = useUserState();
const props = defineProps<{
    item: IProduct;
}>();

const apiResponse = ref<{
    data?: any;
    error?: string;
} | null>(null);

const clickHandler = async () => {
    if (!email.value) { 
        toast.add({
            title: 'Error',
            description: 'Email is required',
            color: "error"
        }) 
    } else if (!validateEmail(email.value)) {
        toast.add({
            title: 'Error',
            description: 'Please enter a valid email address',
            color: "error"
        })  
    } else if (!phone.value) {
        toast.add({
            title: 'Error',
            description: 'Phone number is required',
            color: "error"
        }) 
    } else if (!validatePhone(phone.value)) {
        toast.add({
            title: 'Error',
            description: 'Please enter a valid phone number',
            color: "error"
        })  
    } else {
        if (props?.item?.price) {
            router?.push(`/payment/${props?.item?._id}`)
        } else {

            // Form submission handler 
            isLoading.value = true;
            apiResponse.value = null;

            const response = await ApiService.createFreeOrder({
                productId: searchTerm + "",
                email: email?.value + "",
                phone: phone?.value + ""
            });

            apiResponse.value = response;

            if (response.data) {
                console.log('Post created:', response.data);
                if (response.data?.message === "order created!") { 
                    toast.add({
                        title: 'Successful ',
                        description: 'Order Created Successful',
                    })
                    updateEmail("")
                    updatePhone("")
                }
                isLoading.value = false;

                // Reset form or redirect
                // formData.value = { title: '', body: '', userId: 1 };
            } else { 
                isLoading.value = false;
            }
        }
    }
}

watchEffect(async () => {
    updateProductId(searchTerm + "")
})

</script>
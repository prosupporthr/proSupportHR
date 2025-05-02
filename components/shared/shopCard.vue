<template>
    <div class=" w-full rounded-2xl ">
        <div class=" w-full lg:h-[220px] rounded-t-2xl ">
            <img :src='props?.item?.picture' class=" w-full object-cover h-full rounded-t-2xl " />
        </div>
        <div
            class=" p-2 lg:p-4 w-full flex gap-4 flex-col border-t-0 border-[0.36px] border-border-color rounded-b-xl ">
            <p class=" text-base-color lg:text-sm text-[10px] tracking-[4.2px] ">Free Resources</p>
            <p class=" text-primary-text text-xs lg:text-xl font-bold ">{{ item?.title}}</p>
            <div class=" w-full justify-between items-center flex ">
                <p class=" lg:text-2xl font-bold text-primary-text ">{{ item?.price ? "$"+item?.price : "Free" }}</p>
                <NuxtLink :to="`/shop/details?key=${item?._id}`" class=" flex gap-2 items-center ">
                    <p class=" font-medium text-sm lg:text-lg text-blue-bg ">View</p>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

    import { NuxtLink } from '#components';
import { type IProduct } from '~/type/product'; 
    const props = defineProps<{
        item: IProduct;
    }>();

</script>
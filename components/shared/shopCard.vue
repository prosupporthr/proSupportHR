<template> 
    <NuxtLink :to="`/shop/details?key=${item?._id}`"> 
        <div class=" w-full p-2 rounded-2xl h-full cursor-pointer flex gap-2 flex-col ">
            <div class=" w-[60px] h-[70px]" >
              <img :src="findImageBySimilarName(props?.item?.category)" alt="image" class=" w-full " />
            </div>
            <p class=" text-lg font-bold " >{{ item?.title }}</p> 
            <p class=" font-medium text-primary-text ">Price: <span>{{ item?.price ? "$"+item?.price+" CAD" : "Free" }}</span></p>
            <div class=" pt-6 flex gap-2 items-center mt-auto " >  
              <p class=" font-medium text-[#0890FF] " >Buy Now</p>
              <UIcon name="i-lucide-arrow-right" class="size-7 mt-[1px] text-[#0890FF] " />
            </div>
        </div>
    </NuxtLink>
</template>

<script setup lang="ts">

    import { NuxtLink } from '#components';
    const route = useRoute()
    import { type IProduct } from '~/type/product';  
    import { findImageBySimilarName } from '~/services/findImageByName';
    const searchTerm = route.query.key as string;
    const props = defineProps<{
        item: IProduct;
    }>();

 

</script>
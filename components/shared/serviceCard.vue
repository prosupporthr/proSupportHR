<template> 
    <div class=" w-full flex-col h-full flex rounded-t-2xl rounded-b-xl " >
        <div class=" w-full h-[100px] lg:h-[156px] rounded-t-2xl " >
            <img :src="props?.item?.image" class=" object-cover w-full h-full rounded-t-2xl " />
        </div>  
        <div class=" p-2 lg:p-4 w-full h-full flex gap-3 flex-col border-t-0 border-[0.36px] border-border-color bg-white rounded-b-xl " >
            <p class=" text-sm lg:text-2xl font-bold text-fondation-text-500 " >{{ props?.item?.title }}</p>
            <p class=" text-secondary lg:text-base text-xs ">{{item?.body}}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
 
    const props = defineProps<{
        item: {
            image: string
            title: string,
            body: string
        };
    }>();

</script>
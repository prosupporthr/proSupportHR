<template> 
    <div class=" w-full h-full flex pt-[40px] "  > 
        <div class=" w-full flex-col h-full flex rounded-2xl border-[0.36px] border-border-color " >
            <div class=" px-4 pb-6 p-2 lg:p-4 w-full h-full flex gap-3 flex-col  bg-white rounded-2xl " > 
                <div class=" w-[70px] h-fit rounded-2xl -mt-[50px] "> 
                    <img :src='props?.item?.image' class=" w-full object-cover h-full rounded-t-2xl " />
                </div>
                <p class=" text-sm lg:text-2xl font-bold text-fondation-text-500 " >{{ props?.item?.title }}</p>
                <p class=" text-secondary lg:text-base text-xs ">{{item?.body}}</p>
            </div>
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
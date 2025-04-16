<script setup lang="ts">

import ServiceCard from '../components/shared/serviceCard.vue' 

</script>

<template>
    <div class=" py-20 w-full flex justify-center " >
        <div class=" w-[85%] flex flex-col items-center gap-1 " >
            <p class=" font-semibold text-[44px] text-primary-text " >Our Services</p>
            <p class=" text-lg text-secondary font-medium " >HR Solutions for Ontario Businesses</p>
            <div class="w-full grid grid-cols-3 gap-4 mt-12 " >
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
            </div>
        </div>
    </div>
</template>
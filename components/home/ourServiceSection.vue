<script setup lang="ts">

import ServiceCard from '../components/shared/serviceCard.vue' 

</script>

<template>
    <div class=" lg:py-20 w-full flex justify-center lg:px-0 px-3 " >
        <div class=" w-full lg:w-[85%] flex flex-col items-center gap-1 " >
            <p class=" font-semibold text-[30px] lg:text-[44px] text-primary-text " >Our Services</p>
            <p class=" lg:text-lg text-secondary font-medium " >HR Solutions for Ontario Businesses</p>
            <div class="w-full hidden lg:grid grid-cols-1 lg:grid-cols-3 gap-4 mt-12 " >
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
            </div>
            <div class="w-full lg:hidden grid grid-cols-1 lg:grid-cols-3 gap-4 mt-12 " >
                <ServiceCard />
                <ServiceCard />
                <ServiceCard /> 
            </div>
        </div>
    </div>
</template>
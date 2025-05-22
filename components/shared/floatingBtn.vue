<template>
    <div :class="route.path === '/shop' ? 'hidden' : 'fixed bottom-6 z-50 right-6 m-4 ' " class=" fixed bottom-6 z-50 right-6 m-4 ">
        <UButton @click="goToSection" class=" bg-blue-bg px-3 py-2 h-fit cursor-pointer rounded-full text-white " >
            Shop Now
        </UButton>
    </div>
</template>

<script setup lang="ts">
    const router = useRouter();
    const route = useRoute();

    const goToSection = () => {
        router.push(`/shop`);
    };
</script>
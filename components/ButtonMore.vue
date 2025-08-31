<template>
    <nuxt-link class="w-fit mx-auto block mt-6" :to="link">
        <button
            class="text-primary border border-primary bg-white py-2 px-6 text-xl font-medium rounded-lg hover:bg-primary hover:text-white transition-all duration-300 ease-in-out ">
            {{ title }}
        </button>
    </nuxt-link>
</template>

<script setup lang="ts">


defineProps<{
    title: string,
    link?: string
}>()
</script>

<style scoped></style>
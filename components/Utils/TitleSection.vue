<template>
    <div class="max-w-[567px] mx-auto mb-16 lg:mb-24">
        <h1 class="text-center text-3xl md:text-4xl lg:text-5xl font-bold lg:leading-[67px] text-Text">
            {{ title }}
        </h1>
    </div>
</template>

<script setup lang="ts">

defineProps<{
    title: string
}>()

</script>

<style scoped></style>
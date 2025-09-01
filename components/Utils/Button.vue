<template>
    <button
        class="text-black bg-secondary py-2 px-6 text-base font-medium rounded-lg hover:bg-secondaryT transition-all duration-300 ease-in-out">
        {{ title }}
    </button>
</template>

<script setup lang="ts">

defineProps<{
    title: string
}>()
</script>

<style scoped></style>
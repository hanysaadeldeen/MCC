<template>
    <section class="HeroSection bg-[#E9F1FC] py-28 md:py-[184px] px-6 relative">
        <div class="max-w-[1392px] mx-auto  flex justify-between items-center gap-6 lg:gap-10 max-md:flex-col">
            <h1
                class="font-bold  text-3xl md:text-4xl xl:text-6xl xl:!leading-[90px] max-md:text-center max-md:mx-auto md:max-w-[600px]">
                {{ title }}
            </h1>
            <div>
                <p class="text-xl font-medium text-[#4B5461] mb-6 max-md:text-center md:max-w-[684px] text-justify">نحن
                    {{ description }}</p>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">


defineProps<{
    title: string
    description: string
}>()

</script>

<style scoped>
.SuppliersHeroSection {
    background-image: url("../../assets/img/Utils/HomeHeroPattern.svg");
    background-position: center;
    background-size: contain;
}
</style>
<template>
    <section class="homeHookSection mx-auto " :dir="locale === 'ar' ? 'rtl' : 'ltr'">
        <h1 class=" text-Text mx-auto font-bold text-center text-3xl md:text-4xl md:leading-[57px] px-6"
            :class="locale === 'ar' ? 'max-w-[697px]' : 'max-w-[900px]'">
            {{ $t("home.aboutUsSection") }}
        </h1>
    </section>
</template>

<script setup lang="ts">
const { locale } = useI18n()

</script>

<style scoped></style>
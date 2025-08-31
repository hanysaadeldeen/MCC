<template>
    <section class="homeHookSection mx-auto " :dir="locale === 'ar' ? 'rtl' : 'ltr'">
        <h1 class="w-[697px] text-Text mx-auto font-bold text-center text-3xl md:text-4xl md:leading-[57px]">بصفتنا
            موزعًا لأفضل
            المنتجات من
            أبرز المصنعين ، فإننا
            نوفر لك الثقة بأن
            مشروعك سيُنجز
            بأعلى
            معايير الجودة
            الموثوقة.</h1>

    </section>
</template>

<script setup lang="ts">
const { locale } = useI18n()

</script>

<style scoped></style>
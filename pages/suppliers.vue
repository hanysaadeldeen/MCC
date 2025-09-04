<template>
    <main :dir="locale === 'ar' ? 'rtl' : 'ltr'">

        <HeroSection title="suppliers.heroSection.title" description="suppliers.heroSection.paragraph" />

        <SuppliersBrandsSection />

        <CTASection title="منتجاتنا مقدمة من أفضل المصنعين في العالم.  "
            description="  استكشف مجموعتنا الكاملة من المنتجات وابدأ في بناء مشروعك بأفضل المواد." link='/'
            btnTitle="إكتشف منتجاتنا" />
    </main>
</template>

<script setup lang="ts">
const { locale } = useI18n()

</script>

<style scoped></style>
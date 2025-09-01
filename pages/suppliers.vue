<template>
    <main :dir="locale === 'ar' ? 'rtl' : 'ltr'">
        <SuppliersHeroSection />
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
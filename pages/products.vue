<template>
    <main :dir="locale === 'ar' ? 'rtl' : 'ltr'">

        <HeroSection title="products.heroSection.title" description="products.heroSection.paragraph" />
        <ProductsSection />
        <CTASection title="products.cta.title" description="products.cta.paragraph" btnTitle="products.cta.btn"
            link="/contact" />
    </main>
</template>

<script setup lang="ts">
const { locale } = useI18n()

</script>

<style scoped></style>
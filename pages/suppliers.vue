<template>
    <main :dir="locale === 'ar' ? 'rtl' : 'ltr'">
        <HeroSection title=" شركاء التوريد: علامات تجارية موثوقة"
            description="   شركاؤك
                    تلتزم شركة MCC بتقديم مجموعة كاملة من المنتجات من أكبر المصنعين العالميين والمحليين. نفخر بشراكاتنا
                    مع هذه العلامات التجارية الموثوقة، والتي تضمن حصول عملائنا على أفضل المنتجات ذات الجودة العالية." />

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
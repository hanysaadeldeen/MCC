<template>
    <main :dir="locale === 'ar' ? 'rtl' : 'ltr'">

        <HeroSection title="منتجاتنا:حلول متكاملة بمعايير عالمية"
            description="تقدم شركة MCC مجموعة شاملة ومتكاملة من المنتجات الكهروميكانيكية والكيماوية. تشمل مجموعتنا حلولًا لمختلف الاحتياجات في المشاريع الإنشائية والصناعية، مقدمة من أفضل العلامات التجارية العالمية والمحلية." />
        <ProductsSection />
        <CTASection title="مجموعتنا الكاملة من المنتجات في خدمتك."
            description="تواصل مع فريق المبيعات لدينا للحصول على استشارة فنية أو عرض سعر مخصص." link='/'
            btnTitle="تواصل معنا الآن !" />
    </main>
</template>

<script setup lang="ts">
const { locale } = useI18n()

</script>

<style scoped></style>
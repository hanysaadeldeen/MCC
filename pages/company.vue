<template>
    <main :dir="locale === 'ar' ? 'rtl' : 'ltr'" class="">
        <HeroSection title="مسيرة النجاح: أكثر من 45 عامًا من الريادة"
            description="شركة التوريدات الميكانيكية والكيماوية المحدودة (MCC) هي إحدى أبرز موزعي المنتجات الكهروميكانيكية في المملكة العربية السعودية ودول مجلس التعاون الخليجي، بخبرة تزيد عن 45 عامًا" />


        <OurNumbersSection />
        <CertificatesSection />
        <VisionAndMission />
        <ValuesSection />

        <CTASection title="التزامًا بالجودة، نحن مستعدون لدعم مشروعك."
            description="نوفر لك حلولاً متكاملة مع منتجات فائقة الجودة، وفريقنا على أهبة الاستعداد لخدمتك في أي وقت"
            btnTitle="تواصل معنا الآن !" />
    </main>
</template>

<script setup lang="ts">
const { locale } = useI18n()

</script>

<style scoped></style>
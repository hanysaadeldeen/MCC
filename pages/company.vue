<template>
    <main :dir="locale === 'ar' ? 'rtl' : 'ltr'" class="overflow-hidden">
        <HeroSection title="about.heroSection.title" description="about.heroSection.paragraph" />
        <CompanyHistory />
        <OurNumbersSection />
        <CertificatesSection />
        <VisionAndMission />
        <ValuesSection />
        <CTASection title="about.cta.title" description="about.cta.paragraph" btnTitle="about.cta.btn"
            link="/contact" />
    </main>
</template>

<script setup lang="ts">
const { locale } = useI18n()

</script>

<style scoped></style>
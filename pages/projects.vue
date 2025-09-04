<template>
    <main :dir="locale === 'ar' ? 'rtl' : 'ltr'" class="">
        <HeroSection title="projects.heroSection.title" description="projects.heroSection.paragraph" />
        <ProjectsImagesSection />
        <ProjectsBrandsSection />
        <CTASection title="projects.cta.title" description="projects.cta.paragraph" btnTitle="projects.cta.btn"
            link="/contact" />
    </main>
</template>

<script setup lang="ts">
const { locale } = useI18n()
</script>

<style scoped></style>
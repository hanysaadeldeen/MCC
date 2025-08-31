<template>
    <section class="HomeCTA max-xl:px-6" :dir="locale === 'ar' ? 'rtl' : 'ltr'">
        <div
            class="max-w-[1392px] mx-auto bg-[#E9F1FC] rounded-[40px] py-20 px-24 flex justify-between items-start gap-10 max-md:flex-col">
            <h1
                class="font-bold  text-3xl md:text-4xl lg:text-5xl max-md:text-center mx-auto md:max-w-[596px] lg:leading-[67px]">
                كن شريكًا لـ MCC:
                لنجاح مشروعك
            </h1>
            <div>
                <p class="text-xl font-medium text-[#4B5461] mb-6 max-md:text-center md:max-w-[451px]">نحن شركاؤك
                    المتفانون،
                    نُحوِّل
                    رؤيتك إلى واقع ملموس
                    بمواد
                    موثوقة وخبرة لا
                    تلين.</p>
                <nuxt-link class="w-fit max-md:mx-auto block " to="/">
                    <Button title="ابدأ شراكتك الآن!" />
                </nuxt-link>

            </div>
        </div>

    </section>
</template>

<script setup lang="ts">
const { locale } = useI18n()

</script>

<style scoped></style>
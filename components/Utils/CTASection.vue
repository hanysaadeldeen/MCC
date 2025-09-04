<template>
    <section class="CTA max-xl:px-6" :dir="locale === 'ar' ? 'rtl' : 'ltr'">
        <div
            class="max-w-[1392px] mx-auto bg-[#E9F1FC] rounded-[40px] py-14 md:py-20 px-4 lg:px-24 flex justify-between items-start gap-10 max-md:flex-col">
            <h1
                class="font-bold  text-3xl md:text-4xl lg:text-5xl max-md:text-center mx-auto md:max-w-[596px] lg:leading-[67px]">
                {{ $t(title) }}
            </h1>
            <div>
                <p class="text-xl font-medium text-[#4B5461] mb-6 max-md:text-center md:max-w-[451px]">
                    {{ $t(description) }}</p>
                <nuxt-link class="w-fit max-md:mx-auto block " to="/contactUs">
                    <Button :title="btnTitle" />
                </nuxt-link>

            </div>
        </div>

    </section>
</template>

<script setup lang="ts">
const { locale } = useI18n()

defineProps<{
    title: string
    description: string
    link?: string
    btnTitle: string
}>()

</script>

<style scoped></style>
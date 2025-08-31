<template>
    <section class="HomeHeroSection max-w-[1920px] mx-auto bg-green-300" :dir="locale === 'ar' ? 'rtl' : 'ltr'">
        <div class="flex justify-between h-fit relative">
            <div class="w-1/2 max-w-[954px] bg-[#E9F1FC] flex justify-center items-center relative">
                <div class="absolute top-0 left-0 w-full h-full z-10">
                    <img src="~/assets/img/Utils/HomeHeroPattern.svg" alt="HomeHeroPattern">
                </div>
                <div class="max-w-[474px] mx-auto z-20">
                    <h1 class="text-center text-3xl md:text-4xl lg:text-6xl !leading-[90px] font-bold mb-4">
                        شريكك الموثوق في عالم التوريدات
                    </h1>
                    <p class="text-lg font-medium text-[#4F5A69] max-w-[379px] mb-6">نورد مواد عالية الجودة لمشاريعك،
                        بخبرة
                        تمتد لأكثر من
                        45 عامًا.</p>
                    <Button title="إكتشف منتجاتنا" />
                </div>
            </div>
            <div class="w-1/2 max-w-[954px] bg-red-500">
                <img src="~/assets/img/Home/HomeHeroSection.jpg" class="object-cover w-full h-full"
                    alt="HomeHeroPattern">
            </div>
            <div class="absolute left-1/2 -translate-x-1/2 top-0 h-full w-3 bg-white"></div>
            <div
                class="absolute left-1/2 -translate-x-1/2 -bottom-14  size-28 bg-white p-5 rounded-full cursor-pointer group z-20">
                <div class="rounded-full border border-[#A7C6F1] size-[71px] p-5 flex justify-center items-center">
                    <i class="animate-translateXLoop  fa-solid fa-arrow-down-long text-primary text-4xl "></i>
                </div>
            </div>
        </div>

    </section>
</template>

<script setup lang="ts">
const { locale } = useI18n()

</script>

<style scoped>
@keyframes translateXLoop {

    0%,
    100% {
        transform: translatey(0);
    }

    50% {
        transform: translateY(5px);
    }
}

.animate-translateXLoop {
    animation: translateXLoop 1s alternate infinite;
}
</style>
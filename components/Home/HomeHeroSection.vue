<template>
    <section class="HomeHeroSection w-full  lg:max-w-[1920px] mx-auto" :dir="locale === 'ar' ? 'rtl' : 'ltr'">
        <div class="flex justify-between h-fit relative w-full ">
            <!--  -->
            <div
                class="w-full xl:w-1/2 xl:max-w-[954px]  bg-[#E9F1FC] py-16 max-xl:px-6 flex justify-center items-center relative">
                <div class="absolute top-0 left-0 w-full h-full z-10 ">
                    <img src="~/assets/img/Utils/HomeHeroPattern.svg" class="object-fill w-full h-full"
                        alt="HomeHeroPattern">
                </div>
                <div class="max-w-[474px] mx-auto z-[15] max-xl:text-center">
                    <h1 class=" text-3xl md:text-4xl xl:text-6xl xl:!leading-[90px] font-bold mb-4">
                        شريكك الموثوق في عالم التوريدات
                    </h1>
                    <p class="text-lg font-medium text-[#4F5A69] max-w-[379px] max-xl:mx-auto mb-6">نورد مواد عالية
                        الجودة
                        لمشاريعك،
                        بخبرة
                        تمتد لأكثر من
                        45 عامًا.</p>
                    <Button title="إكتشف منتجاتنا" />
                </div>
            </div>
            <div class="hidden xl:block w-full xl:w-1/2 xl:max-w-[954px] max-w-[954px] ">
                <img src="~/assets/img/Home/HomeHeroSection.jpg" class="object-cover w-full h-full"
                    alt="HomeHeroPattern">
            </div>
            <div class="hidden xl:block absolute left-1/2 -translate-x-1/2 top-0 h-full w-3 bg-white"></div>
            <div
                class=" absolute left-1/2 -translate-x-1/2 -bottom-[37px] xl:-bottom-14 xl:size-28 bg-white flex justify-center items-center p-3 xl:p-5 rounded-full cursor-pointer group z-[15]">
                <div
                    class="rounded-full border border-[#A7C6F1] size-[50px] xl:size-[71px] p-3  xl:p-5 flex justify-center items-center">
                    <i
                        class="animate-translateXLoop  fa-solid fa-arrow-down-long text-primary text-2xl xl:text-4xl "></i>
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
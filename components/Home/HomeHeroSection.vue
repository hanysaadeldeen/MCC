<template>
    <section class="HomeHeroSection w-full  lg:max-w-[1920px] mx-auto" :dir="locale === 'ar' ? 'rtl' : 'ltr'">
        <div class="flex justify-between h-fit relative w-full ">
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
                    <p class="text-lg font-medium text-paragraph max-w-[379px] max-xl:mx-auto mb-6">نورد مواد عالية
                        الجودة
                        لمشاريعك،
                        بخبرة
                        تمتد لأكثر من
                        45 عامًا.</p>
                    <nuxt-link to="/products">
                        <Button title="إكتشف منتجاتنا" />
                    </nuxt-link>
                </div>
            </div>
            <div class="hidden xl:block w-full xl:w-1/2 xl:max-w-[954px] max-w-[954px] max-h-[740px] relative">

                <Swiper :modules="[Autoplay]" :loop="true" :slides-per-view="'auto'" :free-mode="true" :speed="6000"
                    :autoplay="{
                        delay: 1,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: false
                    }" class="partner-slider max-h-full">
                    <SwiperSlide class="!w-auto h-full flex items-center justify-center">
                        <img src="~/assets/img/Home/HomeHeroPatternOne.webp" alt="HomeHeroSectionOne"
                            class=" w-full h-full object-contain" />
                    </SwiperSlide>
                    <SwiperSlide class="!w-auto flex items-center justify-center">
                        <img src="~/assets/img/Home/HomeHeroPatternTwo.webp" alt="HomeHeroSectionTwo"
                            class=" w-full h-full object-contain" />
                    </SwiperSlide>
                    <SwiperSlide class="!w-auto flex items-center justify-center">
                        <img src="~/assets/img/Home/HomeHeroPatternThree.webp" alt="HomeHeroPatternThree"
                            class=" w-full h-full object-contain" />
                    </SwiperSlide>
                    <SwiperSlide class="!w-auto flex items-center justify-center">
                        <img src="~/assets/img/Home/HomeHeroPatternFour.webp" alt="HomeHeroSectionFour"
                            class=" w-full h-full object-contain" />
                    </SwiperSlide>

                </Swiper>
            </div>
            <div class="hidden xl:block absolute left-1/2 -translate-x-1/2 top-0 h-full w-3 bg-white"></div>

            <a href="#BrandSection">

                <div
                    class=" absolute left-1/2 -translate-x-1/2 -bottom-[37px] xl:-bottom-14 xl:size-28 bg-white flex justify-center items-center p-3 xl:p-5 rounded-full cursor-pointer group z-[15]">
                    <div
                        class="rounded-full border border-[#A7C6F1] size-[50px] xl:size-[71px] p-3  xl:p-5 flex justify-center items-center">
                        <i
                            class="animate-translateXLoop  fa-solid fa-arrow-down-long text-primary text-xl lg:text-3xl "></i>
                    </div>
                </div>
            </a>

        </div>
    </section>
</template>

<script setup lang="ts">
const { locale } = useI18n()
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
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
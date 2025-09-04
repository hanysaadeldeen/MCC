<template>
    <section class="HomeHeroSection w-full  lg:max-w-[1920px] mx-auto" :dir="locale === 'ar' ? 'rtl' : 'ltr'">
        <div class="flex justify-between h-fit relative w-full ">
            <div
                class="w-full xl:w-1/2 xl:max-w-[954px]  bg-[#E9F1FC] py-16 max-xl:px-6 flex justify-center items-center relative">
                <div class="absolute top-0 left-0 w-full h-full z-10 ">
                    <img src="~/assets/img/Utils/HomeHeroPattern.svg" class="object-fill w-full h-full"
                        alt="HomeHeroPattern">
                </div>
                <div class=" mx-auto z-[15] max-xl:text-center"
                    :class="locale === 'ar' ? 'max-w-[474px]' : 'max-w-[550px]'">
                    <h1 class=" text-3xl md:text-4xl xl:text-6xl xl:!leading-[90px] font-bold mb-4">
                        {{ $t("home.heroSection.title") }}
                    </h1>
                    <p class="text-lg font-medium text-paragraph  max-xl:mx-auto mb-6"
                        :class="locale === 'ar' ? 'max-w-[379px]' : 'max-w-[400px]'">
                        {{ $t("home.heroSection.paragraph") }}
                    </p>
                    <nuxt-link to="/products">
                        <Button title="home.heroSection.btn" />
                    </nuxt-link>
                </div>
            </div>
            <div class="hidden xl:block w-full xl:w-1/2 xl:max-w-[954px] max-w-[954px] max-h-[740px] relative">
                <Swiper :modules="modules" effect="fade" :fade-effect="{ crossFade: true }"
                    :autoplay="{ delay: 3000, disableOnInteraction: false }"
                    class="partner-slider h-[320px] xl:h-[600px] 2xl:h-[740px]">
                    <SwiperSlide class="h-full flex items-center justify-center">
                        <img :src="p1" alt="HomeHeroSectionOne" class="w-full h-full object-cover" />
                    </SwiperSlide>
                    <SwiperSlide class="h-full flex items-center justify-center">
                        <img :src="p2" alt="HomeHeroSectionTwo" class="w-full h-full object-cover" />
                    </SwiperSlide>
                    <SwiperSlide class="h-full flex items-center justify-center">
                        <img :src="p3" alt="HomeHeroPatternThree" class="w-full h-full object-cover" />
                    </SwiperSlide>
                    <SwiperSlide class="h-full flex items-center justify-center">
                        <img :src="p4" alt="HomeHeroSectionFour" class="w-full h-full object-cover" />
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
import { Swiper, SwiperSlide } from 'swiper/vue'
import { EffectFade, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade';
const modules = [EffectFade, Autoplay]

import p1 from '../../assets/img/Home/HomeHeroPatternOne.webp'
import p2 from '../../assets/img/Home/HomeHeroPatternTwo.webp'
import p3 from '../../assets/img/Home/HomeHeroPatternThree.webp'
import p4 from '../../assets/img/Home/HomeHeroPatternFour.webp'
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
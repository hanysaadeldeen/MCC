<template>
    <section class="HomeProductsSection max-xl:px-6" :dir="locale === 'ar' ? 'rtl' : 'ltr'">
        <div class="max-w-[1392px] mx-auto">


            <TitleSection title="مجالات منتجاتنا" />
            <Swiper :breakpoints="{
                320: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                }
            }" :spaceBetween="10" :modules="modules" :pagination="{
                clickable: true,
            }" class="mySwiper">
                <swiper-slide v-for="client in Products" class="flex justify-center items-center  shadow rounded-xl">
                    <img :src="client.img" :alt="client.alt" :key="client.id" width="330" height="380"
                        class="object-contain">
                </swiper-slide>

            </Swiper>

            <button-more title=" تصفح كافة المجالات" link="/" />

        </div>

    </section>
</template>

<script setup lang="ts">
const { locale } = useI18n()

import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
const modules = [Pagination];

import FITTINGS from '../assets/img/Utils/Products/CAST IRON PIPES & FITTINGS.svg'
import PVCCEMENT from '../assets/img/Utils/Products/PVC CEMENT.svg'
import DRAINAGESYSTEMS from '../assets/img/Utils/Products/DRAINAGE SYSTEMS.svg'
import DUCTILEPIPES from '../assets/img/Utils/Products/DUCTILE PIPES  & FITTINGS.svg'
import SANITARY from '../assets/img/Utils/Products/SANITARY FIXTURES.svg'
import WATERTREATMENT from '../assets/img/Utils/Products/WATER TREATMENT.svg'
import PRESSURETANKS from '../assets/img/Utils/Products/PRESSURE TANKS.svg'



const Products = [
    { id: 1, img: FITTINGS, alt: "FITTINGS" },
    { id: 2, img: PVCCEMENT, alt: "PVCCEMENT" },
    { id: 3, img: DRAINAGESYSTEMS, alt: "DRAINAGESYSTEMS" },
    { id: 4, img: DUCTILEPIPES, alt: "DUCTILEPIPES" },
    { id: 5, img: SANITARY, alt: "SANITARY" },
    { id: 6, img: WATERTREATMENT, alt: "WATERTREATMENT" },
    { id: 7, img: PRESSURETANKS, alt: "PRESSURETANKS" },
]
</script>

<style scoped></style>
<template>
    <section class="HomeClientsSection bg-[#E9F1FC] py-20 max-xl:px-6" :dir="locale === 'ar' ? 'rtl' : 'ltr'">
        <div class="max-w-[1392px] mx-auto">
            <TitleSection title="home.featuredClients.title" />
            <Swiper :loop="true" :autoplay="{
                delay: 0,
                disableOnInteraction: false
            }" :speed="6000" :breakpoints="{
                320: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                    slidesPerGroup: 2
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                    slidesPerGroup: 3
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                    slidesPerGroup: 4
                }
            }" :spaceBetween="10" :modules="modules" :pagination="{
                clickable: true,
            }" class="mySwiper">
                <swiper-slide v-for="client in Clients"
                    class="flex justify-center items-center px-3 py-2 md:py-4 md:px-6 bg-white shadow rounded-xl">
                    <img :src="client.img" :alt="client.alt" :key="client.id" width="282" height="116">
                </swiper-slide>
            </Swiper>
            <button-more title="home.featuredClients.btn" link="/projects" />
        </div>
    </section>
</template>

<script setup lang="ts">
const { locale } = useI18n()
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const modules = [Autoplay, Pagination];
import ARAMCO from "../../assets/img/Utils/Clients/ARAMCO.svg"
import BINLADIN from "../../assets/img/Utils/Clients/BINLADIN.svg"
import drsulaiman from "../../assets/img/Utils/Clients/dr sulaiman.svg"

import ZMAIL from "../../assets/img/Utils/Clients/ZMAIL.svg"
import first from "../../assets/img/Utils/Clients/first.svg"
import hapco from "../../assets/img/Utils/Clients/hapco.svg"
import juffali from "../../assets/img/Utils/Clients/juffali.svg"


import almabani from "../../assets/img/Utils/Clients/almabani.svg"
import edsco from "../../assets/img/Utils/Clients/edsco.svg"
import haif from "../../assets/img/Utils/Clients/haif.svg"
import nesma from "../../assets/img/Utils/Clients/nesma.svg"


import albawani from "../../assets/img/Utils/Clients/al bawani.svg"
import alzaharani from "../../assets/img/Utils/Clients/alzaharani.svg"
import khreeji from "../../assets/img/Utils/Clients/khereiji.svg"
import elseif from "../../assets/img/Utils/Clients/elseif.svg"



const Clients = [
    { id: 1, img: ARAMCO, alt: "ARAMCO" },
    { id: 2, img: BINLADIN, alt: "BINLADIN" },
    { id: 3, img: drsulaiman, alt: "drsulaiman" },
    { id: 4, img: alzaharani, alt: "alzaharani" },

    { id: 5, img: ZMAIL, alt: "ZMAIL" },
    { id: 6, img: first, alt: "first" },
    { id: 7, img: hapco, alt: "hapco" },
    { id: 8, img: juffali, alt: "juffali" },

    { id: 9, img: almabani, alt: "almabani" },
    { id: 10, img: edsco, alt: "edsco" },
    { id: 11, img: haif, alt: "haif" },
    { id: 12, img: nesma, alt: "nesma" },


    { id: 13, img: albawani, alt: "albawani" },
    { id: 14, img: alzaharani, alt: "alzaharani" },
    { id: 15, img: khreeji, alt: "khreeji" },
    { id: 16, img: elseif, alt: "elseif" },

]

</script>

<style>
.mySwiper {
    @apply pb-16
}

.swiper-pagination-bullet {
    @apply bg-[#B3B3B3] w-[30px] h-[3px] rounded-none mt-10;
}

.swiper-pagination-bullet-active {
    @apply bg-[#16488E];
}
</style>
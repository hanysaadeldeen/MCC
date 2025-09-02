<template>
    <section class="HomeClientsSection bg-[#E9F1FC] py-20 max-xl:px-6" :dir="locale === 'ar' ? 'rtl' : 'ltr'">
        <div class="max-w-[1392px] mx-auto">
            <TitleSection title="عملاؤنا الكرام" />
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
                <swiper-slide v-for="client in Clients"
                    class="flex justify-center items-center px-3 py-2 md:py-4 md:px-6 bg-white shadow rounded-xl">
                    <img :src="client.img" :alt="client.alt" :key="client.id" width="282" height="116">
                </swiper-slide>

            </Swiper>


            <button-more title=" تعرف على كافة العملاء" link="/projects" />
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

import ZMAIL from "../../assets/img/Utils/Clients/ZMAIL.svg"
import WASHNAH from "../../assets/img/Utils/Clients/WASHNAH.svg"
import STS from "../../assets/img/Utils/Clients/STS.svg"
import project from "../../assets/img/Utils/Clients/project.svg"
import occ from "../../assets/img/Utils/Clients/occ.svg"
import nesma from "../../assets/img/Utils/Clients/nesma.svg"
import MBL from "../../assets/img/Utils/Clients/MBL.svg"
import macc from "../../assets/img/Utils/Clients/macc.svg"
import khreeji from "../../assets/img/Utils/Clients/khereiji.svg"
import juffali from "../../assets/img/Utils/Clients/juffali.svg"
import ihcc from "../../assets/img/Utils/Clients/ihcc.svg"
import hapco from "../../assets/img/Utils/Clients/hapco.svg"
import haif from "../../assets/img/Utils/Clients/haif.svg"
import first from "../../assets/img/Utils/Clients/first.svg"
import elseif from "../../assets/img/Utils/Clients/elseif.svg"
import edsco from "../../assets/img/Utils/Clients/edsco.svg"
import drsulaiman from "../../assets/img/Utils/Clients/dr sulaiman.svg"
import crcc from "../../assets/img/Utils/Clients/crcc.svg"
import BINLADIN from "../../assets/img/Utils/Clients/BINLADIN.svg"
import baytur from "../../assets/img/Utils/Clients/baytur.svg"
import ARAMCO from "../../assets/img/Utils/Clients/ARAMCO.svg"
import amana from "../../assets/img/Utils/Clients/amana.svg"
import alzaharani from "../../assets/img/Utils/Clients/alzaharani.svg"
import almabani from "../../assets/img/Utils/Clients/almabani.svg"
import alfaneyah from "../../assets/img/Utils/Clients/alfaneyah.svg"
import alfanar from "../../assets/img/Utils/Clients/alfanar.svg"
import alfuttaim from "../../assets/img/Utils/Clients/al futtaim.svg"
import albawani from "../../assets/img/Utils/Clients/al bawani.svg"
import acc from "../../assets/img/Utils/Clients/acc.svg"
import AC from "../../assets/img/Utils/Clients/AC.svg"

const Clients = [
    { id: 1, img: ZMAIL, alt: "ZMAIL" },
    { id: 2, img: WASHNAH, alt: "WASHNAH" },
    { id: 3, img: STS, alt: "STS" },
    { id: 4, img: project, alt: "project" },
    { id: 5, img: occ, alt: "occ" },
    { id: 6, img: nesma, alt: "nesma" },
    { id: 7, img: MBL, alt: "MBL" },
    // { id: 8, img: macc, alt: "macc" },
    // { id: 9, img: khreeji, alt: "khreeji" },
    // { id: 10, img: juffali, alt: "juffali" },
    // { id: 11, img: ihcc, alt: "ihcc" },
    // { id: 12, img: hapco, alt: "hapco" },
    // { id: 13, img: haif, alt: "haif" },
    // { id: 14, img: first, alt: "first" },
    // { id: 15, img: elseif, alt: "elseif" },
    // { id: 16, img: edsco, alt: "edsco" },

    // { id: 17, img: drsulaiman, alt: "dr sulaiman" },
    // { id: 18, img: crcc, alt: "crcc" },
    // { id: 19, img: BINLADIN, alt: "BINLADIN" },
    // { id: 20, img: baytur, alt: "baytur" },
    // { id: 21, img: ARAMCO, alt: "ARAMCO" },
    // { id: 22, img: amana, alt: "amana" },
    // { id: 23, img: alzaharani, alt: "alzaharani" },
    // { id: 24, img: almabani, alt: "almabani" },
    // { id: 25, img: alfaneyah, alt: "alfaneyah" },
    // { id: 26, img: alfanar, alt: "alfanar" },
    // { id: 27, img: alfuttaim, alt: "al futtaim" },
    // { id: 28, img: albawani, alt: "al bawani" },
    // { id: 29, img: acc, alt: "acc" },
    // { id: 30, img: AC, alt: "AC" },
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
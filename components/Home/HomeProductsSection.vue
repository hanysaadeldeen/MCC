<template>
    <section class="HomeProductsSection max-xl:px-6" :dir="locale === 'ar' ? 'rtl' : 'ltr'">
        <div class="max-w-[1392px] mx-auto">
            <TitleSection title="home.productRange.title" />
            <Swiper :breakpoints="{
                320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                    slidesPerGroup: 1
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                    slidesPerGroup: 2
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                    slidesPerGroup: 3
                },
                1280: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                    slidesPerGroup: 4
                }
            }" :spaceBetween="10" :modules="modules" :pagination="{
                clickable: true,
            }" class="mySwiper !flex items-stretch">
                <swiper-slide v-for="product in Products" class=" rounded-xl   h-full">
                    <div class="relative group cursor-pointer  sm:mx-auto sm:max-w-[330px] h-full ">
                        <div class="w-full sm:mx-auto sm:max-w-[330px] max-h-[500px]  rounded-2xl relative">
                            <img :src="product.img" :alt="$t(product.title)" :key="product.id" width="330" height="380"
                                class="object-fill h-full w-full max-h-[500px] rounded-2xl">
                            <div
                                class="absolute top-0 left-0 w-full h-full bg-[#16498EE5]  rounded-2xl p-6 opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300'">
                                <h1 class="text-white text-base md:text-xl lg:text-2xl font-bold">{{ $t(product.title)
                                    }}
                                </h1>
                                <div class="mt-3 md:mt-6" v-if="product.brands.length > 0">
                                    <p class="text-white font-medium text-base md:text-lg">
                                        {{ locale === 'ar' ? "العلامات التجارية" :
                                            "Brands" }}:</p>
                                    <div class="grid grid-cols-2 gap-4">
                                        <div v-for="brand in product.brands">
                                            <img :src="brand" :alt="brand">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </swiper-slide>

            </Swiper>

            <button-more title="home.productRange.btn" link="/products" />

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


import CASTIRONPIPES from '../../assets/img/Utils/Products/CAST IRON PIPES & FITTINGS.svg';
import PVCCEMENT from '../../assets/img/Utils/Products/PVC CEMENT.svg';
import DRAINAGESYSTEM from '../../assets/img/Utils/Products/DRAINAGE SYSTEMS.svg';
import DUCTILEPIPES from '../../assets/img/Utils/Products/DUCTILE PIPES  & FITTINGS.svg';
import SANITARYFIXTURES from '../../assets/img/Utils/Products/SANITARY FIXTURES.svg';
import WATERTREATMENT from '../../assets/img/Utils/Products/WATER TREATMENT.svg';
import PRESSURETANKS from '../../assets/img/Utils/Products/PRESSURE TANKS.svg';
import RUBBERANDFIBER from '../../assets/img/Utils/Products/RUBBER AND FIBERS  INSULATION.svg';
import NEUTRALIZATIONTANKS from '../../assets/img/Utils/Products/NEUTRALIZATION TANKS.svg';
import PETROLEUMANDGAS from '../../assets/img/Utils/Products/PETROLEUM AND  CHEMICAL STORAGE TANKS.svg';
import SOLDERINGROD from '../../assets/img/Utils/Products/SOLDERING ROD.svg'

// products Brands


import sharlote from "../../assets/img/ProductsBrand/CHARLOTTE-24 1.svg"
import AGM from "../../assets/img/ProductsBrand/AGM-43-g 1-1.svg"
import BLUCHER from "../../assets/img/ProductsBrand/BLUCHER-23 1.svg"
import SLOAN from "../../assets/img/ProductsBrand/SLOAN-02 1.svg"
import BRADLEY from "../../assets/img/ProductsBrand/BRADLEY-17 1.svg"
import GROHE from "../../assets/img/ProductsBrand/GROHE-29 1.svg"
import CHICAGO from "../../assets/img/ProductsBrand/CHICAGO-26 1.svg"
import TandS from "../../assets/img/ProductsBrand/T&S-50 1.svg"
import mansfield from "../../assets/img/ProductsBrand/mansfield-49 1.svg"
import American from "../../assets/img/ProductsBrand/American-56 1.svg"
import arch from "../../assets/img/ProductsBrand/arch-51 1.svg"
import UNITRA from "../../assets/img/ProductsBrand/UNITRA INC-g 1.svg"
import ZILMET from "../../assets/img/ProductsBrand/ZILMET-09 1.svg"
import REFLEX from "../../assets/img/ProductsBrand/REFLEX-27 1.svg"
import TEKNIK from "../../assets/img/ProductsBrand/TEKNIK  BOMBE-55 1.svg"
import AFICO from "../../assets/img/ProductsBrand/AFICO-34 1.svg"
import KIMMCO from "../../assets/img/ProductsBrand/KIMMCO-38 1.svg"
import armacell from "../../assets/img/ProductsBrand/armacell-53 1.svg"
import orion from "../../assets/img/ProductsBrand/orion-54-54 1.svg"
import HOROBIN from "../../assets/img/ProductsBrand/HOROBIN-05 1.svg"
import HIGHLAND from "../../assets/img/ProductsBrand/HIGHLAND TANK-21 1.svg"
import HARRIS from "../../assets/img/ProductsBrand/HARRIS-13 1.svg"

const Products = [
    {
        id: 1, img: CASTIRONPIPES, alt: "CAST IRON PIPES", title: "products.CASTIRONPIPES",
        brands: [
            sharlote
        ]
    },
    {
        id: 2, img: PVCCEMENT, alt: "PVC CEMENT", title: "products.PVCCEMENT"
        ,
        brands: [
            AGM
        ]
    },
    {
        id: 3, img: DRAINAGESYSTEM, alt: "DRAINAGE SYSTEM", title: "products.DRAINAGESYSTEM",
        brands: [
            BLUCHER
        ]
    },
    {
        id: 4, img: DUCTILEPIPES, alt: "DUCTILE PIPES", title: "products.DUCTILEPIPES",
        brands: [
        ]
    },
    {
        id: 5, img: SANITARYFIXTURES, alt: "SANITARY FIXTURES", title: "products.SANITARYFIXTURES",
        brands: [
            SLOAN, BRADLEY, American, mansfield, TandS, CHICAGO, GROHE
        ]
    },
    {
        id: 6, img: WATERTREATMENT, alt: "WATER TREATMENT", title: "products.WATERTREATMENT",
        brands: [
            arch, UNITRA
        ]
    },
    {
        id: 7, img: PRESSURETANKS, alt: "PRESSURE TANKS", title: "products.PRESSURETANKS",
        brands: [
            TEKNIK, REFLEX, ZILMET
        ]
    },
    {
        id: 8, img: RUBBERANDFIBER, alt: "RUBBER AND FIBER", title: "products.RUBBERANDFIBER",
        brands: [
            armacell, KIMMCO, AFICO
        ]
    },
    {
        id: 9, img: NEUTRALIZATIONTANKS, alt: "NEUTRALIZATION TANKS", title: "products.NEUTRALIZATIONTANKS",
        brands: [
            orion
        ]
    },
    {
        id: 11, img: PETROLEUMANDGAS, alt: "PETROLEUM AND GAS", title: "products.PETROLEUMANDGAS",
        brands: [
            HIGHLAND, HOROBIN
        ]
    },
    {
        id: 12, img: SOLDERINGROD, alt: "SOLDERING ROD", title: "products.SOLDERINGROD",
        brands: [
            HARRIS
        ]
    },
]
</script>

<style scoped></style>
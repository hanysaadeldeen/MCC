<template>
    <section class="ProductsSection max-xl:px-6" :dir="locale === 'ar' ? 'rtl' : 'ltr'">
        <div class="max-w-[1392px] mx-auto">
            <TitleSection title="products.productTitle" />

            <!--  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4-->
            <div class=" flex flex-wrap  max-2xl:justify-center  justify-start gap-4 lg:gap-6">
                <div class="relative shadow rounded-2xl group cursor-pointer w-full sm:min-w-[330px]  sm:max-w-[330px]  sm:max-h-[380px]  sm:min-h-[380px] "
                    v-for="product in Products" :key="product.id">
                    <div class="absolute top-0 left-0 w-full h-full bg-[#16498EE5]  rounded-2xl p-6 opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300
                    '
                    ">
                        <h1 class="text-white text-base md:text-xl lg:text-2xl font-bold">{{ $t(product.title) }}</h1>
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
                    <img :src="product.img" :alt="product.alt" class="w-full h-full block rounded-2xl object-cover">
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const { locale } = useI18n()


import CASTIRONPIPES from '../../assets/img/Utils/Products/CAST IRON PIPES & FITTINGS.svg';
import PVCCEMENT from '../../assets/img/Utils/Products/PVC CEMENT.svg';
import DRAINAGESYSTEM from '../../assets/img/Utils/Products/DRAINAGE SYSTEMS.svg';
import DUCTILEPIPES from '../../assets/img/Utils/Products/DUCTILE PIPES  & FITTINGS.svg';
import SANITARYFIXTURES from '../../assets/img/Utils/Products/SANITARY FIXTURES.svg';
import WATERTREATMENT from '../../assets/img/Utils/Products/WATER TREATMENT.svg';
import PRESSURETANKS from '../../assets/img/Utils/Products/PRESSURE TANKS.svg';
import RUBBERANDFIBER from '../../assets/img/Utils/Products/RUBBER AND FIBERS  INSULATION.svg';
import NEUTRALIZATIONTANKS from '../../assets/img/Utils/Products/NEUTRALIZATION TANKS.svg';
import TESTPLUGS from '../../assets/img/Utils/Products/TEST PLUGS.webp';
import PETROLEUMANDGAS from '../../assets/img/Utils/Products/PETROLEUM AND  CHEMICAL STORAGE TANKS.svg';
import SOLDERINGROD from '../../assets/img/Utils/Products/SOLDERING ROD.svg';
import PVCCPVPIPES from '../../assets/img/Utils/Products/PVCCPVCPIPES.webp';
import COPPERPIPES from '../../assets/img/Utils/Products/COPPER PIPES  FITTINGS.webp';
import WATERFLOW from '../../assets/img/Utils/Products/WATER FLOW.svg';
import SEAMLESSERW from '../../assets/img/Utils/Products/SEAMLESS ERW  PIPES.svg';
import ELECTRICWATER from '../../assets/img/Utils/Products/ELECTRIC WATER.svg';
import BRONZECASTVALVES from '../../assets/img/Utils/Products/BRONZE AND CAST IRON.svg';
import COMPONENT81 from '../../assets/img/Utils/Products/Component.webp';
import MECHANICALR from '../../assets/img/Utils/Products/MECHANICALREPAIR COUPLING.svg';
import WATERFOUNTAINS from '../../assets/img/Utils/Products/WATER FOUNTAIN.svg';


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
import nibco from "../../assets/img/ProductsBrand/nibco-01 3.svg"
import REDI from "../../assets/img/ProductsBrand/REDI-06 1.svg"
import ASTORE from "../../assets/img/ProductsBrand/ASTORE-10 1.svg"
import MUELLER from "../../assets/img/ProductsBrand/MUELLER-18 1.svg"
import ALLPEX from "../../assets/img/ProductsBrand/ALLPEX-39 1.svg"
import PEGLER from "../../assets/img/ProductsBrand/PEGLER-42 1-1.svg"
import ALIIANG from "../../assets/img/ProductsBrand/ALIIANG-35 1.svg"
import maddalena from "../../assets/img/ProductsBrand/maddalena-08 8.svg"
import HITACHI from "../../assets/img/ProductsBrand/HITACHI-20 1.svg"
import SSP from "../../assets/img/ProductsBrand/SSP-36 1.svg"
import tmk from "../../assets/img/ProductsBrand/tmk-47 1.svg"
import CHERO from "../../assets/img/ProductsBrand/CHERO PIPING-28 1.svg"
import SMITH from "../../assets/img/ProductsBrand/SMITH-07 1.svg"
import WATTS from "../../assets/img/ProductsBrand/WATTS-04 1.svg"
import ESSETI from "../../assets/img/ProductsBrand/ESSETI-16 1-1.svg"
import DANFOSS from "../../assets/img/ProductsBrand/DANFOSS-25 1.svg"
import MCC from "../../assets/img/ProductsBrand/MCC.svg"
import viking from "../../assets/img/ProductsBrand/viking-52 1.svg"
import HUWA from "../../assets/img/ProductsBrand/HUWA-22 1.svg"
import ELKAY from "../../assets/img/ProductsBrand/ELKAY-11 1.svg"
import ao from "../../assets/img/ProductsBrand/ao-03 12.svg"



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
        brands: []
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
        id: 10, img: TESTPLUGS, alt: "TEST PLUGS", title: "products.TESTPLUGS",
        brands: [
            HOROBIN
        ]
    },
    {
        id: 11, img: PETROLEUMANDGAS, alt: "PETROLEUM AND GAS", title: "products.PETROLEUMANDGAS",
        brands: [
            HIGHLAND
        ]
    },
    {
        id: 12, img: SOLDERINGROD, alt: "SOLDERING ROD", title: "products.SOLDERINGROD",
        brands: [
            HARRIS
        ]
    },
    {
        id: 13, img: PVCCPVPIPES, alt: "PVC - CPVC PIPES", title: "products.PVCCPVPIPES",
        brands: [
            ASTORE, REDI, nibco, AGM
        ]
    },
    {
        id: 14, img: COPPERPIPES, alt: "COPPER PIPES", title: "products.COPPERPIPES",
        brands: [
            PEGLER, ALLPEX, MUELLER, ALIIANG, nibco
        ]
    },
    {
        id: 15, img: WATERFLOW, alt: "WATER FLOW", title: "products.WATERFLOW",
        brands: [
            maddalena
        ]
    },
    {
        id: 16, img: SEAMLESSERW, alt: "SEAMLESS, ERW PIPES", title: "products.SEAMLESSERW",
        brands: [
            CHERO, tmk, SSP, HITACHI
        ]
    },
    {
        id: 17, img: ELECTRICWATER, alt: "ELECTRIC WATER", title: "products.ELECTRICWATER",
        brands: [
            ao
        ]
    },
    {
        id: 18, img: BRONZECASTVALVES, alt: "BRONZE AND CAST VALVES", title: "products.BRONZECASTVALVES",
        brands: [
            nibco, PEGLER, MCC, DANFOSS, ESSETI, WATTS
        ]
    },
    {
        id: 19, img: COMPONENT81, alt: "Component", title: "products.COMPONENT81",
        brands: [
            ESSETI
        ]
    },
    {
        id: 20, img: MECHANICALR, alt: "MECHANICAL", title: "products.MECHANICALR",
        brands: [
            HUWA, viking
        ]
    },
    {
        id: 21, img: WATERFOUNTAINS, alt: "WATER FOUNTAINS", title: "products.WATERFOUNTAINS",
        brands: [
            ELKAY
        ]
    }
];



</script>

<style scoped></style>
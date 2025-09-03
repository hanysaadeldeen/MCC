<template>
    <section class="ProductsSection max-xl:px-6" :dir="locale === 'ar' ? 'rtl' : 'ltr'">
        <div class="max-w-[1392px] mx-auto">
            <TitleSection title="مجالات منتجاتنا" />


            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 lg:gap-6">
                <div class="relative shadow rounded-2xl group cursor-pointer" v-for="product in Products"
                    :key="product.id">
                    <div class="absolute top-0 left-0 w-full h-full bg-[#16498EE5]  rounded-2xl p-3 md:p-6 opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300
                    '
                    ">
                        <h1 class="text-white text-base md:text-xl lg:text-2xl font-bold">{{ $t(product.title) }}</h1>
                        <div class="mt-3 md:mt-6">
                            <p class="text-white font-medium text-base md:text-lg">
                                {{ locale === 'ar' ? "العلامات التجارية" :
                                    "Brands" }}:</p>
                        </div>
                    </div>
                    <img :src="product.img" :alt="product.alt" class="w-full h-full block rounded-2xl">
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


const Products = [
    { id: 1, img: CASTIRONPIPES, alt: "CAST IRON PIPES", title: "products.CASTIRONPIPES" },
    { id: 2, img: PVCCEMENT, alt: "PVC CEMENT", title: "products.PVCCEMENT" },
    { id: 3, img: DRAINAGESYSTEM, alt: "DRAINAGE SYSTEM", title: "products.DRAINAGESYSTEM" },
    { id: 4, img: DUCTILEPIPES, alt: "DUCTILE PIPES", title: "products.DUCTILEPIPES" },
    { id: 5, img: SANITARYFIXTURES, alt: "SANITARY FIXTURES", title: "products.SANITARYFIXTURES" },
    { id: 6, img: WATERTREATMENT, alt: "WATER TREATMENT", title: "products.WATERTREATMENT" },
    { id: 7, img: PRESSURETANKS, alt: "PRESSURE TANKS", title: "products.PRESSURETANKS" },
    { id: 8, img: RUBBERANDFIBER, alt: "RUBBER AND FIBER", title: "products.RUBBERANDFIBER" },
    { id: 9, img: NEUTRALIZATIONTANKS, alt: "NEUTRALIZATION TANKS", title: "products.NEUTRALIZATIONTANKS" },
    { id: 10, img: TESTPLUGS, alt: "TEST PLUGS", title: "products.TESTPLUGS" },
    { id: 11, img: PETROLEUMANDGAS, alt: "PETROLEUM AND GAS", title: "products.PETROLEUMANDGAS" },
    { id: 12, img: SOLDERINGROD, alt: "SOLDERING ROD", title: "products.SOLDERINGROD" },
    { id: 13, img: PVCCPVPIPES, alt: "PVC - CPVC PIPES", title: "products.PVCCPVPIPES" },
    { id: 14, img: COPPERPIPES, alt: "COPPER PIPES", title: "products.COPPERPIPES" },
    { id: 15, img: WATERFLOW, alt: "WATER FLOW", title: "products.WATERFLOW" },
    { id: 16, img: SEAMLESSERW, alt: "SEAMLESS, ERW PIPES", title: "products.SEAMLESSERW" },
    { id: 17, img: ELECTRICWATER, alt: "ELECTRIC WATER", title: "products.ELECTRICWATER" },
    { id: 18, img: BRONZECASTVALVES, alt: "BRONZE AND CAST VALVES", title: "products.BRONZECASTVALVES" },
    { id: 19, img: COMPONENT81, alt: "Component", title: "products.COMPONENT81" },
    { id: 20, img: MECHANICALR, alt: "MECHANICAL", title: "products.MECHANICALR" },
    { id: 21, img: WATERFOUNTAINS, alt: "WATER FOUNTAINS", title: "products.WATERFOUNTAINS" }
];



</script>

<style scoped></style>
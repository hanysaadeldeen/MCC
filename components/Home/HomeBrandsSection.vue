<template>
    <section class="BrandSection bg-[#E9F1FC]">
        <Vue3Marquee duration="100" :direction="locale === 'ar' ? 'reverse' : ''">
            <img v-for="brand in Brands" :src="brand.img" :alt="brand.alt" :key="brand.id" class="mx-3" width="164"
                height="68" />
        </Vue3Marquee>
    </section>
</template>

<script setup lang="ts">
const { locale } = useI18n()

import AFICO from "../../assets/img/Utils/Brands/AFICO.svg"
import AGM from "../../assets/img/Utils/Brands/AGM.svg"
import ALIIANG from "../../assets/img/Utils/Brands/ALIIANG.svg"
import ALLPEX from "../../assets/img/Utils/Brands/ALLPEX.svg"
import AMES from "../../assets/img/Utils/Brands/AMES.svg"
import AO from "../../assets/img/Utils/Brands/AO.svg"
import APLCO from "../../assets/img/Utils/Brands/APLCO.svg"
import ASTORE from "../../assets/img/Utils/Brands/ASTORE.svg"
import BENKAN from "../../assets/img/Utils/Brands/BENKAN.svg"
import BLUCHER from "../../assets/img/Utils/Brands/BLUCHER.svg"
import BRADLEY from "../../assets/img/Utils/Brands/BRADLEY.svg"
import CHARLOTTE from "../../assets/img/Utils/Brands/CHARLOTTE.svg"
import PIPING from "../../assets/img/Utils/Brands/CHERO PIPING.svg"
import CHICAGO from "../../assets/img/Utils/Brands/CHICAGO.svg"
import DANFOSS from "../../assets/img/Utils/Brands/DANFOSS.svg"
import ELKAY from "../../assets/img/Utils/Brands/ELKAY.svg"
import ESSETI from "../../assets/img/Utils/Brands/ESSETI.svg"
import GROHE from "../../assets/img/Utils/Brands/GROHE.svg"
import HARRIS from "../../assets/img/Utils/Brands/HARRIS.svg"
import HIGHLANDTANK from "../../assets/img/Utils/Brands/HIGHLAND TANK.svg"
import HITACHI from "../../assets/img/Utils/Brands/HITACHI.svg"
import HOROBIN from "../../assets/img/Utils/Brands/HOROBIN.svg"
import HTH from "../../assets/img/Utils/Brands/HTH.svg"
import HUNTER from "../../assets/img/Utils/Brands/HUNTER.svg"
import HUWA from "../../assets/img/Utils/Brands/HUWA.svg"
import KIMMCO from "../../assets/img/Utils/Brands/KIMMCO.svg"
import LEONARD from "../../assets/img/Utils/Brands/LEONARD.svg"
import MADDALENA from "../../assets/img/Utils/Brands/MADDALENA.svg"
import MEDICLINICS from "../../assets/img/Utils/Brands/MEDICLINICS.svg"
import MUELLER from "../../assets/img/Utils/Brands/MUELLER.svg"
import PEGLER from "../../assets/img/Utils/Brands/PEGLER.svg"
import PETTINAROLI from "../../assets/img/Utils/Brands/PETTINAROLI.svg"
import PEX from "../../assets/img/Utils/Brands/PEX.svg"
import REDI from "../../assets/img/Utils/Brands/REDI.svg"
import REFLEX from "../../assets/img/Utils/Brands/REFLEX.svg"
import SLOAN from "../../assets/img/Utils/Brands/SLOAN.svg"
import SMITH from "../../assets/img/Utils/Brands/SMITH.svg"
import SSP from "../../assets/img/Utils/Brands/SSP.svg"
import SUMITOMO from "../../assets/img/Utils/Brands/SUMITOMO.svg"
import TACHEN from "../../assets/img/Utils/Brands/TACHEN.svg"
import UNITRA from "../../assets/img/Utils/Brands/UNITRA INC.svg"
import VIEGA from "../../assets/img/Utils/Brands/VIEGA.svg"
import WATTS from "../../assets/img/Utils/Brands/WATTS.svg"
import ZILMET from "../../assets/img/Utils/Brands/ZILMET.svg"
import nibco from "../../assets/img/Utils/Brands/nibco.svg"

const Brands = [
    { id: 1, img: AFICO, alt: "AFICO" },
    { id: 2, img: AGM, alt: "AGM" },
    { id: 3, img: ALIIANG, alt: "ALIIANG" },
    { id: 4, img: ALLPEX, alt: "ALLPEX" },
    { id: 5, img: AMES, alt: "AMES" },
    { id: 6, img: AO, alt: "AO" },
    { id: 7, img: APLCO, alt: "APLCO" },
    { id: 8, img: ASTORE, alt: "ASTORE" },
    { id: 9, img: BENKAN, alt: "BENKAN" },
    { id: 10, img: BLUCHER, alt: "BLUCHER" },
    { id: 11, img: BRADLEY, alt: "BRADLEY" },
    { id: 12, img: CHARLOTTE, alt: "CHARLOTTE" },
    { id: 13, img: PIPING, alt: "CHERO PIPING" },
    { id: 14, img: CHICAGO, alt: "CHICAGO" },
    { id: 15, img: DANFOSS, alt: "DANFOSS" },
    { id: 16, img: ELKAY, alt: "ELKAY" },
    { id: 17, img: ESSETI, alt: "ESSETI" },
    { id: 18, img: GROHE, alt: "GROHE" },
    { id: 19, img: HARRIS, alt: "HARRIS" },
    { id: 20, img: HIGHLANDTANK, alt: "HIGHLAND TANK" },
    { id: 21, img: HITACHI, alt: "HITACHI" },
    { id: 22, img: HOROBIN, alt: "HOROBIN" },
    { id: 23, img: HTH, alt: "HTH" },
    { id: 24, img: HUNTER, alt: "HUNTER" },
    { id: 25, img: HUWA, alt: "HUWA" },
    { id: 26, img: KIMMCO, alt: "KIMMCO" },
    { id: 27, img: LEONARD, alt: "LEONARD" },
    { id: 28, img: MADDALENA, alt: "MADDALENA" },
    { id: 29, img: MEDICLINICS, alt: "MEDICLINICS" },
    { id: 30, img: MUELLER, alt: "MUELLER" },
    { id: 31, img: PEGLER, alt: "PEGLER" },
    { id: 32, img: PETTINAROLI, alt: "PETTINAROLI" },
    { id: 33, img: PEX, alt: "PEX" },
    { id: 34, img: REDI, alt: "REDI" },
    { id: 35, img: REFLEX, alt: "REFLEX" },
    { id: 36, img: SLOAN, alt: "SLOAN" },
    { id: 37, img: SMITH, alt: "SMITH" },
    { id: 38, img: SSP, alt: "SSP" },
    { id: 39, img: SUMITOMO, alt: "SUMITOMO" },
    { id: 40, img: TACHEN, alt: "TACHEN" },
    { id: 41, img: UNITRA, alt: "UNITRA INC" },
    { id: 42, img: VIEGA, alt: "VIEGA" },
    { id: 43, img: WATTS, alt: "WATTS" },
    { id: 44, img: ZILMET, alt: "ZILMET" },
    { id: 45, img: nibco, alt: "nibco" },
]



</script>

<style scoped></style>
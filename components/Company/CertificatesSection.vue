<template>
    <section class="CertificatesSection max-xl:px-6">
        <div class="max-w-[1392px] mx-auto">
            <TitleSection title="التزامنا بالجودة العالمية: شهاداتنا الدولية" />

            <div
                class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 justify-center w-full md:w-fit mx-auto">
                <div class="border rounded-xl border-[#CCCCCC] p-8 w-full md:max-w-[330px]"
                    v-for="certificate in Certificates" :key="certificate.id">
                    <img :src="certificate.img" :alt="certificate.title" class=" w-fit block mx-auto max-md:size-36"
                        width="212" height="220" loading="lazy">
                    <div class="my-4 md:my-6 text-center">
                        <h1 class="text-2xl lg:text-3xl font-medium mb-2">{{ certificate.title }}</h1>
                        <p class='text-base lg:text-lg font-medium text-paragraph'>{{ certificate.description }}</p>
                    </div>
                    <button-more title="شاهد الشهادة كاملة" :link="certificate.link" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import ISO2015 from "../../assets/img/Company/ISO2015.svg"
import ISO20152 from "../../assets/img/Company/ISO20152.svg"
import ISO2018 from "../../assets/img/Company/ISO2018.svg"

const Certificates = [
    {
        id: 3,
        img: ISO2018,
        title: "ISO 45001:2018",
        description: "أنظمة إدارة الصحة والسلامة المهنية",
        link: ""
    },

    {
        id: 2,
        img: ISO20152,
        title: "ISO 14001:2015",
        description: "أنظمة الإدارة البيئية",
        link: ""
    },
    {
        id: 1,
        img: ISO2015,
        title: "ISO 9001:2015",
        description: "أنظمة إدارة الجودة",
        link: ""
    },

]

</script>

<style scoped></style>
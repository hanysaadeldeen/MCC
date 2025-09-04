<template>
    <section class="CertificatesSection max-xl:px-6">
        <div class="max-w-[1392px] mx-auto">
            <TitleSection title="about.certifications.title" />

            <div
                class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 justify-center w-full md:w-fit mx-auto">
                <div class="border rounded-xl border-[#CCCCCC] p-8 w-full md:max-w-[330px] flex flex-col justify-between"
                    v-for="certificate in Certificates" :key="certificate.id">
                    <div>
                        <img :src="certificate.img" :alt="certificate.title" class=" w-fit block mx-auto max-md:size-36"
                            width="212" height="220" loading="lazy">
                        <div class="my-4 md:my-6 text-center">
                            <h1 class="text-2xl lg:text-3xl font-medium mb-2">{{ certificate.title }}</h1>
                            <p class='text-base lg:text-lg font-medium text-paragraph'>{{ $t(certificate.description) }}
                            </p>
                        </div>
                    </div>
                    <a :href="certificate.link" download class="w-fit mx-auto block mt-6">
                        <button
                            class="text-primary border border-primary bg-white py-2 px-6 text-xl font-medium rounded-lg hover:bg-primary hover:text-white transition-all duration-300 ease-in-out ">
                            {{ certificate.title }}
                        </button>
                    </a>
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
        description: "about.certifications.iso2018",
        link: "/ISO 45001 2018.pdf"
    },

    {
        id: 2,
        img: ISO20152,
        title: "ISO 14001:2015",
        description: "about.certifications.iso142015",
        link: "/ISO 14001 2015.pdf"
    },
    {
        id: 1,
        img: ISO2015,
        title: "ISO 9001:2015",
        description: "about.certifications.iso92015",
        link: "/ISO 9001 2015.pdf"
    },

]

</script>

<style scoped></style>
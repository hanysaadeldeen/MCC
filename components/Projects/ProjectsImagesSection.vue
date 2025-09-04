<template>
    <section class="SuppliersImagesSection">

        <TitleSection title="projects.projectsTitle" />

        <div class="max-w-[1392px] mx-auto max-xl:px-6">
            <div class="flex max-lg:flex-col gap-2 md:gap-4 lg:gap-6">
                <div class="relative w-full lg:w-1/2 imgContainer max-h-[584px] group">
                    <img src="~/assets/img/Projects/King Abdulaziz L.webp" loading="lazy"
                        class="h-full max-h-full object-cover w-full "
                        :alt='$t("projects.projectsImg.kingAbdulazizInternationalAirport")'>
                    <div
                        class="absolute -bottom-24 group-hover:bottom-0 transition-all duration-300 ease-in-out left-0 w-full h-fit p-3 md:p-5 Projecttitle">
                        <h1 class="text-primary text-base md:text-lg lg:text-xl font-bold text-center">
                            {{ $t("projects.projectsImg.kingAbdulazizInternationalAirport") }}
                        </h1>
                    </div>
                </div>
                <div class="flex flex-col w-full lg:w-1/2 gap-2 md:gap-4 lg:gap-6">
                    <div class="h-1/2 imgContainer group relative">
                        <img src="~/assets/img/Projects/Economic City.webp" loading="lazy"
                            class="w-full h-full object-cover"
                            :alt='$t("projects.projectsImg.KingAbdullahEconomicCity")'>
                        <div
                            class="absolute -bottom-24 group-hover:bottom-0 transition-all duration-300 ease-in-out left-0 w-full h-fit p-3 md:p-5 Projecttitle">
                            <h1 class="text-primary text-base md:text-lg lg:text-xl font-bold text-center">

                                {{ $t("projects.projectsImg.KingAbdullahEconomicCity") }}
                            </h1>
                        </div>

                    </div>
                    <div class="flex gap-2 md:gap-4 lg:gap-6 h-1/2 ">
                        <div class="imgContainer  w-1/2 group relative">
                            <img src="~/assets/img/Projects/AMAALA L.webp" loading="lazy"
                                class="w-full h-full max-w-full object-cover"
                                :alt='$t("projects.projectsImg.AMAALAProject")'>
                            <div
                                class="absolute -bottom-24 group-hover:bottom-0 transition-all duration-300 ease-in-out left-0 w-full h-fit p-3 md:p-5 Projecttitle">
                                <h1 class="text-primary text-base md:text-lg lg:text-xl font-bold text-center">


                                    {{ $t("projects.projectsImg.AMAALAProject") }}
                                </h1>
                            </div>

                        </div>
                        <div class="imgContainer  w-1/2 group relative">
                            <img src="~/assets/img/Projects/Salman Park L.webp"
                                class="w-full h-full max-w-full object-cover" loading="lazy"
                                :alt='$t("projects.projectsImg.KingSalmanPark")'>
                            <div
                                class="absolute -bottom-24 group-hover:bottom-0 transition-all duration-300 ease-in-out left-0 w-full h-fit p-3 md:p-5 Projecttitle">
                                <h1 class="text-primary text-base md:text-lg lg:text-xl font-bold text-center">
                                    {{ $t("projects.projectsImg.KingSalmanPark") }}
                                </h1>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div class="flex max-lg:flex-col gap-2 md:gap-4 lg:gap-6 flex-row-reverse mt-2 md:mt-4 lg:mt-6 ">
                <div class="w-full lg:w-1/2 imgContainer max-h-[280px] group relative">
                    <img src="~/assets/img/Projects/NEOM.webp" class="object-cover w-full h-full" loading="lazy"
                        :alt='$t("projects.projectsImg.NEOMProject")'>
                    <div
                        class="absolute -bottom-24 group-hover:bottom-0 transition-all duration-300 ease-in-out left-0 w-full h-fit p-3 md:p-5 Projecttitle">
                        <h1 class="text-primary text-base md:text-lg lg:text-xl font-bold text-center">
                            {{ $t("projects.projectsImg.NEOMProject") }}
                        </h1>
                    </div>
                </div>
                <div class="flex gap-2 md:gap-4 lg:gap-6 w-full lg:w-1/2 ">
                    <div class="imgContainer  w-1/2 group relative">
                        <img src="~/assets/img/Projects/Red Sea L.webp" class="object-cover w-full h-full"
                            loading="lazy" :alt='$t("projects.projectsImg.RedSeaProject")'>
                        <div
                            class="absolute -bottom-24 group-hover:bottom-0 transition-all duration-300 ease-in-out left-0 w-full h-fit p-3 md:p-5 Projecttitle">
                            <h1 class="text-primary text-base md:text-lg lg:text-xl font-bold text-center">
                                {{ $t("projects.projectsImg.RedSeaProject") }}
                            </h1>
                        </div>
                    </div>
                    <div class="imgContainer  w-1/2 group relative">
                        <img src="~/assets/img/Projects/King Saud L.webp" class="object-cover w-full h-full"
                            loading="lazy" :alt='$t("projects.projectsImg.KingSaudUniversity")'>
                        <div
                            class="absolute -bottom-24 group-hover:bottom-0 transition-all duration-300 ease-in-out left-0 w-full h-fit p-3 md:p-5 Projecttitle">
                            <h1 class="text-primary text-base md:text-lg lg:text-xl font-bold text-center">
                                {{ $t("projects.projectsImg.KingSaudUniversity") }}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex max-lg:flex-col gap-2 md:gap-4 lg:gap-6 flex-row-reverse mt-2 md:mt-4 lg:mt-6">
                <div class="w-full lg:w-1/2 imgContainer group relative">
                    <img src="~/assets/img/Projects/University of Science L.webp"
                        class="object-cover w-full max-w-full max-h-full block" loading="lazy"
                        :alt='$t("projects.projectsImg.kingAbdullahUniversity")'>
                    <div
                        class="absolute -bottom-24 group-hover:bottom-0 transition-all duration-300 ease-in-out left-0 w-full h-fit p-3 md:p-5 Projecttitle">
                        <h1 class="text-primary text-base md:text-lg lg:text-xl font-bold text-center">
                            {{ $t("projects.projectsImg.kingAbdullahUniversity") }}
                        </h1>
                    </div>
                </div>
                <div class="flex flex-col w-full lg:w-1/2 gap-2 md:gap-4 lg:gap-6">
                    <div class="h-1/2 imgContainer group relative ">
                        <img src="~/assets/img/Projects/Jabal Omar.webp" class="w-full object-cover" loading="lazy"
                            :alt='$t("projects.projectsImg.JabalOmarDevelopment")'>
                        <div
                            class="absolute -bottom-24 group-hover:bottom-0 transition-all duration-300 ease-in-out left-0 w-full h-fit p-3 md:p-5 Projecttitle">
                            <h1 class="text-primary text-base md:text-lg lg:text-xl font-bold text-center">
                                {{ $t("projects.projectsImg.JabalOmarDevelopment") }}
                            </h1>
                        </div>
                    </div>
                    <div class="flex gap-2 md:gap-4 lg:gap-6 h-1/2 ">
                        <div class="imgContainer  w-1/2 group relative">
                            <img src="~/assets/img/Projects/ALULA L.webp" class="w-full max-w-full object-cover"
                                loading="lazy" :alt='$t("projects.projectsImg.ALULAProject")'>
                            <div
                                class="absolute -bottom-24 group-hover:bottom-0 transition-all duration-300 ease-in-out left-0 w-full h-fit p-3 md:p-5 Projecttitle">
                                <h1 class="text-primary text-base md:text-lg lg:text-xl font-bold text-center">
                                    {{ $t("projects.projectsImg.ALULAProject") }}
                                </h1>
                            </div>
                        </div>
                        <div class="imgContainer  w-1/2 group relative">
                            <img src="~/assets/img/Projects/MASAAR L.webp" class="w-full max-w-full object-cover"
                                loading="lazy" :alt='$t("projects.projectsImg.MASAARProject")'>
                            <div
                                class="absolute -bottom-24 group-hover:bottom-0 transition-all duration-300 ease-in-out left-0 w-full h-fit p-3 md:p-5 Projecttitle">
                                <h1 class="text-primary text-base md:text-lg lg:text-xl font-bold text-center">
                                    {{ $t("projects.projectsImg.MASAARProject") }}
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex max-lg:flex-col gap-2 md:gap-4 lg:gap-6 flex-row-reverse mt-2 md:mt-4 lg:mt-6 ">
                <div class="w-full lg:w-1/2 imgContainer max-h-[280px] group relative">
                    <img src="~/assets/img/Projects/King Abdullah.webp" class="object-cover w-full h-full"
                        loading="lazy" :alt='$t("projects.projectsImg.KingAbdullahFinancialDistrict")'>
                    <div
                        class="absolute -bottom-24 group-hover:bottom-0 transition-all duration-300 ease-in-out left-0 w-full h-fit p-3 md:p-5 Projecttitle">
                        <h1 class="text-primary text-base md:text-lg lg:text-xl font-bold text-center">
                            {{ $t("projects.projectsImg.KingAbdullahFinancialDistrict") }}
                        </h1>
                    </div>
                </div>
                <div class="flex gap-2 md:gap-4 lg:gap-6 w-full lg:w-1/2 ">
                    <div class="imgContainer  w-1/2 max-h-[280px] group relative">
                        <img src="~/assets/img/Projects/Qiddiyah L.webp" class="object-cover w-full h-full"
                            loading="lazy" :alt='$t("projects.projectsImg.QiddiyahProject")'>
                        <div
                            class="absolute -bottom-24 group-hover:bottom-0 transition-all duration-300 ease-in-out left-0 w-full h-fit p-3 md:p-5 Projecttitle">
                            <h1 class="text-primary text-base md:text-lg lg:text-xl font-bold text-center">
                                {{ $t("projects.projectsImg.QiddiyahProject") }}
                            </h1>
                        </div>
                    </div>
                    <div class="imgContainer  w-1/2 max-h-[280px] group relative">
                        <img src="~/assets/img/Projects/Amazon.webp" class="object-cover w-full h-full" loading="lazy"
                            :alt='$t("projects.projectsImg.AmazonProject")'>
                        <div
                            class="absolute -bottom-24 group-hover:bottom-0 transition-all duration-300 ease-in-out left-0 w-full h-fit p-3 md:p-5 Projecttitle">
                            <h1 class="text-primary text-base md:text-lg lg:text-xl font-bold text-center">
                                {{ $t("projects.projectsImg.AmazonProject") }}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex max-lg:flex-col gap-2 md:gap-4 lg:gap-6 flex-row-reverse mt-2 md:mt-4 lg:mt-6">
                <div class="w-full lg:w-1/2 imgContainer group relative">
                    <img src="~/assets/img/Projects/King Khalid L.webp"
                        class="object-fill w-full max-w-full max-h-full block" loading="lazy"
                        :alt='$t("projects.projectsImg.KingKhalidInternationalAirport")'>
                    <div
                        class="absolute -bottom-24 group-hover:bottom-0 transition-all duration-300 ease-in-out left-0 w-full h-fit p-3 md:p-5 Projecttitle">
                        <h1 class="text-primary text-base md:text-lg lg:text-xl font-bold text-center">
                            {{ $t("projects.projectsImg.KingKhalidInternationalAirport") }}
                        </h1>
                    </div>
                </div>
                <div class="flex flex-col w-full lg:w-1/2 gap-2 md:gap-4 lg:gap-6">
                    <div class="h-1/2 imgContainer  group relative">
                        <img src="~/assets/img/Projects/Endowment.webp" class="w-full object-cover" loading="lazy"
                            :alt='$t("projects.projectsImg.KingAbdulazizEndowment")'>
                        <div
                            class="absolute -bottom-24 group-hover:bottom-0 transition-all duration-300 ease-in-out left-0 w-full h-fit p-3 md:p-5 Projecttitle">
                            <h1 class="text-primary text-base md:text-lg lg:text-xl font-bold text-center">
                                {{ $t("projects.projectsImg.KingAbdulazizEndowment") }}
                            </h1>
                        </div>
                    </div>
                    <div class="flex gap-2 md:gap-4 lg:gap-6 h-1/2 ">
                        <div class="imgContainer  w-1/2 group relative">
                            <img src="~/assets/img/Projects/Diriyah Gate L.webp" class="w-full max-w-full object-cover"
                                loading="lazy" :alt='$t("projects.projectsImg.DiriyahGate")'>
                            <div
                                class="absolute -bottom-24 group-hover:bottom-0 transition-all duration-300 ease-in-out left-0 w-full h-fit p-3 md:p-5 Projecttitle">
                                <h1 class="text-primary text-base md:text-lg lg:text-xl font-bold text-center">
                                    {{ $t("projects.projectsImg.DiriyahGate") }}
                                </h1>
                            </div>
                        </div>
                        <div class="imgContainer  w-1/2 group relative">
                            <img src="~/assets/img/Projects/Makkah Clock L.webp" class="w-full max-w-full object-cover"
                                loading="lazy" :alt='$t("projects.projectsImg.MakkahClockTower")'>
                            <div
                                class="absolute -bottom-24 group-hover:bottom-0 transition-all duration-300 ease-in-out left-0 w-full h-fit p-5 Projecttitle">
                                <h1 class="text-primary text-base md:text-lg lg:text-xl font-bold text-center">
                                    {{ $t("projects.projectsImg.MakkahClockTower") }}
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

</script>

<style scoped>
.imgContainer {
    overflow: hidden;
    border-radius: 16px;
    cursor: pointer;
}

.imgContainer img {
    border-radius: 16px;
    transition: 0.2s ease-in-out;
}

.imgContainer:hover img {
    transform: scale(1.15);
    filter: brightness(80%);
}

@media (max-width:768px) {

    .imgContainer,
    .imgContainer img {
        border-radius: 12px;
    }
}

.Projecttitle {
    background-color: rgba(255, 255, 255, 0.85);
}
</style>
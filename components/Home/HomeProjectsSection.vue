<template>
    <section class="ProjectsSection px-6" :dir="locale === 'ar' ? 'rtl' : 'ltr'">
        <div class="max-w-[1628px] mx-auto">
            <TitleSection title="home.bestProjects.title" />

            <div class="flex justify-center gap-6">
                <div class=" hidden md:flex flex-col items-start gap-6 max-xl:mt-16 ">
                    <div
                        class="rounded-2xl max-w-[212px]  h-[280px] relative group overflow-hidden cursor-pointer brightness-75">
                        <img src="~/assets/img/Projects/Economic City.webp" loading="lazy" alt="Economic City"
                            class="w-full h-full rounded-2xl  object-cover    group-hover:scale-110 transition-all ease-in-out duration-300    ">
                    </div>
                    <div class="rounded-2xl max-w-[212px] h-[280px] relative group overflow-hidden cursor-pointer">
                        <img src="~/assets/img/Projects/AMAALA.webp" loading="lazy" alt="AMAALA"
                            class="w-full h-full rounded-2xl object-cover   group-hover:scale-110 transition-all ease-in-out duration-300    ">
                    </div>
                </div>
                <div class=" hidden md:flex flex-col items-center gap-6 relative  xl:mt-[85px]">
                    <div class="rounded-2xl max-w-[212px]   h-[280px] relative group overflow-hidden cursor-pointer">
                        <img src="~/assets/img/Projects/King Abdulaziz.webp" loading="lazy" alt="King Abdulaziz"
                            class="w-full h-full rounded-2xl object-cover  group-hover:scale-110 transition-all ease-in-out duration-300">
                    </div>
                    <div class="rounded-2xl max-w-[212px]   h-[280px] relative group overflow-hidden cursor-pointer">
                        <img src="~/assets/img/Projects/Endowment.webp" loading="lazy" alt="Endowment"
                            class="w-full h-full rounded-2xl object-cover  group-hover:scale-110 transition-all ease-in-out duration-300">
                    </div>
                </div>
                <div class="hidden xl:flex flex-col items-center justify-center gap-6 ">
                    <div class="rounded-2xl max-w-[212px]   h-[280px] relative group overflow-hidden cursor-pointer">
                        <img src="~/assets/img/Projects/MASAAR.webp" loading="lazy" alt="MASAAR"
                            class="w-full h-full rounded-2xl object-cover  group-hover:scale-110 transition-all ease-in-out duration-300">
                    </div>
                </div>
                <div class="hidden xl:flex flex-col items-center justify-center gap-6 mt-32">
                    <div class="rounded-2xl max-w-[212px]   h-[280px] relative group overflow-hidden cursor-pointer">
                        <img src="~/assets/img/Projects/Makkah Clock.webp" loading="lazy" alt="Makkah Clock"
                            class="w-full h-full rounded-2xl object-cover  group-hover:scale-110 transition-all ease-in-out duration-300">
                    </div>
                </div>
                <div class="hidden xl:flex flex-col items-center justify-center gap-6">
                    <div class="rounded-2xl max-w-[212px]   h-[280px] relative group overflow-hidden cursor-pointer">
                        <img src="~/assets/img/Projects/King Saud.webp" loading="lazy" alt="King Saud"
                            class="w-full h-full rounded-2xl object-cover  group-hover:scale-110 transition-all ease-in-out duration-300">
                    </div>
                </div>
                <div class="flex flex-col items-center gap-6 relative    max-md:mt-10 max-xl:mt-16 xl:mt-[85px]">
                    <div class="rounded-2xl max-w-[212px]   h-[280px] relative group overflow-hidden cursor-pointer">
                        <img src="~/assets/img/Projects/Red Sea.webp" loading="lazy" alt="Red Sea"
                            class="w-full h-full rounded-2xl object-cover  group-hover:scale-110 transition-all ease-in-out duration-300">
                    </div>
                    <div class="rounded-2xl max-w-[212px]   h-[280px] relative group overflow-hidden cursor-pointer">
                        <img src="~/assets/img/Projects/King Khalid.webp" loading="lazy" alt="King Khalid"
                            class="w-full h-full rounded-2xl object-cover  group-hover:scale-110 transition-all ease-in-out duration-300">
                    </div>
                </div>
                <div class="flex flex-col items-end gap-6">
                    <div class="rounded-2xl max-w-[212px]  h-[280px]  relative group overflow-hidden cursor-pointer ">
                        <img src="~/assets/img/Projects/ALULA.webp" loading="lazy" alt="ALULA"
                            class="w-full h-full rounded-2xl object-cover  group-hover:scale-110 transition-all ease-in-out duration-300">
                    </div>
                    <div class="rounded-2xl max-w-[212px]  h-[280px] relative group overflow-hidden cursor-pointer">
                        <img src="~/assets/img/Projects/NEOM.webp" loading="lazy" alt="NEOM"
                            class="w-full h-full rounded-2xl object-cover  group-hover:scale-110 transition-all ease-in-out duration-300">
                    </div>
                </div>
            </div>
            <div class="mt-10">
                <button-more title="home.bestProjects.btn" link="/projects" />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

const { locale } = useI18n()

</script>

<style scoped></style>
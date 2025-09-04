<template>
    <section class="OurtNumberSection max-w-[1391px] mx-auto max-xl:px-6" :dir="locale === 'ar' ? 'rtl' : 'ltr'">
        <TitleSection title="home.numbersAchieved.title" />
        <div class="flex items-center relative justify-center max-lg:flex-wrap gap-6">
            <div class="relative" :class="locale === 'ar' ? 'md:pl-10' : 'md:pr-10'">
                <div class="flex gap-6 sm:py-4 lg:px-6 items-center">
                    <img src="~/assets/img/Home/Numbers/Project.svg" alt="Project.svg" loading="lazy"
                        class="size-10 md:size-14 lg:size-16" width="64" height="64">
                    <div class="text-center">
                        <h2 class="text-Text font-bold text-3xl md:text-4xl lg:text-6xl mb-2 lg:!leading-[72px]">
                            {{ $t("home.numbersAchieved.projects.number") }}
                        </h2>
                        <p class="text-paragraph text-base md:text-lg font-bold ">
                            {{ $t("home.numbersAchieved.projects.title") }}
                        </p>
                    </div>
                </div>
            </div>
            <div class="relative md:px-10">
                <div
                    class="max-lg:hidden absolute right-0 top-1/2 -translate-y-1/2 bg-[#666666] w-[0.5px] h-[100px] opacity-50">
                </div>
                <div class="flex gap-6 sm:py-4 lg:px-6 items-center">
                    <img src="~/assets/img/Home/Numbers/Client.svg" alt="Project.svg" loading="lazy"
                        class="size-10 md:size-14 lg:size-16" width="64" height="64">
                    <div class="text-center">
                        <h2 class="text-Text font-bold text-3xl md:text-4xl lg:text-6xl mb-2 lg:!leading-[72px]">
                            {{ $t("home.numbersAchieved.clients.number") }}
                        </h2>
                        <p class="text-paragraph text-base md:text-lg font-bold ">
                            {{ $t("home.numbersAchieved.clients.title") }}
                        </p>
                    </div>
                </div>
                <div
                    class="max-lg:hidden absolute left-0 top-1/2 -translate-y-1/2 bg-[#666666] w-[0.5px] h-[100px] opacity-50">
                </div>
            </div>
            <div class="relative " :class="locale === 'ar' ? 'md:pr-10' : 'md:pl-10'">
                <div class="flex gap-6 sm:py-4 lg:px-6 items-center">
                    <img src="~/assets/img/Home/Numbers/Product.svg" alt="Project.svg" loading="lazy"
                        class="size-10 md:size-14 lg:size-16" width="64" height="64">
                    <div class="text-center">
                        <h2 class="text-Text font-bold text-3xl md:text-4xl lg:text-6xl mb-2 lg:!leading-[72px]">
                            {{ $t("home.numbersAchieved.products.number") }}
                        </h2>
                        <p class="text-paragraph text-base md:text-lg font-bold ">
                            {{ $t("home.numbersAchieved.products.title") }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const { locale } = useI18n()

</script>

<style scoped></style>
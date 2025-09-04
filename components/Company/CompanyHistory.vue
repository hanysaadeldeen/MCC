<template>
    <section class="CompanyHistorySection">
        <div class="max-w-[1392px] mx-auto max-xl:px-6">
            <TitleSection title="about.history.title" />
            <div class="BigScreen hidden lg:flex justify-center  max-xl:items-center gap-16 max-xl:flex-col">
                <h1 class="text-primary font-bold text-3xl md:text-4xl lg:text-5xl mt-[60px]">1978</h1>
                <div class="flex gap-16 justify-between relative w-fit  px-10">
                    <div
                        class="absolute top-[70px] right-1 size-8 bg-white rotate-45 border-[4px] border-secondary z-20">
                    </div>
                    <div
                        class="absolute top-[78px] right-3 size-[16px] bg-white rotate-45 border-[4px] border-t-transparent border-r-transparent border-secondary z-[21]">
                    </div>
                    <div class="absolute top-[86px] bg-secondary w-full h-[1px] left-0"></div>
                    <div class="flex flex-col gap-8 max-w-[212px] justify-center items-center" v-for="hist in History">
                        <p class="text-Text font-bold text-xl text-center">{{ $t(hist.title) }}</p>
                        <div class="relative h-[89px] rounded-lg w-1 bg-secondary">
                            <div class="absolute top-4 rounded-full size-5 bg-secondary left-1/2 -translate-x-1/2">
                            </div>
                        </div>
                        <p class="text-paragraph font-medium text-base text-center">{{ $t(hist.description) }}</p>
                    </div>
                </div>
            </div>
            <div class="Mobile lg:hidden flex flex-col items-center justify-center">
                <h1 class="text-primary font-bold text-3xl md:text-4xl lg:text-5xl mt-[60px] text-center">1978</h1>
                <div class="w-full mt-12 relative">

                    <div class="flex sm:justify-center  items-center relative py-6 " v-for="(hist, index) in History">
                        <div :class="index === 0 ? '' : 'hidden'"
                            class="absolute -top-8 sm:-top-4 max-sm:-right-[30px] sm:left-1/2 -translate-x-1/2 size-8 bg-white rotate-45 border-[4px] border-secondary z-20">
                        </div>
                        <div :class="index === 0 ? '' : 'hidden'"
                            class="absolute -top-6 sm:-top-2 max-sm:-right-[14px] sm:left-1/2 -translate-x-1/2 size-[16px] bg-white rotate-45 border-[4px] border-t-transparent border-l-transparent border-secondary z-[21]">
                        </div>
                        <div
                            class="absolute top-0 bg-secondary h-full w-1 max-sm:right-0 sm:left-1/2 sm:-translate-x-1/2 ">
                        </div>
                        <div
                            class="absolute max-sm:top-10 sm:top-1/2 rounded-full size-5 bg-secondary max-sm:-right-2 sm:left-1/2  sm:-translate-x-1/2 -translate-y-1/2">
                        </div>
                        <p class="hidden sm:block text-Text font-bold text-xl text-center sm:min-w-[250px]"> {{
                            $t(hist.title) }}</p>
                        <div class="sm:min-w-[120px]"></div>
                        <div class="max-sm:pr-12">
                            <p class="sm:hidden text-Text font-bold text-xl sm:text-center sm:min-w-[250px] mb-4">
                                {{ $t(hist.title) }}</p>
                            <p
                                class="text-paragraph font-medium text-base sm:text-center max-sm:w-full sm:max-w-[250px] sm:min-w-[250px] ">
                                {{ $t(hist.description) }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<script setup lang="ts">

const History = [
    {
        title: "about.history.one.title",
        description: "about.history.one.paragraph"
    },
    {
        title: "about.history.two.title",
        description: "about.history.two.paragraph"
    },
    {
        title: "about.history.three.title",
        description: "about.history.three.paragraph"
    },
    {
        title: "about.history.four.title",
        description: "about.history.four.paragraph"
    },
]


</script>

<style scoped></style>
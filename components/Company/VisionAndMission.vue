<template>
    <section class="VisionAndMission">

        <div class="max-w-[1087px] mx-auto max-xl:px-6">
            <TitleSection title="about.visionAndMission.title" />

            <div class="flex max-md:flex-col justify-center">
                <div class="max-md:border-none border-t py-8 lg:py-14 md:px-6 border-primary relative"
                    :class="locale === 'ar' ? ' border-l ' : ' border-r '">
                    <div class="absolute -top-7  max-md:hidden"
                        :class="locale === 'ar' ? '-right-5' : '-left-5 rotate-180'">
                        <img src="~/assets/img/Utils/misionShap.svg" alt="misionShap.svg">
                    </div>

                    <div class="px-2 md:px-6 lg:px-10">
                        <h1 class="text-2xl lg:text-3xl font-medium text-Text mb-4"> {{
                            $t("about.visionAndMission.vision.title") }}
                        </h1>
                        <p class="text-lg lg:text-xl font-medium text-paragraph w-full md:max-w-[368px]">

                            {{ $t("about.visionAndMission.vision.paragraph") }}
                        </p>
                    </div>
                </div>
                <div class="max-md:border-t md:border-b  py-8 lg:py-14 md:px-6 border-primary relative"
                    :class="locale === 'ar' ? '' : ''">
                    <div class="absolute -top-7  md:hidden"
                        :class="locale === 'ar' ? '-left-5 ' : ' -right-5 rotate-180'">
                        <img src="~/assets/img/Utils/misionShap.svg" alt="misionShap.svg" class="rotate-180">
                    </div>
                    <div class="size-4 rounded-full bg-primary absolute max-md:-top-2  md:-bottom-2"
                        :class="locale === 'ar' ? '  max-md:right-0 md:left-0 ' : ' max-md:left-0 md:right-0'">
                    </div>
                    <div class="px-2 md:px-6 lg:px-10">
                        <h1 class="text-2xl lg:text-3xl font-medium text-Text mb-4">{{
                            $t("about.visionAndMission.mission.title") }}</h1>
                        <p class="text-lg lg:text-xl font-medium text-paragraph w-full md:max-w-[368px]">
                            {{
                                $t("about.visionAndMission.mission.paragraph") }}

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
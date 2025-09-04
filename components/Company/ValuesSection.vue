<template>
    <section class="ValuesSection max-xl:px-6">
        <div class="max-w-[1392px] mx-auto">
            <TitleSection title="about.values.title" />
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-secondary gap-[1.5px]">
                <div class="item px-4 md:px-6 py-8 md:py-14 lg:py-[74px] bg-white" v-for="value in ValuesSection">
                    <h1 class="text-2xl lg:text-3xl font-medium text-Text mb-4">{{ $t(value.title) }}</h1>
                    <p class="text-lg lg:text-xl font-medium text-paragraph w-full md:max-w-[384px]">{{
                        $t(value.paragraph) }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

const ValuesSection = [
    {
        title: "about.values.one.title",
        paragraph: "about.values.one.paragraph"
    },
    {
        title: "about.values.two.title",
        paragraph: "about.values.two.paragraph"
    },
    {
        title: "about.values.three.title",
        paragraph: "about.values.three.paragraph"
    },
    {
        title: "about.values.four.title",
        paragraph: "about.values.four.paragraph"
    },
    {
        title: "about.values.five.title",
        paragraph: "about.values.five.paragraph"
    },
    {
        title: "about.values.six.title",
        paragraph: "about.values.six.paragraph"
    },
];

</script>

<style scoped></style>
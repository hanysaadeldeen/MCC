<template>
    <section class="terms relative " :dir="locale === 'ar' ? 'rtl' : 'ltr'">
        <HeroSection title="الشروط والأحكام لشركة MCC"
            description="يرجى قراءة هذه الشروط والأحكام بعناية قبل استخدام موقعنا الإلكتروني. يعتبر استخدامك للموقع موافقة منك على الالتزام بهذه الشروط." />

        <div class="relative z-20 max-w-[1392px] mx-auto">
            <div class="relative container max-sm:px-4 mx-auto px-2">
                <div class="terms-page flex justify-between" :key="locale">
                    <main class="content lg:max-w-[624px]" :class="locale === 'ar'
                        ? 'lg:ml-32 lg:p-4 flex-1'
                        : 'lg:mr-32 lg:p-4 flex-1'
                        ">
                        <div v-for="(section, index) in sections" :id="section.id" :key="section.id"
                            class="mb-16 lg:mb-24">
                            <h2 class="text-xl  font-medium mb-4 text-Text">
                                {{ $t(section.title) }}
                            </h2>
                            <p v-if="section.description" class="mb-8 font-normal text-base md:text-lg text-TextD3">
                                {{ $t(section.description) }}
                            </p>
                            <ul v-if="section.content">
                                <li v-for="(bullet, index) in section.content" :key="index"
                                    class="lista px-5   mb-1 relative font-normal text-base md:text-lg text-TextD3"
                                    :class="locale === 'en' ? 'before:left-0' : 'before:right-0'">
                                    {{ $t(bullet) }}
                                </li>
                            </ul>
                        </div>
                    </main>
                    <nav class="hidden lg:block table-of-contents sticky top-0 bottom-0"
                        :class="locale === 'en' ? 'right-0' : 'left-0'">
                        <h3 class="text-xl font-medium mb-4 text-Text">
                            {{ locale === "ar" ? "جدول المحتوي" : "Table of Contents" }}</h3>
                        <ul>
                            <li v-for="(section, index) in sections" :key="index">
                                <p class="block py-2 px-4" :class="locale === 'en' ? 'text-left' : 'text-right'"
                                    @click="scrollToSection(section.id)">
                                    {{ $t(section.title) }}
                                </p>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>

    </section>


</template>

<script setup>
const { locale } = useI18n();
// import AOS from "aos";
// import "aos/dist/aos.css";
// onMounted(() => {
//     AOS.init({
//         duration: 600,
//         once: false,
//     })
// })
const sections = [

    {
        id: "Information-We-Collect",
        title: "terms.sectionOne.title",
        description: "terms.sectionOne.description",

    },
    {
        id: "how-we-use-the-data",
        title: "terms.sectionTwo.title",
        description: "terms.sectionTwo.description",

    },
    {
        id: "data-protection",
        title: "terms.sectionThree.title",
        description: "terms.sectionThree.description"
    },
    {
        id: "data-sharing",
        title: "terms.sectionFour.title",
        description: "terms.sectionFour.description",

    },
    {
        id: "cookies-now",
        title: "terms.sectionFive.title",
        description: "terms.sectionFive.description",

    },

];

const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
};
</script>
<style scoped>
.startSection2 {
    height: calc(75vh - 112px);
}

@media (max-width: 1024px) {
    .startSection2 {
        height: calc(75vh - 72px);
    }
}

@media (max-width: 768px) {
    section {
        margin-bottom: 80px;
    }
}

.table-of-contents {
    width: 424px;
    padding: 1rem;
    height: fit-content;
}

.table-of-contents h3 {
    margin-bottom: 1rem;
    line-height: 1.5;
}

.table-of-contents p {
    display: block;
    width: 100%;
    padding: 0.5rem 0.75rem;
    border: none;
    background-color: transparent;
    color: #666666;
    cursor: pointer;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    transition: all 0.1s ease-in-out;
}

.table-of-contents p:hover {
    color: #121212;
}

.content {
    flex-grow: 1;
}


.lista::before {
    content: "•";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: #666666;
    font-size: 1rem;
    font-weight: bold;
}
</style>
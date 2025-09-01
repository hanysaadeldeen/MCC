<template>
    <section class="ValuesSection max-xl:px-6">
        <div class="max-w-[1392px] mx-auto">
            <TitleSection title="قيمنا.. أساس نمونا المستدام" />
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-secondary gap-[1px]">
                <div class="item px-4 md:px-6 py-8 md:py-14 lg:py-[74px] bg-white" v-for="value in ValuesSection">
                    <h1 class="text-2xl lg:text-3xl font-medium text-Text mb-4">{{ value.title }}</h1>
                    <p class="text-lg lg:text-xl font-medium text-paragraph w-full md:max-w-[384px]">{{ value.paragraph
                    }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

const ValuesSection = [
    {
        title: "النزاهة",
        paragraph: "النزاهة هي حجر الأساس في جميع أعمالنا. نلتزم بالصدق والشفافية التامة في كافة التعاملات والاتفاقيات."
    },
    {
        title: "الجودة",
        paragraph: "نحن نسعى باستمرار إلى تلبية احتياجات عملائنا بأعلى المعايير الممكنة. نؤمن بأن الجودة هي أساس عملنا."
    },
    {
        title: "الموثوقية",
        paragraph: "نحن نلتزم بتوفير فرق عمل محترفة، ومتنوعة، ومدربة تدريباً عالياً، لضمان تقديم خدمة موثوقة ومستقرة في كافة مراحل المشاريع."
    },
    {
        title: "الكفاءة",
        paragraph: "نحن نقدر قيمة الوقت، ولذلك نلتزم بتقديم خدماتنا ضمن الإطار الزمني المحدد ونضمن سرعة ودقة التسليم."
    },
    {
        title: "التعاون",
        paragraph: "نؤمن بأن الاحترام المتبادل وتشجيع التواصل المفتوح هما أساس النجاح. نعمل بروح الفريق الواحد، ونبني علاقات قوية مع عملائنا وشركائنا."
    },
    {
        title: "المساعدة",
        paragraph: "نحن نتحمل مسؤولية كاملة عن جودة نتائج خدماتنا. هدفنا هو إتقان العمل وتحقيق أفضل النتائج الممكنة."
    }
];

</script>

<style scoped></style>
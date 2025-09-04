<template>

    <main class="Contact " :dir="locale === 'ar' ? 'rtl' : 'ltr'">
        <HeroSection title="contact.heroSection.title" description="contact.heroSection.paragraph" />

        <section class="formSection max-w-[1392px] mx-auto max-2xl:px-6">
            <div class="mt-[128px] flex flex-row-reverse max-md:flex-col items-start  justify-end w-full  gap-6">
                <div class=" flex flex-col w-full  flex-1  ">

                    <div class="hidden md:grid grid-cols-1 xl:grid-cols-2  gap-6 md:gap-8 ">

                        <div class="email flex flex-col  bg-white shadow-md p-6 lg-p-8  xl:p-10 rounded-2xl ">

                            <p class="text-xl font-medium mb-5 text-Text">
                                {{
                                    locale === 'ar' ? 'البريد الإلكتروني' : 'Email' }}

                            </p>
                            <p
                                class="text-secondParagraph text-lg  cursor-pointer duration-200 ease-in-out text-paragraph">
                                <a href="https://mail.google.com/mail/?view=cm&to=hammouri@mcc.com.sa"
                                    target="_blank">hammouri@mcc.com.sa</a>
                            </p>
                        </div>
                        <div class="whatsapp flex flex-col  bg-white shadow-md p-6 lg-p-8  xl:p-10 rounded-2xl ">
                            <p class="text-xl font-medium mb-5 text-Text">

                                {{
                                    locale === 'ar' ? 'الهاتف' : 'phone' }}
                            </p>
                            <p class="text-secondParagraph text-lg ">
                                <a href="https://wa.me/966502904556" target="_blank"
                                    class="cursor-pointer duration-200 ease-in-out text-paragraph">
                                    +966126675141
                                </a>
                            </p>
                        </div>
                        <div class="flex flex-col  bg-white shadow-md p-6 lg-p-8  xl:p-10 rounded-2xl">
                            <p class="text-xl font-medium mb-5 text-Text">

                                {{
                                    locale === 'ar' ? 'مواقع التواصل الإجتماعي' : 'social media sites' }}
                            </p>
                            <div class="flex flex-wrap gap-3 md:gap-4">
                                <div class="flex h-10 w-10 items-center justify-center rounded-full border border-[#7B7B7B] group cursor-pointer hover:border-[#474747] transition-all duration-200 ease-in-out "
                                    v-for="social in SocialMedia" :key="social.id">
                                    <a :href="social.link" target="_blank" rel="noopener noreferrer" class="text-base "
                                        :aria-label="`Visit our ${social.socialName} page`">
                                        <i class="fa-brands  text-[#7B7B7B] group-hover:text-[#474747] duration-200 ease-in-out transition-all text-lg"
                                            :class="social.icon"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="posta flex flex-col  bg-white shadow-md p-6 lg-p-8  xl:p-10 rounded-2xl">
                            <p class="text-xl font-medium mb-5 text-Text">
                                {{
                                    locale === 'ar' ? 'البريد' : 'mail' }}
                            </p>
                            <p class="text-lg font-medium text-paragraph ">


                                {{ locale === 'ar' ? 'ص.ب' : 'P.O. Box' }}

                                :7613</p>
                            <p class="text-lg font-medium  text-paragraph ">

                                {{ locale === 'ar' ? 'الرمز البريدي' : 'zip code' }}

                                :21472</p>
                        </div>
                    </div>
                </div>
                <div
                    class=" relative shadow-md glassFromContact w-full md:max-w-[448px] rounded-2xl px-6 py-12 md:p-14 lg:px-12 lg:py-16 max-md:mb-16 lg:max-w-[664px] ">
                    <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors }"
                        class="w-full lg:max-w-[640px]">
                        <div class="flex max-lg:flex-col w-full gap-4 lg:gap-8 mb-8">
                            <div class="flex flex-col w-full lg:max-w-[304px]">
                                <label for="FirstName"
                                    class="text-secondParagraph  w-fit font-normal text-sm mb-2 cursor-pointer inline-block">
                                    {{ locale === "ar" ? "الإسم الأول" : "First Name" }}
                                </label>
                                <Field id="FirstName" name="FirstName" type="text" :placeholder="locale === 'en'
                                    ? 'Enter your first name'
                                    : 'أدخل اسمك الأول'
                                    "
                                    class="inputBack py-2 md:py-3 px-2.5 md:px-4 h-[48px] w-full border  focus:outline-none focus:ring-2 focus:ring-primary-main"
                                    :class="{ '!border-red-500': errors.FirstName }" />
                                <span class="text-red-500 text-sm">{{
                                    errors.FirstName
                                    }}</span>
                            </div>
                            <div class="flex flex-col w-full lg:max-w-[304px]">
                                <label for="LastName"
                                    class="text-secondParagraph  w-fit font-normal text-sm mb-2 cursor-pointer inline-block">
                                    {{ locale === "ar" ? "الإسم الأخير " : "Last Name" }}
                                </label>
                                <Field id="LastName" name="LastName" type="text" :placeholder="locale === 'en'
                                    ? 'Enter your last name'
                                    : 'أدخل اسمك الأخير'
                                    "
                                    class="inputBack py-2 md:py-3 px-2.5 md:px-4 h-[48px] w-full border  focus:outline-none focus:ring-2 focus:ring-primary-main"
                                    :class="{ '!border-red-500': errors.LastName }" />
                                <span class="text-red-500 text-sm">{{
                                    errors.LastName
                                    }}</span>
                            </div>
                        </div>
                        <div class="flex max-lg:flex-col gap-4 lg:gap-8 mb-4 lg:mb-8">
                            <div class="flex flex-col w-full lg:max-w-[304px]">
                                <label for="phoneNumber"
                                    class="text-secondParagraph  w-fit font-normal text-sm mb-2 cursor-pointer inline-block">
                                    {{ locale === "ar" ? "رقم الهاتف" : "Phone Number" }}
                                </label>
                                <Field id="phoneNumber" name="phoneNumber" type="text" :placeholder="locale === 'en'
                                    ? 'e.g. +9665xxxxxxx'
                                    : 'أدخل رقم الهاتف '
                                    "
                                    class="inputBack py-2 md:py-3 px-2.5 md:px-4 h-[48px] w-full border  focus:outline-none focus:ring-2 focus:ring-primary-main"
                                    :class="{ '!border-red-500': errors.phoneNumber }" />
                                <span class="text-red-500 text-sm">{{
                                    errors.phoneNumber
                                    }}</span>
                            </div>
                            <div class="flex flex-col w-full lg:max-w-[304px]">
                                <label for="email"
                                    class="text-secondParagraph  w-fit font-normal text-sm mb-2 cursor-pointer inline-block">
                                    {{
                                        locale === "ar" ? "عنوان البريد الإلكتروني" : "e.g. name@gmail.com"
                                    }}
                                </label>
                                <Field id="email" name="email" type="email" :placeholder="locale === 'en'
                                    ? 'Enter your Email Address'
                                    : 'أدخل عنوان بريدك الإلكتروني'
                                    "
                                    class="inputBack py-2 md:py-3 px-2.5 md:px-4 h-[48px] w-full border  focus:outline-none focus:ring-2 focus:ring-primary-main"
                                    :class="{ '!border-red-500': errors.email }" />
                                <span class="text-red-500 text-sm">{{ errors.email }}</span>
                            </div>
                        </div>
                        <div class="flex flex-col w-full lg:max-w-[640px]">
                            <label for="message"
                                class="text-secondParagraph  w-fit font-normal text-sm mb-2 cursor-pointer inline-block">
                                {{ locale === "ar" ? "الرسالة" : "Message" }}
                            </label>
                            <Field id="message" name="message" as="textarea" :placeholder="locale === 'en'
                                ? 'Leave us a message...'
                                : 'اكتب رسالتك هنا'
                                "
                                class="  inputBack p-4 w-full h-32 md:h-[240px] border rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-primary-main"
                                :class="{ '!border-red-500': errors.message }" />
                            <span class="text-red-500 text-sm">{{ errors.message }}</span>
                        </div>
                        <Button type="submit" class="mt-8 sm:px-24 max-sm:w-full" title="contact.heroSection.btn" />
                    </Form>
                </div>
            </div>
            <div class="MobileScreen md:hidden flex flex-col gap-6 md:gap-8">
                <div class="email flex flex-col  bg-white shadow-md p-6 lg-p-8  xl:p-10 rounded-2xl ">
                    <p class="text-xl font-medium mb-5 text-Text">
                        {{
                            locale === 'ar' ? 'البريد الإلكتروني' : 'Email' }}
                    </p>
                    <p
                        class="text-secondParagraph text-lg md:text-base cursor-pointer duration-200 ease-in-out text-paragraph">
                        <a href="https://mail.google.com/mail/?view=cm&to=hammouri@mcc.com.sa"
                            target="_blank">hammouri@mcc.com.sa</a>
                    </p>
                </div>
                <div class="whatsapp flex flex-col  bg-white shadow-md p-6 lg-p-8  xl:p-10 rounded-2xl ">
                    <p class="text-xl font-medium mb-5 text-Text">

                        {{
                            locale === 'ar' ? 'الهاتف' : 'phone' }}
                    </p>
                    <p class="text-secondParagraph text-lg md:text-base">
                        <a href="https://wa.me/966502904556" target="_blank"
                            class="cursor-pointer duration-200 ease-in-out text-paragraph">
                            +966126675141
                        </a>
                    </p>
                </div>
                <div class="flex flex-col  bg-white shadow-md p-6 lg-p-8  xl:p-10 rounded-2xl">
                    <p class="text-xl font-medium mb-5 text-Text">

                        {{
                            locale === 'ar' ? 'مواقع التواصل الإجتماعي' : 'social media sites' }}

                    </p>
                    <div class="flex flex-wrap gap-3 md:gap-4">
                        <div class="flex h-10 w-10 items-center justify-center rounded-full border border-[#7B7B7B] group cursor-pointer hover:border-[#474747] transition-all duration-200 ease-in-out "
                            v-for="social in SocialMedia" :key="social.id">
                            <a :href="social.link" target="_blank" rel="noopener noreferrer" class="text-base "
                                :aria-label="`Visit our ${social.socialName} page`">
                                <i class="fa-brands  text-[#7B7B7B] group-hover:text-[#474747] duration-200 ease-in-out transition-all text-lg"
                                    :class="social.icon"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="posta flex flex-col  bg-white shadow-md p-6 lg-p-8  xl:p-10 rounded-2xl">
                    <p class="text-xl font-medium mb-5 text-Text "> {{
                        locale === 'ar' ? 'البريد' : 'mail' }}</p>
                    <p class="text-lg font-medium  text-paragraph ">


                        {{ locale === 'ar' ? 'ص.ب' : 'P.O. Box' }}

                        :7613

                    </p>
                    <p class="text-lg font-medium  text-paragraph ">

                        {{ locale === 'ar' ? 'الرمز البريدي' : 'zip code' }}

                        :21472
                    </p>
                </div>
            </div>
        </section>

        <section class="mapSection max-w-[995px] mx-auto max-2xl:px-6">


            <TitleSection title="contact.map" />
            <div>
                <img src="~/assets/img/Contact/map.svg" alt="map" class="max-lg:w-full" loading="lazy" width="995"
                    height="976">
            </div>

        </section>
    </main>
</template>

<script setup lang="ts">
// import AOS from "aos";
// import "aos/dist/aos.css";
// onMounted(() => {
//     AOS.init({
//         duration: 600,
//         once: false,
//     })
// })
import { Form, Field } from "vee-validate";
import * as yup from "yup";
import TitleSection from "~/components/Utils/TitleSection.vue";
const { locale } = useI18n();
const isOpenSuccess = ref(false);
const isLoading = ref(false);
const { sendEmail } = useEmail();

const schema = yup.object({
    FirstName: yup
        .string()
        .min(
            2,
            locale.value === "en"
                ? "First name must be at least 2 characters"
                : "يجب أن يكون الاسم الأول على الأقل 2 أحرف"
        )
        .required(
            locale.value === "en" ? "First name is required" : "الاسم الأول مطلوب"
        ),
    LastName: yup
        .string()
        .min(
            2,
            locale.value === "en"
                ? "Last name must be at least 2 characters"
                : "يجب أن يكون الاسم الأول على الأقل 2 أحرف"
        )
        .required(
            locale.value === "en" ? "Last Name  is required" : "الاسم الأخير مطلوب"
        ),
    email: yup
        .string()
        .email(
            locale.value === "en" ? "Invalid email" : "البريد الإلكتروني غير صالح"
        )
        .required(
            locale.value === "en" ? "Email is required" : "البريد الإلكتروني مطلوب"
        ),

    phoneNumber: yup
        .string()
        .matches(
            /^\+?[0-9]{10,}$/,
            locale.value === "en"
                ? "Number must be at least 10 digits"
                : "يجب أن يكون الرقم على الأقل 10 أرقام"
        )
        .required(
            locale.value === "en" ? "Phone number is required" : "رقم الهاتف مطلوب"
        ),

    message: yup
        .string()
        .min(
            10,
            locale.value === "en"
                ? "Message must be at least 10 characters"
                : "يجب أن تحتوي الرسالة على 10 أحرف على الأقل"
        )
        .max(
            500,
            locale.value === "en"
                ? "Message cannot exceed 500 characters"
                : "يجب ألا تتجاوز الرسالة 500 حرف"
        )
        .required(locale.value === "en" ? "Message is required" : "الرسالة مطلوبة"),
});



const SocialMedia = [
    {
        id: 1,
        icon: '<i class="fa-brands fa-instagram text-[#CCCCCC]"></i>',
        socialName: "Instagram",
        link: "#",
    },
    // {
    //     id: 2,
    //     icon: '<i class="fa-brands fa-snapchat text-[#CCCCCC]"></i>',
    //     socialName: "snapchat",
    //     link: "https://www.snapchat.com/in/do-sa-b3682a362/",
    // },
    // {
    //     id: 3,
    //     icon: '<i class="fa-brands fa-whatsapp text-[#CCCCCC]"></i>',
    //     socialName: "whatsapp",
    //     link: "https://wa.me/966502904556",
    // },
    // {
    //     id: 4,
    //     icon: '<i class="fa-brands fa-tiktok text-[#CCCCCC]"></i>',
    //     socialName: "tiktok",
    //     link: "https://",
    // },
];
const onSubmit = async (values: any) => {
    try {
        isLoading.value = true;
        // const response = await sendEmail(values);
        isLoading.value = false;
    } catch (error) {
        isLoading.value = false;
        isOpenSuccess.value = true;
    }
}




</script>

<style scoped>
.glassFromContact {
    background: white;
}

/* 
.overlay {
    background: linear-gradient(to right, #D5F0F6, #EFF5D6);
    filter: blur(70px);
} */

.inputBack {
    background-color: white;
    border: 1px solid;
    border-color: #D5D7DA;
    border-radius: 12px;
}
</style>
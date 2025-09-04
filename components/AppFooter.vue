<template>

    <footer class="relative bg-[#030B16] w-full rounded-t-2xl pt-14 md:pt-36 pb-14 overflow-hidden"
        :dir="locale === 'ar' ? 'rtl' : 'ltr'">
        <div class="absolute left-14 max-lg:top-0 bottom-0 z-10 lg:h-full ">
            <img src="~/assets/img/Utils/footerPattern.svg" class="lg:object-fill lg:h-full" alt="footerPattern">
        </div>
        <div class="absolute right-14 bottom-0 z-10 lg:h-full">
            <img src="~/assets/img/Utils/footerPattern.svg" class="lg:object-fill lg:h-full" alt="footerPattern">
        </div>
        <div
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between gap-6 md:gap-10 lg:gap-20 max-w-[1392px] mx-auto pb-14 md:pb-[72px] max-2xl:px-6 relative z-[25]">
            <div class="md:col-span-3 lg:col-span-1">
                <nuxt-link :to="localePath('index')" class="block relative ">
                    <img src="~/assets/img/Utils/LogoW.svg" class="h-12 relative " alt="mcc" height="48px" width="260"
                        loading="eager" fetchpriority="high" />
                </nuxt-link>
                <p class="mt-4 font-medium text-lg text-[#CCCCCC] mb-6">الجودة التي تعتمد عليها، الحلول التي تحتاجها.
                </p>
                <nuxt-link class="w-fit  block " to="/contactUs">
                    <Button title="تواصل معنا" />
                </nuxt-link>
            </div>
            <div>
                <nav>
                    <ul>
                        <li class="pt-0" :class="adjustedPath === '/products' ? 'active' : ''">

                            <nuxt-link :to="localePath('/products')">
                                المنتجات
                            </nuxt-link>
                        </li>
                        <li :class="adjustedPath === '/suppliers' ? 'active' : ''">
                            <nuxt-link :to="localePath('/suppliers')">
                                الموردين
                            </nuxt-link>
                        </li>
                        <li :class="adjustedPath === '/projects' ? 'active' : ''">
                            <nuxt-link :to="localePath('/projects')">
                                العملاء
                                والمشاريع
                            </nuxt-link>
                        </li>
                        <li :class="adjustedPath === '/company' ? 'active' : ''">
                            <nuxt-link :to="localePath('/company')">
                                الشركة
                            </nuxt-link>
                        </li>
                        <li class="pb-0 " :class="adjustedPath === '/' ? 'active' : ''">
                            <nuxt-link :to="localePath('/')">
                                الرئيسية
                            </nuxt-link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div>
                <nav>
                    <ul>
                        <li class="pt-0 " :class="adjustedPath === '/contactUs' ? 'active' : ''">
                            <nuxt-link :to="localePath('/contactUs')">
                                تواصل معنا
                            </nuxt-link>
                        </li>
                        <li :class="adjustedPath === '/privacy' ? 'active' : ''">
                            <nuxt-link :to="localePath('/privacy')">
                                سياسة
                                الخصوصية
                            </nuxt-link>
                        </li>
                        <li class="pb-0 " :class="adjustedPath === '/terms' ? 'active' : ''">
                            <nuxt-link :to="localePath('/terms')">
                                الشروط
                                والأحكام
                            </nuxt-link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div>
                <nav>
                    <ul>
                        <li class="pt-0 flex items-center gap-4 group">
                            <i
                                class="fa-solid fa-location-dot text-[#999999] group-hover:text-white transition-all duration-300 ease-linear"></i>
                            <span>
                                الفرع الرئيسي بجدة - شارع البلدية
                            </span>
                        </li>
                        <li class="flex items-center gap-4 group">
                            <i
                                class="fa-solid fa-location-dot text-[#999999] group-hover:text-white transition-all duration-300 ease-linear"></i>
                            <span>فرع الرياض - حي الياسمين - شارع أنس بن مالك - مبنى 25 سكوير</span>
                        </li>
                        <li class="pb-0 flex items-center gap-4 group">
                            <i
                                class="fa-solid fa-location-dot text-[#999999] group-hover:text-white transition-all duration-300 ease-linear"></i>
                            <span>
                                فرع الخبر الشمالية - شارع الأمير ناصر بن عبد العزيز
                            </span>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <h1 class="px-4 text-center text-sm font-normal text-[#999999]">
            جميع الحقوق محفوظه ٢٠٢٥ MCC. تصميم وتنفيذ <a href="https://do.com.sa/" target="_blank"
                class="text-white">DO</a> ©
        </h1>
    </footer>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
const { locale } = useI18n()

const route = useRoute();

const getPathWithoutLocale = (path: string) => {
    const segments = path.split("/");
    if (segments[1] && segments[1].length === 2) {
        return `/${segments.slice(2).join("/")}`;
    }
    return path;
};

const adjustedPath = computed(() => getPathWithoutLocale(route.path));

</script>

<style scoped>
nav ul li {
    @apply text-[#999999] text-base font-medium py-4 border-b w-full hover:text-white transition-all ease-in-out duration-300 cursor-pointer hover:border-white
}

nav ul li {
    border-color: rgba(255, 255, 255, 0.2);
}

nav ul li.active {
    color: #F4B300;
}
</style>
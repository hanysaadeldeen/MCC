<template>

    <footer class="relative bg-black w-full rounded-t-2xl pt-36" :dir="locale === 'ar' ? 'rtl' : 'ltr'">
        <div class="grid grid-cols-4 justify-between gap-20 max-w-[1392px] mx-auto">
            <div>
                <nuxt-link :to="localePath('index')" class="block relative ">
                    <img src="~/assets/img/Utils/LogoW.svg" class="h-12 relative " alt="mcc" height="48px" width="260"
                        loading="eager" fetchpriority="high" />
                </nuxt-link>
                <p class="mt-4 font-medium text-lg text-[#CCCCCC]">الجودة التي تعتمد عليها، الحلول التي تحتاجها.</p>
                <nuxt-link class="w-fit max-md:mx-auto block " to="/">
                    <Button title="تواصل معنا" />
                </nuxt-link>
            </div>
            <div>
                <nav>
                    <ul>
                        <li class="text-[#999999] text-base font-medium pb-4 border-b border-[#999999] w-full">المنتجات
                        </li>
                        <li class="text-[#999999] text-base font-medium pb-4 border-b border-[#999999] w-full">الموردين
                        </li>
                        <li class="text-[#999999] text-base font-medium pb-4 border-b border-[#999999] w-full">العملاء
                            والمشاريع
                        </li>
                        <li class="text-[#999999] text-base font-medium pb-4 border-b border-[#999999] w-full">الشركة
                        </li>
                        <li class="text-[#999999] text-base font-medium pb-4 border-b border-[#999999] w-full">الرئيسية
                        </li>
                    </ul>
                </nav>
            </div>
            <div>
                <nav>
                    <ul>
                        <li class="text-[#999999] text-base font-medium pb-4 border-b border-[#999999] w-full">تواصل
                            معنا
                        </li>
                        <li class="text-[#999999] text-base font-medium pb-4 border-b border-[#999999] w-full">سياسة
                            الخصوصية
                        </li>
                        <li class="text-[#999999] text-base font-medium pb-4 border-b border-[#999999] w-full">الشروط
                            والأحكام
                        </li>
                    </ul>
                </nav>
            </div>
        </div>



    </footer>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
const { locale } = useI18n()


</script>

<style scoped></style>
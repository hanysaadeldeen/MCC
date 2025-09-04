<template>

  <footer class="relative bg-[#030B16] w-full rounded-t-2xl pt-14 md:pt-36 pb-14 overflow-hidden"
    :dir="locale === 'ar' ? 'rtl' : 'ltr'">
    <div class="max-md:hidden absolute left-14 max-lg:top-0 bottom-0 z-10 lg:h-full ">
      <img src="~/assets/img/Utils/footerPattern.svg" class="lg:object-fill lg:h-full" alt="footerPattern">
    </div>
    <div class="max-md:hidden absolute right-14 bottom-0 z-10 lg:h-full">
      <img src="~/assets/img/Utils/footerPattern.svg" class="lg:object-fill lg:h-full" alt="footerPattern">
    </div>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between gap-6 md:gap-10 lg:gap-20 max-w-[1392px] mx-auto pb-14 md:pb-[72px] max-2xl:px-6 relative z-[25]">
      <div class="md:col-span-3 lg:col-span-1">
        <nuxt-link :to="localePath('index')" class="block relative ">
          <img src="~/assets/img/Utils/LogoW.svg" class="h-12 relative " alt="mcc" height="48px" width="260"
            loading="eager" fetchpriority="high" />
        </nuxt-link>
        <p class="mt-4 font-medium text-lg text-[#CCCCCC] mb-6 max-w-[220px]">


          {{
            locale === 'ar' ?
              'الجودة التي تعتمد عليها، الحلول التي تحتاجها.' :
              "Quality You Can Rely On, Solutions You Need" }}

        </p>
        <nuxt-link class="w-fit  block " to="/contactUs">
          <Button title="header.contact" />
        </nuxt-link>
      </div>
      <div>
        <nav>
          <ul>
            <li class="pt-0" :class="adjustedPath === '/products' ? 'active' : ''">
              <nuxt-link :to="localePath('/products')">
                {{ $t("header.products") }}

              </nuxt-link>
            </li>
            <li :class="adjustedPath === '/suppliers' ? 'active' : ''">
              <nuxt-link :to="localePath('/suppliers')">
                {{ $t("header.suppliers") }}
              </nuxt-link>
            </li>
            <li :class="adjustedPath === '/projects' ? 'active' : ''">
              <nuxt-link :to="localePath('/projects')">
                {{ $t("header.projects") }}
              </nuxt-link>
            </li>
            <li :class="adjustedPath === '/company' ? 'active' : ''">
              <nuxt-link :to="localePath('/company')">
                {{ $t("header.about") }}
              </nuxt-link>
            </li>
            <li class="pb-0 border-none" :class="adjustedPath === '/' ? 'active' : ''">
              <nuxt-link :to="localePath('/')">
                {{ $t("header.home") }}
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
                {{ $t("header.contact") }}
              </nuxt-link>
            </li>
            <li :class="adjustedPath === '/privacy' ? 'active' : ''">
              <nuxt-link :to="localePath('/privacy')">
                {{ $t("header.privacy") }}

              </nuxt-link>
            </li>
            <li class="pb-0 border-none" :class="adjustedPath === '/terms' ? 'active' : ''">
              <nuxt-link :to="localePath('/terms')">
                {{ $t("header.terms") }}

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

                {{

                  locale === 'ar' ? ' الفرع الرئيسي بجدة - شارع البلدية' : 'Main branch in Jeddah - Al-Baladiya Street'
                }}

              </span>
            </li>
            <li class="flex items-center gap-4 group">
              <i
                class="fa-solid fa-location-dot text-[#999999] group-hover:text-white transition-all duration-300 ease-linear"></i>
              <span>
                {{ locale === 'ar' ?
                  'فرع الرياض - حي الياسمين - شارع أنس بن مالك - مبنى 25 سكوير' :
                  'Riyadh Branch - Al - Yasmin District - Anas Bin Malik Street - Building 25 Square' }}
              </span>
            </li>
            <li class="pb-0 flex items-center gap-4 group border-none">
              <i
                class="fa-solid fa-location-dot text-[#999999] group-hover:text-white transition-all duration-300 ease-linear"></i>
              <span>
                {{
                  locale === 'ar' ?
                    ' فرع الخبر الشمالية - شارع الأمير ناصر بن عبد العزيز' :
                    'Northern Khobar Branch - Prince Nasser bin Abdulaziz Street' }}
              </span>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <h1 class="px-4 text-center text-sm font-normal text-[#999999]">

      {{ locale === 'ar' ?
        'All rights reserved 2025 MCC. Designed and implemented by' :
        'جميع الحقوق محفوظه ٢٠٢٥ MCC. تصميم وتنفيذ ' }}
      <a href="https://do.com.sa/" target="_blank" class="text-white">DO</a> ©
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
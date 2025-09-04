// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: ["nuxt-lucide-icons", "@nuxtjs/i18n"],
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  i18n: {
    defaultLocale: "en",
    strategy: "prefix_except_default",
    locales: [
      { code: "en", name: "English", file: "en.json" },
      { code: "ar", name: "Arabic", file: "ar.json" },
    ],
    detectBrowserLanguage: false,
  },
  app: {
    head: {
      script: [],
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/LogoTap.svg",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css",
        },
      ],
      title: "MCC",
      meta: [
        {
          name: "description",
          content:
            "شركة التوريدات الميكانيكية والكيماوية (MCC). خبرة لأكثر من 45 عامًا في توريد مواد البناء والحلول الميكانيكية والكيماوية للمشاريع الكبرى في المملكة ودول الخليج.",
        },
      ],
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});

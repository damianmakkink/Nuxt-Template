// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    // https://nuxt.com/modules/pinia
    '@pinia/nuxt',
    // https://nuxt.com/modules/pinia-plugin-persistedstate
    '@pinia-plugin-persistedstate/nuxt',
    // https://nuxt.com/modules/i18n
    '@nuxtjs/i18n',
    // https://nuxt.com/modules/test-utils
    '@nuxt/test-utils/module',
    // https://nuxt.com/modules/eslint-module
    '@nuxt/eslint',
    // https://nuxt.com/modules/ui
    '@nuxt/ui',
    // https://nuxt.com/modules/fonts
    '@nuxt/fonts'
  ],
  runtimeConfig: {
    public: {
      firebaseApiKey: process.env.NUXT_PUBLIC_FIREBASE_API_KEY,
      firebaseAuthDomain: process.env.NUXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      firebaseProjectId: process.env.NUXT_PUBLIC_FIREBASE_PROJECT_ID,
      firebaseStorageBucket: process.env.NUXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      firebaseMessagingSenderId: process.env.NUXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
      firebaseAppId: process.env.NUXT_PUBLIC_FIREBASE_APP_ID,
      firebaseMeasurementId: process.env.NUXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
      algoliaAppId: process.env.NUXT_PUBLIC_ALGOLIA_APP_ID,
      algoliaApikey: process.env.NUXT_PUBLIC_ALGOLIA_API_KEY,
      algoliaIndexName: process.env.NUXT_PUBLIC_ALGOLIA_INDEX_NAME
    }
  },
  i18n: {
    locales: [
      'nl'
    ],
    defaultLocale: 'nl'
  },
  colorMode: {
    preference: 'light'
  }
})

export default {
  target: 'static',

  head: {
    title: 'nuxtjs-storybook-cypress-typescript-vite',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
  },

  components: true,

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
    'nuxt-vite',
    '@nuxtjs/composition-api/module',
    '@nuxt/image',
  ],

  image: {
    domains: ['https://images.unsplash.com'],
  },

  ignore: ['**/*.cy.*'],
}

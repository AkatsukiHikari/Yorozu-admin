export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '萬アドミン',
    htmlAttrs: {
      lang: 'jp'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-with, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  ssr: false,

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'iview/dist/styles/iview.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/iview',
    '@/plugins/tview',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/svg-sprite',
    '@nuxtjs/tailwindcss',
  ],

  svgSprite: {
    // manipulate module options
  },


  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    //https://www.npmjs.com/package/dotenv
    '@nuxtjs/dotenv',
    //https://i18n.nuxtjs.org/setup
    'nuxt-i18n',
  ],

  i18n:{
      locales:[{
          code: 'ja',
          name: '日本語'
      },{
        code: 'zh',
        name: '中文简体'
      }],

      defualtLocale: 'zh',
      vueI18n: {
        fallbackLocale: 'ja',
      },
      vueI18nLoader: true

  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
      proxy: true,
      retry: { retries: 3 },
  },

  proxy:{
    '/api/': {
        target: process.env.IS_SSL ? `https://${process.env.HOST}${process.env.REST_API}` : `http://${process.env.HOST}${process.env.REST_API}`,
        pathRewrite: {'^/api/': ''}
    },
  },


  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  
}

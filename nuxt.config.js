export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '~/plugins/vue-apexchart.js', ssr: false }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['nuxt-svg-loader', '@nuxtjs/axios', '@nuxtjs/auth-next'],

  router: {
    middleware: ['auth']
  },

  axios: {
    baseURL: 'http://127.0.0.1:3001'
  },

  auth: {
    redirect: {
      login: '/login',
      logout: '/',
      callback: '/login',
      home: '/'
    },
    strategies: {
      local: {
        user: {
          autoFetch: false
        },
        token: {
          property: 'token.accessToken'
        },
        endpoints: {
          login: {
            url: 'auth/login',
            method: 'post',
            propertyName: 'accessToken'
          },
          user: false,
          logout: false
        }
      }
    }
  },

  purgeCSS: {
    whitelist: ['hidden'],
    whitelistPatterns: [/md:w-[1-6]/]
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    vendor: ['vue-apexchart'],
    extend(config, ctx) {
      loaders: {
        file: {
          esModule: false
        }
      }
    }
  }
}

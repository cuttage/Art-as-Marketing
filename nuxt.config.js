import webpack from 'webpack'
import path from 'path'
import fs from 'fs'
const http2 = require('http2'); //remove to simulate https
//ATTENTION: If you don't want to use the modern build, in package.json replace: "build": "nuxt build", "start": "nuxt start", in nuxt.config.js eliminate: modern: true,
export default {
  mode: 'universal',
  env: {
    baseURL: (process.env.NODE_ENV === 'production' ? 'http://localhost:3000' : 'http://localhost:3000')
  },
  modern: true,
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, shrink-to-fit=no', id: 'viewport-meta' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  vue: {
    config: {
      silent: true
    }
  },
  server: {
    http2: { //change to https to simulate https
      key: fs.readFileSync(path.resolve(__dirname, 'server.key')),
      cert: fs.readFileSync(path.resolve(__dirname, 'server.crt'))
    }
  },
  router: {
    middleware: [
      'mobile',
      'pages'
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: false,
  /*
   ** Global CSS
   */
  css: [
    '~/assets/main.css',
    '@/assets/scss/mainpage.scss'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {
      src: '~/plugins/eventBus.js'
    },
    {
      src: '~/plugins/waapi',
      ssr: false
    },
    '~/plugins/axios',
    '~/plugins/vue-composition-api.js'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  /*
   ** Nuxt.js modules
   */
  buildModules: [
    '@aceforth/nuxt-optimized-images'
  ],
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    'nuxt-purgecss',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    [
      'nuxt-sass-resources-loader',
      [
        'assets/scss/file/_mainpage.scss'
      ]
    ],
    '@nuxtjs/axios',
    ['@nuxtjs/component-cache', {
      max: 10000,
      maxAge: 143340 / 3 //142590 seconds: 44530 * 3 = 133590 + 3 sec x 3 = 142590 // 45530 * 3 = 136590 + 3 sec x 3 = 145590 // 44780 * 3 = 134340 + 3 sec * 3 = 143340
    }]
  ],
  axios: {
    // proxyHeaders: false
  },
  pwa: {
    manifest: {
      theme_color: '#D25593'
    }
  },
  // Other nuxt.config.js
  styleResources: {
    scss: [
        'assets/scss/file/_mainpage.scss'
    ]
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.runtime.esm.js'
    }
  },
  purgeCSS: {
    mode: 'postcss'
  },
  optimizedImages: {
    optimizeImages: true
  },
  /*
   ** Build configuration
   */
  build: {
    babel: {
      cacheDirectory: true,
      presets({ isServer }) {
        return [
          [
            require.resolve('@nuxt/babel-preset-app'),
            // require.resolve('@nuxt/babel-preset-app-edge'), // For nuxt-edge users
            {
              buildTarget: isServer ? 'server' : 'client',
              corejs: { version: 3 },
              loose: true,
              shippedProposals: true
            }
          ]
        ]
      }
    },
    hardSource: false, /* When ready to build, turn true */
    terser: {
      terserOptions: {
        compress: {
          drop_console: true
        }
      }
    },
    transpile: [],
    extractCSS: true,
    // extract all your CSS to a single file:
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true
          }
        }
      }
    },
    extend(config, {isDev, isClient}) {
      config.module.rules.forEach(rule => {
        if (String(rule.test) === String(/\.(png|jpe?g|gif|svg|webp)$/)) {
          // add a second loader when loading images
          rule.use.push({
            loader: '@aceforth/nuxt-optimized-images',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 100
              },
              svgo: {
                plugins: [
                  // use these settings for internet explorer for proper scalable SVGs
                  // https://css-tricks.com/scale-svg/
                  { removeViewBox: false },
                  { removeDimensions: true }
                ]
              },
              lqip: {
                base64: true,
                palette: false
              },
              webp: {
                progressive: true,
                quality: 100
              }
            }
          })
        }
      })
    },
    /*
    ** You can extend webpack config here
    */
    plugins: [],
  },
  /*
  ** THE RENDERER HAS BEEN IMPLEMENTED POSTHUMOUSLY, COMPRESSOR IS THE LATEST ADDEDD FEATURE
  */
  render: {
    compressor: {
      level: 9,
      threshold: 0
    },
    bundleRenderer: {
      shouldPreload: (file, type) => {
        if (type === 'image') {
          return file === ['~/assets/img/image1.jpg', '~/assets/img/avatar.jpg']
        }
        if (type === 'font') {
          return /\.woff2$/.test(file)
        }
        return ['style'].includes(type)
      }
    }
  }
}

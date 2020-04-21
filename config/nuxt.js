'use strict'

const resolve = require('path').resolve 
// const webpack = require('webpack')
module.exports = {
  /*
  ** Headers of the page
  */

  modules: [
    '@nuxtjs/axios',

    // With options
    ['@nuxtjs/google-adsense', {
      id: 'ca-pub-1329433058038954'
    }]
    

  ],
  
  axios: {
    //  baseURL: 'https://goflank.com/'     
  },
  // build: { 
    // mdsadek1 Juan_goFlank@360
    
  //   plugins: [
  //     new webpack.ProvidePlugin({\

  //       '_': 'lodash'
  //       // ...etc.
  //     })
  //   ]
  // },
  plugins: [
    '~plugins/ivuew',
    // {src: '~plugins/ivuew', ssr: false},
    {src: '~plugins/vuecommon', ssr: false},
    // '~plugins/googlechart'
    //  { ssr: false, src: '~plugins/googlemaps.js' }
  ],
  head: {
    title: 'Go Flank',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Adonuxt project'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: 'favicon.ico'
      },
      // { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' }
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.7.2/css/all.css' },
      { rel: 'stylesheet', href: '/css/custom-plugin.css' },
      // { rel: 'stylesheet', href: '/css/owl.carousel.min.css' },
      // { rel: 'stylesheet', href: '/css/owl.theme.default.min.css' },

     
      { rel: 'stylesheet', href: '/css/style.css' },
      { rel: 'stylesheet', href: '/css/style_one.css' },
      { rel: 'stylesheet', href: '/css/new_style.css' },
      { rel: 'stylesheet', href: '/css/new.css' },
      { rel: 'stylesheet', href: '/css/responsive.css' },
      { rel: 'stylesheet', href: '/css/styleL3.css' },
      { rel: 'stylesheet', href: '/css/styleL4.css' }

    ],
    script: [
      // { src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js', body: true },
      { src: '/js/plugin-js/jquery-1.12.0.min.js', body: true },
      // { src: '/js/plugin-js/owl.carousel.min.js' },
      { src: '/js/script.js', body: true },
       { src:"https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v4.0&appId=379991066218611&autoLogAppEvents=1"},
       { src:"https://platform.twitter.com/widgets.js" },
       { src:"//folank.disqus.com/count.js" , body: true}
       ]
    

  },
  /*
  ** Global CSS
  */
  css: [

  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: 'orange' },
  /*
  ** Point to resources
  */
  srcDir: resolve(__dirname, '..', 'resources')
}

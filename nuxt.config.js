
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    titleTemplate: '%s | 灘校オンライン文化祭2020',
		htmlAttrs: {
			prefix: 'og: http://ogp.me/ns#'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'og:site_name', property: 'og:site_name', content: '灘校オンライン文化祭2020' },
			{ hid: 'og:type', property: 'og:type', content: 'website' },
			{ hid: 'google-site-verification', name: 'google-site-verification', content: 'HlB1DrFwoD4TJIXIL4TEKOWLIPrHj1szS-U2mW4dcrk' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/2020/favicon.ico' },
    ]
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
		"~/plugins/vue-youtube.js"
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  },
	router: {
		base: "/2020/",
		routes: [
			{
				name: "index",
				path: "/",
				component: "page/index.vue"
			},
			{
				name: "bushi",
				path: "/bushi",
				component: "page/bushi.vue"
			}
		]
	}
}

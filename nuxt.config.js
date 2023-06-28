module.exports = {
    head: {
        title: 'burocraziafacile',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' },
            { hid: 'description', name: 'description', content: 'Nuxt.js project' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'alternate', type: 'application/rss+xml', href: 'https://mxbfqtuan8.execute-api.us-east-1.amazonaws.com/latest/rss/' },

            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700' }
        ]
    },
    loading: { color: '#3B8070' },
    modules: [
        '@nuxtjs/style-resources',
        'cookie-universal-nuxt',
        '@nuxtjs/google-gtag',
    ],
    'google-gtag':{
        id: 'UA-19846103-41', // required
        config:{
            send_page_view: false, // might be necessary to avoid duplicated page track on page reload
        },
        debug: true, // enable to track in dev mode
        
    },
    styleResources: {
        scss: [
            './assets/scss/variables.scss',
        ]
    },
    css: [
        {src: '~/assets/scss/main.scss', lang: 'scss'}
    ],
    render: {
        bundleRenderer: {
            shouldPreload: (file, type) => {
                return ['script', 'style', 'font'].includes(type)
            }
        }
    },
    serverMiddleware: [
        'redirect-ssl',
    ],
    plugins: [
        // { src: '~plugins/analitycs.js', ssr: false },
        { src: '~plugins/facebook.js', ssr: false },
        { src: '~plugins/vue-cookie-law.js', ssr: false },
        { src: '~plugins/iubenda.js', ssr: false },
        { src: '~plugins/iconFont.js', ssr: false },

    ],
    router: {
        middleware: ['ActiveMenu', 'getSettings', 'getArticoliHome', 'setCookiesCampaign']
    },
    build: {
        postcss: {
            plugins: {
                'postcss-custom-properties': false,
            }
        }
    }
}

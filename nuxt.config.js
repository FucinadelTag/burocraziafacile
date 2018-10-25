module.exports = {
    head: {
        title: 'burocraziafacile',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
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
        [
            'nuxt-sass-resources-loader',
            './assets/scss/variables.scss',
        ],
        ['cookie-universal-nuxt']
    ],
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
        { src: '~plugins/analitycs.js', ssr: false },
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

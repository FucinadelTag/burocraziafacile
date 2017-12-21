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
            { rel: 'alternate', type: 'application/rss+xml', href: 'http://a127962.hostedsitemap.com/4029146/feed_rss.xml' },

            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700' }
        ]
    },
    loading: { color: '#3B8070' },
    modules: [
        [
            'nuxt-sass-resources-loader',
            './assets/scss/variables.scss',
        ]
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
        { src: '~plugins/modal.js', ssr: false },
        { src: '~plugins/analitycs.js', ssr: false },
        { src: '~plugins/facebook.js', ssr: false },
        { src: '~plugins/vue-cookie-law.js', ssr: false },
        { src: '~plugins/iubenda.js', ssr: false },

    ],
    router: {
        middleware: ['ActiveMenu', 'getSettings', 'getNews']
    },
    build: {
        postcss: {
            plugins: {
                'postcss-custom-properties': false,
            }
        }
    }
}

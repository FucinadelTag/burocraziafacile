module.exports = {
    head: {
        title: 'burocraziafacile',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Nuxt.js project' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    loading: { color: '#3B8070' },
    modules: [
        '@nuxtjs/bulma',
        ['nuxt-sass-resources-loader', './assets/scss/main.scss']
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
    router: {
        middleware: 'ActiveMenu'
    },
    env: {
        baseUrl: process.env.BASE_URL || 'http://localhost:3030'
    },
    build: {
        postcss: {
            plugins: {
                'postcss-custom-properties': false
            }
        }
    }
}

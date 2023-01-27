// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    css: [
        'assets/css/normalize.css',
    ],
    modules: ['nuxt-swiper'],
    app: {
        pageTransition: { name: 'page', mode: 'in-out'},
        {
            name: 'NuxtAppName',
            exec_mode: 'cluster',
            instances: 'max', // Or a number of instances
            script: './node_modules/nuxt/bin/nuxt.js',
            args: 'start'
        },
        head: {
            charset: 'utf-16',
            title: 'WaffleWeb - разработка сайтов',
            meta: [
                // <meta name="description" content="My amazing site">
                { name: 'description', content: 'My amazing site.' }
            ],
            link: [
                {rel: "preconnect", href: "https://fonts.googleapis.com"},
                { rel : "preconnect", href: "https://fonts.googleapis.com"},
                { href: "https://fonts.googleapis.com/css2?family=Ubuntu&display=swap", rel: "stylesheet" },
                { href: "https://fonts.googleapis.com/css2?family=Sofia+Sans&display=swap", rel: "stylesheet" }
            ]
        },
    },
})

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    css: [
        'assets/css/normalize.css',
        'assets/main.css',
    ],
    plugins: [
        'plugins/vue-the-mask.js'
    ],
    modules: ['nuxt-swiper'],
    app: {
        pageTransition: { name: 'page', mode: 'in-out'},
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
                { href: "https://fonts.googleapis.com/css2?family=Sofia+Sans&display=swap", rel: "stylesheet" },
            ],
        },
    },
})

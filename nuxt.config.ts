// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    css: [
        'assets/css/normalize.css',
        'assets/main.css'
    ],
    plugins: [
        { src: '~/plugins/aos', mode: 'client' },
    ],
    modules: ['nuxt-swiper'],
    app: {
        pageTransition: { name: 'page', mode: 'default'},

        head: {
            charset: 'utf-16',
            viewport: 'width=500, initial-scale=1',
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

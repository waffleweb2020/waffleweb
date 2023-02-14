// https://nuxt.com/docs/api/configuration/nuxt-config
import path from 'path'
import fs from 'fs'
export default defineNuxtConfig({
    ssr: true,
    vite: {
        server: {
            hmr: {
                protocol: "wss",
                clientPort: 443,
                path: "hmr/",
            },
        },
    },
    css: [
        'assets/css/normalize.css',
        'assets/main.css',
    ],
    plugins: [
        'plugins/vue-the-mask.js'
    ],
    devServer:{
        https: {
            key: Buffer.from(fs.readFileSync(path.resolve(__dirname, 'host.key'))).toString(),
            cert: Buffer.from(fs.readFileSync(path.resolve(__dirname, 'host.cert'))).toString()
        },
        hmr
    },
    modules: ['nuxt-swiper'],
    app: {
        pageTransition: { name: 'page', mode: 'in-out'},
        head: {
            charset: 'utf-16',
            title: 'WaffleWeb - разработка сайтов',
            meta: [
                // <meta name="description" content="My amazing site">
                { "http-equiv": 'Content-Security-Policy', content: 'upgrade-insecure-requests'},
                { name: 'description', content: 'У нас вы сможете заказать разработку веб сайта или телеграм-бота. Профессиональная разработка сайтов в Омске. ☎ +7 913 674 60 18' },
                { name: 'robots', content: 'content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"'},
                { property: "og:locale", content: 'ru_RU'},
                { property: "og:type", content: 'website'},
                { property: "og:title", content: 'Создание сайта в Омске | 👍 Компания разработки сайтов Waffle web'},
                { property: "og:url", content: 'https://www.waffle-web.ru'},
                { property: "og:site_name", content: 'Компания разработки сайтов Waffle web'},
                { property: "og:site_name", content: 'Компания разработки сайтов Waffle web'},
                { property: "og:description", content: 'У нас вы сможете заказать разработку веб сайта или телеграм-бота. Профессиональная разработка сайтов в Омске. ☎ +7 913 674 60 18'},
            ],
            link: [
                { rel: 'canonical', href: 'https://www.waffle-web.ru'},
                { rel: 'alternate', type:'application/rss+xml', title: 'Компания разработки сайтов Waffle web', href: 'https://www.waffle-web.ru'},
                {rel: "preconnect", href: "https://fonts.googleapis.com"},
                { rel : "preconnect", href: "https://fonts.googleapis.com"},
                { href: "https://fonts.googleapis.com/css2?family=Ubuntu&display=swap", rel: "stylesheet" },
                { href: "https://fonts.googleapis.com/css2?family=Sofia+Sans&display=swap", rel: "stylesheet" },
            ],
        },
    },
})

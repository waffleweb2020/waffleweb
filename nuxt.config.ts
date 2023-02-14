// https://nuxt.com/docs/api/configuration/nuxt-config
import path from 'path'
import fs from 'fs'
export default defineNuxtConfig({
    ssr: true,
    css: [
        'assets/css/normalize.css',
        'assets/main.css',
    ],
    plugins: [
        'plugins/vue-the-mask.js'
    ],
    devServer:{
        https: {
            key: `MIIEpAIBAAKCAQEA0lA/nfusO6N6L1L1h4ex1/h32v2XF2h2KYpawXfduQK9l82s
BfVYyeXroo9teH/SUJzdLffNS5HLkaIrQHEviZapjnYLl1PB8y27qviJIYFzNJU2
goxJLaDbdWle6AkN63XZAk7GPyZYy1FqsSQ+sSFAkFJCokaDtVEudeQ3lBQ6qNV8
uT7ZJXrSjTF9th8za+/2Lf7p5vcjgv3e1fFaBAOjUHzCuhuUVnMFJdy2WAamj73I
myjU4LSKBxm0frLrVztoxHXeEhY776a5WMGPYds2nAdavpcq5DQ6gxrirrUcIQ2C
PI+9nkPUN7b+nM5Fz+a1wm0v6lXlJm/pkPC/twIDAQABAoIBAG4hE48Y0NHSAxNw
751u0xPyymBkVpAtZWLPTkLtD6/n3Xv2eVQNa9cdjMxtKrfkxy7rVW7Syi/+Qoka
UGfIXUpBGLy+18cAVxmOIy2eQ8DF1pv8XrTx3QgFqaXL7aS3yRA5f8+TjIBZBjpB
ggsMnb+HWBW63aW4IxP5VMjrHqdtFVIWKZVudBb16a3Y5es16lxkuRHOmrJk83UM
NOjh/+ZqdCH6XfJQR+mpxKbPB3YFwBYSRECHDdJmrsGv9eWt0kFd/2q4ugPgufk2
8opSEOMc0y0yIxU5ZcZ5kQdk2bQ9M/q66BWGQfbDhcotE3aTan/Wn9piW85VsuVw
irgjn3ECgYEA7PJe7OCxMoAzHZTUvErjsjkcfXkqnYtAO6kALCCF4YWnsWNy9J9i
mGTjOLxmbuEkS/Gywp0QawI9Oz40h1X7awbj2bEphL9kApJ0ljwzk9Nj1MZQnG0C
+UyTXR3PUapJ1R8TqLbyjjYrfEb+8P761pnKDS8S4kBt0wxup2uE/9UCgYEA4zmf
VrkWmUCidMY23MAMwDcdXugvFA9zIONRbOh7UvQdS3uxWWaSDtyWa5ivFvvZyhxJ
k9qm/pp5oGP1/lhTiuH7cP4kQVuv3jFXWQFlocNyZZ/JJtkSfjBY2meX+ZBAMFiH
8yZpWDA2FqQOpbxy2pdNfdqqVDkXMQkiqVZ5E1sCgYEAyWkMv5YPibnnuVF1s8iE
3E4npZCFZP2lUBFMEDZlF1qhPOwoH0AMczXu359mAwJl9Bgzt7IC7rMskVtDE3dH
C6cDr1wkyq5VuMn9SGdMAHBD/+3DP/R5/qfU6+YXAHgb4olUEKnSbIgnVrCSrRBQ
8HIxihtlleTmdeuvc6i1mTECgYAv18cj9G68r+5E1iNhEZLduf0WKZ8YAzTDfPl9
C+pDiiDM7utlnoIsXOfTGd/r3/V4Z8JaPlShEReA3OtDtYdJm9FcdjZeCJccGpmA
pRmoGMXyfdVVt6j8JuPegKdwJZ5OT6W4XaMarXQGCl8HKImqWuc3E55/g1HNwlWp
AAsYNwKBgQC4gXqC19surGn0Y603ab8WqU/DWn+7KWjGnTv+FajRo0qqJHLGr+IG
6d7shMMJu+UZ65ee20H68ByJlm0w9NRVZFyAy5qhr/+rZXe2rPSCQKEjtgveyP0U
Bd7bMAU66/eFMKOLGpPesBkFN4Nqx/j2kWDJOwpc8Rn5r+kGAIBHjA==`,
            cert: `MIID2zCCAsOgAwIBAgIUMkTd0e1XmnYiYRnYocXyPWKUmzcwDQYJKoZIhvcNAQEL
BQAwfTELMAkGA1UEBhMCUlUxDTALBgNVBAgMBE9tc2sxDTALBgNVBAcMBE9tc2sx
EzARBgNVBAoMCldhZmZsZS13ZWIxEzARBgNVBAMMCldhZmZsZS1XZWIxJjAkBgkq
hkiG9w0BCQEWF3dhZmZsZS13ZWIuaXRAZ21haWwuY29tMB4XDTIzMDIxNDA0MzA0
MloXDTI0MDIxNDA0MzA0MlowfTELMAkGA1UEBhMCUlUxDTALBgNVBAgMBE9tc2sx
DTALBgNVBAcMBE9tc2sxEzARBgNVBAoMCldhZmZsZS13ZWIxEzARBgNVBAMMCldh
ZmZsZS1XZWIxJjAkBgkqhkiG9w0BCQEWF3dhZmZsZS13ZWIuaXRAZ21haWwuY29t
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA0lA/nfusO6N6L1L1h4ex
1/h32v2XF2h2KYpawXfduQK9l82sBfVYyeXroo9teH/SUJzdLffNS5HLkaIrQHEv
iZapjnYLl1PB8y27qviJIYFzNJU2goxJLaDbdWle6AkN63XZAk7GPyZYy1FqsSQ+
sSFAkFJCokaDtVEudeQ3lBQ6qNV8uT7ZJXrSjTF9th8za+/2Lf7p5vcjgv3e1fFa
BAOjUHzCuhuUVnMFJdy2WAamj73ImyjU4LSKBxm0frLrVztoxHXeEhY776a5WMGP
Yds2nAdavpcq5DQ6gxrirrUcIQ2CPI+9nkPUN7b+nM5Fz+a1wm0v6lXlJm/pkPC/
twIDAQABo1MwUTAdBgNVHQ4EFgQUtNbrhLToO384yIZ3zd5XHWnzeXAwHwYDVR0j
BBgwFoAUtNbrhLToO384yIZ3zd5XHWnzeXAwDwYDVR0TAQH/BAUwAwEB/zANBgkq
hkiG9w0BAQsFAAOCAQEAwnWsAjzkSfhK/mnqH3+h12tOevKtxsj5HcuViBO/V/v6
sd+5Hm3KV3GfK8JSYxBGf0mQ9X4Woc/CRge6SMvTPaAeaYLU4sKkH1izYmfFCNp3
6z/DtbbOS2uE2xS60AoYys49tSzizBGq/Jg6/u9pQ8mT/G31c7sfRtdCJTWCZ2wA
G7uHYBLEMBUhuDtXuzzxFmAy3ouZdgIQy3BsJcAnIXAHSaXECiVVDpFL2uLgIAyr
PLflRYpbaaV0opkGcZQqUxTsxKePo54aW893yhQ9FBQsb2oWmAyGmziVVZsnQhsV
HtGKfAwQynGRF5FCenICJHii3fOnxGH0J1srrQpnfA==`
        }
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

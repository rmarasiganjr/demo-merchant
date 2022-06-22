export default {
    head: {
        title: "Merchant Web App - Dalasmartlockbox",
        htmlAttrs: {
            lang: "en"
        },
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            },
            {
                hid: "description",
                name: "description",
                content: "Merchant Web App - Dalasmartlockbox"
            }
        ],
        link: [
            {
                rel: "stylesheet",
                href:
                    "https://fonts.googleapis.com/css?family=Work+Sans:300,400,500,600,700&amp;amp;subset=latin-ext"
            },
            {
                rel: "shortcut icon",
                href: "~/static/favicon.png"
            },
            {
                rel: "apple-touch-icon-precomposed",
                href: "~/static/favicon.png"
            }
        ]
    },

    css: [
        "~/static/fonts/Linearicons/Font/demo-files/demo.css",
        "~/static/fonts/font-awesome/css/font-awesome.min.css",
        "~/static/css/bootstrap.min.css",
        "~/assets/styles/env.scss",
        "~/assets/styles/style.scss"
    ],

    buildModules: ["@nuxtjs/vuetify", "@nuxtjs/style-resources"],
    plugins: [{ src: "~/plugins/apexcharts.js", ssr: false }],
    styleResources: {
        scss: "./assets/scss/env.scss"
    },
    router: {
        linkActiveClass: "",
        linkExactActiveClass: "active"
    },
    modules: ["@nuxtjs/axios", "nuxt-i18n"],

    server: {
        port: 4003,
        host: "localhost"
    },
    env: {
        DEMO_ECOMM_TOKEN:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlclR5cGVJZCI6NCwiaWF0IjoxNjU1ODMwNTU0LCJleHAiOjE2ODczNjY1NTR9.qffGeZywK_3XJeVwsf9S7xSX0ygp2vRVB06fAPaTPiE",
        QASSO_URL: "https://qasso.dalasmartbox.com",
        QAADMIN_URL: "https://qaadmin.dalasmartbox.com"
    }
};

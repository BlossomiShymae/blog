// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', "@nuxt/image"],
  ssr: true,
  app: {
    baseURL: "/blog/",
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
    layoutTransition: {
      name: "layout",
      mode: "out-in",
    },
    head: {
      htmlAttrs: {
        "data-bs-theme": "dark",
      },
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "title", content: "Blossomi's Blog"},
        { name: "og:title", content: "Blossomi's Blog"},
        { name: "og:description", content: "The blog of a trans elf girl."},
        { name: "og:image", content: "https://blossomishymae.github.io/blog/img/avatar.png"},
        { name: "theme-color", content: "#000000"}
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css",
          integrity:
            "sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM",
          crossorigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        }
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js",
          integrity:
            "sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz",
          crossorigin: "anonymous",
        },
      ],
    },
  },
  experimental: {
    payloadExtraction: false,
  },
  routeRules: {
    '/articles': { prerender: true }
  },
  compatibilityDate: "2024-09-19",
  nitro: {
    static: true,
    prerender: {
      failOnError: false,
      crawlLinks: true,
      concurrency: 12,
    }
  },
})
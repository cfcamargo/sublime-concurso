// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  components : [{path: '~/components', pathPrefix: false}],
  modules: ['@nuxtjs/google-fonts', 'nuxt-swiper'],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  googleFonts: {
    families: {
      'Poppins': true,
    },
    download: true,
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Assessoria - Sublime Concursos',
      meta: [
        { hid: 'charset', charset: 'utf-8' },
        { hid: 'viewport', name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'title', name: 'title', content: 'Assessoria - Sublime Concursos'},
        { hid: 'og:title', property: 'og:title', content: 'Assessoria - Sublime Concursos'},
        { hid: 'og:description', property: 'og:description', content: 'Acesso Exclusivo a Conteúdo de Raciocínio Lógico e Matemático Todos os Dias no Seu WhatsApp. Plataforma de organização dos estudos que revolucionará sua aprovação' },
        { hid: 'og:image', property: 'og:image', content: '/logo.png' },
        { hid: 'description', name: 'description', content: 'Acesso Exclusivo a Conteúdo de Raciocínio Lógico e Matemático Todos os Dias no Seu WhatsApp. Plataforma de organização dos estudos que revolucionará sua aprovação' },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon.png'
        },
      ],
    }
  }

})

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
      head: {
        title: "Amano Dev",
        meta: [
          { name: "descrtiption", content: "Amano Dev" },
          { name: "viewport", content: "width=device-width, initial-scale=1" },
        ],
        script: [],
        link: [
          {
            rel: "stylesheet",
            href:
              "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined",
          },
          {
            rel: "stylesheet",
            href:
              "https://fonts.googleapis.com/css2?family=Archivo+Black&family=Nunito:ital,wght@0,300;0,400;0,500;0,600;1,700&display=swap",
          },
          {
            rel: "stylesheet",
            href:
              "/public/css/default.scss",
          },
        ],
      }
    },
    components: {
      "dirs": [
        "~/components"
      ]
    },

})

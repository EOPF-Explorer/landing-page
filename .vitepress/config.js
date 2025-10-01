import { defineConfig } from "vitepress";
import baseConfig from "@eox/pages-theme-eox/config";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  extends: baseConfig("eopf"),
  // Change the page config here
  base: "/",
  vite:{
    server: {
      allowedHosts:true,
    }
  },
  themeConfig: {
    nav: [
      // { text: "Documentation", link: "#" },
      // { text: "Discussion", link: "#" },
    ],
  },
  transformHead({ head }){
    return [
      [
          'link',
          {
            rel: 'preload',
            href: "/fonts/Exo2-VariableFont_wght.ttf",
            as: 'font',
            type: 'font/ttf',
            crossorigin: ''
          }
        ],
        [
          'link',
          {
            rel: 'preload',
            href: "/fonts/Exo2-Italic-VariableFont_wght.ttf",
            as: 'font',
            type: 'font/ttf',
            crossorigin: ''
          }
        ],
        [
          'link',
          {
            rel: 'preload',
            href: "/fonts/OpenSans-Italic-VariableFont_wdth,wght.ttf",
            as: 'font',
            type: 'font/ttf',
            crossorigin: ''
          }
        ],
        [
          'link',
          {
            rel: 'preload',
            href: "/fonts/OpenSans-VariableFont_wdth,wght.ttf",
            as: 'font',
            type: 'font/ttf',
            crossorigin: ''
          }
        ]

    ]
  },
});

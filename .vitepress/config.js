import { defineConfig } from "vitepress";
import baseConfig from "@eox/pages-theme-eox/config";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  extends: baseConfig("eopf"),
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (el) => el.includes("-"),
      },
    },
  },
  base: "/",
  vite:{
    server: {
      allowedHosts:true,
    }
  },
  themeConfig: {
    nav: [
      { text: "Browse Sentinels", link: "/sentinelexplorer/?template=explore&indicator=sentinel-2-l2a" },
      { text: "Documentation", link: "https://eopf-explorer.github.io/data-model/" },
      { text: "Discussion", link: "https://discourse.eopf.copernicus.eu/" },
    ],
  },
  transformHead(){
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

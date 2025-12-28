import { defineConfig } from "vitepress";
//@ts-expect-error does not have types
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
      { text: "Data Catalog", link: "https://api.explorer.eopf.copernicus.eu/browser" },
      { text: "Dynamic Browser", link: "/sentinelexplorer/?template=explore&indicator=sentinel-2-l2a" },
      { text: "Visualization Catalog", link: "/visualization-catalog" },
      { text: "Documentation", link: "https://eopf-explorer.github.io/data-model/" },
      { text: "Discussion", link: "https://discourse.eopf.copernicus.eu/c/eopf-explorer/17" },
    ],
  },
  transformHead(){
    return [
      [
          'link',
          {
            rel: 'preload',
            href: "/fonts/Exo_2/Exo2-VariableFont_wght.ttf",
            as: 'font',
            type: 'font/ttf',
            crossorigin: ''
          }
        ],
        [
          'link',
          {
            rel: 'preload',
            href: "/fonts/Exo_2/Exo2-Italic-VariableFont_wght.ttf",
            as: 'font',
            type: 'font/ttf',
            crossorigin: ''
          }
        ],
        [
          'link',
          {
            rel: 'preload',
            href: "/fonts/Open_Sans/OpenSans-Italic-VariableFont_wdth,wght.ttf",
            as: 'font',
            type: 'font/ttf',
            crossorigin: ''
          }
        ],
        [
          'link',
          {
            rel: 'preload',
            href: "/fonts/Open_Sans/OpenSans-VariableFont_wdth,wght.ttf",
            as: 'font',
            type: 'font/ttf',
            crossorigin: ''
          }
        ]

    ]
  },
});

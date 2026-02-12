import { defineConfig } from "vitepress";
//@ts-expect-error does not have types
import baseConfig from "@eox/pages-theme-eox/config";
// import llmstxt from 'vitepress-plugin-llms'


// https://vitepress.dev/reference/site-config
export default defineConfig({
  extends: baseConfig("eopf"),
  markdown: {
    config: (md) => {
      // Remember default renderer
      const defaultRender = md.renderer.rules.link_open || function(tokens, idx, options, env, self) {
        return self.renderToken(tokens, idx, options);
      };

      md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
        // Add 'link' class to all links
        const token = tokens[idx];
        const classIndex = token.attrIndex('class');
        
        if (classIndex < 0) {
          token.attrPush(['class', 'link']);
        } else {
          const currentClass = token.attrs?.[classIndex][1];
          if (!currentClass?.includes('link')) {
            //@ts-expect-error todo
            token.attrs[classIndex][1] = currentClass + ' link';
          }
        }

        return defaultRender(tokens, idx, options, env, self);
      };
    }
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (el) => el.includes("-"),
      },
    },
  },
  base: "/",
  vite:{
    // plugins: [
    //   //@ts-expect-error
    //   await llmstxt({
    //     stripHTML: true,
    //     generateLLMFriendlyDocsForEachPage: false,
    //     ignoreFiles:["**/sentinelexplorer/**/*"]
    //   })],
    server: {
      allowedHosts: true,
    }
  },
  themeConfig: {
    externalLinkIcon:true,
    nav: [
      { text: "Data Catalog", link: "https://api.explorer.eopf.copernicus.eu/browser" },
      { text: "Dynamic Browser", link: "/sentinelexplorer/?template=explore&indicator=sentinel-2-l2a" },
      { text: "Software & Services", link: "/software-services" },
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

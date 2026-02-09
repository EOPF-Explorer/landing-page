import { defineConfig } from "vitepress";
//@ts-expect-error does not have types
import baseConfig from "@eox/pages-theme-eox/config";
import { viteStaticCopy } from 'vite-plugin-static-copy'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

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
          const currentClass = token.attrs[classIndex][1];
          if (!currentClass.includes('link')) {
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
    optimizeDeps:{
      include:[
        "@eox/pages-theme-eox",
        "@eodash/eodash/webcomponent",
        "cesium",
        "mersenne-twister",
        "urijs",
        "grapheme-splitter",
        "bitmap-sdf",
        "kdbush",
        "rbush",
        "earcut",
        "pako",
        "protobufjs",
        "lerc",
        "dompurify",
        "autolinker",
        "topojson-client",
        "xml-utils",
        "geotiff",
        "quick-lru"
      ],
      exclude: ['olcs']
    },
    ssr: {
      noExternal: ['@eox/pages-theme-eox', '@eodash/eodash'],
      external: ['olcs']
    },
    build: {
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            if (id.includes('cesium')) {
              return 'cesium';
            }
            if (id.includes('olcs')) {
              return 'olcs';
            }
            // Don't create separate chunks for these, let them bundle naturally
          }
        }
      }
    },
    plugins: [
      viteStaticCopy({
        targets: [
          {
            src: path.resolve(__dirname, '../node_modules/cesium/Build/Cesium/Assets'),
            dest: '.'
          },
          {
            src: path.resolve(__dirname, '../node_modules/cesium/Build/Cesium/Workers'),
            dest: '.'
          },
          {
            src: path.resolve(__dirname, '../node_modules/cesium/Build/Cesium/ThirdParty'),
            dest: '.'
          },
          {
            src: path.resolve(__dirname, '../node_modules/cesium/Build/Cesium/Widgets'),
            dest: '.'
          }
        ]
      })
    ],
    server: {
      allowedHosts:true,
    }
  },
  themeConfig: {
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

import pluginVue from "eslint-plugin-vue";
import eox from "@eox/eslint-config";

export default [
  ...eox,
  ...pluginVue.configs["flat/essential"],
  {
    ignores: ["public/", "dist/", "**/cache/**"],
  },
  {
    files: ["**/*.vue", "**/*.js"],
    rules: {
      "vue/no-deprecated-html-element-is": "warn",
      "vue/multi-word-component-names": "off",
    },
  },
];

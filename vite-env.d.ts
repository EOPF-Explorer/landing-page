/// <reference types="vitepress/client" />
declare module "@eox/eslint-config"{
    const config: import("eslint").Linter.Config[];
    export default config;
}

interface Window {
        eodashStore: import("@eodash/eodash").EodashStore;
}
/// <reference types="vite/client" />

declare module "@eox/eslint-config"{
    const config: import("eslint").Linter.Config[];
    export default config;
}

declare global {
    interface Window {
        eodashStore: import("@eox/eodash").EodashStore;
    }
}

export {};
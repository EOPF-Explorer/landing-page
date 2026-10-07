async function t(e,r){if(r&&customElements.get(r))return!0;try{return await e(),!0}catch(o){return console.error(`Failed to load module${r?` for <${r}>`:""}:`,o),!1}}export{t as l};

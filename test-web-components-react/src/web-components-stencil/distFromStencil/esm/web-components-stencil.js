import { p as promiseResolve, g as globalScripts, b as bootstrapLazy } from './index-DbC7otHO.js';
export { s as setNonce } from './index-DbC7otHO.js';

/*
 Stencil Client Patch Browser v4.33.1 | MIT Licensed | https://stenciljs.com
 */

var patchBrowser = () => {
  const importMeta = import.meta.url;
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await globalScripts();
  return bootstrapLazy([["my-component",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]],["side-drawer",[[1,"side-drawer",{"title":[513],"open":[1540],"activeTab":[32],"toggle":[64]}]]],["stock-finder_3",[[1,"stock-price",{"stockSymbol":[1537,"stock-symbol"],"appState":[32],"stockPrice":[32]},[[4,"stockSymbolChanged","stockSymbolChangedListener"]],{"stockSymbol":["stockSymbolChanged"]}],[1,"stock-finder",{"stockSymbol":[1537,"stock-symbol"],"appState":[32],"stockSymbols":[32]},null,{"stockSymbol":["stockSymbolChanged"]}],[1,"stock-loading"]]]], options);
});
//# sourceMappingURL=web-components-stencil.js.map

//# sourceMappingURL=web-components-stencil.js.map
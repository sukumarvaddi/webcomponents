'use strict';

var index = require('./index-DYOHFMeb.js');

var _documentCurrentScript = typeof document !== 'undefined' ? document.currentScript : null;
/*
 Stencil Client Patch Browser v4.33.1 | MIT Licensed | https://stenciljs.com
 */

var patchBrowser = () => {
  const importMeta = (typeof document === 'undefined' ? require('u' + 'rl').pathToFileURL(__filename).href : (_documentCurrentScript && _documentCurrentScript.tagName.toUpperCase() === 'SCRIPT' && _documentCurrentScript.src || new URL('web-components-stencil.cjs.js', document.baseURI).href));
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return index.promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await index.globalScripts();
  return index.bootstrapLazy([["my-component.cjs",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]],["side-drawer.cjs",[[1,"side-drawer",{"title":[513],"open":[1540],"activeTab":[32],"toggle":[64]}]]],["stock-finder_3.cjs",[[1,"stock-price",{"stockSymbol":[1537,"stock-symbol"],"appState":[32],"stockPrice":[32]},[[4,"stockSymbolChanged","stockSymbolChangedListener"]],{"stockSymbol":["stockSymbolChanged"]}],[1,"stock-finder",{"stockSymbol":[1537,"stock-symbol"],"appState":[32],"stockSymbols":[32]},null,{"stockSymbol":["stockSymbolChanged"]}],[1,"stock-loading"]]]], options);
});

exports.setNonce = index.setNonce;
//# sourceMappingURL=web-components-stencil.cjs.js.map

//# sourceMappingURL=web-components-stencil.cjs.js.map
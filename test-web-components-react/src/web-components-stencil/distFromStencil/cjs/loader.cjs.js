'use strict';

var index = require('./index-DYOHFMeb.js');

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await index.globalScripts();
  return index.bootstrapLazy([["my-component.cjs",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]],["side-drawer.cjs",[[1,"side-drawer",{"title":[513],"open":[1540],"activeTab":[32],"toggle":[64]}]]],["stock-finder_3.cjs",[[1,"stock-price",{"stockSymbol":[1537,"stock-symbol"],"appState":[32],"stockPrice":[32]},[[4,"stockSymbolChanged","stockSymbolChangedListener"]],{"stockSymbol":["stockSymbolChanged"]}],[1,"stock-finder",{"stockSymbol":[1537,"stock-symbol"],"appState":[32],"stockSymbols":[32]},null,{"stockSymbol":["stockSymbolChanged"]}],[1,"stock-loading"]]]], options);
};

exports.setNonce = index.setNonce;
exports.defineCustomElements = defineCustomElements;
//# sourceMappingURL=loader.cjs.js.map

//# sourceMappingURL=loader.cjs.js.map
'use strict';

var index = require('./index-DYOHFMeb.js');

const stockFinderCss = ":host{display:block;border:2px solid #3b015d;font-family:sans-serif;padding:1rem;border-radius:8px;width:350px;margin:auto;max-width:100%;margin-top:2rem}form{display:flex;flex-direction:column;gap:1rem;max-width:300px;margin:auto;padding:1rem}input{padding:0.5rem;border:1px solid #ccc;border-radius:4px}input[type='text']{padding:5px;border:1px solid #ccc;border-radius:4px}button{padding:0.5rem;background-color:#007bff;color:white;border:none;border-radius:4px;cursor:pointer}button:hover{background-color:#0056b3}.instruction,.error{font-size:0.9rem;color:#555;text-align:center;margin-bottom:1rem}.error{color:tomato}.stock-symbols-list{list-style:none;padding:0;margin:0}.stock-symbols-list li{padding:0.5rem;border-bottom:1px solid #ccc}.stock-symbols-list li:last-child{border-bottom:none}.stock-symbols-list li:hover{background-color:#f0f0f0}.stock-symbols-list li:active{outline:2px solid burlywood;outline-offset:-2px;background-color:blue;color:white}";

const StockFinder = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.stockSymbolChangedEmitter = index.createEvent(this, "stockSymbolChanged");
    }
    input;
    appState = 'idle';
    stockSymbols = [];
    stockSymbol;
    stockSymbolChanged(newValue, oldValue) {
        console.log(`stockSymbol changed from ${oldValue} to ${newValue}`);
        if (newValue && newValue !== oldValue) {
            this.input.value = newValue;
            this.fetchStockSymbols(newValue);
        }
    }
    stockSymbolChangedEmitter;
    formHandler(event) {
        event.preventDefault(); // Prevent the default form submission behavior
        const userEnteredStockSymbol = this.input.value.trim();
        this.stockSymbol = userEnteredStockSymbol; // Update the stockSymbol property
    }
    async fetchStockSymbols(stockSymbol) {
        this.appState = 'loading';
        await sleep(2000); // Set the app state to loading
        const response = await fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${stockSymbol}&apikey=G5Q599MACNAP8JET`);
        const data = await response.json();
        if (data.bestMatches === undefined) {
            this.appState = 'error'; // Set the app state to error if no matches found
            console.error('No matches found for the stock symbol:', stockSymbol);
            this.stockSymbols = [];
            return;
        }
        this.appState = 'success'; // Set the app state to success
        this.stockSymbols = data?.bestMatches?.map((match) => ({ symbol: match['1. symbol'], name: match['2. name'] })) ?? [];
        console.log('Fetched stock symbols:', this.stockSymbols);
    }
    fetchStockPrice(stockSymbol) {
        this.stockSymbolChangedEmitter.emit(stockSymbol);
    }
    componentDidLoad() {
        console.log('Component did load');
        if (this.stockSymbol) {
            this.input.value = this.stockSymbol; // Set the input value if stockSymbol is provided
            this.fetchStockSymbols(this.stockSymbol);
        }
    }
    render() {
        return (index.h(index.Host, { key: 'ca7395b6751a736cf771df283069be03ee26b064' }, index.h("form", { key: '3143552b5170cd468c3ab63e5d33f2f9f992b54b', onSubmit: this.formHandler.bind(this) }, index.h("label", { key: 'ffc2988472af7719dfb0093f2bbc1c6d62226f0a', htmlFor: "stock-symbol-finder" }, "Enter Stock Symbol:"), index.h("input", { key: '4f6f54adb4af42a1b3550b72df26889471338da4', type: "text", id: "stock-symbol-finder", placeholder: "Enter stock symbol", ref: el => {
                this.input = el;
            }, value: this.stockSymbol }), index.h("button", { key: 'cd7b00b135058e86e4ed2ab017b59d47325beed7', type: "submit" }, "Find Stock")), this.stockSymbols.length > 0 && (index.h("ul", { key: '655a4e5f9200a93e5abb1c9685e4c54402d1b290', class: "stock-symbols-list" }, this.stockSymbols.map(stock => (index.h("li", { key: stock.symbol, onClick: this.fetchStockPrice.bind(this, stock.symbol) }, index.h("strong", null, stock.symbol), " - ", stock.name))))), this.appState === 'loading' && index.h("stock-loading", { key: '26f151f70acd088b3709e66a8fbacbef7d236d1d', style: { width: 'fit-content', margin: 'auto' } }), this.appState !== 'idle' && this.stockSymbols.length === 0 && !this.stockSymbol && index.h("p", { key: 'd04ff031a47a800553b558b44e60f8115aef2394', class: "instruction" }, "Please enter a stock symbol to search."), this.appState === 'error' && index.h("p", { key: '92a19fe76d1ee6a82157bb65ce572d3e26f063e5', class: "error" }, "Something went wrong.")));
    }
    static get watchers() { return {
        "stockSymbol": ["stockSymbolChanged"]
    }; }
};
function sleep(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}
StockFinder.style = stockFinderCss;

const stockLoadingCss = ":host{display:block}.loader{width:15px;aspect-ratio:1;--_g:no-repeat radial-gradient(circle closest-side, #000 90%, #0000);background:var(--_g) 0 0, var(--_g) 0 100%, var(--_g) 100% 100%;background-size:40% 40%;animation:l11 1s infinite linear}@keyframes l11{25%{background-position:100% 0, 0 100%, 100% 100%}50%{background-position:100% 0, 0 0, 100% 100%}75%{background-position:100% 0, 0 0, 0 100%}100%{background-position:100% 100%, 0 0, 0 100%}}";

const LoadingStock = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'f92b86f6ce384ee92bdcd12d937fc52c2bb20f63' }, index.h("div", { key: '4188c78756742cf58e670e66eb17427f8b8f3c96', class: "loader" })));
    }
};
LoadingStock.style = stockLoadingCss;

const stockPriceCss = ":host{display:block;border:2px solid #3b015d;margin:2rem;padding:1rem;border-radius:8px;width:350px;margin:auto;max-width:100%;font-family:sans-serif}form{display:flex;flex-direction:column;gap:10px;max-width:300px}input[type='text']{padding:5px;border:1px solid #ccc;border-radius:4px}button{padding:10px;background-color:#007bff;color:white;border:none;border-radius:4px;cursor:pointer}#stock-price{margin-top:20px;font-size:1.2em;text-align:center;color:#333;font-weight:lighter;font-size:small;font-style:oblique}";

const StockPrice = class {
    input;
    appState = 'idle';
    stockPrice = '';
    get el() { return index.getElement(this); }
    stockSymbol;
    stockSymbolChanged(newValue, oldValue) {
        console.log(`stockSymbol changed from ${oldValue} to ${newValue}`);
        if (newValue && newValue !== oldValue) {
            this.input.value = newValue; // Update the input value when stockSymbol changes
            this.fetchStockPriceForStockSymbol(newValue);
        }
    }
    hostData() {
        return {
            class: 'error',
        };
    }
    stockSymbolChangedListener(event) {
        const newStockSymbol = event.detail;
        console.log(`Received stock symbol from event: ${newStockSymbol}`);
        this.stockSymbol = newStockSymbol; // Update the stockSymbol property
    }
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.fetchStockPrice = this.fetchStockPrice.bind(this);
    }
    componentWillLoad() {
        console.log('Component will load');
        console.log(this.stockSymbol);
    }
    componentDidLoad() {
        console.log('Component did load');
        if (this.stockSymbol) {
            this.input.value = this.stockSymbol; // Set the input value if stockSymbol is provided
            this.fetchStockPriceForStockSymbol(this.stockSymbol);
        }
    }
    componentWillUpdate() {
        console.log('Component will update');
    }
    componentDidUpdate() {
        console.log('Component did update');
    }
    componentWillRender() {
        console.log('Component will render');
    }
    componentDidRender() {
        console.log('Component did render');
    }
    disconnectedCallback() {
        console.log('Component did unload');
    }
    fetchStockPrice = async (event) => {
        event.preventDefault();
        // Option 1
        // const form = event.target as HTMLFormElement;
        // const stockSymbol = form['stock-symbol'].value.trim().toUpperCase();
        //Option 2
        // const stockSymbol = this.el.shadowRoot.querySelector<HTMLInputElement>('#stock-symbol')?.value.trim().toUpperCase();
        //Option 3
        const stockSymbol = this.input.value.trim().toUpperCase();
        this.stockSymbol = stockSymbol; // Update the stockSymbol property
        if (!stockSymbol) {
            alert('Please enter a valid stock symbol.');
            return;
        }
    };
    async fetchStockPriceForStockSymbol(stockSymbol) {
        this.appState = 'loading';
        const response = await fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stockSymbol}&apikey=964XYIDUV8SBYCB0`);
        const data = await response.json();
        this.appState = 'success';
        const stockPrice = data['Global Quote'] ? data['Global Quote']['05. price'] : '0.00';
        this.stockPrice = stockPrice;
    }
    __stencil_render() {
        return [
            index.h("stock-finder", { key: 'ed9e6c8599332182773b297372ae518e485f7b44', style: { marginLeft: '-16px', border: '0px', marginTop: '0px' } }),
            index.h("form", { key: '39da102134189909cc86d966db2828742593c730', onSubmit: this.fetchStockPrice, style: { margin: 'auto', padding: '1rem' } }, index.h("label", { key: 'f1959faf79adc145e88d2f116dbbad376a197605', htmlFor: "stock-symbol" }, "Enter Stock Symbol:"), index.h("input", { key: '382eeeb5c0e6219688792cb83f28e6fc92b44654', type: "text", id: "stock-symbol", name: "stock-symbol", placeholder: "e.g., AAPL, GOOGL", ref: el => (this.input = el), value: this.stockSymbol }), index.h("button", { key: 'f62226b122eb3885e3bf376f431b70916c8b4e03', type: "submit" }, "Get Price")),
            index.h("div", { key: '26c8785dd8ccca9e0726b985bb2da2335c27dfb4' }, index.h("p", { key: 'f25756bfa089d765513c5bf386e5dd6580cf2141', id: "stock-price" }, this.appState == 'loading' ? (index.h("stock-loading", null)) : this.appState === 'success' ? (`Current Price: ${this.stockPrice}`) : this.appState === 'error' ? ('Something went wrong') : (''))),
        ];
    }
    static get watchers() { return {
        "stockSymbol": ["stockSymbolChanged"]
    }; }
    render() { return index.h(index.Host, this.hostData(), this.__stencil_render()); }
};
StockPrice.style = stockPriceCss;

exports.stock_finder = StockFinder;
exports.stock_loading = LoadingStock;
exports.stock_price = StockPrice;
//# sourceMappingURL=stock-finder.stock-loading.stock-price.entry.cjs.js.map

//# sourceMappingURL=stock-finder_3.cjs.entry.js.map
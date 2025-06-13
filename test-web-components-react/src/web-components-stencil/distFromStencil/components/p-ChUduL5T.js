import { p as proxyCustomElement, H, c as createEvent, h, a as Host } from './p-GfIgeATI.js';
import { d as defineCustomElement$1 } from './p-D7bBHQBQ.js';

const stockFinderCss = ":host{display:block;border:2px solid #3b015d;font-family:sans-serif;padding:1rem;border-radius:8px;width:350px;margin:auto;max-width:100%;margin-top:2rem}form{display:flex;flex-direction:column;gap:1rem;max-width:300px;margin:auto;padding:1rem}input{padding:0.5rem;border:1px solid #ccc;border-radius:4px}input[type='text']{padding:5px;border:1px solid #ccc;border-radius:4px}button{padding:0.5rem;background-color:#007bff;color:white;border:none;border-radius:4px;cursor:pointer}button:hover{background-color:#0056b3}.instruction,.error{font-size:0.9rem;color:#555;text-align:center;margin-bottom:1rem}.error{color:tomato}.stock-symbols-list{list-style:none;padding:0;margin:0}.stock-symbols-list li{padding:0.5rem;border-bottom:1px solid #ccc}.stock-symbols-list li:last-child{border-bottom:none}.stock-symbols-list li:hover{background-color:#f0f0f0}.stock-symbols-list li:active{outline:2px solid burlywood;outline-offset:-2px;background-color:blue;color:white}";

const StockFinder = /*@__PURE__*/ proxyCustomElement(class StockFinder extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.stockSymbolChangedEmitter = createEvent(this, "stockSymbolChanged");
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
        return (h(Host, { key: 'ca7395b6751a736cf771df283069be03ee26b064' }, h("form", { key: '3143552b5170cd468c3ab63e5d33f2f9f992b54b', onSubmit: this.formHandler.bind(this) }, h("label", { key: 'ffc2988472af7719dfb0093f2bbc1c6d62226f0a', htmlFor: "stock-symbol-finder" }, "Enter Stock Symbol:"), h("input", { key: '4f6f54adb4af42a1b3550b72df26889471338da4', type: "text", id: "stock-symbol-finder", placeholder: "Enter stock symbol", ref: el => {
                this.input = el;
            }, value: this.stockSymbol }), h("button", { key: 'cd7b00b135058e86e4ed2ab017b59d47325beed7', type: "submit" }, "Find Stock")), this.stockSymbols.length > 0 && (h("ul", { key: '655a4e5f9200a93e5abb1c9685e4c54402d1b290', class: "stock-symbols-list" }, this.stockSymbols.map(stock => (h("li", { key: stock.symbol, onClick: this.fetchStockPrice.bind(this, stock.symbol) }, h("strong", null, stock.symbol), " - ", stock.name))))), this.appState === 'loading' && h("stock-loading", { key: '26f151f70acd088b3709e66a8fbacbef7d236d1d', style: { width: 'fit-content', margin: 'auto' } }), this.appState !== 'idle' && this.stockSymbols.length === 0 && !this.stockSymbol && h("p", { key: 'd04ff031a47a800553b558b44e60f8115aef2394', class: "instruction" }, "Please enter a stock symbol to search."), this.appState === 'error' && h("p", { key: '92a19fe76d1ee6a82157bb65ce572d3e26f063e5', class: "error" }, "Something went wrong.")));
    }
    static get watchers() { return {
        "stockSymbol": ["stockSymbolChanged"]
    }; }
    static get style() { return stockFinderCss; }
}, [1, "stock-finder", {
        "stockSymbol": [1537, "stock-symbol"],
        "appState": [32],
        "stockSymbols": [32]
    }, undefined, {
        "stockSymbol": ["stockSymbolChanged"]
    }]);
function sleep(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["stock-finder", "stock-loading"];
    components.forEach(tagName => { switch (tagName) {
        case "stock-finder":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, StockFinder);
            }
            break;
        case "stock-loading":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}
defineCustomElement();

export { StockFinder as S, defineCustomElement as d };
//# sourceMappingURL=p-ChUduL5T.js.map

//# sourceMappingURL=p-ChUduL5T.js.map
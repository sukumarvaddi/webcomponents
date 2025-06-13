import { Host, h } from "@stencil/core";
export class StockFinder {
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
    static get is() { return "stock-finder"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["stock-finder.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["stock-finder.css"]
        };
    }
    static get properties() {
        return {
            "stockSymbol": {
                "type": "string",
                "attribute": "stock-symbol",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": true
            }
        };
    }
    static get states() {
        return {
            "appState": {},
            "stockSymbols": {}
        };
    }
    static get events() {
        return [{
                "method": "stockSymbolChangedEmitter",
                "name": "stockSymbolChanged",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }];
    }
    static get watchers() {
        return [{
                "propName": "stockSymbol",
                "methodName": "stockSymbolChanged"
            }];
    }
}
function sleep(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}
//# sourceMappingURL=stock-finder.js.map

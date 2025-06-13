import { h } from "@stencil/core";
export class StockPrice {
    input;
    appState = 'idle';
    stockPrice = '';
    // Refers to the host element of the component
    el;
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
    constructor() {
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
    render() {
        return [
            h("stock-finder", { key: 'ed9e6c8599332182773b297372ae518e485f7b44', style: { marginLeft: '-16px', border: '0px', marginTop: '0px' } }),
            h("form", { key: '39da102134189909cc86d966db2828742593c730', onSubmit: this.fetchStockPrice, style: { margin: 'auto', padding: '1rem' } }, h("label", { key: 'f1959faf79adc145e88d2f116dbbad376a197605', htmlFor: "stock-symbol" }, "Enter Stock Symbol:"), h("input", { key: '382eeeb5c0e6219688792cb83f28e6fc92b44654', type: "text", id: "stock-symbol", name: "stock-symbol", placeholder: "e.g., AAPL, GOOGL", ref: el => (this.input = el), value: this.stockSymbol }), h("button", { key: 'f62226b122eb3885e3bf376f431b70916c8b4e03', type: "submit" }, "Get Price")),
            h("div", { key: '26c8785dd8ccca9e0726b985bb2da2335c27dfb4' }, h("p", { key: 'f25756bfa089d765513c5bf386e5dd6580cf2141', id: "stock-price" }, this.appState == 'loading' ? (h("stock-loading", null)) : this.appState === 'success' ? (`Current Price: ${this.stockPrice}`) : this.appState === 'error' ? ('Something went wrong') : (''))),
        ];
    }
    static get is() { return "stock-price"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["stock-price.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["stock-price.css"]
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
            "stockPrice": {}
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "stockSymbol",
                "methodName": "stockSymbolChanged"
            }];
    }
    static get listeners() {
        return [{
                "name": "stockSymbolChanged",
                "method": "stockSymbolChangedListener",
                "target": "document",
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=stock-price.js.map

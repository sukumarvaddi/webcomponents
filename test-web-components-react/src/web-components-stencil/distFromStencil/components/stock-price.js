import { p as proxyCustomElement, H, h, a as Host } from './p-GfIgeATI.js';
import { d as defineCustomElement$3 } from './p-ChUduL5T.js';
import { d as defineCustomElement$2 } from './p-D7bBHQBQ.js';

const stockPriceCss = ":host{display:block;border:2px solid #3b015d;margin:2rem;padding:1rem;border-radius:8px;width:350px;margin:auto;max-width:100%;font-family:sans-serif}form{display:flex;flex-direction:column;gap:10px;max-width:300px}input[type='text']{padding:5px;border:1px solid #ccc;border-radius:4px}button{padding:10px;background-color:#007bff;color:white;border:none;border-radius:4px;cursor:pointer}#stock-price{margin-top:20px;font-size:1.2em;text-align:center;color:#333;font-weight:lighter;font-size:small;font-style:oblique}";

const StockPrice$1 = /*@__PURE__*/ proxyCustomElement(class StockPrice extends H {
    input;
    appState = 'idle';
    stockPrice = '';
    get el() { return this; }
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
        super();
        this.__registerHost();
        this.__attachShadow();
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
            h("stock-finder", { key: 'ed9e6c8599332182773b297372ae518e485f7b44', style: { marginLeft: '-16px', border: '0px', marginTop: '0px' } }),
            h("form", { key: '39da102134189909cc86d966db2828742593c730', onSubmit: this.fetchStockPrice, style: { margin: 'auto', padding: '1rem' } }, h("label", { key: 'f1959faf79adc145e88d2f116dbbad376a197605', htmlFor: "stock-symbol" }, "Enter Stock Symbol:"), h("input", { key: '382eeeb5c0e6219688792cb83f28e6fc92b44654', type: "text", id: "stock-symbol", name: "stock-symbol", placeholder: "e.g., AAPL, GOOGL", ref: el => (this.input = el), value: this.stockSymbol }), h("button", { key: 'f62226b122eb3885e3bf376f431b70916c8b4e03', type: "submit" }, "Get Price")),
            h("div", { key: '26c8785dd8ccca9e0726b985bb2da2335c27dfb4' }, h("p", { key: 'f25756bfa089d765513c5bf386e5dd6580cf2141', id: "stock-price" }, this.appState == 'loading' ? (h("stock-loading", null)) : this.appState === 'success' ? (`Current Price: ${this.stockPrice}`) : this.appState === 'error' ? ('Something went wrong') : (''))),
        ];
    }
    static get watchers() { return {
        "stockSymbol": ["stockSymbolChanged"]
    }; }
    static get style() { return stockPriceCss; }
    render() { return h(Host, this.hostData(), this.__stencil_render()); }
}, [1, "stock-price", {
        "stockSymbol": [1537, "stock-symbol"],
        "appState": [32],
        "stockPrice": [32]
    }, [[4, "stockSymbolChanged", "stockSymbolChangedListener"]], {
        "stockSymbol": ["stockSymbolChanged"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["stock-price", "stock-finder", "stock-loading"];
    components.forEach(tagName => { switch (tagName) {
        case "stock-price":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, StockPrice$1);
            }
            break;
        case "stock-finder":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "stock-loading":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}
defineCustomElement$1();

const StockPrice = StockPrice$1;
const defineCustomElement = defineCustomElement$1;

export { StockPrice, defineCustomElement };
//# sourceMappingURL=stock-price.js.map

//# sourceMappingURL=stock-price.js.map
import { p as proxyCustomElement, H, h, a as Host } from './p-GfIgeATI.js';

const stockLoadingCss = ":host{display:block}.loader{width:15px;aspect-ratio:1;--_g:no-repeat radial-gradient(circle closest-side, #000 90%, #0000);background:var(--_g) 0 0, var(--_g) 0 100%, var(--_g) 100% 100%;background-size:40% 40%;animation:l11 1s infinite linear}@keyframes l11{25%{background-position:100% 0, 0 100%, 100% 100%}50%{background-position:100% 0, 0 0, 100% 100%}75%{background-position:100% 0, 0 0, 0 100%}100%{background-position:100% 100%, 0 0, 0 100%}}";

const LoadingStock = /*@__PURE__*/ proxyCustomElement(class LoadingStock extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return (h(Host, { key: 'f92b86f6ce384ee92bdcd12d937fc52c2bb20f63' }, h("div", { key: '4188c78756742cf58e670e66eb17427f8b8f3c96', class: "loader" })));
    }
    static get style() { return stockLoadingCss; }
}, [1, "stock-loading"]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["stock-loading"];
    components.forEach(tagName => { switch (tagName) {
        case "stock-loading":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, LoadingStock);
            }
            break;
    } });
}
defineCustomElement();

export { LoadingStock as L, defineCustomElement as d };
//# sourceMappingURL=p-D7bBHQBQ.js.map

//# sourceMappingURL=p-D7bBHQBQ.js.map
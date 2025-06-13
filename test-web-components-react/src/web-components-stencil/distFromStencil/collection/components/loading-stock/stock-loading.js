import { Host, h } from "@stencil/core";
export class LoadingStock {
    render() {
        return (h(Host, { key: 'f92b86f6ce384ee92bdcd12d937fc52c2bb20f63' }, h("div", { key: '4188c78756742cf58e670e66eb17427f8b8f3c96', class: "loader" })));
    }
    static get is() { return "stock-loading"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["stock-loading.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["stock-loading.css"]
        };
    }
}
//# sourceMappingURL=stock-loading.js.map

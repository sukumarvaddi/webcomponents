import { h } from "@stencil/core";
export class SideDrawer {
    activeTab = 'links';
    title;
    open;
    constructor() {
        this.closeSideDrawer = this.closeSideDrawer.bind(this);
        this.toggle = this.toggle.bind(this);
        this.setActiveTab = this.setActiveTab.bind(this);
    }
    async toggle() {
        this.open = !this.open;
    }
    closeSideDrawer() {
        this.open = false;
    }
    setActiveTab(tab) {
        this.activeTab = tab;
    }
    render() {
        const content = this.activeTab === 'links' ? (h("slot", null)) : (h("div", { class: "contact-info" }, h("ul", null, h("li", null, "Email: svaddi@paychex.com "), h("li", null, "Phone: +1 (123) 456-7890"), h("li", null, "Address: 123 Main St, City, Country"))));
        return (h("div", { key: 'e470e0cc8aa5325c439661c33d70d2c5fc1430d5', class: "backdrop", onClick: this.closeSideDrawer }, h("aside", { key: 'd5f2876f6d57f75912a986b2913cfcc304fedf1d', onClick: event => event.stopPropagation() }, h("header", { key: '2410fe0f771632cca42d0c3107bc255f181f8617' }, h("h1", { key: '3c0dd45f2b95df8e84f7f011d75b4ea247e9de14' }, this.title)), h("main", { key: '69a702b606d84ef01905acc8fee521752b44b91b' }, h("section", { key: 'b0d6144ade938c0ace6069b6db7b824553a39ba3', id: "tabs" }, h("button", { key: 'bb5b5d96255c2e60a08d198be504d3ffae792bea', class: this.activeTab === 'links' ? 'active' : '', onClick: () => {
                this.setActiveTab('links');
            } }, "Links"), h("button", { key: '6007efe084f8c822ce1604ef4ff113e625173b7c', class: this.activeTab === 'contact' ? 'active' : '', onClick: () => {
                this.setActiveTab('contact');
            } }, "Contact Information")), content))));
    }
    static get is() { return "side-drawer"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["side-drawer.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["side-drawer.css"]
        };
    }
    static get properties() {
        return {
            "title": {
                "type": "string",
                "attribute": "title",
                "mutable": false,
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
            },
            "open": {
                "type": "boolean",
                "attribute": "open",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
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
            "activeTab": {}
        };
    }
    static get methods() {
        return {
            "toggle": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            }
        };
    }
}
//# sourceMappingURL=side-drawer.js.map

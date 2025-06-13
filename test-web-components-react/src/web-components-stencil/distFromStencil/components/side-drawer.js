import { p as proxyCustomElement, H, h } from './p-GfIgeATI.js';

const sideDrawerCss = ".backdrop{position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.5);transition:opacity 0.3s ease-in;opacity:0;pointer-events:none;}:host([open]) .backdrop{opacity:1;pointer-events:all;}aside{position:fixed;width:30rem;top:0px;left:-1000px;max-width:80%;height:100vh;background-color:#e9e9e9;box-shadow:2px 0px 5px rgba(0, 0, 0, 0.26);transition:left 0.3s ease-in}:host([open]) aside{left:0px;transition:left 0.3s ease-out}header{padding:1rem;background-color:black}header h1{font-size:1.5rem;color:white}#tabs{display:flex;justify-content:center;padding:20px 0px}#tabs button{font:inherit;padding:10px 20px;border:none;background-color:#ccc;color:black;cursor:pointer}#tabs button.active,#tabs button:hover{background-color:#f90;color:white}.contact-info ul{list-style:none;padding:0;margin:0}.contact-info li{padding:0.5rem;border-bottom:1px solid #ccc}";

const SideDrawer$1 = /*@__PURE__*/ proxyCustomElement(class SideDrawer extends H {
    activeTab = 'links';
    title;
    open;
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
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
    static get style() { return sideDrawerCss; }
}, [1, "side-drawer", {
        "title": [513],
        "open": [1540],
        "activeTab": [32],
        "toggle": [64]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["side-drawer"];
    components.forEach(tagName => { switch (tagName) {
        case "side-drawer":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, SideDrawer$1);
            }
            break;
    } });
}
defineCustomElement$1();

const SideDrawer = SideDrawer$1;
const defineCustomElement = defineCustomElement$1;

export { SideDrawer, defineCustomElement };
//# sourceMappingURL=side-drawer.js.map

//# sourceMappingURL=side-drawer.js.map
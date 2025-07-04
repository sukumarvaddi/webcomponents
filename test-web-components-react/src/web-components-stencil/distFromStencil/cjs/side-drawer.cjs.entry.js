'use strict';

var index = require('./index-DYOHFMeb.js');

const sideDrawerCss = ".backdrop{position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.5);transition:opacity 0.3s ease-in;opacity:0;pointer-events:none;}:host([open]) .backdrop{opacity:1;pointer-events:all;}aside{position:fixed;width:30rem;top:0px;left:-1000px;max-width:80%;height:100vh;background-color:#e9e9e9;box-shadow:2px 0px 5px rgba(0, 0, 0, 0.26);transition:left 0.3s ease-in}:host([open]) aside{left:0px;transition:left 0.3s ease-out}header{padding:1rem;background-color:black}header h1{font-size:1.5rem;color:white}#tabs{display:flex;justify-content:center;padding:20px 0px}#tabs button{font:inherit;padding:10px 20px;border:none;background-color:#ccc;color:black;cursor:pointer}#tabs button.active,#tabs button:hover{background-color:#f90;color:white}.contact-info ul{list-style:none;padding:0;margin:0}.contact-info li{padding:0.5rem;border-bottom:1px solid #ccc}";

const SideDrawer = class {
    activeTab = 'links';
    title;
    open;
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        const content = this.activeTab === 'links' ? (index.h("slot", null)) : (index.h("div", { class: "contact-info" }, index.h("ul", null, index.h("li", null, "Email: svaddi@paychex.com "), index.h("li", null, "Phone: +1 (123) 456-7890"), index.h("li", null, "Address: 123 Main St, City, Country"))));
        return (index.h("div", { key: 'e470e0cc8aa5325c439661c33d70d2c5fc1430d5', class: "backdrop", onClick: this.closeSideDrawer }, index.h("aside", { key: 'd5f2876f6d57f75912a986b2913cfcc304fedf1d', onClick: event => event.stopPropagation() }, index.h("header", { key: '2410fe0f771632cca42d0c3107bc255f181f8617' }, index.h("h1", { key: '3c0dd45f2b95df8e84f7f011d75b4ea247e9de14' }, this.title)), index.h("main", { key: '69a702b606d84ef01905acc8fee521752b44b91b' }, index.h("section", { key: 'b0d6144ade938c0ace6069b6db7b824553a39ba3', id: "tabs" }, index.h("button", { key: 'bb5b5d96255c2e60a08d198be504d3ffae792bea', class: this.activeTab === 'links' ? 'active' : '', onClick: () => {
                this.setActiveTab('links');
            } }, "Links"), index.h("button", { key: '6007efe084f8c822ce1604ef4ff113e625173b7c', class: this.activeTab === 'contact' ? 'active' : '', onClick: () => {
                this.setActiveTab('contact');
            } }, "Contact Information")), content))));
    }
};
SideDrawer.style = sideDrawerCss;

exports.side_drawer = SideDrawer;
//# sourceMappingURL=side-drawer.entry.cjs.js.map

//# sourceMappingURL=side-drawer.cjs.entry.js.map
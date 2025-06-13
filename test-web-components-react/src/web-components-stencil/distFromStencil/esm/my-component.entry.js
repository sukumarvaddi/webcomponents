import { r as registerInstance, h } from './index-DbC7otHO.js';
import { format } from './index.js';

const myComponentCss = ":host{display:block}";

const MyComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /**
     * The first name
     */
    first;
    /**
     * The middle name
     */
    middle;
    /**
     * The last name
     */
    last;
    getText() {
        return format(this.first, this.middle, this.last);
    }
    render() {
        return h("div", { key: '0d481e58fc31ee585bc7ad60794afa8a7c29064b' }, "Hello, World! I'm ", this.getText());
    }
};
MyComponent.style = myComponentCss;

export { MyComponent as my_component };
//# sourceMappingURL=my-component.entry.js.map

//# sourceMappingURL=my-component.entry.js.map
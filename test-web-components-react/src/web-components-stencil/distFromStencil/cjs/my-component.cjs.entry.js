'use strict';

var index = require('./index-DYOHFMeb.js');
var index$1 = require('./index.cjs.js');

const myComponentCss = ":host{display:block}";

const MyComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        return index$1.format(this.first, this.middle, this.last);
    }
    render() {
        return index.h("div", { key: '0d481e58fc31ee585bc7ad60794afa8a7c29064b' }, "Hello, World! I'm ", this.getText());
    }
};
MyComponent.style = myComponentCss;

exports.my_component = MyComponent;
//# sourceMappingURL=my-component.entry.cjs.js.map

//# sourceMappingURL=my-component.cjs.entry.js.map
import type { Components, JSX } from "../types/components";

interface SideDrawer extends Components.SideDrawer, HTMLElement {}
export const SideDrawer: {
    prototype: SideDrawer;
    new (): SideDrawer;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

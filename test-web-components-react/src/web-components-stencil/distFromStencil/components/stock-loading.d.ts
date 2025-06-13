import type { Components, JSX } from "../types/components";

interface StockLoading extends Components.StockLoading, HTMLElement {}
export const StockLoading: {
    prototype: StockLoading;
    new (): StockLoading;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

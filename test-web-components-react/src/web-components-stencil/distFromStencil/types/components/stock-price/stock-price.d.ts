export declare class StockPrice {
    input: HTMLInputElement;
    appState: 'idle' | 'loading' | 'success' | 'error';
    stockPrice: string;
    el: HTMLElement;
    stockSymbol: string;
    stockSymbolChanged(newValue: string, oldValue: string): void;
    hostData(): {
        class: string;
    };
    stockSymbolChangedListener(event: CustomEvent<string>): void;
    constructor();
    componentWillLoad(): void;
    componentDidLoad(): void;
    componentWillUpdate(): void;
    componentDidUpdate(): void;
    componentWillRender(): void;
    componentDidRender(): void;
    disconnectedCallback(): void;
    fetchStockPrice: (event: Event) => Promise<void>;
    private fetchStockPriceForStockSymbol;
    render(): any[];
}

import { EventEmitter } from '../../stencil-public-runtime';
export interface StockSymbolMatch {
    symbol: string;
    name: string;
    type: string;
    region: string;
    marketOpen: string;
    marketClose: string;
    timezone: string;
    currency: string;
    matchScore: string;
}
export declare class StockFinder {
    input: HTMLInputElement;
    appState: 'idle' | 'loading' | 'success' | 'error';
    stockSymbols: {
        symbol: string;
        name: string;
    }[];
    stockSymbol: string;
    stockSymbolChanged(newValue: string, oldValue: string): void;
    stockSymbolChangedEmitter: EventEmitter<string>;
    formHandler(event: Event): void;
    fetchStockSymbols(stockSymbol: string): Promise<void>;
    fetchStockPrice(stockSymbol: string): void;
    componentDidLoad(): void;
    render(): any;
}

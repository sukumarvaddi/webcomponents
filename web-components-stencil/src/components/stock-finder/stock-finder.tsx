import { Component, Host, Event, Prop, State, Watch, h, EventEmitter } from '@stencil/core';

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

@Component({
  tag: 'stock-finder',
  styleUrl: 'stock-finder.css',
  shadow: true,
})
export class StockFinder {
  input: HTMLInputElement;
  @State() appState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  @State() stockSymbols: { symbol: string; name: string }[] = [];
  @Prop({ mutable: true, reflect: true }) stockSymbol: string;
  @Watch('stockSymbol')
  stockSymbolChanged(newValue: string, oldValue: string) {
    console.log(`stockSymbol changed from ${oldValue} to ${newValue}`);
    if (newValue && newValue !== oldValue) {
      this.input.value = newValue;
      this.fetchStockSymbols(newValue);
    }
  }

  @Event({ eventName: 'stockSymbolChanged', bubbles: true, composed: true }) stockSymbolChangedEmitter: EventEmitter<string>;

  formHandler(event: Event) {
    event.preventDefault(); // Prevent the default form submission behavior
    const userEnteredStockSymbol = this.input.value.trim();
    this.stockSymbol = userEnteredStockSymbol; // Update the stockSymbol property
  }

  async fetchStockSymbols(stockSymbol: string) {
    this.appState = 'loading';
    await sleep(2000); // Set the app state to loading
    const response = await fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${stockSymbol}&apikey=G5Q599MACNAP8JET`);
    const data = await response.json();
    if (data.bestMatches === undefined) {
      this.appState = 'error'; // Set the app state to error if no matches found
      console.error('No matches found for the stock symbol:', stockSymbol);
      this.stockSymbols = [];
      return;
    }
    this.appState = 'success'; // Set the app state to success
    this.stockSymbols = data?.bestMatches?.map((match: StockSymbolMatch) => ({ symbol: match['1. symbol'], name: match['2. name'] })) ?? [];
    console.log('Fetched stock symbols:', this.stockSymbols);
  }

  fetchStockPrice(stockSymbol: string) {
    this.stockSymbolChangedEmitter.emit(stockSymbol);
  }

  componentDidLoad() {
    console.log('Component did load');
    if (this.stockSymbol) {
      this.input.value = this.stockSymbol; // Set the input value if stockSymbol is provided
      this.fetchStockSymbols(this.stockSymbol);
    }
  }

  render() {
    return (
      <Host>
        <form onSubmit={this.formHandler.bind(this)}>
          <label htmlFor="stock-symbol-finder">Enter Stock Symbol:</label>
          <input
            type="text"
            id="stock-symbol-finder"
            placeholder="Enter stock symbol"
            ref={el => {
              this.input = el;
            }}
            value={this.stockSymbol}
          />
          <button type="submit">Find Stock</button>
        </form>
        {this.stockSymbols.length > 0 && (
          <ul class="stock-symbols-list">
            {this.stockSymbols.map(stock => (
              <li key={stock.symbol} onClick={this.fetchStockPrice.bind(this, stock.symbol)}>
                <strong>{stock.symbol}</strong> - {stock.name}
              </li>
            ))}
          </ul>
        )}
        {this.appState === 'loading' && <stock-loading style={{ width: 'fit-content', margin: 'auto' }}></stock-loading>}
        {this.appState !== 'idle' && this.stockSymbols.length === 0 && !this.stockSymbol && <p class="instruction">Please enter a stock symbol to search.</p>}
        {this.appState === 'error' && <p class="error">Something went wrong.</p>}
        {/* <p>Note: This component uses the Alpha Vantage API for stock symbol search.</p>
        <p>API Key: 964XYIDUV8SBYCB0</p>
        <p>
          For more information, visit <a href="https://www.alphavantage.co/documentation/">Alpha Vantage Documentation</a>.
        </p> */}
      </Host>
    );
  }
}
function sleep(time: number) {
  return new Promise(resolve => setTimeout(resolve, time));
}

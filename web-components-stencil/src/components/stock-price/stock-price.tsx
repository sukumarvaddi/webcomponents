import { Component, Element, Prop, Listen, State, Watch, h } from '@stencil/core';

@Component({
  tag: 'stock-price',
  styleUrl: 'stock-price.css',
  shadow: true,
})
export class StockPrice {
  input: HTMLInputElement;
  @State() appState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  @State() stockPrice: string = '';

  // Refers to the host element of the component
  @Element() el: HTMLElement;

  @Prop({ mutable: true, reflect: true }) stockSymbol: string;

  @Watch('stockSymbol')
  stockSymbolChanged(newValue: string, oldValue: string) {
    console.log(`stockSymbol changed from ${oldValue} to ${newValue}`);
    if (newValue && newValue !== oldValue) {
      this.input.value = newValue; // Update the input value when stockSymbol changes
      this.fetchStockPriceForStockSymbol(newValue);
    }
  }

  hostData() {
    return {
      class: 'error',
    };
  }

  @Listen('stockSymbolChanged', { target: 'document' })
  stockSymbolChangedListener(event: CustomEvent<string>) {
    const newStockSymbol = event.detail;
    console.log(`Received stock symbol from event: ${newStockSymbol}`);
    this.stockSymbol = newStockSymbol; // Update the stockSymbol property
  }

  constructor() {
    this.fetchStockPrice = this.fetchStockPrice.bind(this);
  }

  componentWillLoad() {
    console.log('Component will load');
    console.log(this.stockSymbol);
  }

  componentDidLoad() {
    console.log('Component did load');
    if (this.stockSymbol) {
      this.input.value = this.stockSymbol; // Set the input value if stockSymbol is provided
      this.fetchStockPriceForStockSymbol(this.stockSymbol);
    }
  }
  componentWillUpdate() {
    console.log('Component will update');
  }

  componentDidUpdate() {
    console.log('Component did update');
  }

  componentWillRender() {
    console.log('Component will render');
  }

  componentDidRender() {
    console.log('Component did render');
  }

  disconnectedCallback() {
    console.log('Component did unload');
  }

  fetchStockPrice = async (event: Event) => {
    event.preventDefault();
    // Option 1
    // const form = event.target as HTMLFormElement;
    // const stockSymbol = form['stock-symbol'].value.trim().toUpperCase();

    //Option 2
    // const stockSymbol = this.el.shadowRoot.querySelector<HTMLInputElement>('#stock-symbol')?.value.trim().toUpperCase();

    //Option 3
    const stockSymbol = this.input.value.trim().toUpperCase();
    this.stockSymbol = stockSymbol; // Update the stockSymbol property
    if (!stockSymbol) {
      alert('Please enter a valid stock symbol.');
      return;
    }
  };

  private async fetchStockPriceForStockSymbol(stockSymbol: string) {
    this.appState = 'loading';
    const response = await fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stockSymbol}&apikey=964XYIDUV8SBYCB0`);
    const data = await response.json();
    this.appState = 'success';
    const stockPrice = data['Global Quote'] ? data['Global Quote']['05. price'] : '0.00';
    this.stockPrice = stockPrice;
  }

  render() {
    return [
      <stock-finder style={{ marginLeft: '-16px', border: '0px', marginTop: '0px' }}></stock-finder>,
      <form onSubmit={this.fetchStockPrice} style={{ margin: 'auto', padding: '1rem' }}>
        <label htmlFor="stock-symbol">Enter Stock Symbol:</label>
        <input type="text" id="stock-symbol" name="stock-symbol" placeholder="e.g., AAPL, GOOGL" ref={el => (this.input = el)} value={this.stockSymbol} />
        <button type="submit">Get Price</button>
      </form>,
      <div>
        <p id="stock-price">
          {this.appState == 'loading' ? (
            <stock-loading></stock-loading>
          ) : this.appState === 'success' ? (
            `Current Price: ${this.stockPrice}`
          ) : this.appState === 'error' ? (
            'Something went wrong'
          ) : (
            ''
          )}
        </p>
      </div>,
    ];
  }
}

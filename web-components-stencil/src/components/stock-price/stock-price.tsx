import { Component, Element, State, h } from '@stencil/core';

@Component({
  tag: 'stock-price',
  styleUrl: 'stock-price.css',
  shadow: true,
})
export class StockPrice {
  input: HTMLInputElement;

  // Refers to the host element of the component
  @Element() el: HTMLElement;

  @State() stockPrice: string = '';

  constructor() {
    this.fetchStockPrice = this.fetchStockPrice.bind(this);
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

    if (!stockSymbol) {
      alert('Please enter a valid stock symbol.');
      return;
    }
    const response = await fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stockSymbol}&apikey=964XYIDUV8SBYCB0`);
    const data = await response.json();
    const stockPrice = data['Global Quote'] ? data['Global Quote']['05. price'] : '0.00';
    this.stockPrice = stockPrice;
  };

  render() {
    return [
      <form onSubmit={this.fetchStockPrice}>
        <label htmlFor="stock-symbol">Enter Stock Symbol:</label>
        <input type="text" id="stock-symbol" name="stock-symbol" placeholder="e.g., AAPL, GOOGL" ref={el => (this.input = el)} />
        <button type="submit">Get Price</button>
      </form>,
      <div>
        <p id="stock-price">Current Price: ${this.stockPrice}</p>
      </div>,
    ];
  }
}

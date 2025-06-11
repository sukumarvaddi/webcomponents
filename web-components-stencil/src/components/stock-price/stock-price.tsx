import { Component, Host, State, h } from '@stencil/core';

@Component({
  tag: 'stock-price',
  styleUrl: 'stock-price.css',
  shadow: true,
})
export class StockPrice {
  @State() stockPrice: string = '';

  constructor() {
    this.fetchStockPrice = this.fetchStockPrice.bind(this);
  }

  fetchStockPrice = async (event: Event) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const stockSymbol = form['stock-symbol'].value.trim().toUpperCase();
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
        <input type="text" id="stock-symbol" name="stock-symbol" placeholder="e.g., AAPL, GOOGL" />
        <button type="submit">Get Price</button>
      </form>,
      <div>
        <p id="stock-price">Current Price: ${this.stockPrice}</p>
      </div>,
    ];
  }
}

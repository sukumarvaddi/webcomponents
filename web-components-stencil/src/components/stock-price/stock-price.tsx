import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'stock-price',
  styleUrl: 'stock-price.css',
  shadow: true,
})
export class StockPrice {
  fetchStockPrice = async (event: Event) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const stockSymbol = form['stock-symbol'].value.trim().toUpperCase();
    if (!stockSymbol) {
      alert('Please enter a valid stock symbol.');
      return;
    }
  };

  render() {
    return [
      <form onSubmit={this.fetchStockPrice}>
        <label htmlFor="stock-symbol">Enter Stock Symbol:</label>
        <input type="text" id="stock-symbol" name="stock-symbol" placeholder="e.g., AAPL, GOOGL" />
        <button type="submit">Get Price</button>
      </form>,
      <div>
        <p id="stock-price">Current Price: $0.00</p>
      </div>,
    ];
  }
}

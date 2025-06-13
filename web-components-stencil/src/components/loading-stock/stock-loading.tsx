import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'stock-loading',
  styleUrl: 'stock-loading.css',
  shadow: true,
})
export class LoadingStock {
  render() {
    return (
      <Host>
        <div class="loader"></div>
      </Host>
    );
  }
}

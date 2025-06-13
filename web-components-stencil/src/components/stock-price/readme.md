# stock-price



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description | Type     | Default     |
| ------------- | -------------- | ----------- | -------- | ----------- |
| `stockSymbol` | `stock-symbol` |             | `string` | `undefined` |


## Dependencies

### Depends on

- [stock-finder](../stock-finder)
- [stock-loading](../loading-stock)

### Graph
```mermaid
graph TD;
  stock-price --> stock-finder
  stock-price --> stock-loading
  stock-finder --> stock-loading
  style stock-price fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

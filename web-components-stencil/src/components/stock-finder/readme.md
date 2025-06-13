# stock-finder



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description | Type     | Default     |
| ------------- | -------------- | ----------- | -------- | ----------- |
| `stockSymbol` | `stock-symbol` |             | `string` | `undefined` |


## Events

| Event                | Description | Type                  |
| -------------------- | ----------- | --------------------- |
| `stockSymbolChanged` |             | `CustomEvent<string>` |


## Dependencies

### Used by

 - [stock-price](../stock-price)

### Depends on

- [stock-loading](../loading-stock)

### Graph
```mermaid
graph TD;
  stock-finder --> stock-loading
  stock-price --> stock-finder
  style stock-finder fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

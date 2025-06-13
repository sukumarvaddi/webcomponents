import { useState } from "react";

import { StockFinder, StockPrice } from "./components";
import "./App.css";

function App() {
  const [showStockPrice, setShowStockPrice] = useState(false);

  return (
    <>
      <StockFinder />
      {showStockPrice && <StockPrice stockSymbol="AAPL" />}
      <button
        onClick={() => {
          setShowStockPrice((prev) => !prev);
        }}
      >
        Toggle Stock Price
      </button>
    </>
  );
}

export default App;

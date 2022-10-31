import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Crypto from "./Components/Crypto";

function App() {
  const [crypto, setCrypto] = useState([]);
  const [search, setSearch] = useState("");
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=100&page=1&sparkline=false";

  useEffect(() => {
    axios.get(url).then((res) => {
      setCrypto(res.data);
    });
  }, []);

  const matchSearch = crypto.filter((cry) =>
    cry.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="crypto-app">
      <div className="crypto-search">
        <h1 className="search-text"> Search: </h1>
        <form>
          <input
            className="search-input"
            type="text"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </div>
      {matchSearch.map((cry) => {
        return (
          <Crypto
            key={cry.id}
            name={cry.name}
            image={cry.image}
            symbol={cry.symbol}
            price={cry.current_price}
            volume={cry.total_volume.toLocaleString()}
            change={cry.price_change_percentage_24h}
          />
        );
      })}
    </div>
  );
}

export default App;

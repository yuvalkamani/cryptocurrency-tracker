import React from "react";
import "./Crypto.css";

const Crypto = ({ name, image, symbol, price, volume, change }) => {
  return (
    <div className="crypto-container">
      <div className="crypto-row">
        <img src={image} alt="" />
        <h1>{name}</h1>
        <p className="crypto-symbol">{symbol}</p>
      </div>
      <div className="crypto-data">
        <p className="crypto-price">${price}</p>
        <p className="crypto-volume">${volume.toLocaleString()}</p>
        {change > 0 ? (
          <p className="crypto-pchange">{change}</p>
        ) : (
          <p className="crypto-nchange">{change}</p>
        )}
      </div>
    </div>
  );
};

export default Crypto;

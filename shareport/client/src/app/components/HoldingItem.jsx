import React, { useState, useEffect } from 'react';

const HoldingItem = ({ holding }) => {
  const [dayChange, setDayChange] = useState(0);
  const [marketValue, setMarketValue] = useState(0);

  useEffect(() => {
    setDayChange(Math.round(holding.quote.dayChange * 100) / 100);
    setMarketValue(Math.round(holding.numberOfShares * holding.quote.price * 100) / 100);
  }, []);

  return (
    <div className="details-holding-item">
      <div className="details-col1 details-symbol">{holding.symbol}</div>
      <div className="details-col2">{holding.name}</div>
      <div className="details-col3">{holding.numberOfShares}</div>
      <div className="details-col4">${holding.basisPrice}</div>
      <div className="details-col5">{`$${holding.quote.price} (${dayChange}%)`}</div>
      <div className="details-col6">${holding.costBasis}</div>
      <div className="details-col7">${marketValue}</div>
      <div className="details-col8">${Math.round((marketValue - holding.costBasis) * 100) / 100}</div>
    </div>
  );
};

export default HoldingItem;

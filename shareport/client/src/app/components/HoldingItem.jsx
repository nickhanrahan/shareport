import React from 'react';

const HoldingItem = ({ holding, dollarGL }) => {
  return (
    <div className="details-holding-item">
      <div className="details-col1">{holding.symbol}</div>
      <div className="details-col2">{holding.name}</div>
      <div className="details-col3">{holding.numberOfShares}</div>
      <div className="details-col4">${holding.basisPrice}</div>
      <div className="details-col5">${holding.quote.price}</div>
      <div className="details-col6">{holding.costBasis}</div>
      <div className="details-col7">{holding.numberOfShares * holding.quote.price}</div>
      <div className="details-col8">{dollarGL}</div>
    </div>
  );
};

export default HoldingItem;

import React, { useState, useEffect } from 'react';

const CreateItem = ({ selection, changeShares }) => {
  const [numShares, setNumShares] = useState('');
  const [marketVal, setMarketVal] = useState(0);

  const handleSharesInput = (event) => {
    const number = parseInt(event.target.value);
    setNumShares(number);
    changeShares(number, selection.symbol);
  };

  useEffect(() => {
    setMarketVal(Math.round(numShares * selection.price * 100) / 100);
  }, [numShares]);

  return (
    <div className="create-item">
      <div className="create-col1">{selection.symbol}</div>
      <div className="create-col2">{selection.name}</div>
      <input className="create-col3 create-no-shares" type="number" min="1" max="10000" required onChange={(e) => (handleSharesInput(e))} />
      <div className="create-col4">{`$${selection.price}`}</div>
      <div className="create-col5">{`${selection.dayChange} (${selection.dayChangePct}%)`}</div>
      <div className="create-col6">{`$${marketVal}`}</div>
    </div>
  );
};

export default CreateItem;
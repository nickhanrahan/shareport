import React, { useState, useEffect } from 'react';

const CreateItem = ({ selection, changeShares }) => {
  const [numShares, setNumShares] = useState('');
  const [marketVal, setMarketVal] = useState(0);

  const handleSharesInput = (event) => {
    setNumShares(event.target.value);
    changeShares(event.target.value, selection.symbol);
  };

  useEffect(() => {
    setMarketVal(Math.round(numShares * selection.price * 100) / 100);
  }, [numShares]);

  return (
    <div className="create-item">
      <div className="create-col1">{selection.symbol}</div>
      <div className="create-col2">{selection.name}</div>
      <input className="create-col3" type="number" min="1" max="1000" required onChange={(e) => (handleSharesInput(e))} />
      <div className="create-col4">{`$${selection.price}`}</div>
      <div className="create-col5">{`${selection.dayChange} (${selection.dayChangePct}%)`}</div>
      <div className="create-col6">{`$${marketVal}`}</div>
    </div>
  )
}

export default CreateItem;
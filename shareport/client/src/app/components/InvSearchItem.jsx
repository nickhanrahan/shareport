import React from 'react';

const InvSearchItem = ({ result, handleSelection }) => {
  return (
    <button
      type="button"
      className="inv-list-item inv-list-item-action"
      onClick={() => handleSelection(result)}
    >
      <div className="inv-item-ticker">{result.symbol}</div>
      <div className="inv-item-company">{result.name}</div>
      <div className="inv-item-ex">{result.exchangeShortName}</div>
    </button>
  )
}

export default InvSearchItem;

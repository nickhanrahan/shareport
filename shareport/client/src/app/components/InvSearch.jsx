import React, { useState } from 'react';
import axios from 'axios';

const InvSearch = () => {
  const [selected, setSelected] = useState('');

  const handleSelection = (option) => {
    setSelected(option);
  };

  return (
    <div className="inv-search">
      <input className="inv-search-input" placeholder="Search by Ticker or Company Name..."></input>
    </div>
  )
}

export default InvSearch;

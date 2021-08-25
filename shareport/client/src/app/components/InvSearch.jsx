import React, { useState } from 'react';
import axios from 'axios';
import InvSearchItem from './InvSearchItem.jsx';

const InvSearch = () => {
  const [selected, setSelected] = useState('');

  const handleSelection = (option) => {
    setSelected(option);
  };

  return (
    <div className="inv-search">
      <input className="inv-search-input" placeholder="Search by Ticker or Company Name..."></input>
      <ul className="inv-search-list">
      </ul>
    </div>
  )
}

export default InvSearch;

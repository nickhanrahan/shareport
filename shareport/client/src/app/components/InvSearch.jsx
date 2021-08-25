import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InvSearchItem from './InvSearchItem.jsx';
import './inv-search.css';

const InvSearch = ({ handleSelection }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query.length > 0) {
      axios.get(`/search/${query}`)
        .then((res) => {
          setResults(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [query]);

  return (
    <div className="inv-search">
      <input className="inv-search-input" placeholder="Search by Ticker or Company Name..." onChange={(e) => setQuery(e.target.value)}></input>
      <ul className="inv-dropdown">
        {results.map(result => (
          <InvSearchItem key={result.symbol} result={result} handleSelection={handleSelection} />
        ))}
      </ul>
    </div>
  )
}

export default InvSearch;

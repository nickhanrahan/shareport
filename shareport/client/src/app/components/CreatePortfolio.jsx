import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './modal.css';
import InvSearch from './InvSearch.jsx';

const CreatePortfolio = ({ open, setOpen }) => {
  if (!open) return null;

  const [selected, setSelected] = useState([]);
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [risk, setRisk] = useState('');
  const [thesis, setThesis] = useState('');

  const handleSelection = (selection) => {
    const invName = {
      symbol: selection.symbol,
      name: selection.name,
      exchange: selection.exchangeShortName,
    };
    axios.get(`/quote/${selection.symbol}`)
      .then((quote) => {
        invName.name = quote.data.name;
        const invQuote = {
          price: quote.data.price,
          dayChange: Math.round((quote.data.change * 100)) / 100,
          dayChangePct: Math.round((quote.data.changesPercentage * 100)) / 100
        };
        const newInv = { ...invName, ...invQuote };
        setSelected([newInv, ...selected]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {

  }, [selected]);

  return ReactDOM.createPortal(
    <>
      <div className="modal-overlay" />
      <div className="modal-window">
        <div className="create-bar">
          <button type="button" className="btn-close-create" onClick={() => setOpen(false)}>X</button>
        </div>
        <div className="create-form-ctr">
          <form className="create-form">
            <div className="username">
              <label htmlFor="username">Username: </label>
              <input name="username" required />
            </div>
            <div className="name">
              <label htmlFor="name">Portfolio Name: </label>
              <input name="name" required />
            </div>
            <InvSearch handleSelection={handleSelection}/>
            <div className="create-list">

            </div>
            <div className="risk">
              <label className="risk-label" htmlFor="risk">Risk Tolerance: </label>
              <input name="risk" type="radio" value="1" required />
              Conservative
              <input name="risk" type="radio" value="2" />
              Moderate Conservative
              <input name="risk" type="radio" value="3" />
              Moderate
              <input name="risk" type="radio" value="4" />
              Moderate Growth
              <input name="risk" type="radio" value="5" />
              Moderate Aggressive
              <input name="risk" type="radio" value="6" />
              Aggressive Growth
            </div>
            <div className="thesis-ctr">
              <label className="thesis-label" htmlFor="thesis">Rationale: </label>
              <textarea className="thesis-input" name="thesis" required />
            </div>
          </form>
        </div>
      </div>
    </>,
    document.getElementById('app'),
  );
};

export default CreatePortfolio;

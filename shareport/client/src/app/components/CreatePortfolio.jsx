import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './modal-create.css';
import InvSearch from './InvSearch.jsx';
import CreateItem from './CreateItem.jsx';

const CreatePortfolio = ({ open, setOpen }) => {
  if (!open) return null;

  const [selected, setSelected] = useState([]);
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [risk, setRisk] = useState('');
  const [thesis, setThesis] = useState('');
  const [totalValue, setTotalValue] = useState(0);

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
          dayChangePct: Math.round((quote.data.changesPercentage * 100)) / 100,
        };
        const newInv = { ...invName, ...invQuote };
        setSelected([newInv, ...selected]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const changeShares = (num, selectionSymbol) => {
    let newSelected = [...selected];
    for (let i = 0; i < newSelected.length; i += 1) {
      if (newSelected[i].symbol === selectionSymbol) {
        newSelected[i].numberOfShares = num;
        newSelected[i].marketValue = Math.round((num * newSelected[i].price * 100)) / 100;
        break;
      }
    }
    setSelected(newSelected);
  };

  const handleCreate = (event) => {
    event.preventDefault();
    const portfolioObj = {
      name,
      username,
      risk,
      thesis,
      totalValue,
      holdings: selected,
    };
    axios.post('/portfolios', portfolioObj)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    setOpen(false);
  };

  useEffect(() => {
    let newValue = 0;
    selected.forEach((selection) => {
      newValue += selection.marketValue;
    });
    setTotalValue(Math.round(newValue * 100) / 100);
  }, [selected]);

  return ReactDOM.createPortal(
    <>
      <div className="modal-overlay" />
      <div className="modal-window">
        <div className="create-bar">
          <button type="button" className="btn-close-create" onClick={() => setOpen(false)}>X</button>
        </div>
        <div className="create-form-ctr">
          <form className="create-form" onSubmit={handleCreate}>
            <div className="username">
              <label htmlFor="username">Username: </label>
              <input name="username" required onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="name">
              <label htmlFor="name">Portfolio Name: </label>
              <input name="name" required onChange={(e) => setName(e.target.value)} />
            </div>
            <InvSearch handleSelection={handleSelection} />
            <div className="create-list">
              <div className="create-titles">
                <div className="create-col1">Symbol</div>
                <div className="create-col2">Holding</div>
                <div className="create-col3">No. of Shares</div>
                <div className="create-col4">Price</div>
                <div className="create-col5">Day Change</div>
                <div className="create-col6">Market Value</div>
              </div>
              {selected.map(selection => (
                <CreateItem key={selection.symbol} selection={selection} changeShares={changeShares} />
              ))}
              <div className="create-total-val create-col6">{`$${totalValue}`}</div>
            </div>
            <div className="risk" onChange={(e) => setRisk(e.target.value)}>
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
              <textarea className="thesis-textarea" name="thesis" required onChange={(e) => setThesis(e.target.value)} />
            </div>
            <button className="create-submit" type="submit">Create</button>
          </form>
        </div>
      </div>
    </>,
    document.getElementById('app'),
  );
};

export default CreatePortfolio;

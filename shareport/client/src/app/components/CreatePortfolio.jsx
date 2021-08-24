import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './modal.css';

const CreatePortfolio = ({ open, setOpen }) => {
  if (!open) return null;

  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [risk, setRisk] = useState('');
  const [thesis, setThesis] = useState('');

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
            <input
              className="tkr-search-form"
              type="text"
              placeholder="Search by Ticker Symbol or Company Name..."
            />
            <div className="inv-list">Inv list here</div>
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
              <input className="thesis-input" name="thesis" required />
            </div>
          </form>
        </div>
      </div>
    </>,
    document.getElementById('app'),
  );
};

export default CreatePortfolio;

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './modal.css';

const CreatePortfolio = ({ open, setOpen }) => {
  if (!open) return null;

  const [username, setUsername] = useState('');
  const [name, setName] = useState('');

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
              <input name="username" required></input>
            </div>
            <div className="name">
              <label htmlFor="name">Portfolio Name: </label>
              <input name="name" required></input>
            </div>
            <input
              className="tkr-search-form"
              type="text"
              placeholder="Search by Ticker Symbol or Company Name..."
            />
            <div className="inv-list">Inv list here</div>
          </form>
        </div>
      </div>
    </>,
    document.getElementById('app'),
  );
};

export default CreatePortfolio;

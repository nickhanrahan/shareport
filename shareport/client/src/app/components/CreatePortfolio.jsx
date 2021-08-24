import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './modal.css';

const CreatePortfolio = ({ open }) => {
  if (!open) return null;

  return ReactDOM.createPortal(
    <>
      <div className="modal-overlay" />
      <div className="modal-window">
        <div className="create-bar">top</div>
        <div className="create-form-ctr">
          <form className="create-form" />
        </div>
      </div>
    </>,
    document.getElementById('app'),
  );
};

export default CreatePortfolio;

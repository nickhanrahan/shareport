import React from 'react';
import ReactDOM from 'react-dom';

const CreatePortfolio = () => {
  return ReactDOM.createPortal(
    <>
    <div className="modal-overlay"/>
    <div className="modal-window">
      <div className="create-bar">top</div>
      <div className="create-form-ctr">form</div>
    </div>
    </>,
  document.getElementById('app'),
  );
}

export default CreatePortfolio;

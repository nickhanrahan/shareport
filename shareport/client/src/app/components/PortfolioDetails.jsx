import React from 'react';
import HoldingItem from './HoldingItem.jsx';
import './modal-details.css';

const PortfolioDetails = ({ open, setOpen, portfolio, dollarGL }) => {
  if (!open) {
    return null;
  }

  return (
    <>
      <div className="modal-overlay" />
      <div className="modal-window">
        <div className="details-bar">
          <button type="button" className="btn-close-details" onClick={() => setOpen(false)}>X</button>
        </div>
        <div className="details-ctr">
          <div className="details-portfolio-name">{portfolio.name}</div>
          <div className="details-username">{portfolio.username}</div>
          <div className="details-list">
            <div className="details-titles">
              <div className="details-col1">Symbol</div>
              <div className="details-col2">Holding</div>
              <div className="details-col3">No. of Shares</div>
              <div className="details-col4">Cost per Share</div>
              <div className="details-col5">Price</div>
              <div className="details-col6">Cost Basis</div>
              <div className="details-col7">Market Value</div>
              <div className="details-col8">Gain/Loss</div>
            </div>
            <div className="details-holdings">
              {portfolio.holdings.map((holding) => (
                <HoldingItem key={`detail${holding.name}`} holding={holding} dollarGL={dollarGL} />
              ))}
            </div>
          </div>
          <div className="details-risk">Risk Rating: {portfolio.risk}</div>
          <div className="details-descript">{portfolio.thesis}</div>
        </div>
      </div>
    </>
  );
}

export default PortfolioDetails;
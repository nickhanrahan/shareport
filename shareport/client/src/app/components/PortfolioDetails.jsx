import React from 'react';
import HoldingItem from './HoldingItem.jsx';
import './modal-details.css';

const PortfolioDetails = ({ open, setOpen, portfolio, dollarGL, marketValue }) => {
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
          <div className="details-username">Created By: {portfolio.username}</div>
          <div className="details-list">
            <div className="holdings-title">Holdings</div>
            <div className="details-titles">
              <div className="details-col1">Symbol</div>
              <div className="details-col2">Name</div>
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
            <div className="details-totals">
              <div className="details-col1"></div>
              <div className="details-col2"></div>
              <div className="details-col3"></div>
              <div className="details-col4"></div>
              <div className="details-col5 totals-label">Totals</div>
              <div className="details-col6">${portfolio.totalCost}</div>
              <div className="details-col7">${marketValue}</div>
              <div className="details-col8">${dollarGL}</div>
            </div>
          </div>
          <div className="details-risk">Risk Rating: {portfolio.risk}</div>
          <p className="details-descript">Description: {portfolio.thesis}</p>
        </div>
      </div>
    </>
  );
}

export default PortfolioDetails;

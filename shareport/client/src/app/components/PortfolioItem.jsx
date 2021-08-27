import React, { useState, useEffect } from 'react';
import PortfolioDetails from './PortfolioDetails.jsx';

const PortfolioItem = ({ portfolio }) => {
  const [marketValue, setMarketValue] = useState(0);
  const [dollarGL, setDollarGL] = useState(0);
  const [percentGL, setPercentGL] = useState(0);
  const [dayChange, setDayChange] = useState(0);
  const [isOpen, setOpen] = useState(false);

  const round = (num) => (Math.round(num * 100) / 100);

  useEffect(() => {
    let value = 0;
    let newDayChange = 0;
    portfolio.holdings.forEach((holding) => {
      value += (holding.quote.price * holding.numberOfShares);
      newDayChange += (holding.quote.dayChange * holding.numberOfShares);
    });
    setMarketValue(round(value));
    setDollarGL(round(value - portfolio.totalCost));
    setPercentGL((value / portfolio.totalCost) - 1);
    setDayChange(round(newDayChange));
  }, []);

  const dateCreated = (timeStampString) => {
    const dateFormat = new Date(timeStampString);
    const dateString = `${dateFormat.getMonth() + 1}/${dateFormat.getDate()}/${dateFormat.getFullYear()}`;
    return dateString;
  };

  return (
    <>
      <div className="list-item-ctr">
        <div className="list-col1" onClick={() => setOpen(true)}>{portfolio.name}</div>
        <div className="list-col2">{portfolio.username}</div>
        <div className="list-col3">${portfolio.totalCost}</div>
        <div className="list-col4">${marketValue}</div>
        <div className="list-col5">${dollarGL}</div>
        <div className="list-col6">{round(percentGL)}%</div>
        <div className="list-col7">${round(dayChange)}</div>
        <div className="list-col8">{dateCreated(portfolio.createdAt)}</div>
      </div>
      <PortfolioDetails
        open={isOpen}
        setOpen={setOpen}
        portfolio={portfolio}
        dollarGL={dollarGL}
        marketValue={marketValue}
      />
    </>
  );
};

export default PortfolioItem;

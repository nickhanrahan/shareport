import React, { useContext } from 'react';
import { globalContext } from '../app.jsx';
import PortfolioItem from './PortfolioItem.jsx';
import './list.css';

const PortfolioList = () => {
  const globalData = useContext(globalContext);
  return (
    <div className="list-ctr">
      <div className="list-titles">
        <div className="list-col1">Name</div>
        <div className="list-col2">Created By</div>
        <div className="list-col3">Initial Cost</div>
        <div className="list-col4">Market Value</div>
        <div className="list-col5">Gain/Loss ($)</div>
        <div className="list-col6">Gain/Loss (%)</div>
        <div className="list-col7">Day Change</div>
        <div className="list-col8">Date Created</div>
      </div>
      <div className="list-portfolios">
        {globalData.state.portfolios.map((portfolio) => (
          <PortfolioItem key={`${portfolio.name}-portfolio`} portfolio={portfolio} />
        ))}
      </div>
    </div>
  );
};

export default PortfolioList;

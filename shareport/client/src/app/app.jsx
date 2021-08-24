import React from 'react';
import PortfolioList from './components/PortfolioList.jsx';
import CreatePortfolio from './components/CreatePortfolio.jsx';
import { getPortfolios } from './requests.js';

const App = () => {

  return (
    <>
      <div className="top-bar">
        <div className="shareport-logo">SharePort</div>
      </div>
      <div className="list-ctr">
        <PortfolioList />
      </div>
      <CreatePortfolio />
    </>
  )
}

export default App;

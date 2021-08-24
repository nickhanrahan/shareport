import React from 'react';
import PortfolioList from './components/PortfolioList.jsx';

const App = () => {
  return (
    <>
      <div className="top-bar">
        <div className="shareport-logo">SharePort</div>
      </div>
      <div className="list-ctr">
        <PortfolioList />
      </div>
    </>
  )
}

export default App;

import React, { useContext } from 'react';
import { globalContext } from '../app.jsx';

const PortfolioList = () => {
  const globalData = useContext(globalContext);
  return (
    <div>Portfolio List</div>
  )
}

export default PortfolioList;

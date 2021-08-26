import React, { useState, useReducer, useEffect } from 'react';
import PortfolioList from './components/PortfolioList.jsx';
import CreatePortfolio from './components/CreatePortfolio.jsx';
import { getPortfolios } from './requests.js';
import axios from 'axios';

const initialState = {
  portfolios: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'updatePortfolio':
      return { ...state, portfolios: action.data }
  }
}

export const globalContext = React.createContext();

const App = () => {
  const [openCreate, setOpenCreate] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);

  const getPortfolios = () => {
    axios.get('/portfolios')
      .then((portfolios) => {
        console.log(portfolios.data);
      });
  };

  useEffect(() => {
    getPortfolios();
  }, []);

  return (
    <div className="main">
      <div className="top-bar">
        <div className="shareport-logo">SharePort</div>
        <button type="button" className="create-btn" onClick={() => setOpenCreate(true)}>Create Portfolio</button>
        <CreatePortfolio
          open={openCreate}
          setOpen={setOpenCreate}
        />
      </div>
      <div className="list-ctr">
        <PortfolioList />
      </div>
    </div>
  )
}

export default App;

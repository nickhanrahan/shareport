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
    case 'updatePortfolios':
      return { ...state, portfolios: action.data }
  }
}

export const globalContext = React.createContext();

const chronologize = (a, b) => {
  const dateA = Date.parse(a.createdAt);
  const dateB = Date.parse(b.createdAt);
  if (dateA < dateB) {
    return 1;
  }
  return -1;
};

const App = () => {
  const [openCreate, setOpenCreate] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);

  const getPortfolios = () => {
    axios.get('/portfolios')
      .then((portfolios) => {
        let orderedPortfolios = portfolios.data;
        orderedPortfolios.sort(chronologize);
        dispatch({ type: 'updatePortfolios', data: orderedPortfolios });
      });
  };

  useEffect(() => {
    getPortfolios();
  }, []);

  return (
    <globalContext.Provider value={{ state, dispatch }}>
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
    </globalContext.Provider>
  );
};

export default App;

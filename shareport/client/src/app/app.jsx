import React, { useState } from 'react';
import PortfolioList from './components/PortfolioList.jsx';
import CreatePortfolio from './components/CreatePortfolio.jsx';
import { getPortfolios } from './requests.js';

const App = () => {
  const [openCreate, setOpenCreate] = useState(false);

  return (
    <div className="global">
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

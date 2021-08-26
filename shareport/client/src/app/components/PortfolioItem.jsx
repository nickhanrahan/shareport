import React from 'react';

const PortfolioItem = ({ portfolio }) => {

  const dateCreated = (timeStampString) => {
    const dateFormat = new Date(timeStampString);
    const dateString = `${dateFormat.getMonth() + 1}/${dateFormat.getDate()}/${dateFormat.getFullYear()}`;
    return dateString;
  }
  return (
    <div className="list-item-ctr">
      <div className="list-col1">{portfolio.name}</div>
      <div className="list-col2">{portfolio.username}</div>
      <div className="list-col3">${portfolio.totalCost}</div>
      <div className="list-col4"></div>
      <div className="list-col5"></div>
      <div className="list-col6"></div>
      <div className="list-col7"></div>
      <div className="list-col8">{dateCreated(portfolio.createdAt)}</div>
    </div>
  )
}

export default PortfolioItem;

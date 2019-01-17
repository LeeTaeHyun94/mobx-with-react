import React from 'react';
import './BasketItem.css';

const BasketItem = ({ name, price, count }) => (
  <div className="BasketItem">
    <div className="name">{name}</div>
    <div className="price">
      $&nbsp;
      {price}
    </div>
    <div className="count">{count}</div>
    <div className="return">Return</div>
  </div>
);

export default BasketItem;

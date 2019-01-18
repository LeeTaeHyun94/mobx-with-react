import React from 'react';
import './SuperMarketTemplate.css';

const SuperMarketTemplate = ({ items, cart, total }) => (
  <div className="SuperMarketTemplate">
    <div className="items-wrapper">
      <h2>Products</h2>
      {items}
    </div>
    <div className="cart-wrapper">
      <h2>Cart</h2>
      {cart}
      {total}
    </div>
  </div>
);

export default SuperMarketTemplate;

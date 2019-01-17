import React from 'react';
import './ShopItem.css';

const ShopItem = ({ name, price, onPut }) => (
  <div
    className="ShopItem"
    onClick={() => onPut(name, price)}
    onKeyPress={() => onPut(name, price)}
    role="button"
    tabIndex={0}
  >
    <h4>{name}</h4>
    <div>
      $&nbsp;
      {price}
    </div>
  </div>
);

export default ShopItem;

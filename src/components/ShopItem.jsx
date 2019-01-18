import React from 'react';
import './ShopItem.css';

const ShopItem = a => (
  <div
    className="ShopItem"
    onClick={() => a.onPut(a.name, a.price)}
    role="button"
    tabIndex={0}
  >
    <h4>{a.name}</h4>
    <div>
      $&nbsp;
      {a.price}
    </div>
  </div>
);

export default ShopItem;

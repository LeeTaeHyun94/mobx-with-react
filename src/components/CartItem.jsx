import React from 'react';
import './CartItem.css';
import { observer } from 'mobx-react';

const CartItem = ({ item, onTake }) => (
  <div className="CartItem">
    <div className="name">{item.name}</div>
    <div className="price">
      $&nbsp;
      {item.price}
    </div>
    <div className="count">{item.count}</div>
    <div
      className="return"
      onClick={() => onTake(item.name)}
      onKeyDown={() => onTake(item.name)}
      role="button"
      tabIndex={0}
    >
      Return
    </div>
  </div>
);

export default observer(CartItem);

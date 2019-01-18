import React from 'react';
import { inject, observer } from 'mobx-react';
import CartItem from './CartItem.jsx';

const CartItemList = ({ items, onTake }) => {
  const itemList = items.map(item => (
    <CartItem item={item} key={item.name} onTake={onTake} />
  ));
  return <div>{itemList}</div>;
};

export default inject(({ marketStore }) => ({
  items: marketStore.selectedItems,
  onTake: marketStore.take,
}))(observer(CartItemList));

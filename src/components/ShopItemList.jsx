import React from 'react';
import { observer, inject } from 'mobx-react';
import ShopItem from './ShopItem.jsx';

const items = [
  { name: 'Water', price: 0.85 },
  { name: 'Ramen', price: 0.9 },
  { name: 'Potato Chip', price: 1.5 },
  { name: 'Shrimp Chip', price: 1 },
];

const ShopItemList = ({ onPut }) => {
  const itemList = items.map(item => (
    <ShopItem {...item} key={item.name} onPut={onPut} />
  ));
  return <div>{itemList}</div>;
};

export default inject(({ marketStore }) => ({ onPut: marketStore.put }))(
  observer(ShopItemList)
);

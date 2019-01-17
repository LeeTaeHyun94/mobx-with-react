import React from 'react';
import { inject, observer } from 'mobx-react';
import BasketItem from './BasketItem.jsx';

const BasketItemList = ({ items, total, onTake }) => {
  const itemList = items.map(item => (
    <BasketItem
      name={item.name}
      price={item.price}
      count={item.count}
      key={item.name}
      onTake={onTake}
    />
  ));
  return (
    <div>
      {itemList}
      <hr />
      <p>
        <b>
          Total&nbsp;:&nbsp;$&nbsp;
          {total}
        </b>
      </p>
    </div>
  );
};

export default inject(({ marketStore }) => ({
  items: marketStore.selectedItems,
  total: marketStore.total,
  onTake: marketStore.onTake,
}))(observer(BasketItemList));

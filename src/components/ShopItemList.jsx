import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import ShopItem from './ShopItem.jsx';

// const items = [
//   { name: 'Water', price: 0.85 },
//   { name: 'Ramen', price: 0.9 },
//   { name: 'Potato Chip', price: 1.5 },
//   { name: 'Shrimp Chip', price: 1 },
// ];

@inject(({ rootStore, itemStore }) => ({
  onPut: rootStore.marketStore.put,
  itemStore,
}))
@observer
class ShopItemList extends Component {
  componentWillMount() {
    this.props.itemStore.getItems();
  }

  render() {
    const itemList = this.props.itemStore.items.map(item => (
      <ShopItem
        name={item.name}
        // price={item.variations.price_money.amount}
        key={item.id}
        onPut={this.props.onPut}
      />
    ));
    return <div>{itemList}</div>;
  }
}

export default ShopItemList;

// const ShopItemList = ({ items, onPut }) => {
//   const itemList = items.map(item => (
//     <ShopItem {...item} key={item.name} onPut={onPut} />
//   ));
//   return <div>{itemList}</div>;
// };

// export default inject((rootStore, itemStore) => ({
//   items: itemStore.items,
//   onPut: rootStore.marketStore.put,
// }))(observer(ShopItemList));

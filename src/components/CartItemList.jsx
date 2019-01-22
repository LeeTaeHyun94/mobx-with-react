import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import CartItem from './CartItem.jsx';

class CartItemList extends Component {
  render() {
    const itemList = this.props.items.map(item => (
      <CartItem item={item} key={item.name} onTake={this.props.onTake} />
    ));
    return <div>{itemList}</div>;
  }
}

export default inject(({ rootStore }) => ({
  items: rootStore.marketStore.selectedItems,
  onTake: rootStore.marketStore.take,
}))(observer(CartItemList));

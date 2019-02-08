import React from 'react';
import { inject, observer } from 'mobx-react';
import MenuPage from '../Menu/MenuPage';
import CartPage from '../Cart/CartPage';

function MainContainer(props) {
  const { pageState } = props;
  let page;
  switch (pageState) {
    case 'MENU': page = <MenuPage />; break;
    case 'CART': page = <CartPage />; break;
    default: page = <MenuPage />; break;
  }
  return page;
}

export default inject(({ pageStateStore }) => ({
  pageState: pageStateStore.pageState,
}))(observer(MainContainer));

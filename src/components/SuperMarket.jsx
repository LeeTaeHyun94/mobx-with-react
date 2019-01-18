import React from 'react';
import SuperMarketTemplate from './SuperMarketTemplate.jsx';
import ShopItemList from './ShopItemList.jsx';
import CartItemList from './CartItemList.jsx';
import TotalPrice from './TotalPrice.jsx';

const SuperMarket = () => (
  <SuperMarketTemplate
    items={<ShopItemList />}
    cart={<CartItemList />}
    total={<TotalPrice />}
  />
);

export default SuperMarket;

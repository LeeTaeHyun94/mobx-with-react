import React from 'react';
import SuperMarketTemplate from './SuperMarketTemplate.jsx';
import ShopItemList from './ShopItemList.jsx';
import BasketItemList from './BasketItemList.jsx';

const SuperMarket = () => (
  <SuperMarketTemplate items={<ShopItemList />} basket={<BasketItemList />} />
);

export default SuperMarket;

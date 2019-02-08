import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import './index.css';
// import App from './App.jsx';
import * as serviceWorker from './serviceWorker';
// import CounterStore from './stores/CounterStore';
// import MarketStore from './stores/MarketStore';
import MarketCounterRootStore from './stores/MarketCounterRootStore';
import ItemStore from './stores/ItemStore';
import RestaurantInfoStore from './pages/common/modules/store/RestaurantInfoStore';
import PageStateStore from './pages/common/modules/store/PageStateStore';
import MainContainer from './pages/common/MainContainer';
import MenuStore from './pages/common/modules/store/MenuStore';
import DetailMenuStore from './pages/DetailMenu/modules/store/DetailMenuStore';
import CategoryStore from './pages/common/modules/store/CategoryStore';
import MenuModalStateStore from './pages/Menu/modules/store/MenuModalStateStore';
import CartStore from './pages/Cart/modules/store/CartStore';

const marketCounterRootStore = new MarketCounterRootStore();
const itemStore = new ItemStore();
const restaurantInfoStore = new RestaurantInfoStore();
const menuStore = new MenuStore();
const pageStateStore = new PageStateStore();
const detailMenuStore = new DetailMenuStore();
const categoryStore = new CategoryStore();
const menuModalStateStore = new MenuModalStateStore();
const cartStore = new CartStore();

const startApp = () => {
  ReactDOM.render(
    <Provider
      rootStore={marketCounterRootStore}
      itemStore={itemStore}
      restaurantInfoStore={restaurantInfoStore}
      menuStore={menuStore}
      pageStateStore={pageStateStore}
      detailMenuStore={detailMenuStore}
      categoryStore={categoryStore}
      menuModalStateStore={menuModalStateStore}
      cartStore={cartStore}
    >
      <MainContainer />
    </Provider>,
    document.getElementById('root'),
  );
  serviceWorker.register();
};
if (window.cordova) {
  document.addEventListener('deviceready', startApp, false);
} else {
  startApp();
}

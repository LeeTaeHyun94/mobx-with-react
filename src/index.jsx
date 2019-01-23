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
import StateStore from './pages/common/modules/store/StateStore';
import MainContainer from './pages/common/MainContainer';
import MenuStore from './pages/common/modules/store/MenuStore';
import DetailMenuStore from './pages/DetailMenu/modules/store/DetailMenuStore';

const marketCounterRootStore = new MarketCounterRootStore();
const itemStore = new ItemStore();
const restaurantInfoStore = new RestaurantInfoStore();
const menuStore = new MenuStore();
const stateStore = new StateStore();
const detailMenuStore = new DetailMenuStore();

const startApp = () => {
  ReactDOM.render(
    <Provider
      rootStore={marketCounterRootStore}
      itemStore={itemStore}
      restaurantInfoStore={restaurantInfoStore}
      menuStore={menuStore}
      stateStore={stateStore}
      detailMenuStore={detailMenuStore}
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

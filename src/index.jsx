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
import MenuRootStore from './pages/common/modules/store/MenuRootStore';
import StateStore from './pages/common/modules/store/StateStore';
import MainContainer from './pages/common/MainContainer';

const marketCounterRootStore = new MarketCounterRootStore();
const itemStore = new ItemStore();
const restaurantInfoStore = new RestaurantInfoStore();
const menuRootStore = new MenuRootStore();
const stateStore = new StateStore();

const startApp = () => {
  ReactDOM.render(
    <Provider
      rootStore={marketCounterRootStore}
      itemStore={itemStore}
      restaurantInfoStore={restaurantInfoStore}
      menuRootStore={menuRootStore}
      stateStore={stateStore}
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

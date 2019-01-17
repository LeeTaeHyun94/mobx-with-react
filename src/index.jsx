import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import './index.css';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';
import CounterStore from './stores/CounterStore';

const counterStore = new CounterStore();
const startApp = () => {
  ReactDOM.render(
    <Provider counter={counterStore}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
  serviceWorker.register();
};
if (window.cordova) {
  document.addEventListener('deviceready', startApp, false);
} else {
  startApp();
}

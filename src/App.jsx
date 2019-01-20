import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import DevTools from 'mobx-react-devtools';
import { observer } from 'mobx-react';
import Counter from './components/Counter';
import SuperMarket from './components/SuperMarket.jsx';
// import RestaurantName from './components/atoms/RestaurantName';
import SideBar from './components/organisms/SideBar';

@observer
class App extends Component {
  render() {
    return (
      <div>
        <SideBar />
        <Counter />
        <hr />
        <SuperMarket />
        {process.env.NODE_ENV === 'development' && <DevTools />}
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import DevTools from 'mobx-react-devtools';
import Counter from './components/Counter';
import SuperMarket from './components/SuperMarket.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <Counter />
        <hr />
        <SuperMarket />
        {process.env.NODE_ENV === 'development' && <DevTools />}
      </div>
    );
  }
}

export default App;

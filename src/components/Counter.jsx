import React, { Component } from 'react';
// import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react';

// @inject('counterStore')
@inject(stores => ({
  number: stores.counterStore.number,
  increase: stores.counterStore.increase,
  decrease: stores.counterStore.decrease,
}))
@observer
class Counter extends Component {
  //   @observable number = 0;

  //   @action
  //   increase = () => {
  //     this.number += 1;
  //   };

  //   @action
  //   decrease = () => {
  //     this.number -= 1;
  //   };

  render() {
    // const { counter } = this.props;
    const { number, increase, decrease } = this.props;
    return (
      <div>
        <h1>{number}</h1>
        <button type="button" onClick={increase}>
          +1
        </button>
        <button type="button" onClick={decrease}>
          -1
        </button>
      </div>
    );
  }
}

export default Counter;

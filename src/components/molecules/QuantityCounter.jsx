import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Button } from 'react-bootstrap';

@inject(({ cartStore }) => ({
  number: cartStore.quantityCounterNumber,
  increase: cartStore.increaseQuantityCounterNumber,
  decrease: cartStore.decreaseQuantityCounterNumber,
}))
@observer
class QuantityCounter extends Component {
  render() {
    const { number, increase, decrease } = this.props;
    return (
      <div style={{ textAlign: 'center', fontSize: 'x-large' }}>
        Quantity
        <br />
        <Button
          className="custom-btn"
          variant="outline-secondary"
          onClick={decrease}
        >
          <i className="fas fa-minus" />
        </Button>
        <h2 style={{ marginLeft: '1vw' }}>{number}</h2>
        <Button
          className="custom-btn"
          variant="outline-secondary"
          onClick={increase}
        >
          <i className="fas fa-plus" />
        </Button>
      </div>
    );
  }
}

export default QuantityCounter;

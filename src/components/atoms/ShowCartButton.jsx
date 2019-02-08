import React, { Component } from 'react';
import { Button, Badge } from 'react-bootstrap';
import { inject, observer } from 'mobx-react';

@inject(({ cartStore, pageStateStore }) => ({
  cartItemCount: cartStore.itemCount,
  changePageState: pageStateStore.changeState,
}))
@observer
class ShowCartButton extends Component {
  render() {
    return (
      <div>
        <Button variant="success" style={{ fontSize: 'xx-large' }} onClick={() => this.props.changePageState('CART')}>
          <i className="fas fa-shopping-cart" />
          &nbsp;Cart&nbsp;
          <Badge variant="light">{this.props.cartItemCount}</Badge>
        </Button>
      </div>
    );
  }
}

export default ShowCartButton;

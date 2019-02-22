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
      <Button
        variant="light"
        style={{
          color: 'white', fontSize: 'large', backgroundColor: '#00c853',
        }}
        onClick={() => this.props.changePageState('CART')}
      >
        <i className="fas fa-shopping-cart" />
        <span style={{ paddingLeft: '1vw', paddingRight: '1vw' }}>
          VIEW CART
        </span>
        <Badge
          variant="light"
          style={{
            color: 'white',
            fontSize: 'large',
            backgroundColor: '#2e7d32',
            top: 1,
            paddingTop: 4,
          }}
        >
          {this.props.cartItemCount}
        </Badge>
      </Button>
    );
  }
}

export default ShowCartButton;

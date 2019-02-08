import React, { Component } from 'react';
import {
  Container, Row, ListGroup, Col, Button,
} from 'react-bootstrap';
import { inject, observer } from 'mobx-react';
import CommonHeader from '../../components/molecules/CommonHeader';
import CartItemListGroupItem from '../../components/atoms/CartItemListGroupItem';

@inject(({ pageStateStore, cartStore }) => ({
  cartStore,
  changePageState: pageStateStore.changeState,
}))
@observer
class CartPage extends Component {
  render() {
    const { cartStore } = this.props;
    const cartItemListGroup = cartStore.items.map(item => (
      <CartItemListGroupItem
        key={item.name}
        name={item.name}
        price={item.price}
        count={item.count}
        takeItem={cartStore.takeItem}
      />
    ));
    return (
      <div>
        <CommonHeader />
        <Container style={{ fontSize: 'xx-large' }}>
          <Row style={{ minHeight: 1000 }}>
            <ListGroup>
              <ListGroup.Item style={{ backgroundColor: '#bbdefb' }}>
                <Container style={{ minWidth: 1000 }}>
                  <Row>
                    <Col>
                      Menu Name
                    </Col>
                    <Col>
                      Price
                    </Col>
                    <Col>
                      Quantity
                    </Col>
                    <Col sm={2} />
                  </Row>
                </Container>
              </ListGroup.Item>
              {cartItemListGroup}
            </ListGroup>
          </Row>
          <Row>
            Total&nbsp;:&nbsp;$&nbsp;
            {cartStore.total}
          </Row>
          <Row>
            <Col>
              <Button
                variant="secondary"
                size="lg"
                style={{ fontSize: 'xx-large' }}
                onClick={() => this.props.changePageState('MENU')}
              >
                Add another item
              </Button>
            </Col>
            <Col>
              <Button variant="secondary" size="lg" style={{ fontSize: 'xx-large' }}>Send order</Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default CartPage;

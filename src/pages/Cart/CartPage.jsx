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
        addItem={cartStore.addItem}
      />
    ));
    return (
      <div>
        <CommonHeader />
        <br />
        <Container style={{ fontSize: 'large' }}>
          <Row style={{ minHeight: '63vh' }}>
            <ListGroup>
              <ListGroup.Item style={{ backgroundColor: '#bbdefb' }}>
                <Container style={{ minWidth: '75vw' }}>
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
              <div style={{ height: '58vh', overflowY: 'scroll' }}>
                {cartItemListGroup}
              </div>
            </ListGroup>
          </Row>
          <Row style={{ fontSize: 'x-large' }}>
            <div style={{ paddingLeft: '2vw' }}>
              Total : $&nbsp;
              {cartStore.total}
            </div>
          </Row>
          <hr />
          <Row>
            <Col>
              <Button
                className="custom-btn"
                variant="secondary"
                size="lg"
                style={{ fontSize: 'large' }}
                onClick={() => this.props.changePageState('MENU')}
              >
                Add another item
              </Button>
            </Col>
            <Col>
              <Button
                className="custom-btn"
                variant="secondary"
                size="lg"
                style={{ fontSize: 'large' }}
                onClick={() => { cartStore.sendOrder(); this.props.changePageState('MENU'); }}
              >
                Send order
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default CartPage;

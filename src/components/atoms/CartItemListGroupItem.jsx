import React from 'react';
import {
  ListGroup, Container, Col, Button, Row,
} from 'react-bootstrap';

const CartItemListGroupItem = ({
  name, price, count, takeItem, addItem,
}) => (
  <ListGroup.Item>
    <Container>
      <Row style={{ verticalAlign: 'center' }}>
        <Col>
          {name}
        </Col>
        <Col>
          $&nbsp;
          {price}
        </Col>
        <Col>
          X&nbsp;
          {count}
        </Col>
        <Col sm={2}>
          <Row>
            <Button variant="danger" onClick={() => takeItem(name)} style={{ width: '6vw' }}>
              <i className="fas fa-minus" />
            </Button>
            &nbsp;
            <Button variant="success" onClick={() => addItem(name)} style={{ width: '6vw' }}>
              <i className="fas fa-plus" />
            </Button>
          </Row>
        </Col>
      </Row>
    </Container>
  </ListGroup.Item>
);

export default CartItemListGroupItem;

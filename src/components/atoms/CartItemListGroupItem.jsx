import React from 'react';
import {
  ListGroup, Container, Col, Button, Row,
} from 'react-bootstrap';

const CartItemListGroupItem = ({
  name, price, count, takeItem,
}) => (
  <ListGroup.Item>
    <Container style={{ minWidth: 1000 }}>
      <Row>
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
          <Button variant="danger" onClick={() => takeItem(name)} style={{ fontSize: 'xx-large' }}>
            <i className="far fa-trash-alt" />
          </Button>
        </Col>
      </Row>
    </Container>
  </ListGroup.Item>
);

export default CartItemListGroupItem;

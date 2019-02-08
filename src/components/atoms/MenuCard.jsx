import React from 'react';
import { Card } from 'react-bootstrap';

const MenuCard = ({
  id, name, price, url, selectMenu, changeState,
}) => (
  <div
    onClick={() => {
      selectMenu(id);
      changeState();
    }}
    role="button"
    tabIndex={0}
    style={{ width: '33%' }}
  >
    <Card>
      <Card.Img variant="top" src={url} style={{ height: 400 }} />
      <Card.Body>
        <Card.Title style={{ fontSize: 'xx-large' }}>{name}</Card.Title>
        <div style={{ fontSize: 'xx-large' }}>
          $&nbsp;
          {price}
        </div>
      </Card.Body>
    </Card>
  </div>
);

export default MenuCard;

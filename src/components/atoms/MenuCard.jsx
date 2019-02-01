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
    style={{ width: '33%', height: '40%' }}
  >
    <Card>
      <Card.Img variant="top" src={url} style={{ height: 200 }} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <div>
          $&nbsp;
          {price}
        </div>
      </Card.Body>
    </Card>
  </div>
);

export default MenuCard;

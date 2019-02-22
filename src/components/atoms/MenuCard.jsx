import React from 'react';
import { Card } from 'react-bootstrap';

const MenuCard = ({
  id, name, price, url, selectMenu, changeState,
}) => (
  <Card
    onClick={() => {
      selectMenu(id);
      changeState();
    }}
    role="button"
    tabIndex={0}
    style={{ width: '33%', marginRight: 10, marginLeft: 10 }}
  >
    <Card.Img variant="top" src={url} style={{ height: '26vh' }} />
    <Card.Body>
      <Card.Title style={{ fontSize: 'large' }}>{name}</Card.Title>
      <div style={{ fontSize: 'large' }}>
        $&nbsp;
        {price}
      </div>
    </Card.Body>
  </Card>
);

export default MenuCard;

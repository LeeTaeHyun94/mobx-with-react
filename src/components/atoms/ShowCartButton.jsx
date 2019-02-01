import React, { Component } from 'react';
import { Button, Badge } from 'react-bootstrap';

class ShowCartButton extends Component {
  render() {
    return (
      <div>
        <Button variant="success">
          <i className="fas fa-shopping-cart" />
          &nbsp;Cart&nbsp;
          <Badge variant="light">2</Badge>
        </Button>
      </div>
    );
  }
}

export default ShowCartButton;

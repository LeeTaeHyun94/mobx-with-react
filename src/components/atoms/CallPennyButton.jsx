import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class CallPennyButton extends Component {
  render() {
    return (
      <div>
        <Button
          className="custom-btn"
          variant="light"
          style={{ color: 'white', fontSize: 'large', backgroundColor: '#03a9f4' }}
        >
          CALL PENNY
        </Button>
      </div>
    );
  }
}

export default CallPennyButton;

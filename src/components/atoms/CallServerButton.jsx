import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class CallServerButton extends Component {
  render() {
    return (
      <div>
        <Button
          className="custom-btn"
          variant="light"
          style={{ color: 'white', fontSize: 'large', backgroundColor: '#ff9800' }}
        >
          CALL SERVER
        </Button>
      </div>
    );
  }
}

export default CallServerButton;

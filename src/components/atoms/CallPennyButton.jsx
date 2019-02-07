import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class CallPennyButton extends Component {
  render() {
    return (
      <div>
        <Button variant="info" style={{ fontSize: 'xx-large' }}>Call Penny</Button>
      </div>
    );
  }
}

export default CallPennyButton;

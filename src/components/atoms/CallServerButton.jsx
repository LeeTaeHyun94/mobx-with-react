import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class CallServerButton extends Component {
  render() {
    return (
      <div>
        <Button variant="warning">Call Server</Button>
      </div>
    );
  }
}

export default CallServerButton;

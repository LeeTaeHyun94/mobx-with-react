import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import ShowCartButton from '../atoms/ShowCartButton';
import CallServerButton from '../atoms/CallServerButton';
import CallPennyButton from '../atoms/CallPennyButton';

class CommonHeader extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand>
            <ShowCartButton />
          </Navbar.Brand>
          <Navbar.Collapse>
            <CallServerButton />
            <CallPennyButton />
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}


export default CommonHeader;

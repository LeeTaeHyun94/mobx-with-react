import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import ShowCartButton from '../atoms/ShowCartButton';
import CallPennyButton from '../atoms/CallPennyButton';
import CallServerButton from '../atoms/CallServerButton';

class CommonHeader extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand>
            <ShowCartButton />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto" />
            <CallServerButton />
            &nbsp;
            <CallPennyButton />
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}


export default CommonHeader;

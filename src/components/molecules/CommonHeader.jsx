import React, { Component } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { inject } from 'mobx-react';
import ShowCartButton from '../atoms/ShowCartButton';
import CallPennyButton from '../atoms/CallPennyButton';
import CallServerButton from '../atoms/CallServerButton';

@inject(({ pageStateStore }) => ({
  pageStateStore,
}))
class CommonHeader extends Component {
  render() {
    const { pageStateStore } = this.props;
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand>
            {pageStateStore.pageState === 'MENU' ? <ShowCartButton /> : (
              <Button
                onClick={() => pageStateStore.changeState('MENU')}
                variant="dark"
                style={{ fontSize: 'xx-large' }}
              >
                <i className="fas fa-chevron-left" />
                &nbsp;Back
              </Button>
            )}
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

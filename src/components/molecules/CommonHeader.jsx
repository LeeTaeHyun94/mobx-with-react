import React, { Component } from 'react';
import {
  Navbar, Nav, Button, NavDropdown,
} from 'react-bootstrap';
import { inject, observer } from 'mobx-react';
import ShowCartButton from '../atoms/ShowCartButton';
import CallPennyButton from '../atoms/CallPennyButton';
import CallServerButton from '../atoms/CallServerButton';
import './CommonHeader.css';
import './Button.css';

@inject(({ pageStateStore, cartStore }) => ({
  pageStateStore,
  tableNumber: cartStore.tableNumber,
  selectTable: cartStore.changeTableNumber,
}))
@observer
class CommonHeader extends Component {
  render() {
    const { pageStateStore, selectTable } = this.props;
    const navDropdownItems = [];
    for (let index = 1; index <= 15; index += 1) {
      const hrefString = `#table/${index}`;
      navDropdownItems.push(
        <NavDropdown.Item
          key={index}
          href={hrefString}
          onClick={() => selectTable(index)}
        >
          {index}
        </NavDropdown.Item>);
    }
    return (
      <Navbar bg="light" expand="md">
        <Navbar.Brand>
          {pageStateStore.pageState === 'MENU' ? <ShowCartButton /> : (
            <Button
              onClick={() => pageStateStore.changeState('MENU')}
              variant="secondary"
              style={{ fontSize: 'large' }}
            >
              <i className="fas fa-chevron-left" />
              <span style={{ paddingLeft: '1vw' }}>
                BACK
              </span>
            </Button>
          )}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{ fontSize: 'larger' }}>
          <Nav className="mr-auto">
            <NavDropdown title={`Table #${this.props.tableNumber}`}>
              {navDropdownItems}
            </NavDropdown>
          </Nav>
          <CallServerButton />
          <CallPennyButton />
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default CommonHeader;

import React, { Component } from 'react';
import { List, Divider } from '@material-ui/core';
import CategoryList from '../molecules/CategoryList';

class SideBar extends Component {
  render() {
    return (
      <List>
        <Divider />
        <CategoryList />
      </List>
    );
  }
}

export default SideBar;

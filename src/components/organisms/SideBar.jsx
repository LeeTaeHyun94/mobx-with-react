import React, { Component } from 'react';
import { List, Divider } from '@material-ui/core';
import { Provider } from 'mobx-react';
import CategoryList from '../molecules/CategoryList';
import CategoryStore from '../../pages/common/modules/store/CategoryStore';

const categoryStore = new CategoryStore();

class SideBar extends Component {
  render() {
    return (
      <Provider categoryStore={categoryStore}>
        <List>
          <Divider />
          <CategoryList />
        </List>
      </Provider>
    );
  }
}

export default SideBar;

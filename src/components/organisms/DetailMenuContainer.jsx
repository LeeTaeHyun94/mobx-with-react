import React, { Component } from 'react';
import { Typography, Divider } from '@material-ui/core';
import { observer, inject } from 'mobx-react';

@inject(({ detailMenuStore }) => ({
  selectedMenu: detailMenuStore.selectedMenu,
}))
@observer
class DetailMenuContainer extends Component {
  render() {
    const menu = this.props.selectedMenu;
    return (
      <div>
        <Typography variant="h4">
          {menu.name}
        </Typography>
        <Divider />
        <img
          src={menu.imgUrl}
          alt={menu.name}
          style={{ paddingTop: 18, width: 350, height: 350 }}
        />
      </div>
    );
  }
}

export default DetailMenuContainer;

import React, { Component } from 'react';
import { Typography, Divider } from '@material-ui/core';
import { observer, inject } from 'mobx-react';

@inject(({ detailMenuStore }) => ({
  menu: detailMenuStore.selectedMenu,
}))
@observer
class DetailMenuContainer extends Component {
  render() {
    return (
      <div>
        <Typography variant="h4">
          {this.props.menu.name}
        </Typography>
        <Divider />
        <img
          src={this.props.menu.imgUrl}
          alt={this.props.menu.name}
          style={{ paddingTop: 18, width: 350, height: 350 }}
        />
      </div>
    );
  }
}

export default DetailMenuContainer;

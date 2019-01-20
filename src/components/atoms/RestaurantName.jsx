import Typography from '@material-ui/core/Typography';
import React, { Component } from 'react';
import { inject } from 'mobx-react';

@inject(({ restaurantInfoStore }) => ({
  restaurantName: restaurantInfoStore.restaurantName,
}))
class RestaurantName extends Component {
  render() {
    const name = this.props.restaurantName;
    return (
      <Typography variant="h4">
        {name}
      </Typography>);
  }
}

export default RestaurantName;

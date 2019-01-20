import React from 'react';
import { ListItem, Divider, ListItemText } from '@material-ui/core';

const Category = ({ categoryName }) => (
  <div>
    <ListItem button>
      <ListItemText primary={categoryName} />
    </ListItem>
    <Divider />
  </div>
);

export default Category;

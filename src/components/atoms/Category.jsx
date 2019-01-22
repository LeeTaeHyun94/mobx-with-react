import React from 'react';
import { ListItem, Divider, ListItemText } from '@material-ui/core';

const Category = ({ categoryName, getMenu }) => (
  <div>
    <ListItem button onClick={() => getMenu(categoryName)}>
      <ListItemText primary={categoryName} />
    </ListItem>
    <Divider />
  </div>
);

export default Category;

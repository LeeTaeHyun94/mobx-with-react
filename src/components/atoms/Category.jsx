import React from 'react';
import { ListItem, Divider } from '@material-ui/core';

const Category = ({
  categoryName, getMenu, selectedCategory, changeState,
}) => (
  <div style={{ backgroundColor: '#64b5f6' }}>
    <ListItem
      button
      selected={selectedCategory === categoryName}
      onClick={() => {
        getMenu(categoryName);
        changeState('MENU');
      }}
    >
      <div style={{
        color: 'white',
        fontWeight: selectedCategory === categoryName ? 'bold' : 'normal',
      }}
      >
        {categoryName}
      </div>
    </ListItem>
    <Divider />
  </div>
);

export default Category;

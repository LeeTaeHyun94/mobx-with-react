import React from 'react';
import { ListGroup } from 'react-bootstrap';

const CategoryListGroupItem = ({
  categoryName, getMenu, selectedCategory,
}) => (
  <ListGroup.Item
    active={selectedCategory === categoryName}
    onClick={() => {
      getMenu(categoryName);
    }}
  >
    {categoryName}
  </ListGroup.Item>
);

export default CategoryListGroupItem;

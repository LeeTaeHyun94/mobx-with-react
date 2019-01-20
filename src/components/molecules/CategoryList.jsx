import React, { Component } from 'react';
import List from '@material-ui/core/List';
import Category from '../atoms/Category';

class CategoryList extends Component {
  render() {
    return (
      <List component="nav">
        <Category categoryName="test1" />
        <Category categoryName="test2" />
        <Category categoryName="test3" />
        <Category categoryName="test4" />
      </List>
    );
  }
}

export default CategoryList;

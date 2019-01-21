import React, { Component } from 'react';
import List from '@material-ui/core/List';
import { inject } from 'mobx-react';
import Category from '../atoms/Category';

@inject(({ categoryStore }) => ({ categoryList: categoryStore.categoryList }))
class CategoryList extends Component {
  render() {
    const categoryList = this.props.categoryList.map(category => (
      <Category categoryName={category.name} categoryId={category.id} />
    ));
    return (
      <List component="nav">
        {categoryList}
      </List>
    );
  }
}

export default CategoryList;

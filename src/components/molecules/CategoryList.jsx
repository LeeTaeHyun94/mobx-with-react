import React, { Component } from 'react';
import List from '@material-ui/core/List';
import { inject, observer } from 'mobx-react';
import Category from '../atoms/Category';

@inject(({ categoryStore, menuStore, stateStore }) => ({
  categoryList: categoryStore.categoryList,
  findByCategory: menuStore.findByCategory,
  selectedCategory: menuStore.selectedCategory,
  changeState: stateStore.changeState,
}))
@observer
class CategoryList extends Component {
  render() {
    const categoryList = this.props.categoryList.map(category => (
      <Category
        categoryName={category.name}
        key={category.id}
        getMenu={this.props.findByCategory}
        selectedCategory={this.props.selectedCategory}
        changeState={this.props.changeState}
      />
    ));
    return (
      <List component="nav">
        {categoryList}
      </List>
    );
  }
}

export default CategoryList;

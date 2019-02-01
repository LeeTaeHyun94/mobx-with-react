import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { ListGroup } from 'react-bootstrap';
import CategoryListGroupItem from '../atoms/CategoryListGroupItem';

@inject(({ categoryStore, menuStore }) => ({
  categoryList: categoryStore.categoryList,
  findByCategory: menuStore.findByCategory,
  selectedCategory: menuStore.selectedCategory,
}))
@observer
class CategoryListGroup extends Component {
  render() {
    const categoryListGroup = this.props.categoryList.map(category => (
      <CategoryListGroupItem
        key={category.id}
        categoryName={category.name}
        getMenu={this.props.findByCategory}
        selectedCategory={this.props.selectedCategory}
      />
    ));
    return (
      <ListGroup style={{ height: 'auto', overflow: 'auto' }}>
        {categoryListGroup}
      </ListGroup>
    );
  }
}

export default CategoryListGroup;

import autobind from 'autobind-decorator';
import { observable } from 'mobx';
import categoryRepository from '../repository/CategoryRepository';
import CategoryModel from '../model/CategoryModel';

@autobind
class CategoryStore {
    @observable
    categoryList = [];

    constructor() {
      categoryRepository.findAll()
        .then((res) => {
          this.categoryList = res.data.map(
            category => new CategoryModel(category));
        });
    }
}

export default CategoryStore;

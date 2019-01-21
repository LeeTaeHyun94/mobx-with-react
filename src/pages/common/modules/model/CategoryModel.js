import autobind from 'autobind-decorator';
import { extendObservable } from 'mobx';

@autobind
class CategoryModel {
  constructor(data) {
    extendObservable(this, data);
  }
}

export default CategoryModel;

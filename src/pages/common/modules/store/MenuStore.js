import autobind from 'autobind-decorator';
import { observable, action } from 'mobx';
import MenuRepository from '../repository/MenuRepository';
import SimpleMenuModel from '../../../Menu/modules/model/SimpleMenuModel';

@autobind
class MenuStore {
    menuList = [];

    @observable
    selectedCategory;

    @observable
    resultList = [];

    constructor() {
      MenuRepository.findAll().then((res) => {
        this.menuList = res.data;
        this.selectedCategory = res.data[0].category.name;
        this.updateResultList();
      });
    }

    @action
    findByCategory = (category) => {
      this.selectedCategory = category;
      this.updateResultList();
    };

    updateResultList() {
      const result = [];
      this.menuList.forEach((element) => {
        if (element.category.name === this.selectedCategory) {
          result.push(
            new SimpleMenuModel(
              element.id,
              element.name,
              element.master_image.url,
              element.variations[0].price_money.amount,
            ));
        }
      });
      this.resultList = result;
    }
}

export default MenuStore;

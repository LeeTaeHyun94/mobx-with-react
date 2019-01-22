import autobind from 'autobind-decorator';
import { observable, action } from 'mobx';
import MenuRepository from '../repository/MenuRepository';
import MenuModel from '../model/MenuModel';

@autobind
class MenuStore {
    @observable
    menuList = [];

    @observable
    resultList = [];

    constructor(rootStore) {
      this.rootStore = rootStore;
      MenuRepository.findAll().then((res) => {
        this.menuList = res.data;
      });
    }

    @action
    findByCategory = (category) => {
      const result = [];
      this.menuList.forEach((element) => {
        if (element.category.name === category) {
          result.push(
            new MenuModel(
              element.name,
              element.master_image.url,
              element.variations[0].price_money.amount,
            ));
        }
      });
      this.resultList = result;
    };
}

export default MenuStore;

import autobind from 'autobind-decorator';
import { observable, action } from 'mobx';
import DetailMenuModel from '../model/DetailMenuModel';
import DetailMenuRepository from '../repository/DetailMenuRepository';

@autobind
class DetailMenuStore {
  @observable
  selectedMenuId;

  @observable
  selectedMenu;

  @observable
  selectedMenuModifierList = [];

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @action
  setSelectedMenuId = (id) => {
    this.selectedMenuId = id;
  }

  @action
  findDetailMenuById = (id) => {
    DetailMenuRepository.findById(id).then((res) => {
      const menu = res.data;
      this.selectedMenu = new DetailMenuModel(
        menu.id,
        menu.name,
        menu.master_image.url,
        menu.variations[0].price_money.amount,
        menu.modifier_lists,
      );
      this.selectedMenuModifierList = menu.modifier_lists;
    });
  }
}

export default DetailMenuStore;

import autobind from 'autobind-decorator';
import { observable } from 'mobx';

@autobind
class DetailMenuModel {
    @observable
    id;

    @observable
    name = '';

    @observable
    imgUrl = '';

    @observable
    price = 0;

    @observable
    modifierIdList = [];

    constructor(id, name, url, price, modifierList) {
      this.id = id;
      this.name = name;
      this.imgUrl = url;
      this.price = price;
      this.modifierIdList = modifierList.map(element => element.id);
    }
}

export default DetailMenuModel;

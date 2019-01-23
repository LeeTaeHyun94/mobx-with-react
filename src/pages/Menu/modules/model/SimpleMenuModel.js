import autobind from 'autobind-decorator';
import { observable } from 'mobx';

@autobind
class SimpleMenuModel {
  @observable
  menuId;

  @observable
  menuName='';

  @observable
  menuImgUrl='';

  @observable
  price=0;

  constructor(id, name, url, price) {
    this.menuId = id;
    this.menuName = name;
    this.menuImgUrl = url;
    this.price = price;
  }
}

export default SimpleMenuModel;

import autobind from 'autobind-decorator';
import { observable } from 'mobx';

@autobind
class MenuModel {
    @observable
    menuName='';

    @observable
    menuImgUrl='';

    @observable
    price=0;

    constructor(name, url, price) {
      this.menuName = name;
      this.menuImgUrl = url;
      this.price = price;
    }
}

export default MenuModel;

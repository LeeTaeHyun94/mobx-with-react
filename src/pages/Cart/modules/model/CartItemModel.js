import autobind from 'autobind-decorator';
import { observable } from 'mobx';

@autobind
class CartItemModel {
    name = '';

    price;

    @observable
    count = 0;

    constructor(name, price) {
      this.name = name;
      this.price = price;
      this.count = 1;
    }
}

export default CartItemModel;

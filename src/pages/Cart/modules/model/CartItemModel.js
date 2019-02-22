import autobind from 'autobind-decorator';
import { observable } from 'mobx';

@autobind
class CartItemModel {
    name = '';

    price;

    @observable
    count = 1;

    constructor(name, price, count) {
      this.name = name;
      this.price = price;
      this.count = count;
    }
}

export default CartItemModel;

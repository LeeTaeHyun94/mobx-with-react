import { observable, action, computed } from 'mobx';
import CartItemModel from '../model/CartItemModel';

export default class CartStore {
    @observable
    items = [];

    @observable
    itemCount = 0;

    @action
    addToCart = (name, price) => {
      const existedItem = this.items.find(item => item.name === name);
      if (existedItem) existedItem.count += 1;
      else {
        this.items.push(new CartItemModel(name, price));
        this.itemCount += 1;
      }
    };

    @action
    takeItem = (name) => {
      const itemToTake = this.items.find(item => item.name === name);
      itemToTake.count -= 1;
      if (itemToTake.count === 0) {
        this.items.remove(itemToTake);
        this.itemCount -= 1;
      }
    };

    @action
    sendOrder = () => {

    };

    @computed
    get total() {
      return this.items.reduce(
        (pre, cur) => pre + cur.price * cur.count,
        0,
      );
    }
}

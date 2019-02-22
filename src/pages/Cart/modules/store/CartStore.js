import { observable, action, computed } from 'mobx';
import CartItemModel from '../model/CartItemModel';
import CartRepository from '../repository/CartRepository';

export default class CartStore {
    @observable
    items = [];

    @observable
    itemCount = 0;

    @observable
    quantityCounterNumber = 1;

    @observable
    tableNumber = 1;

    @action
    changeTableNumber = (tableNumber) => {
      this.tableNumber = tableNumber;
    }

    @action
    initQuantityCounterNumber = () => {
      this.quantityCounterNumber = 1;
    }

    @action
    increaseQuantityCounterNumber = () => {
      this.quantityCounterNumber += 1;
    };

    @action
    decreaseQuantityCounterNumber = () => {
      if (this.quantityCounterNumber < 2) return;
      this.quantityCounterNumber -= 1;
    };

    @action
    addToCart = (name, price) => {
      const existedItem = this.items.find(item => item.name === name);
      if (existedItem) existedItem.count += this.quantityCounterNumber;
      else {
        this.items.push(
          new CartItemModel(name, price, this.quantityCounterNumber),
        );
      }
      this.itemCount += this.quantityCounterNumber;
      this.initQuantityCounterNumber();
    };

    @action
    addItem = (name) => {
      const itemToTake = this.items.find(item => item.name === name);
      itemToTake.count += 1;
      this.itemCount += 1;
    };

    @action
    takeItem = (name) => {
      const itemToTake = this.items.find(item => item.name === name);
      itemToTake.count -= 1;
      this.itemCount -= 1;
      if (itemToTake.count === 0) this.items.remove(itemToTake);
    };

    @action
    sendOrder = () => {
      CartRepository.createOrder({
        table_num: this.tableNumber,
        order_items: this.items,
      }).then((res) => {
        if (res.status === 201) {
          this.itemCount = 0;
          this.items.clear();
        }
      });
    };

    @computed
    get total() {
      return this.items.reduce(
        (pre, cur) => pre + cur.price * cur.count,
        0,
      );
    }
}

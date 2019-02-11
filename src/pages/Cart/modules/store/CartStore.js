import { observable, action, computed } from 'mobx';
import uuidv1 from 'uuid/v1';
import CartItemModel from '../model/CartItemModel';
import CartRepository from '../repository/CartRepository';

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
      const orderId = uuidv1();
      const lineItems = [];
      this.items.forEach((item) => {
        lineItems.push({
          name: item.name,
          quantity: item.count,
          base_price_money: {
            amount: item.price,
            currency: 'KRW',
          },
        });
      });
      CartRepository.createOrder({
        idempotency_key: orderId,
        line_items: lineItems,
      });
      CartRepository.sendOrderId({
        table_num: 7,
        order_id: orderId,
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

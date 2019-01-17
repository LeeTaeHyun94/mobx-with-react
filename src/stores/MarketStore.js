import { observable, action, computed } from 'mobx';

export default class MarketStore {
  @observable selectedItems = [];

  @action
  put = (name, price) => {
    const exists = this.selectedItems.find(item => item.name === name);
    if (!exists) {
      this.selectedItems.push({
        name,
        price,
        count: 1,
      });
      return;
    }
    exists.count += 1;
  };

  @action
  take = name => {
    const itemToTake = this.selectedItems.find(item => item.name === name);
    itemToTake.count -= 1;
    if (itemToTake === 0) this.selectedItems.remove(itemToTake);
  };

  @computed
  get total() {
    // console.log('total computing...');
    return this.selectedItems.reduce(
      (pre, cur) => pre + cur.price * cur.count,
      0
    );
  }
}

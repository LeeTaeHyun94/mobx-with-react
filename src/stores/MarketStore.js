import { observable, action, computed } from 'mobx';

export default class MarketStore {
  @observable selectedItems = [];

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @action
  put = (name, price) => {
    const counter = this.rootStore.counterStore;
    const cnt = counter.number;
    const exists = this.selectedItems.find(item => item.name === name);
    if (!exists) {
      this.selectedItems.push({
        name,
        price,
        count: cnt,
      });
      return;
    }
    exists.count += cnt;
  };

  @action
  take = name => {
    const itemToTake = this.selectedItems.find(item => item.name === name);
    itemToTake.count -= 1;
    if (itemToTake.count === 0) this.selectedItems.remove(itemToTake);
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

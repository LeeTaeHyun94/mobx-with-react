import { observable, action } from 'mobx';

export default class CounterStore {
  @observable
  number = 1;

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @action
  increase = () => {
    this.number += 1;
  };

  @action
  decrease = () => {
    if (this.number < 2) return;
    this.number -= 1;
  };
}

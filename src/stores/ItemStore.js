import { observable, action } from 'mobx';
import axios from 'axios';

export default class ItemStore {
  @observable items = [];

  @action
  setItems = (items) => {
    this.items = [...items];
  };

  @action
  getItems() {
    axios
      .get('https://connect.squareup.com/v1/H8HSDY0CXSXVA/items', {
        headers: { Authorization: 'Bearer (Personal Access Code)' },
      })
      .then((response) => {
        this.setItems(response.data);
      });
  }

  @action
  getVariations(itemId) {
    return this.items.find(itemId).variations;
  }
}

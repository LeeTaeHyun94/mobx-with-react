import autobind from 'autobind-decorator';
import { observable, action } from 'mobx';

@autobind
class DetailMenuStore {
    @observable
    selectedMenu;

    constructor(rootStore) {
      this.rootStore = rootStore;
    }

    @action
    findDetailMenuById = (id) => {
      this.selectedMenu = this.rootStore.menuList.find(id);
    }
}

export default DetailMenuStore;

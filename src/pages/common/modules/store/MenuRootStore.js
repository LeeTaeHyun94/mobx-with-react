import MenuStore from './MenuStore';
import DetailMenuStore from '../../../DetailMenu/modules/store/DetailMenuStore';

class MenuRootStore {
  constructor() {
    this.menuStore = new MenuStore();
    this.detailMenuStore = new DetailMenuStore();
  }
}

export default MenuRootStore;

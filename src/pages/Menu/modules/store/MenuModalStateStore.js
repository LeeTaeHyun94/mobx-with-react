import autobind from 'autobind-decorator';
import { observable, action } from 'mobx';

@autobind
class MenuModalStateStore {
    // true = VISIBLE, false = INVISIBLE
    @observable
    menuModalState = false;

    @action
    changeState = () => {
      this.menuModalState = !(this.menuModalState);
    };
}

export default MenuModalStateStore;

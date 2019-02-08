import autobind from 'autobind-decorator';
import { observable, action } from 'mobx';

@autobind
class PageStateStore {
    // MENU, CART
    @observable
    pageState = 'MENU';

    @action
    changeState = (state) => {
      this.pageState = state;
    };
}

export default PageStateStore;

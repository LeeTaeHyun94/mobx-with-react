import autobind from 'autobind-decorator';
import { observable, action } from 'mobx';

@autobind
class PageStateStore {
    // WAITING, MENU, DETAIL_MENU, ORDER
    @observable
    pageState = 'MENU';

    @action
    changeState = (state) => {
      this.pageState = state;
    };
}

export default PageStateStore;

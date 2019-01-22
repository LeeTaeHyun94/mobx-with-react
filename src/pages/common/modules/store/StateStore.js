import autobind from 'autobind-decorator';
import { observable, action } from 'mobx';

@autobind
class StateStore {
    // WAITING, MENU, DETAIL_MENU, ORDER
    @observable
    state = 'MENU';

    @action
    changeState = (state) => {
      this.state = state;
    };
}

export default StateStore;

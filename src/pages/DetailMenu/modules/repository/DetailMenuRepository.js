import Axios from '../../../common/config/Axios';

class DetailMenuRepository {
    URL = 'v1/H8HSDY0CXSXVA/items/';

    findById(menuId) {
      return Axios.instance.get(this.URL + menuId);
    }
}

export default new DetailMenuRepository();

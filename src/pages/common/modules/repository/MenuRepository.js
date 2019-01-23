import Axios from '../../config/Axios';

class MenuRepository {
    URL = 'v1/H8HSDY0CXSXVA/items';


    findAll() {
      return Axios.instance.get(this.URL);
    }
}

export default new MenuRepository();

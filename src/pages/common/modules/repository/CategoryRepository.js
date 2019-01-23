import Axios from '../../config/Axios';

class CategoryRepository {
    URL = 'v1/H8HSDY0CXSXVA/categories';

    findAll() {
      return Axios.instance.get(this.URL);
    }
}

export default new CategoryRepository();

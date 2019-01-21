import axios from 'axios';

class CategoryRepository {
    URL = 'https://connect.squareup.com/v1/H8HSDY0CXSXVA/categories';

    findAll() {
      return axios.get(this.URL, {
        headers: { Authorization: 'Bearer ' },
      });
    }
}

export default new CategoryRepository();

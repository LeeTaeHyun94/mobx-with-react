import axios from 'axios';

class CategoryRepository {
    URL = 'https://connect.squareup.com/v1/H8HSDY0CXSXVA/categories';

    findAll() {
      return axios.get(this.URL, {
        headers: { Authorization: 'Bearer sq0atp-1p3Wwl0XOPajvWq_yVZS9g' },
      });
    }
}

export default new CategoryRepository();

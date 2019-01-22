import axios from 'axios';

class CategoryRepository {
    URL = 'https://connect.squareup.com/v1/H8HSDY0CXSXVA/categories';

    findAll() {
      return axios.get(this.URL, {
        headers: { Authorization: 'Bearer sq0atp-4h0aJCbCqmKn-fngaFt0_w' },
      });
    }
}

export default new CategoryRepository();

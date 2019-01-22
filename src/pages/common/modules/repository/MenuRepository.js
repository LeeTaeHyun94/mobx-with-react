import axios from 'axios';

class MenuRepository {
    URL = 'https://connect.squareup.com/v1/H8HSDY0CXSXVA/items';

    findAll() {
      return axios.get(this.URL, {
        headers: { Authorization: 'Bearer sq0atp-4h0aJCbCqmKn-fngaFt0_w' },
      });
    }
}

export default new MenuRepository();

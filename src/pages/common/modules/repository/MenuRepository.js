import axios from 'axios';

class MenuRepository {
    URL = 'https://connect.squareup.com/v1/H8HSDY0CXSXVA/items';

    findAll() {
      return axios.get(this.URL, {
        headers: { Authorization: 'Bearer ' },
      });
    }
}

export default new MenuRepository();

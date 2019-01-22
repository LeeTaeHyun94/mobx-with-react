import axios from 'axios';

class MenuRepository {
    findAllURL = 'https://connect.squareup.com/v1/H8HSDY0CXSXVA/items';

    findByIdURL = 'https://connect.squareup.com/v1/H8HSDY0CXSXVA/items/';

    findAll() {
      return axios.get(this.findAllURL, {
        headers: { Authorization: 'Bearer ' },
      });
    }

    findById(menuId) {
      return axios.get(this.findByIdURL + menuId, {
        headers: { Authorization: 'Bearer ' },
      });
    }
}

export default new MenuRepository();

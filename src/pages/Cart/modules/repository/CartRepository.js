import axios from 'axios';

class CartRepository {
    TOS_SERVER_URL = 'http://127.0.0.1:8000/api/ticket/';

    createOrder(jsonBody) {
      return axios.post(this.TOS_SERVER_URL, jsonBody);
    }
}

export default new CartRepository();

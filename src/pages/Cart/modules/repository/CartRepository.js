import axios from 'axios';

class CartRepository {
    TOS_SERVER_URL = 'http://leethyun.pythonanywhere.com/api/ticket/';

    createOrder(jsonBody) {
      return axios.post(this.TOS_SERVER_URL, jsonBody);
    }
}

export default new CartRepository();

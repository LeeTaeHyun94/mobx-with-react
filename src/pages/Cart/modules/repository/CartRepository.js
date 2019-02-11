import axios from 'axios';
import Axios from '../../../common/config/Axios';

class CartRepository {
    TOS_SERVER_URL = 'http://localhost:8000/api/ticket/';

    SQUARE_API_URL = 'v2/locations/H8HSDY0CXSXVA/orders';

    sendOrderId(jsonBody) {
      console.log(jsonBody);
      axios.post(this.TOS_SERVER_URL, jsonBody);
    }

    createOrder(jsonBody) {
      console.log(jsonBody);
      Axios.instance.post(this.SQUARE_API_URL, jsonBody);
    }
}

export default new CartRepository();

import Axios from '../../../common/config/Axios';

class CartRepository {
    TOS_SERVER_URL;

    SQUARE_API_URL = 'v1/H8HSDY0CXSXVA/categories';

    AXIOS_FOR_SQUARE = Axios.instance;
}

export default new CartRepository();

import Axios from '../../config/Axios';

class RestaurantInfoRepository {
    URL = 'v1/me/locations';

    findAllRestaurant() {
      return Axios.instance.get(this.URL);
    }
}

export default new RestaurantInfoRepository();

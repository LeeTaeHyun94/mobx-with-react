import axios from 'axios';

class RestaurantInfoRepository {
    URL = 'https://connect.squareup.com/v1/me/locations';

    findAllRestaurant() {
      return axios.get(this.URL, {
        headers: { Authorization: 'Bearer ' },
      });
    }
}

export default new RestaurantInfoRepository();

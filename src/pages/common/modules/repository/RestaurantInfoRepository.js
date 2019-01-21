import axios from 'axios';

class RestaurantInfoRepository {
    URL = 'https://connect.squareup.com/v1/me/locations';

    findAllRestaurant() {
      return axios.get(this.URL, {
        headers: { Authorization: 'Bearer sq0atp-1p3Wwl0XOPajvWq_yVZS9g' },
      });
    }
}

export default new RestaurantInfoRepository();

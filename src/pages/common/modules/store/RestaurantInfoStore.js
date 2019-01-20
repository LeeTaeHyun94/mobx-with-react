import autobind from 'autobind-decorator';
import { observable } from 'mobx';
import restaurantInfoRepository from '../repository/RestaurantInfoRepository';

@autobind
class RestaurantInfoStore {
    @observable
    restaurantName = '';

    constructor(rootStore) {
      this.rootStore = rootStore;
      restaurantInfoRepository.findAllRestaurant()
        .then((res) => {
          this.restaurantName = res.data[0].business_name;
        });
    }
}

export default RestaurantInfoStore;

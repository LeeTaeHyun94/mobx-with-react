import autobind from 'autobind-decorator';
import { observable } from 'mobx';

@autobind
class SimpleMenuModel {
  @observable
  id;

  @observable
  name='';

  @observable
  description='';

  @observable
  imgUrl='';

  @observable
  price=0;

  constructor(id, name, description, url, price) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.imgUrl = url;
    this.price = price;
  }
}

export default SimpleMenuModel;

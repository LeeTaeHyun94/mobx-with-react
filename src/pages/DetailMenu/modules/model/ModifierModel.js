import ModifierOptionModel from './ModifierOptionModel';

class ModifierModel {
    id;

    name;

    selectionType;

    modifierOptionList = [];

    constructor(id, name, selectionType, modifierOptionList) {
      this.id = id;
      this.name = name;
      this.selectionType = selectionType;
      this.modifierOptionList = modifierOptionList.map(
        option => new ModifierOptionModel(
          option.id,
          option.name,
          option.price_money.amount,
        ));
    }
}

export default ModifierModel;

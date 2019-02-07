import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { CardDeck } from 'react-bootstrap';
import MenuCard from '../atoms/MenuCard';

@inject(({ menuStore, menuModalStateStore }) => ({
  menuList: menuStore.resultList,
  selectMenu: menuStore.selectMenu,
  changeMenuModalState: menuModalStateStore.changeState,
}))
@observer
class MenuCardDeck extends Component {
  render() {
    const menuCardDeck = this.props.menuList.map(menu => (
      <MenuCard
        key={menu.id}
        id={menu.id}
        name={menu.name}
        url={menu.imgUrl}
        price={menu.price}
        selectMenu={this.props.selectMenu}
        changeState={this.props.changeMenuModalState}
      />
    ));
    return (
      <CardDeck>
        {menuCardDeck}
      </CardDeck>
    );
  }
}

export default MenuCardDeck;

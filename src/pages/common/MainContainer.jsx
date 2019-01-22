import React from 'react';
import { inject, observer } from 'mobx-react';
import MenuPage from '../Menu/MenuPage';
import DetailMenuPage from '../DetailMenu/DetailMenuPage';

function MainContainer(props) {
  const { state } = props;
  let page;
  switch (state) {
    case 'WAITING':
    case 'MENU': page = <MenuPage />; break;
    case 'DETAIL_MENU': page = <DetailMenuPage />; break;
    case 'ORDER':
    default: page = <MenuPage />; break;
  }
  return page;
}

export default inject(({ stateStore }) => ({
  state: stateStore.state,
}))(observer(MainContainer));

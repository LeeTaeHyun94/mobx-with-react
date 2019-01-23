import React, { Component } from 'react';
import ModifierOption from '../atoms/ModifierOption';

class Modifier extends Component {
  render() {
    const optionList = this.props.options.map(option => (
      <ModifierOption option={option} key={option.id} />
    ));
    return <div>{optionList}</div>;
  }
}

export default Modifier;

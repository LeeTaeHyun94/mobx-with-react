import React from 'react';
import { ListItem } from '@material-ui/core';

const ModifierOption = ({ option }) => (
  <div>
    <ListItem button>
      <div>{option.name || 'test'}</div>
      <div>{option.price || '0'}</div>
    </ListItem>
  </div>
);

export default ModifierOption;

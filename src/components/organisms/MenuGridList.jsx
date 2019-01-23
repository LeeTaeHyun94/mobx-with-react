/*eslint-disable*/
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { inject, observer } from 'mobx-react';
import { Typography } from '@material-ui/core';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

function MenuGridList(props) {
  const {
    classes, menus, selectedCategory, changeState, selectMenu,
  } = props;
  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">
            <Typography variant="h6">
              {selectedCategory}
            </Typography>
          </ListSubheader>
        </GridListTile>
        {menus.map(tile => (
          <GridListTile
            key={tile.menuId}
            onClick={() => {
              selectMenu(tile.menuId);
              changeState('DETAIL_MENU');
            }}
          >
            <img src={tile.menuImgUrl} alt={tile.menuName} />
            <GridListTileBar
              title={tile.menuName}
              subtitle={(
                <span>
                    price:&nbsp;
                  {tile.price}
                </span>
                )}
              actionIcon={(
                <IconButton className={classes.icon}>
                  <InfoIcon />
                </IconButton>
                )}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

export default inject(({ menuStore, stateStore, detailMenuStore }) => ({
  menus: menuStore.resultList,
  selectedCategory: menuStore.selectedCategory,
  changeState: stateStore.changeState,
  selectMenu: detailMenuStore.findDetailMenuById,
}))(observer(withStyles(styles)(MenuGridList)));

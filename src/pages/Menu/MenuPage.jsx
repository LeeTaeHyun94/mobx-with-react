// import React from 'react';
// import AppBar from '@material-ui/core/AppBar';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Drawer from '@material-ui/core/Drawer';
// import Hidden from '@material-ui/core/Hidden';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import { withStyles } from '@material-ui/core/styles';
// import SideBar from '../../components/organisms/SideBar';
// import RestaurantName from '../../components/atoms/RestaurantName';
// import MenuGridList from '../../components/organisms/MenuGridList';

// const drawerWidth = 240;

// const styles = theme => ({
//   root: {
//     display: 'flex',
//   },
//   drawer: {
//     [theme.breakpoints.up('sm')]: {
//       width: drawerWidth,
//       flexShrink: 0,
//     },
//   },
//   appBar: {
//     marginLeft: drawerWidth,
//     [theme.breakpoints.up('sm')]: {
//       width: `calc(100% - ${drawerWidth}px)`,
//     },
//   },
//   menuButton: {
//     marginRight: 20,
//     [theme.breakpoints.up('sm')]: {
//       display: 'none',
//     },
//   },
//   toolbar: theme.mixins.toolbar,
//   drawerPaper: {
//     width: drawerWidth,
//   },
//   content: {
//     flexGrow: 1,
//     padding: theme.spacing.unit * 3,
//   },
// });

// class MenuPage extends React.Component {
//   state = {
//     mobileOpen: false,
//   };

//   handleDrawerToggle = () => {
//     this.changeState(state => ({ mobileOpen: !state.mobileOpen }));
//   };

//   render() {
//     const { classes, theme } = this.props;

//     const drawer = (
//       <div>
//         <div
//           className={classes.toolbar}
//           style={{ paddingLeft: 12, paddingTop: 18 }}
//         >
//           <RestaurantName />
//         </div>
//         <SideBar />
//       </div>
//     );

//     return (
//       <div className={classes.root}>
//         <CssBaseline />
//         <nav className={classes.drawer}>
//           <Hidden smUp implementation="css">
//             <Drawer
//               container={this.props.container}
//               variant="temporary"
//               anchor={theme.direction === 'rtl' ? 'right' : 'left'}
//               open={this.state.mobileOpen}
//               onClose={this.handleDrawerToggle}
//               classes={{
//                 paper: classes.drawerPaper,
//               }}
//             >
//               {drawer}
//             </Drawer>
//           </Hidden>
//           <Hidden xsDown implementation="css">
//             <Drawer
//               classes={{
//                 paper: classes.drawerPaper,
//               }}
//               variant="permanent"
//               open
//             >
//               {drawer}
//             </Drawer>
//           </Hidden>
//         </nav>
//         <AppBar position="fixed" className={classes.appBar}
// style={{ backgroundColor: '#64b5f6' }}>
//           <Toolbar>
//             <IconButton
//               color="inherit"
//               aria-label="Open drawer"
//               onClick={this.handleDrawerToggle}
//               className={classes.menuButton}
//             >
//               <MenuIcon />
//             </IconButton>
//             <Typography variant="h6" color="inherit" noWrap />
//           </Toolbar>
//         </AppBar>
//         <main className={classes.content}>
//           <div className={classes.toolbar} />
//           <MenuGridList />
//         </main>
//       </div>
//     );
//   }
// }

// export default withStyles(styles, { withTheme: true })(MenuPage);

import React, { Component } from 'react';
import {
  Tab, Row, Col, Modal, Button, Container,
} from 'react-bootstrap';
import { inject, observer } from 'mobx-react';
import CommonHeader from '../../components/molecules/CommonHeader';
import CategoryListGroup from '../../components/molecules/CategoryListGroup';
import MenuCardDeck from '../../components/molecules/MenuCardDeck';
import QuantityCounter from '../../components/molecules/QuantityCounter';
import './MenuModal.css';

@inject(({ menuStore, menuModalStateStore, cartStore }) => ({
  selectedMenu: menuStore.selectedMenu,
  menuModalState: menuModalStateStore.menuModalState,
  changeMenuModalState: menuModalStateStore.changeState,
  addToCart: cartStore.addToCart,
  initQuantityCounterNumber: cartStore.initQuantityCounterNumber,
}))
@observer
class MenuPage extends Component {
  render() {
    const { selectedMenu } = this.props;
    return (
      <div>
        <CommonHeader />
        <br />
        <Tab.Container>
          <Row style={{ margin: 0 }}>
            <Col sm={2} style={{ paddingRight: 5, overflowY: 'scroll' }}>
              <CategoryListGroup />
            </Col>
            <Col style={{ overflowY: 'scroll' }}>
              <MenuCardDeck />
            </Col>
          </Row>
        </Tab.Container>
        <Modal
          show={this.props.menuModalState}
          dialogClassName="custom-modal-wd"
          centered
        >
          <Modal.Header>
            <Button
              onClick={() => {
                this.props.changeMenuModalState();
                this.props.initQuantityCounterNumber();
              }}
              variant="secondary"
              style={{ fontSize: 'larger' }}
            >
              <i className="fas fa-chevron-left" />
              <span style={{ paddingLeft: '1vw' }}>
                BACK
              </span>
            </Button>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Row>
                <Col>
                  <img
                    src={selectedMenu.imgUrl}
                    alt={selectedMenu.name}
                    style={{ width: '45vh', height: '45vh' }}
                  />
                </Col>
                <Col>
                  <Row>
                    <Col>
                      <h3>{selectedMenu.name}</h3>
                    </Col>
                    <Col>
                      <h3>
                        $&nbsp;
                        {selectedMenu.price}
                      </h3>
                    </Col>
                  </Row>
                  <Row style={{ fontSize: 'large' }}>
                    <br />
                    {selectedMenu.description}
                  </Row>
                  <br />
                  <QuantityCounter />
                </Col>
              </Row>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button
              className="custom-btn"
              onClick={() => {
                this.props.changeMenuModalState();
                this.props.addToCart(selectedMenu.name, selectedMenu.price);
              }}
              style={{ fontSize: 'large' }}
            >
              <i className="fas fa-cart-plus" />
              <span style={{ paddingLeft: '1vw' }}>
                Add to cart
              </span>
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default MenuPage;

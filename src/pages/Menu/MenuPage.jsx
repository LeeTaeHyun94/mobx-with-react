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

@inject(({ menuStore, menuModalStateStore }) => ({
  selectedMenu: menuStore.selectedMenu,
  menuModalState: menuModalStateStore.menuModalState,
  changeMenuModalState: menuModalStateStore.changeState,
}))
@observer
class MenuPage extends Component {
  render() {
    return (
      <div>
        <CommonHeader />
        <Tab.Container>
          <Row>
            <Col sm={2}>
              <CategoryListGroup />
            </Col>
            <Col>
              <MenuCardDeck />
            </Col>
          </Row>
        </Tab.Container>
        <Modal
          show={this.props.menuModalState}
          dialogClassName="modal-xl"
          centered
        >
          <Modal.Header>
            <Button onClick={this.props.changeMenuModalState} variant="dark" style={{ fontSize: 'xx-large' }}>
              <i className="fas fa-chevron-left" />
              &nbsp;Back
            </Button>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Row>
                <Col>
                  <img
                    src={this.props.selectedMenu.imgUrl}
                    alt={this.props.selectedMenu.name}
                    style={{ width: 500, height: 500 }}
                  />
                </Col>
                <Col>
                  <Row>
                    <Col>
                      <h1>{this.props.selectedMenu.name}</h1>
                    </Col>
                    <Col>
                      <h1>
                        $&nbsp;
                        {this.props.selectedMenu.price}
                      </h1>
                    </Col>
                  </Row>
                  <Row style={{ fontSize: 'xx-large' }}>
                    <br />
                    {this.props.selectedMenu.description}
                  </Row>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => { this.props.changeMenuModalState(); }} style={{ fontSize: 'xx-large' }}>
              <i className="fas fa-cart-plus" />
              &nbsp;Add to cart
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default MenuPage;

import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import Close from "@material-ui/icons/Close";
import Remove from "@material-ui/icons/Remove";
import Add from "@material-ui/icons/Add";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Footer from "components/Footer/Footer.jsx";
import Table from "components/Table/Table.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";

import shoppingCartStyle from "assets/jss/tesis/cartstyle.js";

import product1 from "assets/img/product1.jpg";
import product2 from "assets/img/product2.jpg";
import product3 from "assets/img/product3.jpg";
import * as actionCreators from "../../actions/auth";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {push} from 'connected-react-router'
import hasFeature from "../../utils";
import ShoppingCart from "@material-ui/icons/ShoppingCart";

import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Settings from "@material-ui/icons/Settings";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Search from "@material-ui/icons/Search";
import {Link} from "react-router-dom";
import CustomInput from "components/CustomInput/CustomInput.jsx";

class ShoppingCartPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    this.props.actions.goToPage(3)
  }
  render() {
    const { classes } = this.props;
    console.log(this.props.cart)
    let list =
                    this.props.cart.map( (product,index) => [
                      <div className={classes.imgContainer}>
                        <img src={product.photos[0].src} alt="..." className={classes.img} />
                      </div>,
                      <span>
                        <a href="#jacket" className={classes.tdNameAnchor}>
                            {product.name}
                        </a>
                        <br />
                        <small className={classes.tdNameSmall}>
                          by Dolce&amp;Gabbana
                        </small>
                      </span>,
                      "",
                      "",
                      hasFeature("Precio",this.props.tree) &&<span>
                        <small className={classes.tdNumberSmall}>$</small> {(product.price).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&.').slice(0, -3)}
                      </span>,
                      <span>
                          {product.qty}{` `}
                        <div className={classes.buttonGroup}>
                          <Button
                            color="info"
                            size="sm"
                            round
                            className={classes.firstButton}
                            onClick={() => this.props.actions.qtyToProduct(product,-1)}
                          >
                            <Remove />
                          </Button>
                          <Button
                            color="info"
                            size="sm"
                            round
                            className={classes.lastButton}
                            onClick={() => this.props.actions.qtyToProduct(product,1)}
                          >
                            <Add />
                          </Button>
                        </div>
                      </span>,
                      <span>
                          {hasFeature("Precio",this.props.tree) &&<small className={classes.tdNumberSmall}>{(product.price*product.qty).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&.').slice(0, -3)}</small>}
                      </span>,
                      <Tooltip
                        id="close1"
                        title="Remove item"
                        placement="left"
                        classes={{ tooltip: classes.tooltip }}
                      >
                        <Button link className={classes.actionButton} onClick={() => this.props.actions.removeProductFromCart(product.id)}>
                          <Close />
                        </Button>
                      </Tooltip>
                    ])
      list.push({
                      purchase: true,
                      colspan: "3",
                      amount: (
                        hasFeature("Precio",this.props.tree) &&<span>
                          <small>$</small>{(this.props.sum).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&.').slice(0, -3)}
                        </span>
                      ),
                      col: {
                        colspan: 3,
                        text: (
                          <Button color="info" round onClick={() => {if(this.props.cart.length >0){this.props.dispatch(push("/payment-page"))}}}>
                            Termina tu compra <KeyboardArrowRight />
                          </Button>
                        )
                      }
                    })
    return (
      <div>
        <div className={classNames(classes.main, classes.mainRaised)} style={{'marginTop' :0}}>
          <div className={classes.container} style={{'marginTop' :0,'paddingTop': '20vh'}}>
            <Card plain style={{'marginTop' :0}}>
              <CardBody plain>
                <h3 className={classes.cardTitle}>Tu carro de compra</h3>
                <Table
                  tableHead={[
                    "",
                    "Producto",
                    "",
                    "",
                        hasFeature("Precio",this.props.tree)?"Precio":"",
                    "CANTIDAD",
                    hasFeature("Precio",this.props.tree)?"P. Final":"",
                    ""
                  ]}
                  tableData={
                    list}
                  tableShopping
                  customHeadCellClasses={[
                    classes.textCenter,
                    classes.description,
                    classes.description,
                    classes.textRight,
                    classes.textRight,
                    classes.textRight
                  ]}
                  customHeadClassesForCells={[0, 2, 3, 4, 5, 6]}
                  customCellClasses={[
                    classes.tdName,
                    classes.customFont,
                    classes.customFont,
                    classes.tdNumber,
                    classes.tdNumber + " " + classes.tdNumberAndButtonGroup,
                    classes.tdNumber + " " + classes.textCenter
                  ]}
                  customClassesForCells={[1, 2, 3, 4, 5, 6]}
                />
              </CardBody>
            </Card>
          </div>
        </div>
        <Footer
          content={
            <div>
              <div className={classes.left}>
                <List className={classes.list}>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href=""
                      className={classes.block}
                    >
                      Ecommerce
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href=""
                      className={classes.block}
                    >
                      About us
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href=""
                      className={classes.block}
                    >
                      Blog
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href=""
                      className={classes.block}
                    >
                      Licenses
                    </a>
                  </ListItem>
                </List>
              </div>
              <div className={classes.right}>
                &copy; {1900 + new Date().getYear()} , made with{" "}
                <Favorite className={classes.icon} /> by{" "}
              </div>
            </div>
          }
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state.auth.cart)

    return {
        tree: state.auth.data,
        categories: state.auth.categories,
            cart: state.auth.cart,
        cartIndexes: state.auth.cart,
        sum: state.auth.cart.reduce((total, currentValue, currentIndex, arr) =>{ return total + currentValue.price*currentValue.qty},0),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
        actions: bindActionCreators(actionCreators, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(shoppingCartStyle)(ShoppingCartPage));

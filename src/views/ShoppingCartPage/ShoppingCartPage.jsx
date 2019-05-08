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
                      "Red",
                      "M",
                      <span>
                        <small className={classes.tdNumberSmall}>€</small> {product.price}
                      </span>,
                      <span>
                        1{` `}
                        <div className={classes.buttonGroup}>
                          <Button
                            color="info"
                            size="sm"
                            round
                            className={classes.firstButton}
                          >
                            <Remove />
                          </Button>
                          <Button
                            color="info"
                            size="sm"
                            round
                            className={classes.lastButton}
                          >
                            <Add />
                          </Button>
                        </div>
                      </span>,
                      <span>
                        <small className={classes.tdNumberSmall}>{product.price}</small>
                      </span>,
                      <Tooltip
                        id="close1"
                        title="Remove item"
                        placement="left"
                        classes={{ tooltip: classes.tooltip }}
                      >
                        <Button link className={classes.actionButton} onClick={() => this.props.actions.removeProductFromCart(index)}>
                          <Close />
                        </Button>
                      </Tooltip>
                    ])
      list.push({
                      purchase: true,
                      colspan: "3",
                      amount: (
                        <span>
                          <small>€</small>{this.props.sum}
                        </span>
                      ),
                      col: {
                        colspan: 3,
                        text: (
                          <Button color="info" round>
                            Complete Purchase <KeyboardArrowRight />
                          </Button>
                        )
                      }
                    })
    return (
      <div>
        <Header
              brand={"Ecommerce"}
              links={
                <div className={classes.collapse}>
                  <List className={classes.list + " " + classes.mlAuto}>

                    {hasFeature("Categorias",this.props.tree) &&<ListItem className={classes.listItem}>
                      <CustomDropdown
                      left
                      caret={false}
                      hoverColor="dark"
                      dropdownHeader="Categorias"
                      buttonText={
                        <Button
                        href="#pablo"
                        className={
                          classes.navLink + " " + classes.navLinkActive
                        }
                        onClick={e => e.preventDefault()}
                        color="transparent"
                      >
                        Categorias
                      </Button>
                      }
                      buttonProps={{
                        className:
                          classes.navLink + " " + classes.imageDropdownButton,
                        color: "transparent"
                      }}
                      dropdownList={this.props.categories.map( (category,index) => <Link to="/category-page" onClick={() => console.log(category.name)}>{category.name}</Link>)}
                    />
                    </ListItem>}
                  <ListItem className={classes.listItem + " " + classes.mlAuto}>
                  {/*<div className={classes.mlAuto}>*/}
                    <CustomInput
                      white
                      inputRootCustomClasses={classes.inputRootCustomClasses}
                      formControlProps={{
                        className: classes.formControl
                      }}
                      inputProps={{
                        placeholder: "Buscar",
                        inputProps: {
                          "aria-label": "Buscar",
                          className: classes.searchInput
                        }
                      }}
                    />
                    <Button color="white" justIcon round>
                      <Search className={classes.searchIcon} />
                    </Button>
                  </ListItem>
                      {hasFeature("Compra",this.props.tree) && hasFeature("Usuarios",this.props.tree) &&<ListItem className={classes.listItem}>
                    <Button
                      href="#pablo"
                      className={classes.navLink + " " + classes.navLinkActive}
                      onClick={e => e.preventDefault()}
                      color="transparent"
                    >
                      <ShoppingCart /> Compras
                    </Button>
                  </ListItem>}
                      {hasFeature("Usuarios",this.props.tree) && hasFeature("HistorialDeCompra",this.props.tree) && <ListItem className={classes.listItem}>
                    <Button
                      href="#pablo"
                      className={classes.navLink}
                      onClick={e => e.preventDefault()}
                      color="transparent"
                    >
                      <AccountCircle /> Historial
                    </Button>
                  </ListItem>}
                  {hasFeature("Usuarios",this.props.tree) &&<ListItem className={classes.listItem}>
                    <Button
                      href="#pablo"
                      className={classes.navLink}
                      onClick={e => e.preventDefault()}
                      color="transparent"
                    >
                      <Settings /> Configuracion
                    </Button>
                  </ListItem>}
                  {/*</div>*/}
                    </List>

                </div>
              }
              absolute
          color="info"

            />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <Card plain>
              <CardBody plain>
                <h3 className={classes.cardTitle}>Shopping Cart</h3>
                <Table
                  tableHead={[
                    "",
                    "PRODUCT",
                    "COLOR",
                    "SIZE",
                    "PRICE",
                    "QTY",
                    "AMOUNT",
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
                      href="https://www.creative-tim.com/"
                      className={classes.block}
                    >
                      Creative Tim
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="https://www.creative-tim.com/presentation"
                      className={classes.block}
                    >
                      About us
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="//blog.creative-tim.com/"
                      className={classes.block}
                    >
                      Blog
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="https://www.creative-tim.com/license"
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
                <a href="https://www.creative-tim.com">Creative Tim</a> for a
                better web.
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
   const cart =state.auth.cart.map( ( index )=> state.auth.products[index])

    return {
        tree: state.auth.data,
        categories: state.auth.categories,
            cart: cart,
        cartIndexes: state.auth.cart,
        sum: cart.reduce((total, currentValue, currentIndex, arr) =>{ return total + currentValue.price},0),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
        actions: bindActionCreators(actionCreators, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(shoppingCartStyle)(ShoppingCartPage));

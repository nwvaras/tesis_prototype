import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import Header from "components/Header/Header.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Footer from "components/Footer/Footer.jsx";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import SectionLatestOffers from "views/DaEcommerce/Sections/SectionLatestOffers.jsx";
import SectionProducts from "views/DaEcommerce/Sections/SectionProducts.jsx";
import SectionBlog from "views/DaEcommerce/Sections/SectionBlog.jsx";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import InputAdornment from "@material-ui/core/InputAdornment";
import Search from "@material-ui/icons/Search";
import Email from "@material-ui/icons/Email";
// @material-ui icons
import Mail from "@material-ui/icons/Mail";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import ecommerceHeader from "assets/img/examples/ecommerce-header.jpg";
import face1 from "assets/img/faces/card-profile6-square.jpg";
import face2 from "assets/img/faces/christian.jpg";
import face3 from "assets/img/faces/card-profile4-square.jpg";
import face4 from "assets/img/faces/card-profile1-square.jpg";
import face5 from "assets/img/faces/marc.jpg";
import face6 from "assets/img/faces/kendall.jpg";
import face7 from "assets/img/faces/card-profile5-square.jpg";
import face8 from "assets/img/faces/card-profile2-square.jpg";

import styles from "assets/jss/tesis/homestyle.js";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Settings from "@material-ui/icons/Settings";
import {bindActionCreators} from "redux";
import * as actionCreators from "../../actions/auth";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import hasFeature from '../../utils/index'
import Badge from "@material-ui/core/Badge";
import { push } from 'connected-react-router'
class DaEcommerce extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  constructor(props) {
      super(props);
      this.state ={
          searchText: ""
      }
  }

  hasFeature(id,node){
        if(node.id === id){
            return node.selected
        }else{
            if(node.children){

                return node.children.some( (child) => {
                    return hasFeature(id,child)
                })
            }
        }
        return false


    }
  handleChange = name => event => {
      console.log(event.target)
    this.setState({ [name]: event.target.value });
  };
  render() {

    const { classes } = this.props;
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
                      dropdownList={[
                        <Link to="/category-page?categoryId=0">Ropa</Link>,
                        "Laptops",
                        "Instrumentos"
                      ]}
                    />
                    </ListItem>}
                      {hasFeature("Busqueda",this.props.tree ) &&<ListItem className={classes.listItem + " " + classes.mlAuto}>
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
                          className: classes.searchInput,
                            onChange: this.handleChange("searchText"),
                            value: this.state.searchText
                        }
                      }}
                    />
                    <Button color="white" justIcon round onClick={() => this.props.dispatch(push("/category-page?searchText="+this.state.searchText))}>
                      <Search className={classes.searchIcon} />
                    </Button>
                  </ListItem>}
                      {hasFeature("Notificaciones",this.props.tree)? (hasFeature("Compra",this.props.tree) && hasFeature("Usuarios",this.props.tree) &&<ListItem className={classes.listItem}>
                    <Button
                      className={classes.navLink + " " + classes.navLinkActive}
                      onClick={() => this.props.dispatch(push("/shopping-cart-page?"))}
                      color="transparent"

                    >
                      <Badge badgeContent={this.props.cart.length} color="primary" classes={{ badge: classes.badge }}><ShoppingCart /> Carro</Badge>
                    </Button>
                  </ListItem>):(hasFeature("Compra",this.props.tree) && hasFeature("Usuarios",this.props.tree) &&<ListItem className={classes.listItem}>
                    <Button
                      className={classes.navLink + " " + classes.navLinkActive}
                      onClick={() => this.props.dispatch(push("/shopping-cart-page?"))}
                      color="transparent"

                    >
                      <ShoppingCart /> Carro
                    </Button>
                  </ListItem>)}
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
                  {hasFeature("Email",this.props.tree) &&<ListItem className={classes.listItem}>
                    <Button
                      href="mailto:ecommerce@email.com"
                      className={classes.navLink}
                      onClick={e => e.preventDefault()}
                      color="transparent"
                    >
                      <Email /> ¿Dudas o problemas¿ ¡Contactanos!
                    </Button>
                  </ListItem>}
                  {/*</div>*/}
                    </List>
                    <Button onClick={() => this.props.actions.sideBar()}>Sidebar</Button>

                </div>
              }
              absolute
          color="info"
            />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        tree: state.auth.data,
        cart: state.auth.cart
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
        actions: bindActionCreators(actionCreators, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(DaEcommerce));
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
import Footer from "components/Footer/Footer.jsx";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import SectionLatestOffers from "views/DaEcommerce/Sections/SectionLatestOffers.jsx";
import SectionProducts from "views/CategoryPage/Sections/SectionProducts.jsx";
import SectionBlog from "views/EcommercePage/Sections/SectionBlog.jsx";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui icons
import Mail from "@material-ui/icons/Mail";

import ecommerceHeader from "assets/img/examples/ecommerce-header.jpg";
import face1 from "assets/img/faces/card-profile6-square.jpg";
import face2 from "assets/img/faces/christian.jpg";
import face3 from "assets/img/faces/card-profile4-square.jpg";
import face4 from "assets/img/faces/card-profile1-square.jpg";
import face5 from "assets/img/faces/marc.jpg";
import face6 from "assets/img/faces/kendall.jpg";
import face7 from "assets/img/faces/card-profile5-square.jpg";
import face8 from "assets/img/faces/card-profile2-square.jpg";
import hasFeature from '../../utils/index'
// @material-ui icons

import SectionLatestOffersTePodria from "./Sections/SectionLatestOffersTePodria";
import * as actionCreators from "../../actions/auth";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import styles from "assets/jss/tesis/homestyle.js";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Settings from "@material-ui/icons/Settings";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import Search from "@material-ui/icons/Search";
import {Link} from "react-router-dom";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import queryString from 'query-string';
import {withRouter} from "react-router";
class EcommercePage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    this.props.actions.goToPage(1)
  }
  // hasFeature(id,node){
  //       if(node.id === id){
  //           return node.selected
  //       }else{
  //           if(node.children){
  //
  //               return node.children.some( (child) => {
  //                   return hasFeature(id,child)
  //               })
  //           }
  //       }
  //       return false
  //
  //
  //   }
  render() {
    const { classes } = this.props;
    const params = queryString.parse(this.props.location.search)
    const title =   params.searchText? 'Buscaste '+'"'+params.searchText+'"': (params.categoryId?this.props.categories[params.categoryId].name : "Todos los articulos")
    return (
      <div>
        <Parallax
          image={require("assets/img/fondo.jpg")}
          filter="dark"
          small
        >
          <div className={classes.container}>
            <GridContainer>
              <GridItem
                md={8}
                sm={8}
                className={classNames(
                  classes.mlAuto,
                  classes.mrAuto,
                  classes.textCenter
                )}
              >
                <div className={classes.brand}>
                  <h1 className={classes.title}>{title}</h1>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>

        <div className={classNames(classes.main, classes.mainRaised)}>
           {hasFeature("Recomendados",this.props.tree) &&<SectionLatestOffers title={"Recomendados"}/>}
            <SectionProducts />
        </div>

        <div
          className={classNames(
            classes.subscribeLine,
            classes.subscribeLineImage
          )}
          style={{ backgroundImage: `url(${ecommerceHeader})` }}
        >
          <div className={classes.container}>
            {hasFeature("Subscripcion",this.props.tree) &&<GridContainer>
              <GridItem
                xs={12}
                sm={6}
                md={6}
                className={classNames(classes.mlAuto, classes.mrAuto)}
              >
                <div className={classes.textCenter}>
                  <h3 className={classes.title}>¿Buscas ofertas?</h3>
                  <p className={classes.description}>
                    Subscribete para recibir actualizaciones de las ultimas ofertas
                  </p>
                </div>
                <Card raised className={classes.card}>
                  <CardBody className={classes.cardBody}>
                    <form>
                      <GridContainer>
                        <GridItem xs={12} sm={6} md={6} lg={8}>
                          <CustomInput
                            id="emailPreFooter"
                            formControlProps={{
                              fullWidth: true,
                              className: classes.cardForm
                            }}
                            inputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <Mail />
                                </InputAdornment>
                              ),
                              placeholder: "Tu Email..."
                            }}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={6} md={6} lg={4}>
                          <Button
                            color="rose"
                            block
                            className={classes.subscribeButton}
                          >
                            subscribir
                          </Button>
                        </GridItem>
                      </GridContainer>
                    </form>
                  </CardBody>
                </Card>
              </GridItem>
            </GridContainer>}
          </div>
        </div>

        {hasFeature("Informacion",this.props.tree) &&<Footer
          theme="dark"
          content={
            <div>
              <div className={classes.left}>
                <List className={classes.list}>
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
                      Presentacion
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="#pablito"
                      onClick={e => e.preventDefault()}
                      className={classes.block}
                    >
                      Descubre
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>

                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href=""
                      className={classes.block}
                    >
                      Contactanos
                    </a>
                  </ListItem>
                </List>
              </div>
              <div className={classes.right}>
                Copyright &copy; {1900 + new Date().getYear()}{" "}

                All Rights Reserved.
              </div>
            </div>
          }
        >
        </Footer>}
      </div>
    );
  }
}
const mapStateToProps = (state) => {

    return {
                    tree: state.auth.data,
                    categories: state.auth.categories,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
        actions: bindActionCreators(actionCreators, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withStyles(styles)(EcommercePage)));

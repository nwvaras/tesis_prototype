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
import SectionLatestOffers2 from "./Sections/SectionLatestOffers2";
import SectionLatestOffers3 from "./Sections/SectionLatestOffers3";
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
    this.props.actions.goToPage(0)
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
  render() {

    const { classes } = this.props;
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

                  {hasFeature("CodigoDesc",this.props.tree) ?(<h4>
                    Delivery a todo Chile. Usa el cupon{" "}
                    <b>25verano</b> para un descuento extra de un 25%
                  </h4>):(<h4>Delivery a todo Chile. Bienvenido</h4>)}
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>

        <div className={classNames(classes.main, classes.mainRaised)}>
            {hasFeature("Ads",this.props.tree) &&hasFeature("Novedades",this.props.tree) && <SectionLatestOffers title={"Novedades"} />}
        </div>
          <div className={classNames(classes.main, classes.mainRaised)}>
          {hasFeature("Ads",this.props.tree) &&hasFeature("Recomendados",this.props.tree) && <SectionLatestOffers title={"Recomendados"}/>}
        </div>
         <div className={classNames(classes.main, classes.mainRaised)}>
         {hasFeature("Ads",this.props.tree) &&hasFeature("TopProductsBuyTimes",this.props.tree) && <SectionLatestOffers title={"Top Products"}/>}
        </div>
        <div
          className={classNames(
            classes.subscribeLine,
            classes.subscribeLineImage
          )}
          style={{ backgroundImage: `url(${ecommerceHeader})` }}
        >
          {hasFeature("Subscripcion",this.props.tree) &&<div className={classes.container}>
            <GridContainer>
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
            </GridContainer>
          </div>}
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
        tree: state.auth.data
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
        actions: bindActionCreators(actionCreators, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(DaEcommerce));
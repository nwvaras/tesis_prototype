import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Button from "components/CustomButtons/Button.jsx";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Tooltip from "@material-ui/core/Tooltip";
// @material-ui icons
import Favorite from "@material-ui/icons/Favorite";

import styles from "assets/jss/material-kit-pro-react/views/ecommerceSections/latestOffersStyle.jsx";

import gucci from "assets/img/examples/gucci.jpg";
import tomFord from "assets/img/examples/tom-ford.jpg";
import dolce from "assets/img/examples/dolce.jpg";
import * as actionCreators from "../../../actions/auth";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

const SectionLatestOffers = props => {
  const { classes } = props;
  const hasFeature =(id,node) =>{
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
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <h2>Top Product</h2>
        <GridContainer>
          <GridItem md={3} sm={3}>
            <Card product plain>
              <CardHeader image plain>
                <a href="#pablo">
                  <img src={gucci} alt="..." />
                </a>
                <div
                  className={classes.coloredShadow}
                  style={{ backgroundImage: `url(${gucci})`, opacity: 1 }}
                />
              </CardHeader>
              <CardBody className={classes.textCenter} plain>
                <h4 className={classes.cardTitle}>Gucci</h4>
                {/*<p className={classes.cardDescription}>*/}
                  {/*The structured shoulders and sleek detailing ensure a sharp*/}
                  {/*silhouette. Team it with a silk pocket square and leather*/}
                  {/*loafers.*/}
                {/*</p>*/}
              </CardBody>
              <CardFooter plain>
                <div className={classes.priceContainer}>
                  {hasFeature("Precio",props.tree) &&<span className={classNames(classes.price, classes.priceOld)}>
                    {" "}
                    €1,430
                  </span>}
                  {hasFeature("Precio",props.tree) &&<span className={classNames(classes.price, classes.priceNew)}>
                    {" "}
                    €743
                  </span>}
                </div>
                <div className={classNames(classes.stats, classes.mlAuto)}>
                  <Tooltip
                    id="tooltip-top"
                    title="Saved to Wishlist"
                    placement="top"
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button justIcon simple color="rose">
                      <Favorite />
                    </Button>
                  </Tooltip>
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem md={3} sm={3}>
            <Card product plain>
              <CardHeader image plain>
                <a href="#pablo">
                  <img src={dolce} alt="..." />
                </a>
                <div
                  className={classes.coloredShadow}
                  style={{ backgroundImage: `url(${dolce})`, opacity: 1 }}
                />
              </CardHeader>
              <CardBody className={classes.textCenter} plain>
                <h4 className={classes.cardTitle}>Dolce & Gabbana</h4>
                {/*<p className={classes.cardDescription}>*/}
                  {/*The structured shoulders and sleek detailing ensure a sharp*/}
                  {/*silhouette. Team it with a silk pocket square and leather*/}
                  {/*loafers.*/}
                {/*</p>*/}
              </CardBody>
              <CardFooter plain>
                <div className={classes.priceContainer}>
                  {hasFeature("Precio",props.tree) &&<span className={classNames(classes.price, classes.priceOld)}>
                    {" "}
                    €1,430
                  </span>}
                  {hasFeature("Precio",props.tree) &&<span className={classNames(classes.price, classes.priceNew)}>
                    {" "}
                    €743
                  </span>}
                </div>
                <div className={classNames(classes.stats, classes.mlAuto)}>
                  <Tooltip
                    id="tooltip-top"
                    title="Saved to Wishlist"
                    placement="top"
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button justIcon simple color="rose">
                      <Favorite />
                    </Button>
                  </Tooltip>
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem md={3} sm={3}>
            <Card product plain>
              <CardHeader image plain>
                <a href="#pablo">
                  <img src={tomFord} alt="..." />
                </a>
                <div
                  className={classes.coloredShadow}
                  style={{ backgroundImage: `url(${tomFord})`, opacity: 1 }}
                />
              </CardHeader>
              <CardBody className={classes.textCenter} plain>
                <h4 className={classes.cardTitle}>Dolce & Gabbana</h4>
                {/*<p className={classes.cardDescription}>*/}
                  {/*The structured shoulders and sleek detailing ensure a sharp*/}
                  {/*silhouette. Team it with a silk pocket square and leather*/}
                  {/*loafers.*/}
                {/*</p>*/}
              </CardBody>
              <CardFooter plain>
                <div className={classes.priceContainer}>
                  {hasFeature("Precio",props.tree) &&<span className={classNames(classes.price, classes.priceOld)}>
                    {" "}
                    €1,430
                  </span>}
                  {hasFeature("Precio",props.tree) &&<span className={classNames(classes.price, classes.priceNew)}>
                    {" "}
                    €743
                  </span>}
                </div>
                <div className={classNames(classes.stats, classes.mlAuto)}>
                  <Tooltip
                    id="tooltip-top"
                    title="Saved to Wishlist"
                    placement="top"
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button justIcon simple color="rose">
                      <Favorite />
                    </Button>
                  </Tooltip>
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
};

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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SectionLatestOffers));

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

import styles from "assets/jss/tesis/homestyle.js";


import image1 from "assets/img/bg.jpg";
import image2 from "assets/img/bg2.jpg";
import image3 from "assets/img/bg3.jpg";

import Carousel from "react-slick";
import LocationOn from "@material-ui/icons/LocationOn";
import * as actionCreators from "../../../actions/auth";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import hasFeature from '../../../utils/index.js'
const SectionLatestOffers = props => {
  const { classes } = props;
  const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true
    };
  return (
    <div className={classes.section}>
      <div className={classes.container +" "+ classes.paddingAdBottom} >
        <h2>{props.title}</h2>
        <Carousel {...settings}>
                  {props.randomProducts.map( (product,index) =>
                  <Card product style={{maxHeight:'10vh'}}>
                    <CardHeader image>
                      <a href="#pablo">
                        <img src={product.photos[0].src} alt="cardProduct" />
                      </a>
                    </CardHeader>
                    <CardBody>
                      <h6
                        className={classNames(
                          classes.cardCategory,
                          classes.textRose
                        )}
                      >
                        Ropa
                      </h6>
                      <h4 className={classes.cardTitle}>{product.name}</h4>
                      <div className={classes.cardDescription}>
                          {product.description}
                      </div>
                    </CardBody>
                    <CardFooter className={classes.justifyContentBetween}>
                      <div className={classes.price}>
                        <h4>{product.price}</h4>
                      </div>
                      <div className={classes.stats}>
                       {hasFeature("WishList",props.tree) &&<Tooltip
                    id="tooltip-top"
                    title="Saved to Wishlist"
                    placement="top"
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button justIcon simple color="rose">
                      <FavoriteBorder />
                    </Button>
                  </Tooltip>}
                      </div>
                    </CardFooter>
                  </Card>)}
                </Carousel>
      </div>
    </div>
  );
};


const mapStateToProps = (state) => {
    return {
        tree: state.auth.data,
        randomProducts :state.auth.products.concat().sort( function() { return 0.5 - Math.random() } ).slice(1,8),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
        actions: bindActionCreators(actionCreators, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SectionLatestOffers));
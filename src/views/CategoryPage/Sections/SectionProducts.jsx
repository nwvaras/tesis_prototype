import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// plugin that creates slider
import nouislider from "nouislider";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Checkbox from "@material-ui/core/Checkbox";
import Tooltip from "@material-ui/core/Tooltip";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// @material-ui icons
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import Cached from "@material-ui/icons/Cached";
import Subject from "@material-ui/icons/Subject";
import Check from "@material-ui/icons/Check";
// core components
import Accordion from "components/Accordion/Accordion.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Clearfix from "components/Clearfix/Clearfix.jsx";
import { push } from 'connected-react-router'

import queryString from 'query-string';
import {withRouter} from "react-router";
import suit1 from "assets/img/examples/suit-1.jpg";
import suit2 from "assets/img/examples/suit-2.jpg";
import suit3 from "assets/img/examples/suit-3.jpg";
import suit4 from "assets/img/examples/suit-4.jpg";
import suit5 from "assets/img/examples/suit-5.jpg";
import suit6 from "assets/img/examples/suit-6.jpg";
import color1 from "assets/img/examples/color1.jpg";
import color3 from "assets/img/examples/color3.jpg";
import color2 from "assets/img/examples/color2.jpg";
import dg3 from "assets/img/dg3.jpg";
import dg1 from "assets/img/dg1.jpg";
import Star from "@material-ui/icons/Star";
import StarBorder from "@material-ui/icons/StarBorder";
import styles from "assets/jss/material-kit-pro-react/views/ecommerceSections/productsStyle.jsx";
import * as actionCreators from "../../../actions/auth";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import hasFeature from '../../../utils/index'
class SectionProducts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: [1, 9, 27],
      priceRange: [10000, 600000]
    };
  }
  componentDidMount() {
    var slider = this.refs.slider1;
    var priceLow = this.refs.priceLow;
    var priceHigh = this.refs.priceHigh;
    nouislider
      .create(slider, {
        start: this.state.priceRange,
        connect: true,
        range: { min: 10000, max: 600000 },
        step: 1
      })
      .on("update", function(values, handle) {
        let currencyLow = priceLow.dataset.currency;
        let currencyHigh = priceHigh.dataset.currency;
        priceLow.innerHTML = Math.round(values[0]);
        priceHigh.innerHTML = Math.round(values[1]);
      });
  }
  handleToggle(value) {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });
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

     const params = queryString.parse(this.props.location.search)
        console.log(params)
      const min = params.min
      const max = params.max
      const categoryVariables = params.categoryId?this.props.categoryVariables[params.categoryId]:false
      const products = this.props.products.filter( product => params.searchText ? ((params.categoryId? (product.category === parseInt(params.categoryId)) : true) && product.name.includes(params.searchText)): (params.categoryId? (product.category === parseInt(params.categoryId)) : true)).filter( product =>params.min&&params.max? (product.price > min && product.price < max): true)

    const { classes } = this.props;

    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <h2>Busca lo que necesites</h2>
          <GridContainer>
            <GridItem md={3} sm={3}>
              <Card plain>
                <CardBody className={classes.cardBodyRefine}>
                  <h4 className={`${classes.cardTitle} ${classes.textLeft}`}>
                    Refinar
                    <Tooltip
                      id="tooltip-top"
                      title="Filtrar"
                      placement="top"
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <Button
                        link
                        justIcon
                        onClick={() => this.props.dispatch(push("/category-page?min="+this.refs.priceLow.innerHTML +"&max=" +this.refs.priceHigh.innerHTML))}
                        size="sm"
                        className={`${classes.pullRight} ${
                          classes.refineButton
                        }`}
                      >
                        <Cached />
                      </Button>
                    </Tooltip>
                    <Clearfix />
                  </h4>
                    <Accordion
                    active={[0, 2]}
                    activeColor="rose"
                    collapses={[
                      hasFeature("Precio",this.props.tree)? {
                        title: "Rango de precio",
                        content: (
                          <CardBody className={classes.cardBodyRefine}>
                            <span
                              ref="priceLow"
                              data-currency="€"
                              className={classNames(
                                classes.pullLeft,
                                classes.priceSlider
                              )}
                            >
                              €101
                            </span>
                            <span
                              ref="priceHigh"
                              data-currency="€"
                              className={classNames(
                                classes.pullRight,
                                classes.priceSlider
                              )}
                            >
                              €790
                            </span>
                            <br />
                            <br />
                            <div ref="slider1" className="slider-rose" />
                          </CardBody>
                        )
                      }: {},
                       categoryVariables?{
                        title: categoryVariables.name1,
                        content: (
                          <div className={classes.customExpandPanel}>
                            <div
                              className={
                                classes.checkboxAndRadio +
                                " " +
                                classes.checkboxAndRadioHorizontal
                              }
                            >
                                {categoryVariables.values1.map((marca,index) =><FormControlLabel key={marca}
                                control={
                                  <Checkbox
                                    tabIndex={-1}
                                    onClick={() => this.handleToggle(1)}
                                    // checked={
                                    //   this.state.checked.indexOf(1) !== -1
                                    //     ? true
                                    //     : false
                                    // }
                                    checkedIcon={
                                      <Check className={classes.checkedIcon} />
                                    }
                                    icon={
                                      <Check
                                        className={classes.uncheckedIcon}
                                      />
                                    }
                                    classes={{
                                      checked: classes.checked,
                                      root: classes.checkRoot
                                    }}
                                  />
                                }
                                classes={{ label: classes.label }}
                                label={marca}
                              />)}

                            </div>
                          </div>
                        )
                      }:{},
                      categoryVariables?{
                        title: categoryVariables.name2,
                        content: (
                          <div className={classes.customExpandPanel}>
                            <div
                              className={
                                classes.checkboxAndRadio +
                                " " +
                                classes.checkboxAndRadioHorizontal
                              }
                            >
                              {categoryVariables.values2.map((marca,index) =><FormControlLabel key={marca}
                                control={
                                  <Checkbox
                                    tabIndex={-1}
                                    onClick={() => this.handleToggle(1)}
                                    // checked={
                                    //   this.state.checked.indexOf(1) !== -1
                                    //     ? true
                                    //     : false
                                    // }
                                    checkedIcon={
                                      <Check className={classes.checkedIcon} />
                                    }
                                    icon={
                                      <Check
                                        className={classes.uncheckedIcon}
                                      />
                                    }
                                    classes={{
                                      checked: classes.checked,
                                      root: classes.checkRoot
                                    }}
                                  />
                                }
                                classes={{ label: classes.label }}
                                label={marca}
                              />)}
                            </div>
                          </div>
                        )
                      }:{},
                      // {
                      //   title: "Variable 3",
                      //   content: (
                      //     <div className={classes.customExpandPanel}>
                      //       <div
                      //         className={
                      //           classes.checkboxAndRadio +
                      //           " " +
                      //           classes.checkboxAndRadioHorizontal
                      //         }
                      //       >
                      //         <FormControlLabel
                      //           control={
                      //             <Checkbox
                      //               tabIndex={-1}
                      //               onClick={() => this.handleToggle(27)}
                      //               checked={
                      //                 this.state.checked.indexOf(27) !== -1
                      //                   ? true
                      //                   : false
                      //               }
                      //               checkedIcon={
                      //                 <Check className={classes.checkedIcon} />
                      //               }
                      //               icon={
                      //                 <Check
                      //                   className={classes.uncheckedIcon}
                      //                 />
                      //               }
                      //               classes={{
                      //                 checked: classes.checked,
                      //                 root: classes.checkRoot
                      //               }}
                      //             />
                      //           }
                      //           classes={{ label: classes.label }}
                      //           label="All"
                      //         />
                      //         <FormControlLabel
                      //           control={
                      //             <Checkbox
                      //               tabIndex={-1}
                      //               onClick={() => this.handleToggle(28)}
                      //               checkedIcon={
                      //                 <Check className={classes.checkedIcon} />
                      //               }
                      //               icon={
                      //                 <Check
                      //                   className={classes.uncheckedIcon}
                      //                 />
                      //               }
                      //               classes={{
                      //                 checked: classes.checked,
                      //                 root: classes.checkRoot
                      //               }}
                      //             />
                      //           }
                      //           classes={{ label: classes.label }}
                      //           label="Black"
                      //         />
                      //         <FormControlLabel
                      //           control={
                      //             <Checkbox
                      //               tabIndex={-1}
                      //               onClick={() => this.handleToggle(29)}
                      //               checkedIcon={
                      //                 <Check className={classes.checkedIcon} />
                      //               }
                      //               icon={
                      //                 <Check
                      //                   className={classes.uncheckedIcon}
                      //                 />
                      //               }
                      //               classes={{
                      //                 checked: classes.checked,
                      //                 root: classes.checkRoot
                      //               }}
                      //             />
                      //           }
                      //           classes={{ label: classes.label }}
                      //           label="Blue"
                      //         />
                      //         <FormControlLabel
                      //           control={
                      //             <Checkbox
                      //               tabIndex={-1}
                      //               onClick={() => this.handleToggle(30)}
                      //               checkedIcon={
                      //                 <Check className={classes.checkedIcon} />
                      //               }
                      //               icon={
                      //                 <Check
                      //                   className={classes.uncheckedIcon}
                      //                 />
                      //               }
                      //               classes={{
                      //                 checked: classes.checked,
                      //                 root: classes.checkRoot
                      //               }}
                      //             />
                      //           }
                      //           classes={{ label: classes.label }}
                      //           label="Brown"
                      //         />
                      //         <FormControlLabel
                      //           control={
                      //             <Checkbox
                      //               tabIndex={-1}
                      //               onClick={() => this.handleToggle(31)}
                      //               checkedIcon={
                      //                 <Check className={classes.checkedIcon} />
                      //               }
                      //               icon={
                      //                 <Check
                      //                   className={classes.uncheckedIcon}
                      //                 />
                      //               }
                      //               classes={{
                      //                 checked: classes.checked,
                      //                 root: classes.checkRoot
                      //               }}
                      //             />
                      //           }
                      //           classes={{ label: classes.label }}
                      //           label="Gray"
                      //         />
                      //         <FormControlLabel
                      //           control={
                      //             <Checkbox
                      //               tabIndex={-1}
                      //               onClick={() => this.handleToggle(32)}
                      //               checkedIcon={
                      //                 <Check className={classes.checkedIcon} />
                      //               }
                      //               icon={
                      //                 <Check
                      //                   className={classes.uncheckedIcon}
                      //                 />
                      //               }
                      //               classes={{
                      //                 checked: classes.checked,
                      //                 root: classes.checkRoot
                      //               }}
                      //             />
                      //           }
                      //           classes={{ label: classes.label }}
                      //           label="Green"
                      //         />
                      //         <FormControlLabel
                      //           control={
                      //             <Checkbox
                      //               tabIndex={-1}
                      //               onClick={() => this.handleToggle(33)}
                      //               checkedIcon={
                      //                 <Check className={classes.checkedIcon} />
                      //               }
                      //               icon={
                      //                 <Check
                      //                   className={classes.uncheckedIcon}
                      //                 />
                      //               }
                      //               classes={{
                      //                 checked: classes.checked,
                      //                 root: classes.checkRoot
                      //               }}
                      //             />
                      //           }
                      //           classes={{ label: classes.label }}
                      //           label="Neutrals"
                      //         />
                      //         <FormControlLabel
                      //           control={
                      //             <Checkbox
                      //               tabIndex={-1}
                      //               onClick={() => this.handleToggle(34)}
                      //               checkedIcon={
                      //                 <Check className={classes.checkedIcon} />
                      //               }
                      //               icon={
                      //                 <Check
                      //                   className={classes.uncheckedIcon}
                      //                 />
                      //               }
                      //               classes={{
                      //                 checked: classes.checked,
                      //                 root: classes.checkRoot
                      //               }}
                      //             />
                      //           }
                      //           classes={{ label: classes.label }}
                      //           label="Purple"
                      //         />
                      //       </div>
                      //     </div>
                      //   )
                      // }
                    ]}
                  />
                </CardBody>
              </Card>
            </GridItem>
            <GridItem md={9} sm={9}>
              <GridContainer>
                {/*<GridItem md={4} sm={4}>*/}
                  {/*<Card plain product>*/}
                    {/*<CardHeader noShadow image>*/}
                      {/*<a href="#pablo">*/}
                        {/*<img src={suit1} alt=".." />*/}
                      {/*</a>*/}
                    {/*</CardHeader>*/}
                    {/*<CardBody plain>*/}
                      {/*<a href="#pablo">*/}
                        {/*<h4 className={classes.cardTitle}>Polo Ralph Lauren</h4>*/}
                      {/*</a>*/}
                      {/*<p className={classes.description}>*/}
                        {/*Impeccably tailored in Italy from lightweight navy wool.*/}
                      {/*</p>*/}
                    {/*</CardBody>*/}
                    {/*<CardFooter plain className={classes.justifyContentBetween}>*/}
                      {/*<div className={classes.priceContainer}>*/}
                        {/*{hasFeature("Precio",this.props.tree) &&<span className={classes.price}> €800</span>}*/}
                      {/*</div>*/}
                      {/*{hasFeature("WishList",this.props.tree) &&<Tooltip*/}
                        {/*id="tooltip-top"*/}
                        {/*title="Saved to Wishlist"*/}
                        {/*placement="left"*/}
                        {/*classes={{ tooltip: classes.tooltip }}*/}
                      {/*>*/}
                        {/*<Button*/}
                          {/*justIcon*/}
                          {/*simple*/}
                          {/*color="rose"*/}
                          {/*className={classes.pullRight}*/}
                        {/*>*/}
                          {/*<Favorite />*/}
                        {/*</Button>*/}
                      {/*</Tooltip>}*/}
                    {/*</CardFooter>*/}
                  {/*</Card>*/}
                {/*</GridItem>*/}

                    {products.map( (product,index) =>
                         <GridItem md={4} sm={4} key={product.id}>
                    <Card plain product>
                        <CardHeader noShadow image>
                          <a onClick={() =>{ this.props.dispatch(push("/product-page")); this.props.actions.goToProductPage(product.id)}}>
                            <img src={product.photos[0].src} alt=".." />
                          </a>
                        </CardHeader>
                        <CardBody plain>
                          <a onClick={() =>{ this.props.dispatch(push("/product-page")); this.props.actions.goToProductPage(product.id)}}>
                            <h4 className={classes.cardTitle}>{product.name}</h4>
                          </a>
                            {hasFeature("Evaluacion",this.props.tree) && Array.apply(null, { length: product.eval }).map((e, i) => <Star/>)}
                    {hasFeature("Evaluacion",this.props.tree) &&Array.apply(null, { length: 5 -product.eval }).map((e, i) => <StarBorder/>)}
                          <p className={classes.description}>
                              {product.description}
                          </p>

                        </CardBody>
                        <CardFooter plain className={classes.justifyContentBetween}>
                          <div className={classes.priceContainer}>
                            {hasFeature("Precio",this.props.tree) &&<span className={classes.price}> ${(product.price).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&.').slice(0, -3)}</span>}
                          </div>
                          {hasFeature("WishList",this.props.tree) &&<Tooltip
                            id="tooltip-top"
                            title="Save to Wishlist"
                            placement="left"
                            classes={{ tooltip: classes.tooltip }}
                          >
                            <Button
                              justIcon
                              simple
                              color="rose"
                              className={classes.pullRight}
                            >
                              <FavoriteBorder />
                            </Button>
                          </Tooltip>}
                        </CardFooter>
                    </Card></GridItem>)}

                  {/*<Card plain product>*/}
                    {/*<CardHeader noShadow image>*/}
                      {/*<a href="#pablo">*/}
                        {/*<img src={suit2} alt=".." />*/}
                      {/*</a>*/}
                    {/*</CardHeader>*/}
                    {/*<CardBody plain>*/}
                      {/*<a href="#pablo">*/}
                        {/*<h4 className={classes.cardTitle}>Wooyoungmi</h4>*/}
                      {/*</a>*/}
                      {/*<p className={classes.description}>*/}
                        {/*Dark-grey slub wool, pintucked notch lapels.*/}
                      {/*</p>*/}
                    {/*</CardBody>*/}
                    {/*<CardFooter plain className={classes.justifyContentBetween}>*/}
                      {/*<div className={classes.priceContainer}>*/}
                        {/*{hasFeature("Precio",this.props.tree) &&<span className={classes.price}> €555</span>}*/}
                      {/*</div>*/}
                      {/*{hasFeature("WishList",this.props.tree) &&<Tooltip*/}
                        {/*id="tooltip-top"*/}
                        {/*title="Save to Wishlist"*/}
                        {/*placement="left"*/}
                        {/*classes={{ tooltip: classes.tooltip }}*/}
                      {/*>*/}
                        {/*<Button*/}
                          {/*justIcon*/}
                          {/*simple*/}
                          {/*color="rose"*/}
                          {/*className={classes.pullRight}*/}
                        {/*>*/}
                          {/*<FavoriteBorder />*/}
                        {/*</Button>*/}
                      {/*</Tooltip>}*/}
                    {/*</CardFooter>*/}
                  {/*</Card>*/}
                {/*</GridItem>*/}
                {/*<GridItem md={4} sm={4}>*/}
                  {/*<Card plain product>*/}
                    {/*<CardHeader noShadow image>*/}
                      {/*<a href="#pablo">*/}
                        {/*<img src={suit3} alt=".." />*/}
                      {/*</a>*/}
                    {/*</CardHeader>*/}
                    {/*<CardBody plain>*/}
                      {/*<a href="#pablo">*/}
                        {/*<h4 className={classes.cardTitle}>Tom Ford</h4>*/}
                      {/*</a>*/}
                      {/*<p className={classes.description}>*/}
                        {/*Immaculate tailoring is TOM FORD's forte.*/}
                      {/*</p>*/}
                    {/*</CardBody>*/}
                    {/*<CardFooter plain className={classes.justifyContentBetween}>*/}
                      {/*<div className={classes.priceContainer}>*/}
                        {/*{hasFeature("Precio",this.props.tree) &&<span className={classes.price}> €879</span>}*/}
                      {/*</div>*/}
                      {/*{hasFeature("WishList",this.props.tree) &&<Tooltip*/}
                        {/*id="tooltip-top"*/}
                        {/*title="Save to Wishlist"*/}
                        {/*placement="left"*/}
                        {/*classes={{ tooltip: classes.tooltip }}*/}
                      {/*>*/}
                        {/*<Button*/}
                          {/*justIcon*/}
                          {/*simple*/}
                          {/*color="rose"*/}
                          {/*className={classes.pullRight}*/}
                        {/*>*/}
                          {/*<FavoriteBorder />*/}
                        {/*</Button>*/}
                      {/*</Tooltip>}*/}
                    {/*</CardFooter>*/}
                  {/*</Card>*/}
                {/*</GridItem>*/}
                {/*<GridItem md={4} sm={4}>*/}
                  {/*<Card plain product>*/}
                    {/*<CardHeader noShadow image>*/}
                      {/*<a href="#pablo">*/}
                        {/*<img src={suit4} alt=".." />*/}
                      {/*</a>*/}
                    {/*</CardHeader>*/}
                    {/*<CardBody plain>*/}
                      {/*<a href="#pablo">*/}
                        {/*<h4 className={classes.cardTitle}>Thom Sweeney</h4>*/}
                      {/*</a>*/}
                      {/*<p className={classes.description}>*/}
                        {/*It's made from lightweight grey wool woven.*/}
                      {/*</p>*/}
                    {/*</CardBody>*/}
                    {/*<CardFooter plain className={classes.justifyContentBetween}>*/}
                      {/*<div className={classes.priceContainer}>*/}
                        {/*{hasFeature("Precio",this.props.tree) &&<span className={classes.price}> €680</span>}*/}
                      {/*</div>*/}
                      {/*{hasFeature("WishList",this.props.tree) &&<Tooltip*/}
                        {/*id="tooltip-top"*/}
                        {/*title="Save to Wishlist"*/}
                        {/*placement="left"*/}
                        {/*classes={{ tooltip: classes.tooltip }}*/}
                      {/*>*/}
                        {/*<Button*/}
                          {/*justIcon*/}
                          {/*simple*/}
                          {/*color="rose"*/}
                          {/*className={classes.pullRight}*/}
                        {/*>*/}
                          {/*<FavoriteBorder />*/}
                        {/*</Button>*/}
                      {/*</Tooltip>}*/}
                    {/*</CardFooter>*/}
                  {/*</Card>*/}
                {/*</GridItem>*/}
                {/*<GridItem md={4} sm={4}>*/}
                  {/*<Card plain product>*/}
                    {/*<CardHeader noShadow image>*/}
                      {/*<a href="#pablo">*/}
                        {/*<img src={suit5} alt=".." />*/}
                      {/*</a>*/}
                    {/*</CardHeader>*/}
                    {/*<CardBody plain>*/}
                      {/*<a href="#pablo">*/}
                        {/*<h4 className={classes.cardTitle}>Kingsman</h4>*/}
                      {/*</a>*/}
                      {/*<p className={classes.description}>*/}
                        {/*Crafted from khaki cotton and fully canvassed.*/}
                      {/*</p>*/}
                    {/*</CardBody>*/}
                    {/*<CardFooter plain className={classes.justifyContentBetween}>*/}
                      {/*<div className={classes.priceContainer}>*/}
                        {/*{hasFeature("Precio",this.props.tree) &&<span className={classes.price}> €725</span>}*/}
                      {/*</div>*/}
                      {/*{hasFeature("WishList",this.props.tree) &&<Tooltip*/}
                        {/*id="tooltip-top"*/}
                        {/*title="Saved to Wishlist"*/}
                        {/*placement="left"*/}
                        {/*classes={{ tooltip: classes.tooltip }}*/}
                      {/*>*/}
                        {/*<Button*/}
                          {/*justIcon*/}
                          {/*simple*/}
                          {/*color="rose"*/}
                          {/*className={classes.pullRight}*/}
                        {/*>*/}
                          {/*<Favorite />*/}
                        {/*</Button>*/}
                      {/*</Tooltip>}*/}
                    {/*</CardFooter>*/}
                  {/*</Card>*/}
                {/*</GridItem>*/}
                {/*<GridItem md={4} sm={4}>*/}
                  {/*<Card plain product>*/}
                    {/*<CardHeader noShadow image>*/}
                      {/*<a href="#pablo">*/}
                        {/*<img src={suit6} alt=".." />*/}
                      {/*</a>*/}
                    {/*</CardHeader>*/}
                    {/*<CardBody plain>*/}
                      {/*<a href="#pablo">*/}
                        {/*<h4 className={classes.cardTitle}>Boglioli</h4>*/}
                      {/*</a>*/}
                      {/*<p className={classes.description}>*/}
                        {/*Masterfully crafted in Northern Italy.*/}
                      {/*</p>*/}
                    {/*</CardBody>*/}
                    {/*<CardFooter plain className={classes.justifyContentBetween}>*/}
                      {/*<div className={classes.priceContainer}>*/}
                        {/*{hasFeature("Precio",this.props.tree) &&<span className={classes.price}> €699</span>}*/}
                      {/*</div>*/}
                      {/*{hasFeature("WishList",this.props.tree) &&<Tooltip*/}
                        {/*id="tooltip-top"*/}
                        {/*title="Save to Wishlist"*/}
                        {/*placement="left"*/}
                        {/*classes={{ tooltip: classes.tooltip }}*/}
                      {/*>*/}
                        {/*<Button*/}
                          {/*justIcon*/}
                          {/*simple*/}
                          {/*color="rose"*/}
                          {/*className={classes.pullRight}*/}
                        {/*>*/}
                          {/*<FavoriteBorder />*/}
                        {/*</Button>*/}
                      {/*</Tooltip>}*/}
                    {/*</CardFooter>*/}
                  {/*</Card>*/}

                <GridItem
                  md={3}
                  sm={3}
                  className={classNames(classes.mlAuto, classes.mrAuto)}
                >
                  <Button round color="rose">
                    Cargar mas...
                  </Button>
                </GridItem>
              </GridContainer>
            </GridItem>
          </GridContainer>
          <br />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    console.log(state.auth.activeCategory)
     console.log(state.auth.actualPage)
    console.log(state.auth.products)

    return {
        tree: state.auth.data,
        categoryVariables:state.auth.categoryVariables,
        products: state.auth.products.map(
            (product) => {
                product.eval=product.evaluations.reduce((total, currentValue, currentIndex, arr) =>{ return total + currentValue.eval},0)/product.evaluations.length
                return product
            }
        ),
        // evaluation: activeProduct.evaluations.reduce((total, currentValue, currentIndex, arr) =>{ return total + currentValue.eval},0)/activeProduct.evaluations.length

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
        actions: bindActionCreators(actionCreators, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withStyles(styles)(SectionProducts)));

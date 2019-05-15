import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react component used to create nice image meadia player
import ImageGallery from "react-image-gallery";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import LocalShipping from "@material-ui/icons/LocalShipping";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Favorite from "@material-ui/icons/Favorite";
import Star from "@material-ui/icons/Star";
import StarBorder from "@material-ui/icons/StarBorder";
// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Footer from "components/Footer/Footer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Accordion from "components/Accordion/Accordion.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Tooltip from "@material-ui/core/Tooltip";
import {push} from "connected-react-router"

import productStyle from "assets/jss/material-kit-pro-react/views/productStyle.jsx";

// images
import cardProduct1 from "assets/img/examples/card-product1.jpg";
import cardProduct3 from "assets/img/examples/card-product3.jpg";
import cardProduct4 from "assets/img/examples/card-product4.jpg";
import cardProduct2 from "assets/img/examples/card-product2.jpg";
import product1 from "assets/img/examples/product1.jpg";
import product2 from "assets/img/examples/product2.jpg";
import product3 from "assets/img/examples/product3.jpg";
import product4 from "assets/img/examples/product4.jpg";
import * as actionCreators from "../../actions/auth";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Settings from "@material-ui/icons/Settings";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Search from "@material-ui/icons/Search";
import {Link} from "react-router-dom";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import hasFeature from "../../utils/index"
import styles from "assets/jss/tesis/homestyle.js";
import SectionContentAreas from "./SectionContentAreas";
class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colorSelect: "0",
      sizeSelect: "0"
    };
  this.props.actions.goToPage(2)
  }
  handleSelect = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  render() {
     const stars = Array.apply(null, { length: this.props.evaluation }).map((e, i) => <Star/>)
    const { classes } = this.props;
    const images = [
      {
        original: product3,
        thumbnail: product3
      },
      {
        original: product4,
        thumbnail: product4
      },
      {
        original: product1,
        thumbnail: product1
      },
      {
        original: product2,
        thumbnail: product2
      }
    ];

    return (
      <div className={classes.productPage}>
        <div className={classNames(classes.section, classes.sectionGray)}>
          <div className={classes.container}>
            <div className={classNames(classes.main, classes.mainRaised)}>
              <GridContainer>
                <GridItem md={6} sm={6}>
                  <ImageGallery
                    showFullscreenButton={false}
                    showPlayButton={false}
                    startIndex={0}
                    items={this.props.activeProduct.photos.map((product,index) =>{ return {original: product.src, thumbnail: product.src}})}
                  />
                </GridItem>
                <GridItem md={6} sm={6}>
                  <h2 className={classes.title}>{this.props.activeProduct.name}</h2>
                  <h3 className={classes.mainPrice}>{this.props.activeProduct.price}</h3>
                    {Array.apply(null, { length: this.props.evaluation }).map((e, i) => <Star/>)}
                    {Array.apply(null, { length: 5 -this.props.evaluation }).map((e, i) => <StarBorder/>)}
                  <Accordion
                    active={0}
                    activeColor="rose"
                    collapses={[
                      {
                        title: "Descripcion",
                        content: (
                          <p>
                              {this.props.activeProduct.description}
                          </p>
                        )
                      },
                      {
                        title: "Informacion 1",
                        content: (
                          <p>
                           {this.props.activeProduct.description}
                          </p>
                        )
                      },
                      {
                        title: "Informacion 2",
                        content: (
                          <ul>
                            <li>
                             {this.props.activeProduct.description}
                            </li>
                            <li>
                              {this.props.activeProduct.description}
                            </li>
                            <li>{this.props.activeProduct.description}</li>
                            <li>84% cotton, 14% nylon, 2% elastane</li>
                            <li>Dry clean</li>
                          </ul>
                        )
                      }
                    ]}
                  />
                  <GridContainer className={classes.pickSize}>
                    <GridItem md={6} sm={6}>
                      <label>Seleccion 1</label>
                      <FormControl
                        fullWidth
                        className={classes.selectFormControl}
                      >
                        <Select
                          MenuProps={{
                            className: classes.selectMenu
                          }}
                          classes={{
                            select: classes.select
                          }}
                          value={this.state.colorSelect}
                          onChange={this.handleSelect}
                          inputProps={{
                            name: "colorSelect",
                            id: "color-select"
                          }}
                        >
                          <MenuItem
                            classes={{
                              root: classes.selectMenuItem,
                              selected: classes.selectMenuItemSelected
                            }}
                            value="0"
                          >
                            Rose
                          </MenuItem>
                          <MenuItem
                            classes={{
                              root: classes.selectMenuItem,
                              selected: classes.selectMenuItemSelected
                            }}
                            value="1"
                          >
                            Gray
                          </MenuItem>
                          <MenuItem
                            classes={{
                              root: classes.selectMenuItem,
                              selected: classes.selectMenuItemSelected
                            }}
                            value="2"
                          >
                            White
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </GridItem>
                    <GridItem md={6} sm={6}>
                      <label>Seleccion 2</label>
                      <FormControl
                        fullWidth
                        className={classes.selectFormControl}
                      >
                        <Select
                          MenuProps={{
                            className: classes.selectMenu
                          }}
                          classes={{
                            select: classes.select
                          }}
                          value={this.state.sizeSelect}
                          onChange={this.handleSelect}
                          inputProps={{
                            name: "sizeSelect",
                            id: "size-select"
                          }}
                        >
                          <MenuItem
                            classes={{
                              root: classes.selectMenuItem,
                              selected: classes.selectMenuItemSelected
                            }}
                            value="0"
                          >
                            Small
                          </MenuItem>
                          <MenuItem
                            classes={{
                              root: classes.selectMenuItem,
                              selected: classes.selectMenuItemSelected
                            }}
                            value="1"
                          >
                            Medium
                          </MenuItem>
                          <MenuItem
                            classes={{
                              root: classes.selectMenuItem,
                              selected: classes.selectMenuItemSelected
                            }}
                            value="2"
                          >
                            Large
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </GridItem>
                  </GridContainer>
                  <GridContainer className={classes.pullRight}>
                    <Button round color="rose" onClick={() => { this.props.dispatch(push("/shopping-cart-page")); this.props.actions.addProductToCart(this.props.activeProduct)}}>
                      Add to Cart &nbsp; <ShoppingCart />
                    </Button>
                  </GridContainer>
                </GridItem>
              </GridContainer>
            </div>
            <div className={classNames(classes.features, classes.textCenter)}>
              <GridContainer>
                <GridItem md={4} sm={4}>
                  <InfoArea
                    title="Delivery de 2 dias"
                    description="Aseguramos el delivery de nuestros productos dentro de un plazo prudente"
                    icon={LocalShipping}
                    iconColor="info"
                    vertical
                  />
                </GridItem>
                <GridItem md={4} sm={4}>
                  <InfoArea
                    title="Politica de devolucion"
                    description="Si tienes algun producto que vino con algun problema de fabrica o no te gusto, con gusto lo aceptamos de vuelta."
                    icon={VerifiedUser}
                    iconColor="success"
                    vertical
                  />
                </GridItem>
                <GridItem md={4} sm={4}>
                  <InfoArea
                    title="Agregalo a tu wishlist"
                    description="Agrega los productos a tu lista de deseados para recibir actualizaciones sobre ellos."
                    icon={Favorite}
                    iconColor="rose"
                    vertical
                  />
                </GridItem>
              </GridContainer>
            </div>
            <div className={classes.relatedProducts}>
              <h3 className={classNames(classes.title, classes.textCenter)}>
                Quizas tambien estaras interesado en:
              </h3>
              <GridContainer>
                  {this.props.randomProducts.map( (product,index) =>
                <GridItem sm={6} md={3}>
                  <Card product>
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
                        Tendencia
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
                        <Tooltip
                          id="tooltip-top"
                          title="Save to Wishlist"
                          placement="top"
                          classes={{ tooltip: classes.tooltip }}
                        >
                          <Button justIcon color="rose" simple>
                            <Favorite />
                          </Button>
                        </Tooltip>
                      </div>
                    </CardFooter>
                  </Card>
                </GridItem>)}
                {/*<GridItem sm={6} md={3}>*/}
                  {/*<Card product>*/}
                    {/*<CardHeader image>*/}
                      {/*<a href="#pablo">*/}
                        {/*<img src={cardProduct3} alt="cardProduct3" />*/}
                      {/*</a>*/}
                    {/*</CardHeader>*/}
                    {/*<CardBody>*/}
                      {/*<h6 className={classes.cardCategory}>Popular</h6>*/}
                      {/*<h4 className={classes.cardTitle}>Balmain</h4>*/}
                      {/*<div className={classes.cardDescription}>*/}
                        {/*Balmain's mid-rise skinny jeans are cut with stretch to*/}
                        {/*ensure they retain their second-skin fit but move*/}
                        {/*comfortably.*/}
                      {/*</div>*/}
                    {/*</CardBody>*/}
                    {/*<CardFooter className={classes.justifyContentBetween}>*/}
                      {/*<div className={classes.price}>*/}
                        {/*<h4>$459</h4>*/}
                      {/*</div>*/}
                      {/*<div className={classes.stats}>*/}
                        {/*<Tooltip*/}
                          {/*id="tooltip-top"*/}
                          {/*title="Save to Wishlist"*/}
                          {/*placement="top"*/}
                          {/*classes={{ tooltip: classes.tooltip }}*/}
                        {/*>*/}
                          {/*<Button justIcon link>*/}
                            {/*<Favorite />*/}
                          {/*</Button>*/}
                        {/*</Tooltip>*/}
                      {/*</div>*/}
                    {/*</CardFooter>*/}
                  {/*</Card>*/}
                {/*</GridItem>*/}
                {/*<GridItem sm={6} md={3}>*/}
                  {/*<Card product>*/}
                    {/*<CardHeader image>*/}
                      {/*<a href="#pablo">*/}
                        {/*<img src={cardProduct4} alt="cardProduct4" />*/}
                      {/*</a>*/}
                    {/*</CardHeader>*/}
                    {/*<CardBody>*/}
                      {/*<h6 className={classes.cardCategory}>Popular</h6>*/}
                      {/*<h4 className={classes.cardTitle}>Balenciaga</h4>*/}
                      {/*<div className={classes.cardDescription}>*/}
                        {/*Balenciaga's black textured-leather wallet is finished*/}
                        {/*with the label's iconic 'Giant' studs. This is where you*/}
                        {/*can...*/}
                      {/*</div>*/}
                    {/*</CardBody>*/}
                    {/*<CardFooter className={classes.justifyContentBetween}>*/}
                      {/*<div className={classes.price}>*/}
                        {/*<h4>$590</h4>*/}
                      {/*</div>*/}
                      {/*<div className={classes.stats}>*/}
                        {/*<Tooltip*/}
                          {/*id="tooltip-top"*/}
                          {/*title="Save to Wishlist"*/}
                          {/*placement="top"*/}
                          {/*classes={{ tooltip: classes.tooltip }}*/}
                        {/*>*/}
                          {/*<Button justIcon color="rose" simple>*/}
                            {/*<Favorite />*/}
                          {/*</Button>*/}
                        {/*</Tooltip>*/}
                      {/*</div>*/}
                    {/*</CardFooter>*/}
                  {/*</Card>*/}
                {/*</GridItem>*/}
                {/*<GridItem sm={6} md={3}>*/}
                  {/*<Card product>*/}
                    {/*<CardHeader image>*/}
                      {/*<a href="#pablo">*/}
                        {/*<img src={cardProduct2} alt="cardProduct2" />*/}
                      {/*</a>*/}
                    {/*</CardHeader>*/}
                    {/*<CardBody>*/}
                      {/*<h6*/}
                        {/*className={classNames(*/}
                          {/*classes.cardCategory,*/}
                          {/*classes.textRose*/}
                        {/*)}*/}
                      {/*>*/}
                        {/*Trending*/}
                      {/*</h6>*/}
                      {/*<h4 className={classes.cardTitle}>Dolce & Gabbana</h4>*/}
                      {/*<div className={classes.cardDescription}>*/}
                        {/*Dolce & Gabbana's 'Greta' tote has been crafted in Italy*/}
                        {/*from hard-wearing red textured-leather.*/}
                      {/*</div>*/}
                    {/*</CardBody>*/}
                    {/*<CardFooter className={classes.justifyContentBetween}>*/}
                      {/*<div className={classes.price}>*/}
                        {/*<h4>$1,459</h4>*/}
                      {/*</div>*/}
                      {/*<div className={classes.stats}>*/}
                        {/*<Tooltip*/}
                          {/*id="tooltip-top"*/}
                          {/*title="Save to Wishlist"*/}
                          {/*placement="top"*/}
                          {/*classes={{ tooltip: classes.tooltip }}*/}
                        {/*>*/}
                          {/*<Button justIcon link>*/}
                            {/*<Favorite />*/}
                          {/*</Button>*/}
                        {/*</Tooltip>*/}
                      {/*</div>*/}
                    {/*</CardFooter>*/}
                  {/*</Card>*/}
                {/*</GridItem>*/}
              </GridContainer>
            </div>
          </div>
        </div>}
          <div className={classNames(classes.section, classes.sectionGray)}>
          <div className={classes.container}>
            <div className={classNames(classes.main, classes.mainRaised)}>
            <SectionContentAreas/>
            </div></div></div>
        <Footer
          // theme="dark"
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
                      Sobre nosotros
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
                      Licencias
                    </a>
                  </ListItem>
                </List>
              </div>
              <div className={classes.right}>
                &copy; {1900 + new Date().getYear()} , made with{" "}
                <Favorite className={classes.icon} />
                <a
                  href=""
                  className={classes.aClasses}
                >

                </a>{" "}
              </div>
            </div>
          }
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.auth.activeProduct)
    const activeProduct = state.auth.products.filter( (product) => product.id === state.auth.activeProduct)[0]
    // const evaluation =activeProduct.evaluations.reduce((total, currentValue, currentIndex, arr) =>{ return total + currentValue.eval},0)/activeProduct.evaluations.length
    // console.log(evaluation)
    return {
        tree: state.auth.data,
        activeProduct : activeProduct,
        idProduct: state.auth.activeProduct,
        categories: state.auth.categories,
        randomProducts :state.auth.products.concat().sort( function() { return 0.5 - Math.random() } ).slice(1,5),
        evaluation: activeProduct.evaluations.reduce((total, currentValue, currentIndex, arr) =>{ return total + currentValue.eval},0)/activeProduct.evaluations.length

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
        actions: bindActionCreators(actionCreators, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ProductPage));

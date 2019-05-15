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
// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InputLabel from "@material-ui/core/InputLabel";

import Footer from "components/Footer/Footer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Accordion from "components/Accordion/Accordion.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Tooltip from "@material-ui/core/Tooltip";
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';
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
import styles from "assets/jss/tesis/productstyle.js";
import TextField from "@material-ui/core/TextField";
import SectionContentAreas from "./SectionContentAreas";
function getSteps() {
  return ['Metodo de pago', 'Despacho', 'Confirmacion'];
}



class HorizontalLinearStepper extends React.Component {
  state = {
    activeStep: 0,
    skipped: new Set(),
      simpleSelect: "",
      medium: "",
  };
  handleSimple = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  isStepOptional = step => step === 1;
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  constructor(props){
    super(props)
      this.props.actions.goToPage(4)
  }

  getStepContent=(step) => {
    const {classes,...rest} = this.props
  switch (step) {
    case 0:
      return <div><Card>
                    <CardBody><GridContainer>
                  <GridItem xs={12} sm={6} md={6} lg={5}>
                    <FormControl
                      fullWidth
                      className={classes.selectFormControl}
                    >
                      <InputLabel
                        htmlFor="simple-select"
                        className={classes.selectLabel}
                      >
                        Selecciona el metodo de pago
                      </InputLabel>
                      <Select
                        MenuProps={{
                          className: classes.selectMenu
                        }}
                        classes={{
                          select: classes.select
                        }}
                        value={this.state.simpleSelect}
                        onChange={this.handleSimple}
                        inputProps={{
                          name: "simpleSelect",
                          id: "simple-select"
                        }}
                      >
                        <MenuItem
                          disabled
                          classes={{
                            root: classes.selectMenuItem
                          }}
                        >
                          Metodo de pago
                        </MenuItem>
                        <MenuItem
                          classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected
                          }}
                          value="2"
                        >
                          Tarjeta de credito
                        </MenuItem>
                        <MenuItem
                          classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected
                          }}
                          value="3"
                        >
                          Transferencia Bancaria
                        </MenuItem>
                        <MenuItem
                          classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected
                          }}
                          value="4"
                        >
                          Efectivo
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </GridItem>
                    </GridContainer></CardBody></Card>
          <Card><CardBody>
              {this.state.simpleSelect !=="" &&<TextField
          required
          id="medium"
          label={this.getTextOfSelect(this.state.simpleSelect)}
          onChange={this.handleChange("medium")}
            value={this.state.medium}
          margin="normal"
          variant="filled"
        />}</CardBody></Card></div>;
        case 1:
            return <Card><CardBody><TextField
          required
          id="ciudad"
          label="Ciudad"
          onChange={this.handleChange("ciudad")}
            value={this.state.ciudad}
          margin="normal"
          variant="filled"
        />
            <TextField
          required
          id="calle"
          label="Calle"
          onChange={this.handleChange("calle")}
            value={this.state.calle}
          margin="normal"
          variant="filled"
        /></CardBody></Card>;
        case 2:
          return <SectionContentAreas modoDePago={this.getTextOfSelect(this.state.simpleSelect)} valor={this.state.medium} skipped={this.state.skipped.has(1)} direccion={this.state.ciudad + " " + this.state.calle}/>;
        default:
          return 'Unknown step';
      }
    }

    getTextOfSelect(simpleSelect) {
      console.log(simpleSelect)
      switch(simpleSelect){
           case "2":
          return 'Tarjeta de Credito';
        case "3":
          return 'Transferencia Bancaria';
        case "4":
          return 'Efectivo';
        default:
          return 'Unknown';
      }
    }
  handleNext = () => {
    const { activeStep } = this.state;
    let { skipped } = this.state;
    if (this.isStepSkipped(activeStep)) {
      skipped = new Set(skipped.values());
      skipped.delete(activeStep);
    }
    this.setState({
      activeStep: activeStep + 1,
      skipped,
    });
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleSkip = () => {
    const { activeStep } = this.state;
    if (!this.isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    this.setState(state => {
      const skipped = new Set(state.skipped.values());
      skipped.add(activeStep);
      return {
        activeStep: state.activeStep + 1,
        skipped,
      };
    });
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  isStepSkipped(step) {
    return this.state.skipped.has(step);
  }

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <div className={classes.productPage}>
        <div className={classes.container}style={{'marginTop' :0,'paddingTop': '20vh'}}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const props = {};
            const labelProps = {};
            if (this.isStepOptional(index)) {
              labelProps.optional = <Typography variant="caption">Opcional</Typography>;
            }
            if (this.isStepSkipped(index)) {
              props.completed = false;
            }
            return (
              <Step key={label} {...props}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>
                Compra efectuada
              </Typography>
              <Button onClick={this.handleReset} className={classes.button}>
                Reset
              </Button>
            </div>
          ) : (
            <div>

              {this.getStepContent(activeStep)}
              <div>
                <Button
                  disabled={activeStep === 0}
                  onClick={this.handleBack}
                  className={classes.button}
                >
                  Atras
                </Button>
                {this.isStepOptional(activeStep) && (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.handleSkip}
                    className={classes.button}
                  >
                    Retirar en tienda
                  </Button>
                )}
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.handleNext}
                  className={classes.button}
                >
                  {activeStep === steps.length - 1 ? 'Aceptar y Pagar' : 'Siguiente'}
                </Button>
              </div>
            </div>
          )}
        </div>
            </div>

      </div>
    );
  }
}



const mapStateToProps = (state) => {
  console.log(state.auth.activeProduct)
    return {
        tree: state.auth.data,
        activeProduct : state.auth.products[state.auth.activeProduct],
        idProduct: state.auth.activeProduct,
        categories: state.auth.categories,
        randomProducts :state.auth.products.concat().sort( function() { return 0.5 - Math.random() } ).slice(1,5),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
        actions: bindActionCreators(actionCreators, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(HorizontalLinearStepper));
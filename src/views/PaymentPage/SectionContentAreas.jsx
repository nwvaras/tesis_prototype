import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Checkbox from "@material-ui/core/Checkbox";
import Tooltip from "@material-ui/core/Tooltip";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// @material-ui/core icons
import Person from "@material-ui/icons/Person";
import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";
import Check from "@material-ui/icons/Check";
import Remove from "@material-ui/icons/Remove";
import Add from "@material-ui/icons/Add";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import Reply from "@material-ui/icons/Reply";
import Favorite from "@material-ui/icons/Favorite";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Table from "components/Table/Table.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Media from "components/Media/Media.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Paginations from "components/Pagination/Pagination.jsx";

import style from "assets/jss/material-kit-pro-react/views/componentsSections/contentAreas.jsx";
import CardHeader from '@material-ui/core/CardHeader';
import avatar from "assets/img/faces/avatar.jpg";
import kendall from "assets/img/faces/kendall.jpg";
import marc from "assets/img/faces/marc.jpg";
import placeholder from "assets/img/placeholder.jpg";
import product1 from "assets/img/product1.jpg";
import product2 from "assets/img/product2.jpg";
import product3 from "assets/img/product3.jpg";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as actionCreators from "../../actions/auth";

class SectionContentAreas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [1, 3, 5]
    };
    this.handleToggle = this.handleToggle.bind(this);
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
  render() {
    console.log(this.props.skipped)
    const { classes, ...rest } = this.props;
    const fillButtons = [
      { color: "info", icon: Person },
      { color: "success", icon: Edit },
      { color: "danger", icon: Close }
    ].map((prop, key) => {
      return (
        <Button justIcon size="sm" color={prop.color} key={key}>
          <prop.icon />
        </Button>
      );
    });
    const simpleButtons = [
      { color: "info", icon: Person },
      { color: "success", icon: Edit },
      { color: "danger", icon: Close }
    ].map((prop, key) => {
      return (
        <Button simple justIcon size="sm" color={prop.color} key={key}>
          <prop.icon />
        </Button>
      );
    });
    const roundButtons = [
      { color: "info", icon: Person },
      { color: "success", icon: Edit },
      { color: "danger", icon: Close }
    ].map((prop, key) => {
      return (
        <Button round justIcon size="sm" color={prop.color} key={key}>
          <prop.icon />
        </Button>
      );
    });
    let data = this.props.cart.map( (product,index) => [
                    index+1,
                    product.name,
                    product.qty,
                    product.price,
                    fillButtons
                  ])
      data.push({
                    total: true,
                    colspan: "3",
                    amount: (
                      <span>
                        <small>€</small>{this.props.sum}
                      </span>
                    )
                  })
    return (

      <div {...rest} className="cd-section" id="contentAreas">
        <Card>
          <CardContent>
        <h2>Resumen</h2>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
        <div id="tables">
          <div className={classes.title}>
            <h3>Productos</h3>
          </div>
          <GridContainer>
            <GridItem
              xs={12}
              sm={10}
              md={8}
              className={`${classes.mrAuto} ${classes.mlAuto}`}
            >

              <Table
                tableHead={[
                  "#",
                  "Producto",
                  "Cantidad",
                  "Precio",

                  "Actions"
                ]}
                tableData={data

                }
                customCellClasses={[
                  classes.textCenter,
                  classes.textRight,
                  classes.textRight
                ]}
                customClassesForCells={[0, 4, 5]}
                customHeadCellClasses={[
                  classes.textCenter,
                  classes.textRight,
                  classes.textRight
                ]}
                customHeadClassesForCells={[0, 4, 5]}
              />
            </GridItem>
          </GridContainer>
        </div></CardContent></Card>
          <Card><Card>
              <CardHeader title={"Modo de pago: " + this.props.modoDePago} ></CardHeader>
            <CardContent> {this.props.valor} </CardContent>

          </Card></Card>
        <Card><Card>
              <CardHeader title={"Direcion de despacho: " + (this.props.skipped? "Retiro en tienda" : "")} ></CardHeader>
            {!this.props.skipped && <CardContent> {this.props.direccion} </CardContent>}

          </Card></Card>
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(style)(SectionContentAreas));

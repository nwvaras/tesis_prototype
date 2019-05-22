import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Checkbox from "@material-ui/core/Checkbox";
import Tooltip from "@material-ui/core/Tooltip";
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
import hasFeature from "../../utils";

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
  handleChange = name => event => {
      console.log(event.target)
    this.setState({ [name]: event.target.value });
  };
  render() {
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
    return (
      <div {...rest} className="cd-section" id="contentAreas">
        <div id="comments">

          <GridContainer>
            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={`${classes.mlAuto} ${classes.mrAuto}`}
            >
              <div>
                <h3 className={`${classes.title} ${classes.textCenter}`}>
                  10 Preguntas
                </h3>
                  { this.props.activeProduct.questions.map( (question,index) =><Media
                  avatar={"https://avatars.servers.getgo.com/2205256774854474505_medium.jpg"}
                  title={
                    <span>
                        Usuario <small>· Hoy </small>
                    </span>
                  }
                  body={
                    <span>
                      <p>
                          {question.description}
                      </p>
                    </span>
                  }
                  footer={
                    <div>


                      <Button link className={classes.floatRight}>
                        <Favorite /> {question.upVotes}
                      </Button>
                    </div>
                  }
                  innerMedias={question.answer !== ""?[
                    <Media
                      key={Math.random() * Date.now()}
                      avatar={"https://cdn3.iconfinder.com/data/icons/popular-services-brands-vol-2/512/shopify-512.png"}
                      title={
                        <span>
                            Tienda <small>· Hace 30 minutos</small>
                        </span>
                      }
                      body={
                        <span>
                          <p>
                              {question.answer}
                          </p>
                        </span>
                      }
                      footer={
                        <div>

                          <Button
                            simple
                            color="danger"
                            className={classes.floatRight}
                          >
                            <Favorite /> {question.downVotes}
                          </Button>
                        </div>
                      }
                    />
                  ]:[]}
                />)}
                <div>
                  <Paginations
                    className={`${classes.textCenter} ${
                      classes.justifyContentCenter
                    }`}
                    pages={[
                      { text: "«" },
                      { text: 1 },
                      { text: 2 },
                      { active: true, text: 3 },
                      { text: 4 },
                      { text: 5 },
                      { text: "»" }
                    ]}
                    color="primary"
                  />
                </div>
              </div>
              <h3 className={classes.textCenter}>
                Escribe tu pregunta <br />
                {hasFeature("Usuarios",this.props.tree) &&<small>- No has iniciado sesion -</small>}
              </h3>
              <Media
                avatar={placeholder}
                body={
                  <div>
                    <GridContainer>
                      <GridItem xs={12} sm={6} md={6}>
                        <CustomInput
                          id="not-logged-name"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            placeholder: "Tu nombre",

                          }}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={6} md={6}>
                        <CustomInput
                          id="not-logged-email"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            placeholder: "Tu email"
                          }}
                        />
                      </GridItem>
                    </GridContainer>
                    <CustomInput
                      id="not-logged-message"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        multiline: true,
                        rows: 6,
                        placeholder: " Escribe tu pregunta",
                        onChange: this.handleChange("question"),
                        value: this.state.question
                      }}
                    />
                  </div>
                }
                footer={
                 <div className={classes.signInButton}>
                    {hasFeature("Usuarios",this.props.tree) &&<h6>INICIA SESION CON</h6>}
                     {hasFeature("Usuarios",this.props.tree) &&<Button justIcon round color="twitter">
                      <i className="fab fa-twitter" />
                    </Button>}
                     {hasFeature("Usuarios",this.props.tree) &&<Button justIcon round color="facebook">
                      <i className="fab fa-facebook-square" />
                    </Button>}
                     {hasFeature("Usuarios",this.props.tree) &&<Button justIcon round color="google">
                      <i className="fab fa-google-plus-square" />
                    </Button>}
                    <Button color="primary" className={classes.floatRight} onClick={() => this.props.actions.addQuestion(this.props.activeProduct,this.state.question)}>
                      Post comment
                    </Button>
                  </div>
                }
              />
            </GridItem>
          </GridContainer>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(style)(SectionContentAreas));

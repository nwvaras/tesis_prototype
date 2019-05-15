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
                <Media
                  avatar={avatar}
                  title={
                    <span>
                      Tina Andrew <small>· 7 minutes ago</small>
                    </span>
                  }
                  body={
                    <span>
                      <p>
                        Chance too good. God level bars. I'm so proud of
                        @LifeOfDesiigner #1 song in the country. Panda! Don't be
                        scared of the truth because we need to restart the human
                        foundation in truth I stand with the most humility. We
                        are so blessed!
                      </p>
                      <p>
                        All praises and blessings to the families of people who
                        never gave up on dreams. Don't forget, You're Awesome!
                      </p>
                    </span>
                  }
                />
                <Media
                  avatar={marc}
                  title={
                    <span>
                      John Camber <small>· Yesterday</small>
                    </span>
                  }
                  body={
                    <span>
                      <p>
                        Hello guys, nice to have you on the platform! There will
                        be a lot of great stuff coming soon. We will keep you
                        posted for the latest news.
                      </p>
                      <p>Don't forget, You're Awesome!</p>
                    </span>
                  }
                  footer={
                    <div>


                      <Button link className={classes.floatRight}>
                        <Favorite /> 25
                      </Button>
                    </div>
                  }
                  innerMedias={[
                    <Media
                      key={Math.random() * Date.now()}
                      avatar={avatar}
                      title={
                        <span>
                          Tina Andrew <small>· 2 Days Ago</small>
                        </span>
                      }
                      body={
                        <span>
                          <p>
                            Hello guys, nice to have you on the platform! There
                            will be a lot of great stuff coming soon. We will
                            keep you posted for the latest news.
                          </p>
                          <p>Don't forget, You're Awesome!</p>
                        </span>
                      }
                      footer={
                        <div>

                          <Button
                            simple
                            color="danger"
                            className={classes.floatRight}
                          >
                            <Favorite /> 243
                          </Button>
                        </div>
                      }
                    />
                  ]}
                />
                <Media
                  key={Math.random() * Date.now()}
                  avatar={avatar}
                  title={
                    <span>
                      Rosa Thompson <small>· 2 Days Ago</small>
                    </span>
                  }
                  body={
                    <span>
                      <p>
                        Hello guys, nice to have you on the platform! There will
                        be a lot of great stuff coming soon. We will keep you
                        posted for the latest news.
                      </p>
                      <p>Don't forget, You're Awesome!</p>
                    </span>
                  }
                  footer={
                    <div>

                      <Button
                        simple
                        color="danger"
                        className={classes.floatRight}
                      >
                        <Favorite /> 243
                      </Button>
                    </div>
                  }
                />
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
                <small>- No has iniciado sesion -</small>
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
                            placeholder: "Your Name"
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
                            placeholder: "Your Email"
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
                        placeholder: " Write some nice stuff or nothing..."
                      }}
                    />
                  </div>
                }
                footer={
                  <div className={classes.signInButton}>
                    <h6>SIGN IN WITH</h6>
                    <Button justIcon round color="twitter">
                      <i className="fab fa-twitter" />
                    </Button>
                    <Button justIcon round color="facebook">
                      <i className="fab fa-facebook-square" />
                    </Button>
                    <Button justIcon round color="google">
                      <i className="fab fa-google-plus-square" />
                    </Button>
                    <Button color="primary" className={classes.floatRight}>
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

export default withStyles(style)(SectionContentAreas);

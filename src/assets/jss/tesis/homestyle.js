import ecommerceStyle from "assets/jss/material-kit-pro-react/views/ecommerceStyle.jsx";
import navbarsStyle from "assets/jss/material-kit-pro-react/views/componentsSections/navbarsStyle.jsx";
import headerLinksStyle from "assets/jss/material-kit-pro-react/components/headerLinksStyle.jsx";
import {blackColor, hexToRgb} from "../material-kit-pro-react";
const mainRaised = {
  "@media (max-width: 576px)": {
    marginTop: "30px"
  },
  "@media (max-width: 830px)": {
    marginLeft: "10px",
    marginRight: "10px"
  },
  margin: "60px 30px 0px",
  borderRadius: "6px",
  boxShadow:
    "0 16px 24px 2px rgba(" +
    hexToRgb(blackColor) +
    ", 0.14), 0 6px 30px 5px rgba(" +
    hexToRgb(blackColor) +
    ", 0.12), 0 8px 10px -5px rgba(" +
    hexToRgb(blackColor) +
    ", 0.2)"
};
const homestyle = theme => ({
    ...navbarsStyle(theme),
    ...ecommerceStyle,
    mainRaised,
    searchIcon: {
    width: "20px",
    height: "20px",
    color: "inherit"
  },
    paddingAdBottom:{
        paddingBottom: "60px",
    },
    searchButton: {
    marginTop: "0.9em"
  },
  });

export default homestyle;
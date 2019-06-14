import React from "react";

import withStyles from "@material-ui/core/styles/withStyles";

import {bindActionCreators} from "redux";
import * as actionCreators from "../../actions/auth";
import {connect} from "react-redux";

import { Widget } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import hasFeature from '../../utils/index'
class DaEcommerce extends React.Component {

  render() {

      console.log(hasFeature("Chat", this.props.tree))
      return(<div>
      {hasFeature("Chat", this.props.tree) &&<Widget />}
      </div>)}

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

export default connect(mapStateToProps, mapDispatchToProps)(DaEcommerce);
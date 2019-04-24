import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import PlayArrow from '@material-ui/icons/PlayArrow';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/auth';
const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing.unit * 7 + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9 + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});

class MiniDrawer extends React.Component {
  state = {
    open: false,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: !this.state.open});
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        {/*<AppBar*/}
          {/*position="fixed"*/}
          {/*className={classNames(classes.appBar, {*/}
            {/*[classes.appBarShift]: this.state.open,*/}
          {/*})}*/}
        {/*>*/}
          {/*<Toolbar disableGutters={!this.state.open}>*/}
            {/*<IconButton*/}
              {/*color="inherit"*/}
              {/*aria-label="Open drawer"*/}
              {/*onClick={this.handleDrawerOpen}*/}
              {/*className={classNames(classes.menuButton, {*/}
                {/*[classes.hide]: this.state.open,*/}
              {/*})}*/}
            {/*>*/}
              {/*<MenuIcon />*/}
            {/*</IconButton>*/}
            {/*<Typography variant="h6" color="inherit" noWrap>*/}
              {/*Mini variant drawer*/}
            {/*</Typography>*/}
          {/*</Toolbar>*/}
        {/*</AppBar>*/}
        <Drawer
          variant="permanent"
          className={classNames(classes.drawer, {
            [classes.drawerOpen]: this.state.open,
            [classes.drawerClose]: !this.state.open,
          })}
          classes={{
            paper: classNames({
              [classes.drawerOpen]: this.state.open,
              [classes.drawerClose]: !this.state.open,
            }),
          }}
          open={this.state.open}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
            {this.props.data.children.map((element, index) => (
                <div>
                    <Divider />
          <Divider />
          <Divider />
          <List>

              <ListItem button key={element.name} onClick={() => this.props.actions.activateOrDesactivate(element.name)}>
                  <ListItemIcon>{index % 2 === 0 ?<div style={{marginLeft:'-5px',color: element.selected?'#3a7d2a':'#7d7d7d'}}>  <InboxIcon/> </div> :<div style={{marginLeft:'-5px',color:element.selected?'#3a7d2a':'#7d7d7d'}}> <MailIcon /></div>}</ListItemIcon>
                <ListItemText primary={element.name} />
              </ListItem>

          </List>
          <Divider />
          <Divider />
          <Divider />
          <List>
            {element.children && element.children.map((child, index) => (
              <ListItem button key={child.name} onClick={() => this.props.actions.activateOrDesactivate(child.name)}>
                  <ListItemIcon>{index % 2 === 0 ? <div  style={{color:child.selected?'#3a7d2a':'#7d7d7d'}}><InboxIcon /> </div>: <div style={{color:child.selected?'#3a7d2a':'#7d7d7d'}}> <MailIcon /> </div>}</ListItemIcon>
                <ListItemText primary={child.name} />
              </ListItem>
            ))}
          </List>
                </div>
                ))}
            
        </Drawer>
          {this.props.children}
      </div>
    );
  }
}

MiniDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => {
    return {
        data: state.auth.data
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
        actions: bindActionCreators(actionCreators, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles, { withTheme: true })(MiniDrawer));
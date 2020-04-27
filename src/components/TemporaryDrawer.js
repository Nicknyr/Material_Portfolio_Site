import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import * as Scroll from 'react-scroll';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles } from '@material-ui/core/styles';


let ScrollLink = Scroll.Link;
let Element    = Scroll.Element;
let Events     = Scroll.Events;
let scroll     = Scroll.animateScroll;
let scrollSpy  = Scroll.scrollSpy;
 

const styles = theme => ({
  container: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  fullList: {
    width: 'auto',
    background: '#1F1F1F',
    color: 'snow',
    textTransform: 'uppercase'
  },
  hamburger: {
    display: 'flex',
    order: '1'
  }
});

class TemporaryDrawer extends React.Component {
  state = {
    top: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;
    //const theme = useTheme();
    //const matches = useMediaQuery(theme.breakpoints.up('sm'));
  
   const fullList = (
    <div className={classes.fullList}>
      <List>
        <ScrollLink 
              activeClass="active" 
              spy={true} 
              smooth={true} 
              offset={50} 
              duration={500} 
              to="about" 
          >
            <ListItem button key="1">
              <Link className={classes.links}>About</Link>
            </ListItem>
        </ScrollLink>
      </List>
      <Divider />
      <List>
        <ScrollLink 
                activeClass="active" 
                spy={true} 
                smooth={true} 
                offset={50} 
                duration={500} 
                to="portfolio" 
            >
              <ListItem button key="1">
                <Link className={classes.links}>Portfolio</Link>
              </ListItem>
          </ScrollLink>
      </List>
      <Divider />
      <List>
        <ScrollLink 
                activeClass="active" 
                spy={true} 
                smooth={true} 
                offset={50} 
                duration={500} 
                to="blog" 
            >
              <ListItem button key="1">
                <Link className={classes.links}>Blog</Link>
              </ListItem>
          </ScrollLink>
        </List>
      <Divider />
      <List>
        <ScrollLink 
                activeClass="active" 
                spy={true} 
                smooth={true} 
                offset={50} 
                duration={500} 
                to="contact" 
            >
              <ListItem button key="1">
                <Link className={classes.links}>Contact</Link>
              </ListItem>
          </ScrollLink>
      </List>
    </div>
  );

    return (
      <div className={classes.container}>
        <Button onClick={this.toggleDrawer('top', true)} className={classes.hamburger}>
            <IconButton edge="start" color="secondary" aria-label="menu">
                <MenuIcon />
            </IconButton>
        </Button>
        <Drawer anchor="top" open={this.state.top} onClose={this.toggleDrawer('top', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('top', false)}
            onKeyDown={this.toggleDrawer('top', false)}
          >
            {fullList}
          </div>
        </Drawer>
      </div>
    );
  }
}


export default withStyles(styles, { withTheme: true })(TemporaryDrawer);

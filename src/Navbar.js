import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { styled } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import * as Scroll from 'react-scroll';

// React-Scroll
let ScrollLink = Scroll.Link;
let Element    = Scroll.Element;
let Events     = Scroll.Events;
let scroll     = Scroll.animateScroll;
let scrollSpy  = Scroll.scrollSpy;
 

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  },
  appBar: {
    background: theme.palette.secondary.darkBlack,
    color: theme.palette.primary.main
  },
  fab: {
    background: theme.palette.secondary.contrast,
    opacity: '1',
    color: 'snow',
    '&:hover': {
        background: theme.palette.secondary.contrast,
        opacity: '1'
      }
  },
  toolBar: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  navLinks: {
    background: 'red'
  },
  links: {
    margin: '1rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    cursor: 'pointer',
    '&:hover': {
      color: theme.palette.secondary.contrast
    }
  }
}));


function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
};

export default function BackToTop(props) {
  const classes = useStyles();


  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          {/*
            <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
            </IconButton>
          */}
            <Typography variant="h6" color="secondary">Nick Kinlen</Typography>
            <Typography>
              <ul className="navLinks">
                <ScrollLink 
                    activeClass="active" 
                    spy={true} 
                    smooth={true} 
                    offset={50} 
                    duration={500} 
                    to="about" 
                >
                  <Link className={classes.links}>About</Link>
                </ScrollLink>
                <ScrollLink
                    activeClass="active" 
                    spy={true} 
                    smooth={true} 
                    offset={50} 
                    duration={500} 
                    to="portfolio" 
                >
                  <Link className={classes.links}>Portfolio</Link>
                </ScrollLink>
                <ScrollLink
                    activeClass="active" 
                    spy={true} 
                    smooth={true} 
                    offset={50} 
                    duration={500} 
                    to="blog" 
                >
                  <Link className={classes.links}>Blog</Link>
                </ScrollLink>
                <ScrollLink
                    activeClass="active" 
                    spy={true} 
                    smooth={true} 
                    offset={50} 
                    duration={500} 
                    to="contact" 
                >
                  <Link className={classes.links}>Contact</Link>
                </ScrollLink>
              </ul>
            </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <ScrollTop {...props}>
        <Fab className={classes.fab} size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}

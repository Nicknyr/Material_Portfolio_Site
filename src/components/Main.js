import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
//import { styled } from '@material-ui/core/styles';
import { spacing } from '@material-ui/system';
import { makeStyles } from '@material-ui/core/styles';
import styled, { css } from 'styled-components';
import { Typography } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';
import Slide from '@material-ui/core/Slide';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import ScrollAnimation from 'react-animate-on-scroll';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      background: theme.palette.secondary.darkBlack,
      height: 'auto',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '5rem',
      paddingBottom: '5rem'
    },
    paper: {
      height: 'auto',
      padding: theme.spacing(2),
      background: theme.palette.secondary.lightBlack
    },
    paper2: {
        height: 'auto',
        margin:  theme.spacing(3),
        padding: theme.spacing(2),
        background: theme.palette.secondary.lightBlack
    },
    typography: {
        color: theme.palette.primary.main
    },
    h3: {
        color: theme.palette.secondary.main,
        textAlign: 'center'
    },
    chip: {
        //background: theme.palette.secondary.contrast,
        background: theme.palette.secondary.darkBlack,
        color: theme.palette.primary.main,
        margin: theme.spacing(1),
        fontWeight: 'bold'
    },
    link: {
        color: theme.palette.secondary.contrast
    }
  }));
  


export default function Main() {
    const classes = useStyles();

    return (
        <div className={classes.root} id="about">
            <Grid container justify="center">
                <Grid item xs={10} md={6} p={10}>
                    <Paper elevation={5} className={classes.paper} >
                        <Paper elevation={6} className={classes.paper2}>
                        <ScrollAnimation animateIn="fadeIn" delay={500} duration={2} animateOnce>
                                <Typography variant="h3" className={classes.h3}>About Me</Typography>
                                {/*<Avatar alt="Nick Kinlen" src={avatarImage} />*/}
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeIn" delay={500} duration={2} animateOnce>
                            <Typography variant="body1" className={classes.typography} gutterBottom>
                               I  am a front-end developer from NYC. I build modern, responsive web apps with React.js and am proficient in the core web languages HTML5, CSS3, Javascript, as well as many other libraries and frameworks such as Redux, Sass, Styled-Components, Mapbox,Leaflet, D3, etc... I also publish web development related articles on <Link href="https://hackernoon.com/u/nick_kinlen" className={classes.link}>Hackernoon</Link>.
                            </Typography> 
                            <Typography variant="body1" className={classes.typography}>
                               I am passionate about all things web development, New York Rangers hockey, crypto-currency ,and entrepreneurship.Currently I am seeking a front-end role in the NYC metro area.
                            </Typography>
                        </ScrollAnimation>
                        </Paper>
                        <Paper elevation={6} className={classes.paper2}>
                            <ScrollAnimation animateIn="fadeIn" delay={500} duration={2} animateOnce>
                                <Typography variant="h3" className={classes.h3} gutterBottom>Skills</Typography>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="fadeIn" delay={500} duration={2} animateOnce>
                                <Chip 
                                    className={classes.chip} 
                                    label="HTML5" 
                                    size="medium" 
                                    variant="outlined" 
                                    color="secondary">
                                </Chip>
                                <Chip 
                                    className={classes.chip} 
                                    label="CSS" 
                                    size="medium" 
                                    variant="outlined" 
                                    color="secondary">    
                                </Chip>
                                <Chip 
                                    className={classes.chip} 
                                    label="Javascript" 
                                    size="medium" 
                                    variant="outlined" 
                                    color="secondary">
                                </Chip>
                                <Chip 
                                    className={classes.chip} 
                                    label="React" 
                                    size="medium" 
                                    variant="outlined" 
                                    color="secondary">
                                </Chip>
                                <Chip 
                                    className={classes.chip} 
                                    label="Redux" 
                                    size="medium" 
                                    variant="outlined" 
                                    color="secondary">
                                </Chip>
                                <Chip 
                                    className={classes.chip} 
                                    label="D3" 
                                    size="medium" 
                                    variant="outlined" 
                                    color="secondary">
                                </Chip>
                                <Chip 
                                    className={classes.chip} 
                                    label="Mapbox" 
                                    size="medium" 
                                    variant="outlined" 
                                    color="secondary">
                                </Chip>
                                <Chip 
                                    className={classes.chip} 
                                    label="Leaflet" 
                                    size="medium" 
                                    variant="outlined" 
                                    color="secondary">
                                </Chip>
                                <Chip 
                                    className={classes.chip} 
                                    label="Express" 
                                    size="medium" 
                                    variant="outlined" 
                                    color="secondary">
                                </Chip>
                                <Chip 
                                    className={classes.chip} 
                                    label="Mongoose" 
                                    size="medium" 
                                    variant="outlined" 
                                    color="secondary">
                                </Chip>
                                <Chip 
                                    className={classes.chip} 
                                    label="MongoDB" 
                                    size="medium" 
                                    variant="outlined" 
                                    color="secondary">
                                </Chip>
                            </ScrollAnimation>
                            </Paper>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};

/*
.underline: {
    transition: .3s all linear;
    position: relative;
    padding: .3em 0;
    &:before, &:after {
        content: "";
        height: 3px;
        width: 0%;
        background: #D81E5B;
        position: absolute;
        bottom: 0;
        transition: .2s all linear;
    }
    &:before {
        left: 50%;
    }
    &:after {
        right: 50%;
    }
    
    &:hover {
        color: #D81E5B;
        &:before, &:after {
            width: 100%;
        }
        &:before {
            left: 0%;
        }
        &:after {
            right: 0%;
        }
    }
    &:active, &:focus {
        color: darken(#20FC8F, 10%);
        &:before, &:after {
            background: darken(#20FC8F, 10%);
        }
    }
    */
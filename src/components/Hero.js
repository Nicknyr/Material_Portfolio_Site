import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import styled, { css } from 'styled-components';
import ParticlesHero from './ParticlesHero';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
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
      background: theme.palette.secondary.darkBlack,
      height: '100vh',
      width: '100%',
      position: 'relative'
    },
    intro: {
        background: theme.palette.secondary.lightBlack,
        height: 'auto',
        width: '30rem',
        position: 'absolute',
        top: '8rem',
        left: '5rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        color: 'snow',
        textAlign: 'left',
        padding: '3rem 2rem'
    },
    button: {
        color: 'snow',
        background: theme.palette.secondary.contrast,
        width: '10rem',
        marginTop: '1rem',
        //border: `2px solid theme.palette.secondary.contrast`
        
        '&:hover': {
            background: theme.palette.secondary.contrast,
        }
    },
    
  }));

export default function Main() {
    const classes = useStyles();
    return (
        <Grid container>
            <Paper elevation={3} className={classes.root}>
                <Paper elevation={5} className={classes.intro}>
                    <Typography variant="h2">Hi, I'm Nick</Typography>
                    <Typography variant="h4">A front-end web developer from NYC</Typography>
                    <ScrollLink
                        activeClass="active" 
                        spy={true} 
                        smooth={true} 
                        offset={50} 
                        duration={500} 
                        to="about" 
                    >
                        <Button variant="contained" size="medium" className={classes.button}>Learn more</Button>
                    </ScrollLink>
                </Paper>
                {/*<ParticlesHero />*/}
            </Paper>
        </Grid>
    );
};

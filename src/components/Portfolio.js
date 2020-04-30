import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { spacing } from '@material-ui/system';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';
import * as Scroll from 'react-scroll';
import NPM from '../assets/npm.png';
import Euro from '../assets/euro.png';
import Brochure from '../assets/brochure.png';
import Bitcoin from '../assets/bitcoin.png';
import RecipeBox from '../assets/recipebox.png';
import Spacex from '../assets/spacex.png';
import Top100 from '../assets/top100.png';
import ScrollAnimation from 'react-animate-on-scroll';


// React-Scroll
let ScrollLink = Scroll.Link;
let Element    = Scroll.Element;
let Events     = Scroll.Events;
let scroll     = Scroll.animateScroll;
let scrollSpy  = Scroll.scrollSpy;

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        background: theme.palette.secondary.darkBlack,
        height: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '10rem',
        paddingBottom: '10rem',

        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(10)
        }
      },
      container: {
        background: theme.palette.secondary.lightBlack,
        height: 'auto'
    },
  }));
  

export default function Portfolio() {
    const classes = useStyles();
    return (
       <div className={classes.root}>
           <Grid container xs={11} sm={10} md={10} mx="auto" display="flex" justify="center" className={classes.container}>
            <Grid item xs={11} sm={8} md={5}>
                <Paper elevation={10} className={classes.paper} mt={5}>
                    
                </Paper>
            </Grid>
           </Grid>
       </div>
    );
}





/*
 <Grid 
        className={classes.root} 
        xs={12}
        container
        direction="row"
        justify="center"
        alignItems="center" 
        id="portfolio"
        >
        <Grid item xs={10}>
           <Paper elevation={5} className={classes.paper}>
                <ScrollAnimation animateIn="fadeIn" delay={500} duration={2} animateOnce>
                    <Typography variant="h3" color="secondary" className={classes.h3}>Portfolio</Typography>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" delay={500} duration={2} animateOnce>
                <Paper elevation={6} className={classes.paper2} gutterBottom>
                    <div className={classes.left}>
                        <img src={NPM} height="auto" width="400"/>
                    </div>
                    <div className={classes.right}>
                        <Typography variant="h4" color="secondary" justify>NPM Clone</Typography>
                        <Typography variant="body1" color="primary">
                        My implementation of the npmjs.com website landing page. Built using React and styled-components.
                        </Typography>
                        <div className={classes.buttonContainer}>
                            <Button variant="contained" size="large" className={classes.button}>Code</Button>
                            <Button variant="contained" size="large" className={classes.button}>View</Button>
                        </div>
                    </div>
                </Paper>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" delay={500} duration={2} animateOnce>
                    <Paper elevation={6} className={[classes.paper2, classes.odd]} gutterBottom>
                        <div className={classes.left}>
                            <img src={Euro} height="auto" width="400"/>
                        </div>
                        <div className={classes.right}>
                            <Typography variant="h4" color="secondary" justify>European GDP</Typography>
                            <Typography variant="body1" color="primary">
                            A choropleth map that shows European Gross Domestic Product by country. Built with Mapbox and Leaflet
                            </Typography>
                            <div className={classes.buttonContainer}>
                                <Button variant="contained" size="large" className={classes.button}>Code</Button>
                                <Button variant="contained" size="large" className={classes.button}>View</Button>
                            </div>
                        </div>
                    </Paper>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" delay={500} duration={2} animateOnce>
                    <Paper elevation={6} className={classes.paper2} gutterBottom>
                        <div className={classes.left}>
                            <img src={Brochure} height="auto" width="400"/>
                        </div>
                        <div className={classes.right}>
                            <Typography variant="h4" color="secondary" justify>Brochure Style Site</Typography>
                            <Typography variant="body1" color="primary">
                            A brochure styled website for a ficticious web development agency built with React and Styled-Components.
                            </Typography>
                            <div className={classes.buttonContainer}>
                                <Button variant="contained" size="large" className={classes.button}>Code</Button>
                                <Button variant="contained" size="large" className={classes.button}>View</Button>
                            </div>
                        </div>
                    </Paper>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" delay={500} duration={2} animateOnce>
                    <Paper elevation={6} className={[classes.paper2, classes.odd]} gutterBottom>
                        <div className={classes.left}>
                            <img src={Spacex} height="auto" width="400"/>
                        </div>
                        <div className={classes.right}>
                            <Typography variant="h4" color="secondary" justify>SpaceX Facilities</Typography>
                            <Typography variant="body1" color="primary">
                                A React app that plots SpaceX and NASA facilities on a map of the U.S. using a Mapbox map and Leaflet.js.
                            </Typography>
                            <div className={classes.buttonContainer}>
                                <Button variant="contained" size="large" className={classes.button}>Code</Button>
                                <Button variant="contained" size="large" className={classes.button}>View</Button>
                            </div>
                        </div>
                    </Paper>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" delay={500} duration={2} animateOnce>
                    <Paper elevation={6} className={classes.paper2} gutterBottom>
                        <div className={classes.left}>
                            <img src={Top100} height="auto" width="400"/>
                        </div>
                        <div className={classes.right}>
                            <Typography variant="h4" color="secondary" justify>iTunes Top 100</Typography>
                            <Typography variant="body1" color="primary">
                                React app that pulls data from the iTunes API and displays the top 100 albums being purchased on iTunes. Displays the top 100 albums in descending order or sorted by release date.
                            </Typography>
                            <div className={classes.buttonContainer}>
                                <Button variant="contained" size="large" className={classes.button}>Code</Button>
                                <Button variant="contained" size="large" className={classes.button}>View</Button>
                            </div>
                        </div>
                    </Paper>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" delay={500} duration={2} animateOnce>
                    <Paper elevation={6} className={[classes.paper2, classes.odd]} gutterBottom>
                        <div className={classes.left}>
                            <img src={RecipeBox} height="auto" width="400"/>
                        </div>
                        <div className={classes.right}>
                            <Typography variant="h4" color="secondary" justify>React Recipe Box</Typography>
                            <Typography variant="body1" color="primary">
                                A simple React to-do-list style app that allows users to add/edit/delete recipes in state. Built using React-Bootstrap.
                            </Typography>
                            <div className={classes.buttonContainer}>
                                <Button variant="contained" size="large" className={classes.button}>Code</Button>
                                <Button variant="contained" size="large" className={classes.button}>View</Button>
                            </div>
                        </div>
                    </Paper>
                </ScrollAnimation>
           </Paper>
       </Grid>
    </Grid>
    */
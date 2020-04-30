import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import styled, { css } from 'styled-components';
import ParticlesHero from './ParticlesHero';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CardActions from '@material-ui/core/CardActions';
import { Typography } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import * as Scroll from 'react-scroll';
import ScrollAnimation from 'react-animate-on-scroll';
import { blockStatement } from '@babel/types';
import NHL from '../assets/nhl.png';
import Formik from '../assets/formik.png';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        background: theme.palette.secondary.darkBlack,
        height: 'auto',
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: '10rem',
        paddingTop: '10rem',

        [theme.breakpoints.up('md')]: {
            paddingTop: '10rem',
            paddingBottom: '10rem',
            padding: theme.spacing(10),
        }
      },
      paper: {
        background: theme.palette.secondary.lightBlack,
        marginTop: '1.5rem',
        marginBottom: '1.5rem',
      },
      card: {
        background: theme.palette.secondary.lightBlack,
        color: "snow",
        height: '35rem',
        width: '100%',
        padding: theme.spacing(5),

        [theme.breakpoints.up('xl')]: {
            height: '45rem'
        }

      },
      cardHeader: {
        color: theme.palette.secondary.main
      },
      media: {
          height: '250px',

          [theme.breakpoints.up('xl')]: {
              height: '500px'
          }
          
      },
      grid: {
          background: theme.palette.secondary.lightBlack,
      },
      h3: {
          textAlign: 'center'
      }
  }));


export default function Main() {
    const classes = useStyles();
    return(
        <div className={classes.root} id="blog">
        <Grid container spacing={3} justify="space-around" className={classes.grid} xs={11} sm={10} md={10}>
            <Grid item xs={12}>
                <ScrollAnimation animateIn="fadeIn" delay={500} duration={2} animateOnce>
                    <Typography variant="h3" color="secondary" className={classes.h3} gutterBottom>Blog Articles</Typography>
                </ScrollAnimation>
            </Grid>
          <Grid item xs={11} sm={8} md={5}>
            <Paper elevation={10} className={classes.paper} mt={5}>
                <ScrollAnimation animateIn="fadeIn" delay={500} duration={2} animateOnce>
                    <Card className={classes.card}>
                        <CardHeader
                            title="NHL API"
                            className={classes.cardHeader}
                        />
                        <Link href="https://hackernoon.com/retrieving-hockey-stats-from-the-nhls-undocumented-api-zz3003wrw">
                            <CardMedia
                                className={classes.media}
                                image={NHL}
                                title="NHL API image"
                            />
                        </Link>
                        <CardContent>
                            <Typography variant="body1" color="main" component="p">
                                A how-to guide on accessing the NHL's hidden stats API to retrieve player and team stats using React, Redux, & Axios
                            </Typography>
                        </CardContent>
                    </Card>
                </ScrollAnimation>
            </Paper>
          </Grid>
          <Grid item xs={11} sm={8} md={5}>
            <Paper elevation={10} className={classes.paper}>
                <ScrollAnimation animateIn="fadeIn" delay={500} duration={2} animateOnce>
                    <Card className={classes.card}>
                        <CardHeader
                            title="Formik Tutorial"
                            className={classes.cardHeader}
                        />
                        <Link href="https://hackernoon.com/building-react-forms-with-formik-yup-and-react-bootstrap-with-a-minimal-amount-of-pain-and-suffering-1sfk3xv8">
                            <CardMedia
                                className={classes.media}
                                image={Formik}
                                title="Formik tutorial image"
                            />
                        </Link>
                        <CardContent>
                            <Typography variant="body1" color="main" component="p">
                                A tutorial on painlessly handling form validation in a React project using Formik and Yup
                            </Typography>
                        </CardContent>
                    </Card>
                </ScrollAnimation>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );

}


     
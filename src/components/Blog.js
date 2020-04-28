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
      background: theme.palette.secondary.darkBlack,
      height: '100vh',
      //width: '100%',
      display: 'flex',
      justifyContent: 'center'
    },
    container: {
        background: theme.palette.secondary.lightBlack,
        height: '100vh',
        width: '80%'
    },
    gridItem: {
        background: theme.palette.secondary.lightBlack,
        height: '30rem',
        width: '20rem'
    },
    h3: {
        display: 'block',
        textAlign: 'center',
        marginBottom: '3rem'
    },
    card: {
        background: theme.palette.secondary.lightBlack,
        height: '100%',
        color: 'snow'
    },
    cardHeader: {
        color: theme.palette.secondary.main
    },
    media: {
        height: '40%',
        width: '100%'
    }
  }));


export default function Main() {
    const classes = useStyles();

    return(
        <div className={classes.root} md={12}>
            <Paper elevation={12} className={classes.container}>
                <Typography variant="h3" color="secondary" className={classes.h3}>Blog Articles</Typography>
                <Grid container justify="space-evenly">
                    <Grid item className={classes.gridItem}>
                        <Paper elevation={5} className={classes.gridItem}>
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
                        </Paper>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Paper elevation={5} className={classes.gridItem}>
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
                        </Paper>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );

}

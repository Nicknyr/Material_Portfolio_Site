import React from 'react';
import Background from '../assets/footer-background.svg';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { Link } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Scroll from 'react-scroll';
import ScrollAnimation from 'react-animate-on-scroll';


// React-Scroll
let ScrollLink = Scroll.Link;
let Element    = Scroll.Element;
let Events     = Scroll.Events;
let scroll     = Scroll.animateScroll;
let scrollSpy  = Scroll.scrollSpy;

const useStyles = makeStyles((theme) => ({
    container: {
      flexGrow: 1,
      backgroundImage: `url(${Background})`,
      backgroundPosition: 'center', 
      backgroundSize: 'cover', 
      backgroundRepeat: 'no-repeat',
      height: 'auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      [theme.breakpoints.only('xs')]: {
        height: '100vh'
      },

      [theme.breakpoints.up('sm')]: {
            height: '60vh'
      },

      [theme.breakpoints.only('xl')]: {
        height: '40vh'
  },
    },
    content: {
        height: '100%',
        display: 'flex',
        alignItems: 'center'
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        //height: '100%',
        padding: theme.spacing(5),
        background: theme.palette.secondary.lightBlack,

        [theme.breakpoints.up('md')]: {
          //width: '50%'
        }
      },
    h3: {
        color: theme.palette.secondary.main,
        textAlign: 'center'
    },
    typography: {
        color: theme.palette.primary.main,
        display: 'flex',
        justifyContent: 'center',
        margin: '0 auto',
        textAlign: 'center',
        width: '80%'
    },
    link: {
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '1rem',
        color: theme.palette.secondary.contrast,
        cursor: 'pointer'
    },
    social: {
        display: 'flex',
        justifyContent: 'space-around',
        width: '30%',
        margin: '1rem auto'
    }
  }));
  

export default function Footer() {
    const classes = useStyles();

    return (
           <Grid container mx="auto" className={classes.container} id="contact">
                <Grid item xs={11} sm={10} md={8} mx="auto" justify="center" alignItems="center" className={classes.content}>
                    <Paper elevation={6} className={classes.paper} display="flex" justify="center" alignItems="center">
                        <ScrollAnimation animateIn="fadeIn" delay={500} duration={2} animateOnce>
                            <Typography variant="h3" className={classes.h3} gutterBottom>Get in touch</Typography>
                            <Typography variant="body1" className={classes.typography} center>
                                If you're interesting in working together shoot me an email or find me on social media
                            </Typography>
                            <Link className={classes.link}>
                                nick_kinlen@hotmail.com
                            </Link>
                            <Box className={classes.social}>
                                <Link href="https://www.linkedin.com/in/nicholas-kinlen/">
                                    <FontAwesomeIcon
                                        icon={['fab', 'linkedin']}
                                        size="2x"
                                        color="#D81E5B"
                                    />
                                </Link>
                                <Link href="https://github.com/Nicknyr" className="socialLinks">
                                    <FontAwesomeIcon
                                        icon={['fab', 'github']}
                                        size="2x"
                                        color="#D81E5B"
                                    />
                                </Link>
                                <Link href="https://stackoverflow.com/users/3875620/nick-kinlen" className="socialLinks">
                                    <FontAwesomeIcon
                                        icon={['fab', 'stack-overflow']}
                                        size="2x"
                                        color="#D81E5B"
                                    />
                                </Link>
                            </Box>
                        </ScrollAnimation>
                    </Paper>
                </Grid>
           </Grid>
    );
};




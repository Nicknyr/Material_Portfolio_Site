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

// React-Scroll
let ScrollLink = Scroll.Link;
let Element    = Scroll.Element;
let Events     = Scroll.Events;
let scroll     = Scroll.animateScroll;
let scrollSpy  = Scroll.scrollSpy;

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundImage: `url(${Background})`,
      backgroundPosition: 'center', 
      backgroundSize: 'cover', 
      backgroundRepeat: 'no-repeat',
      height: '50vh',
      display: 'flex',
      alignItems: 'center'
    },
    paper: {
        height: 'auto',
        padding: theme.spacing(2),
        background: theme.palette.secondary.lightBlack
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
       display: 'flex',
       justifyContent: 'center',
       background: 'red'
    }
  }));
  

export default function Footer() {
    const classes = useStyles();

    return (
           <div className={classes.root}>
                <Grid container justify="center" id="contact">
                    <Grid item xs={10} md={6} p={10}>
                        <Paper elevation={5} className={classes.paper}>
                            <Box>
                                <Typography variant="h3" className={classes.h3}>Get in touch</Typography>
                                <Typography variant="body1" className={classes.typography} center>
                                If you're interesting in working together shoot me an email or find me on social media
                                </Typography>
                                <Link display="flex" justifyContent="center">
                                    nick_kinlen@Hotmail.com
                                </Link>
                            </Box>
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <Typography>
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
                                </Typography>
                            </Box>
                            {/*</Paper>*/}
                        </Paper>
                    </Grid>
                </Grid>
           </div>
    );
};


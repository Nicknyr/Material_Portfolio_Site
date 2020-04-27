import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import { ThemeProvider } from '@material-ui/core/styles';
import Theme from './Theme';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faLinkedin, faGithub, faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import { faGem  } from '@fortawesome/free-solid-svg-icons';
import "animate.css/animate.min.css";
import TemporaryDrawer from './components/TemporaryDrawer';
import Blog from './components/Blog';

library.add(fab, faLinkedin, faGithub, faStackOverflow, faGem);

function App() {
  return (
    <ThemeProvider theme={Theme}>
        {/*<TemporaryDrawer />*/}
        <Navbar />
        <Hero />
        <Main />    
        <Portfolio />
        <Blog />
        <Footer />  
    </ThemeProvider>
  );
}

export default App;

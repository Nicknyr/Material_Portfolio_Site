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
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
 
library.add(fab, faLinkedin, faGithub, faStackOverflow);

function App() {
  return (
    <ThemeProvider theme={Theme}>
        <Navbar />
        <Hero />
        <Main />    
        <Portfolio />
        <Footer />  
    </ThemeProvider>
  );
}

export default App;

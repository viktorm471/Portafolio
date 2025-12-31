import React from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';

import Portafolio from './components/portafolio/Portafolio';

import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Certificates from './components/certificates/Certificates';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <> 
        <ToastContainer></ToastContainer>
        <Header />
        <Nav />
        <About />
        <Experience />
        
        <Portafolio />
        <Certificates />
        <Contact />
        <Footer />


    </>
  )
}

export default App

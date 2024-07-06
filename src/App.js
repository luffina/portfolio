import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GlobalStyles from './styles/GlobalStyles';

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Hero />
      <About />
      <Projects />
      <Testimonials />
      <Education />
      <Contact />
      <Footer />
    </Router>
  );
};

export default App;

import React from 'react';
import './App.css';
import Header from './components/Header';
import Contact from './components/Contact';
import Landing from './components/LandingPg';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Landing />
      <Footer />
      <Contact />
      
    </div>
  );
}

export default App;

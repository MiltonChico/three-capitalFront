import React from 'react';

import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';

import { ChakraProvider } from '@chakra-ui/react'


function App() {

  return (

    <ChakraProvider>
      <Router>
        <Navbar />
        <HeroSection />
      </Router>
    </ChakraProvider>
    
  );
}

export default App;
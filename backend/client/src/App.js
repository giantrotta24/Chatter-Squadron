import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Container, Row, Col } from './components/Grid/Grid';
import { Navbar } from './components/Navbar/Navbar';

function App() {
  return (
    <Container 
      fluid={true} 
      children={
      <Navbar></Navbar>
      }
    >
    </Container>
  );
}

export default App;

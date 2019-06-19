import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Container, Row, Col } from './components/Grid/Grid';
import { Navbar } from './components/Navbar/Navbar';
import {HomeJumbo} from './components/HomeJumbo/HomeJumbo';

function App() {
  return (
    <div id="App">
    <Container 
      fluid={true} 
      children={
      <Navbar></Navbar>
      }
    >
    </Container>
    <HomeJumbo />
    </div>
  );
}

export default App;

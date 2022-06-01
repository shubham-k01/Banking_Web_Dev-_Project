import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Validation from './Components/Validation';
// import home from './home.jpg';
import About from './Components/About';
import Home from './Components/Home';
import React, { useState } from 'react';
import Login from './Components/Login';
import Services from './Components/Services';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

function App() {
  
  return (
    <>
    <div  style={{
      backgroundColor:"rgb(238, 204, 255)",
      height: "115vh"
    }}>
    <Router>
    <Navbar style={{position:"sticky"}}/>
    <Routes>
      <Route path="/signup" element={<Validation/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/services" element={<Services/>}/>
    </Routes>
    </Router>
    </div>
    </>
  );
}

export default App;

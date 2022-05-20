import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Validation from './Components/Validation';
import home from './home.jpg';
import About from './Components/About';
import Home from './Components/Home';
import React, { useState } from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  
  return (
    <>
    <div  style={{
    backgroundColor:"rgb(238, 204, 255)",
    height: "50rem"
}}>
    <Router>
    <Navbar/>
    <Routes>
      {/* <Route path="/login" element={<Login/>}/> */}
      <Route path="/signup" element={<Validation/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
    </Router>
    </div>
    </>
  );
}

export default App;

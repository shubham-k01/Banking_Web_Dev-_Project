import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';
import Validation from './Components/Validation';
import About from './Components/About';
import Home from './Components/Home';
import Login from './Components/Login';
import Services from './Components/Services';
import SignUp_confirm from './Components/SignUp_confirm';
import SignUp_failed from './Components/SignUp_failed';
import Login_confirm from './Components/Login_confirm';
import Login_failed from './Components/Login_Failed';
import Services1 from './Components/Services1';
import Services2 from './Components/Services2';
import Finalser from './Components/Finalser';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Navigate
  // Link
} from "react-router-dom";

function App() {
  
  return (
    <>
    <div  style={{
      backgroundColor:"rgb(238, 204, 255)",
      height: "65em"
    }}>
    <Router>
    <Navbar style={{position:"sticky"}}/>
    <Routes>
      <Route path="/signup" element={<Validation/>}/>
      <Route path="/red1" element={<SignUp_confirm/>}/>
      <Route path="/red2" element={<SignUp_failed/>}/>
      <Route path="/red3" element={<Login_confirm/>}/>
      <Route path="/red4" element={<Login_failed/>}/>
      <Route path="/services1" element={<Services1/>}/>
      <Route path="/services2" element={<Services2/>}/>
      <Route path="/finalser" element={<Finalser/>}/>
      {/* <Route path="/display" element={<Display/>}/>
      <Route path="/deposit" element={<Deposit/>}/> */}
      <Route exact path="/" element={<Home/>}/>
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

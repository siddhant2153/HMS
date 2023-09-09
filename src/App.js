
import './App.css';

import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import AdminLogin from './components/AdminLogin'
import Request from "./components/Request";
import signin from "./components/signin";
import Home from "./components/Home";

import { BrowserRouter, Route, Routes, } from "react-router-dom";

function App() {
  return (
    <>
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route exact path="/" Component={Home}>
           
          </Route>
          <Route exact path="/about" Component={About}>
           
          </Route>
          
          <Route exact path="/contact" Component={Contact}>
            
          </Route>
          <Route exact path="/signin" Component={signin}>
            
          </Route>
          <Route exact path="/request" Component={Request}>
           
          </Route>
          <Route exact path="/adminlogin" Component={AdminLogin}> 
            
          </Route>
        </Routes>
      </BrowserRouter>
      
    </div>
    </>
  );
}

export default App;

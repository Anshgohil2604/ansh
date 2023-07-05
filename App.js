import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter, Routes} from "react-router-dom";
import {Route} from "react-router-dom";
import {Navbar} from './Components/Navbar';
import {Textform} from './Components/Textform';
import {Signup} from './Components/Signup';
// import {home} from './Components/home';

const  App = () =>  {
  return (
    <>
    <Navbar/>
    
    <BrowserRouter>
     <Routes>
      <Route  path = "/" element ={<Textform/>}/>
      <Route path = "/signup" element={<Signup/>}/>
      <Route  path = "/Textform" element ={<Textform/>}/>
      {/* //<Route  path = "/home" element ={<home/>}/> */}

      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

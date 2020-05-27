import React, { Component } from 'react';
import './App.css';
import header from './assets/header2.png';
import footer from './assets/footer2.png';
import DataContainer from './containers/Data/DataContainer';
import { BrowserRouter as Router, Route } from 'react-router-dom';

 class App extends React.Component {
   render(){
     return(
       <>
        <div className="margins-img">
          <img src={header} alt="header"/>
        </div>

       <DataContainer />
        {/* <div class="navbar" id="myNavbar">
            <a href="#home">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
            <a href="javascript:void(0);" class="icon" onclick="myFunction()">&#9776;</a>
          </div> */}
        <div className="margins-img">
          <img src={footer} alt="footer"/>
        </div>
      </>
     );
   }
 }


export default App;

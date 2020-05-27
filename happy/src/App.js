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
        <header>
          <img src={header} alt="header"/>
        </header>

       <DataContainer />

        <footer>
          <img src={footer} alt="footer"/>
        </footer>
      </>
     );
   }
 }


export default App;

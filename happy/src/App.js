import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import MainContainer from './containers/MainContainer';
import { BrowserRouter as Router, Route } from 'react-router-dom';

 class App extends React.Component {
   render(){
     return(

       <MainContainer />
      

     );
   }
 }


export default App;

import React, { Component } from 'react';
import './App.css';

import DataContainer from './containers/Data/DataContainer';
import { BrowserRouter as Router, Route } from 'react-router-dom';

 class App extends React.Component {
   render(){
     return(

       <DataContainer />


     );
   }
 }


export default App;

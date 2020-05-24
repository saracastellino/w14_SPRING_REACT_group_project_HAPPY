import React from 'react';
import Header from '../components/Header';
import DataContainer from './Data/DataContainer';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class MainContainer extends React.Component {

  render(){
    return(
      <Router>
      
      <Header />

      </Router>
    );
  }
}
export default MainContainer;

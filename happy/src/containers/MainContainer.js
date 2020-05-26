import React from 'react';
import Header from '../components/home/Header';
import DataContainer from './Data/DataContainer';
import Quote from '../components/home/Quote'
import Links from '../components/home/Links'
import Nav from '../Nav';
import { BrowserRouter as Router, Route } from 'react-router-dom';


class MainContainer extends React.Component{




  render() {
    return(
      <div>
      <Router>

      <Header />
      <br/>
      <Quote/>
      <br/>
      {/* <Nav /> */}

      </Router>
      </div>
    )
  }
}

export default MainContainer;

import React from 'react';
import Header from '../components/home/Header';
import DataContainer from './Data/DataContainer';
import Quote from '../components/home/Quote'
import Links from '../components/home/Links'
import Nav from '../Nav';
import { BrowserRouter as Router, Route } from 'react-router-dom';



class MainContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = { showForm:false }
    }
    showForm = (bool) =>{
      this.setState({
        showForm: bool
      });
    }



  render() {
    return(
      <div>
      <Router>

      <Header />
      <br/>
      <button onClick={this.showForm.bind(null)}>Create Profile</button>
      
      <Quote/>
      <Nav />
      </Router>
      </div>
    )
  }
}

export default MainContainer;

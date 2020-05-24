import React from 'react';
import Header from '../components/home/Header';
import DataContainer from './Data/DataContainer';
import SubmitMood from '../components/MoodData/SubmitMood';
import Form from "../components/Form";
import { BrowserRouter as Router, Route } from 'react-router-dom';



class MainContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      diaryEntries: [{
        id: 1,
        dateTime: "22 05 2020",
        mood: 5,
        text: "Ate pizza, coded and loved JS",
        user: "julia"
      }],
      user: { 
        id: "", 
        name: "", 
        age: "", 
        dietaryPreferences: "", 
        musicType: "", 
        fitnessLevel: "" 
    } 
    }
    this.handleMoodSubmit = this.handleMoodSubmit.bind(this);
    this.handleUserSubmit = this.handleUserSubmit.bind(this); 
  }

  handleMoodSubmit(newMoodLog){
  
    let today = new Date();
    var date = today.getDate()+ ' ' + (today.getMonth()+1) + ' ' + today.getFullYear();
    console.log(date);
    // newMoodLog.id = Date.now();
    newMoodLog.dateTime = date;
    const updatedMoodLogs = [...this.state.diaryEntries, newMoodLog];
    console.log(updatedMoodLogs);
    this.setState({
      diaryEntries: updatedMoodLogs
    });
  }

  handleUserSubmit(submittedUser) {
    submittedUser.id = Date.now(); 
    const userCreated = [...this.state.user, submittedUser]; 
    this.setState({ user: userCreated });
   }

  render(){
    return(
      <Router>

      <Header />
      <SubmitMood onMoodSubmit={this.handleMoodSubmit}/>
      <Form onUserSubmit={this.handleUserSubmit} /> 
      <Quote/> 
      </Router>
    );
  }
}
export default MainContainer;

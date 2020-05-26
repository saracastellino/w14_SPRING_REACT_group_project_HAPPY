import React from 'react';
import SubmitMood from '../../../src/components/MoodData/SubmitMood';
import Moodlog from '../../components/MoodData/MoodLog';
import Form from "../../../src/components/Profile/Form";
import Nav from '../../Nav';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import DiaryEntriesService from "../../services/DiaryEntriesService";


class DataContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    //   diaryEntries: [{
    //     id: 1,
    //     dateTime: "22 05 2020",
    //     mood: 5,
    //     text: "Ate pizza, coded and loved JS",
    //     user: "julia"
    //   }],
    //   user: {
    //     id: "",
    //     name: "",
    //     age: "",
    //     dietaryPreferences: "",
    //     musicType: "",
    //     fitnessLevel: ""
    // }
      diaryEntries: [],
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

  componentDidMount(){
    const url = "http://localhost:8080/diary_entries";
    fetch(url)
    .then(res => res.json())
    .then(result => this.setState({diaryEntries: result}))
    .catch(err => console.log(err))
  }

  handleMoodSubmit(newMoodLog){
    DiaryEntriesService.addDiaryEntries(newMoodLog);
    const updatedMoodLogs = [...this.state.diaryEntries, newMoodLog];
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
        <Nav 
          onMoodSubmit={this.handleMoodSubmit}
          onUserSubmit={this.handleUserSubmit}
          diaryEntries={this.state.diaryEntries}
        />
        {/* <SubmitMood onMoodSubmit={this.handleMoodSubmit}/> */}
        {/* <Form onUserSubmit={this.handleUserSubmit} /> */}
    
        {/* <h1>Mood Diary</h1>
        <Moodlog diaryEntries={this.state.diaryEntries}/> */}

      </Router>
    );
  }
}


export default DataContainer;



//this will have the data entry point from backend

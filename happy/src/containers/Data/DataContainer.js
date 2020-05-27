//this will have the data entry point from backend
import React from 'react';
import Nav from '../../Nav';

import { BrowserRouter as Router } from 'react-router-dom';
import DiaryEntriesService from "../../services/DiaryEntriesService";


class DataContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      diaryEntries: [],
      user: {
        // id: "",
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
    console.log(submittedUser);
    this.setState({
      user: submittedUser
    })
   }

  render(){
    return(
      <Router>
        <Nav 
          onMoodSubmit={this.handleMoodSubmit}
          onUserSubmit={this.handleUserSubmit}
          diaryEntries={this.state.diaryEntries}
          user={this.state.user}
        />
      </Router>
    );
  }
}


export default DataContainer;





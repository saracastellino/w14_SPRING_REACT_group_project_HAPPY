import React from 'react';
import Header from '../components/Header';
import SubmitMood from '../components/SubmitMood';

class HomePage extends React.Component {
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
          name: "Julia"
        }
    }
    this.handleMoodSubmit = this.handleMoodSubmit.bind(this);
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

  render(){
    return(
      <>
      <Header />
      <SubmitMood onMoodSubmit={this.handleMoodSubmit}/>
      </>
    );
  }
}
export default HomePage;

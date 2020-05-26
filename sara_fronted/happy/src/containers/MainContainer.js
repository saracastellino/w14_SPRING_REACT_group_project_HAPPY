import React from 'react';
import Header from '../components/Header';
import Form from "../components/Form";

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
    this.handleUserSubmit = this.handleUserSubmit.bind(this);
  }

  handleUserSubmit(submittedUser) {
    submittedUser.id = Date.now();
    const userCreated = [...this.state.user, submittedUser];
    this.setState({
      user: userCreated
    });
  }


  render(){
    return(
      <>
      <Header />
      {/* if user != null 
      <MoodLog/>
       */}

      {/* if user = null
       <Form onUserSubmit={this.handleUserSubmit} />
       */}

       <Quote/>
      </>
    );
  }
}
export default MainContainer;

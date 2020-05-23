import React from 'react';
import Header from '../components/Header';

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
  }
  render(){
    return(
      <>
      <Header />

      </>
    );
  }
}
export default HomePage;

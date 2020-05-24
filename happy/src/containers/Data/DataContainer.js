import React from 'react';

class DataContainer extends Component {
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
}

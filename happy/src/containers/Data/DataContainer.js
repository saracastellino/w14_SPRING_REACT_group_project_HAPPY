import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class DataContainer extends React.Component {
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

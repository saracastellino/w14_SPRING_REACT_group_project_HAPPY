import React, { Component } from "react";

class DiaryEntry extends Component {
  render() {
    return (
      <div className="diaryEntry">
        <h4>{this.props.dateTime}</h4>
        <h2>My mood was... {this.props.mood}</h2>
        <h3>What I did that day was... {this.props.children}</h3>
      </div>
    );
  }
}

export default DiaryEntry;
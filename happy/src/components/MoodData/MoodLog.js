//this is an array of all the mood log data
import React, { Component } from "react";
import DiaryEntry from "./DiaryEntry";

class Moodlog extends Component {
  render() {
    const diaryEntriesLog = this.props.diaryEntries.map(diaryEntry => {
      return (
        <DiaryEntry mood={diaryEntry.mood} dateTime={diaryEntry.dateTime} id={diaryEntry.id}>
          {diaryEntry.text} 
        </DiaryEntry>
      );
    });

    return (
      <ul className="mood-log">
        {diaryEntriesLog}
      </ul>
    );
  }
}

export default Moodlog;

import React, { Component } from "react";
import DiaryEntriesService from "../../services/DiaryEntriesService";

class DiaryEntry extends Component {

  constructor(props){
    super(props);
    
    this.handleDelete = this.handleDelete.bind(this);
  }  

  handleDelete(event){
    console.log("delete "+event.target.value);
    DiaryEntriesService.deleteDiaryEntry(event.target.value);
  }

  render() {
    return (
      <div className="diaryEntry">
        <h4>{this.props.dateTime}</h4>
        <h2>My mood was... {this.props.mood}</h2>
        <h3>What I did that day was... {this.props.children}</h3>
        <h3>
          <button 
            value={this.props.id}
            key={this.props.id}
            onClick={this.handleDelete}
          >
            delete
          </button>
        </h3>
      </div>
    );
  }
}

export default DiaryEntry;
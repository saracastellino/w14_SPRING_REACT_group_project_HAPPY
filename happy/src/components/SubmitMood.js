//this is for the user to enter daily mood data with emoji plus submit button 
import React, {Component} from 'react';

class SubmitMood extends Component{

    constructor(props){
        super(props);
        this.state = {
            mood: 0,
            text: ""
        };
        this.handleMoodChange = this.handleMoodChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(evt){
        evt.preventDefault();
        const mood = this.state.mood;
        const text = this.state.text.trim();
        console.log("mood:"+mood+" text:"+text);
        if(!text){
            return
        }
        //  update the list of moodLog
        this.props.onMoodSubmit({
            mood: mood,
            text: text
        });
        // ({
        //     mood: mood,
        //     text: text
        // });

        // this.setState({
        //     mood: 0,
        //     text: ""
        // });
    }

    handleMoodChange(evt){
        this.setState({mood: evt.target.value})
    }

    handleTextChange(evt){
        this.setState({text: evt.target.value})
    }

    render(){
        return (
            <form className="mood-form" onSubmit={this.handleSubmit}>
                <label>Please choose your mood</label>
                <input type="number" value={this.state.mood} onChange={this.handleMoodChange}>
                </input>
                <label>Please input your text</label>
                <input type="text" placeholder="add some text" 
                value = {this.state.text} onChange={this.handleTextChange}>
                </input>
                <input type="submit" value="save"/>
            </form>
        )
    }

}

export default SubmitMood;
//this is for the user to enter daily mood data with emoji plus submit button 
import React, {Component} from 'react';
import mood1 from '../../assets/moods/mood1.png'
import mood2 from '../../assets/moods/mood2.png'
import mood3 from '../../assets/moods/mood3.png'
import mood4 from '../../assets/moods/mood4.png'
import mood5 from '../../assets/moods/mood5.png'
import Quote from '../home/Quote'

class SubmitMood extends Component{

    constructor(props){
        super(props);
        this.state = {
            mood: 0,
            text: "",

        };
        this.handleMoodChange = this.handleMoodChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(evt){
        evt.preventDefault();
        const mood = this.state.mood;
        const text = this.state.text.trim();
        if(!text){
            return
        }
        //  update the list of moodLog
        let today = new Date();
        var date = today.getDate()+ ' ' + (today.getMonth()+1) + ' ' + today.getFullYear();
    
        this.props.onMoodSubmit({
            "dateTime": date,
            "mood": mood,
            "text": text,
            "user": {
                "id": 1
            }
        });

        this.setState({
            mood: 0,
            text: ""
        });
    }

    handleMoodChange(evt){
        this.setState({mood: evt.target.value})
    }

    handleTextChange(evt){
        this.setState({text: evt.target.value})
    }

    render(){
        return (
            <>
            <form className="mood-form" onSubmit={this.handleSubmit}>
                <label>How do you feel today?</label><br/>
                <div className="mood-radio">
                    <div className="mood">
                        <img src={mood1} className="mood" alt="terrible" />
                        <input type="radio" id="terrible" name="mood" value="1" 
                        checked={this.state.mood === '1'}
                        onChange={this.handleMoodChange} />
                        <label className="mood-desc" htmlFor="terrible">terrible</label>
                    </div>
                    <div className="mood">
                        <img src={mood2} className="mood" alt="bad" />
                        <input type="radio" id="bad" name="mood" value="2" 
                        checked={this.state.mood === '2'}
                        onChange={this.handleMoodChange} />
                        <label className="mood-desc" htmlFor="bad">bad</label>
                    </div>
                    <div className="mood">
                        <img src={mood3} className="mood" alt="ok" />
                        <input type="radio" id="ok" name="mood" value="3" 
                        checked = {this.state.mood === '3'}
                        onChange={this.handleMoodChange} />
                        <label className="mood-desc" htmlFor="ok">ok</label>
                    </div>
                    <div className="mood">
                        <img src={mood4} className="mood" alt="good" />
                        <input type="radio" id="good" name="mood" value="4" 
                        checked = {this.state.mood === '4'}
                        onChange={this.handleMoodChange} />
                        <label className="mood-desc" htmlFor="good">good</label>
                    </div>
                    <div className="mood">
                        <img src={mood5} className="mood" alt="awesome" />
                        <input type="radio" id="awesome" name="mood" value="5" 
                        checked = {this.state.mood === '5'}
                        onChange={this.handleMoodChange} />
                        <label className="mood-desc" htmlFor="awesome">awesome</label>
                    </div>
                </div>
          
                <label>Want to add a note?</label><br/>
                        <textarea for="message" form="form" name="message" id="message" 
                        rows="5" maxlength="50" minlength="5" 
                        type="submit" value= {this.state.text} onChange={this.handleTextChange}></textarea>
                        <br></br>
                <input type="submit" value="Submit" className="button"/>
            </form>
            <Quote/>
          
            </>
        )
    }

}

export default SubmitMood;
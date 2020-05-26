//this is for the user to enter daily mood data with emoji plus submit button 
import React, {Component} from 'react';
import logo from '../../img/logo192.png';
import './SubmitMood.css';

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
            <form className="mood-form" onSubmit={this.handleSubmit}>
                <label>Please choose your mood</label><br/>
                <div className="mood-radio">
                    <div className="mood">
                        <img src={logo} className="mood" alt="terrible" />
                        <input type="radio" id="terrible" name="mood" value="1" 
                        checked={this.state.mood === '1'}
                        onChange={this.handleMoodChange} />
                        <label className="mood-desc" htmlFor="terrible">terrible</label>
                    </div>
                    <div className="mood">
                        <img src={logo} className="mood" alt="bad" />
                        <input type="radio" id="bad" name="mood" value="2" 
                        checked={this.state.mood === '2'}
                        onChange={this.handleMoodChange} />
                        <label className="mood-desc" htmlFor="bad">bad</label>
                    </div>
                    <div className="mood">
                        <img src={logo} className="mood" alt="ok" />
                        <input type="radio" id="ok" name="mood" value="3" 
                        checked = {this.state.mood === '3'}
                        onChange={this.handleMoodChange} />
                        <label className="mood-desc" htmlFor="ok">ok</label>
                    </div>
                    <div className="mood">
                        <img src={logo} className="mood" alt="good" />
                        <input type="radio" id="good" name="mood" value="4" 
                        checked = {this.state.mood === '4'}
                        onChange={this.handleMoodChange} />
                        <label className="mood-desc" htmlFor="good">good</label>
                    </div>
                    <div className="mood">
                        <img src={logo} className="mood" alt="awesome" />
                        <input type="radio" id="awesome" name="mood" value="5" 
                        checked = {this.state.mood === '5'}
                        onChange={this.handleMoodChange} />
                        <label className="mood-desc" htmlFor="awesome">awesome</label>
                    </div>
                </div>
                {/* <input type="number" value={this.state.mood} onChange={this.handleMoodChange}>
                </input><br/> */}
                <label>Please input your text</label><br/>
                <input type="text" placeholder="add some text" 
                value = {this.state.text} onChange={this.handleTextChange}>
                </input><br/>
                <input type="submit" value="save"/>
            </form>
        )
    }

}

export default SubmitMood;
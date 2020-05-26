// save update button
import React, {Component} from 'react';
// import Request from '../../helpers/request'

class UserEditForm extends Component {
  constructor(props){
    super(props);
    this.state = {
        name: "",
        age: "",
        dietaryPreferences: "",
        musicType: "",
        fitnessLevel: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(event) {
    event.preventDefault();
    const user = {
      "name": event.target.name.value,
      "age": event.target.age.value,
      "dietaryPreferences": event.target.dietaryPreferences.value,
      "musicType": event.target.musicType.value,
      "fitnessLevel": event.target.fitnessLevel.value
    }
    this.props.onUpdate(user, this.props.user.id)
  }


  render(){
    if(!this.props.user){
      return null
    }

    return (
      <div>
      <form onSubmit={this.handleSubmit}>
      <input type="text" name="firstName" defaultValue={this.props.user.name}/>
      <input type="number" name="age" defaultValue={this.props.user.age}/>
      <input type="text" name="dietaryPreferences" defaultValue={this.props.user.dietaryPreferences}/>
      <input type="text" name="dietaryPreferences" defaultValue={this.props.user.dietaryPreferences}/>
      <input type="number" name="fitnessLevel" defaultValue={this.props.user.fitnessLevel}/>
     
      <button type="submit">Save</button>
      </form>
      </div>
    )
  }
}

export default UserEditForm;


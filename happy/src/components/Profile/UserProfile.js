import React, { Component } from "react";
import {Link} from 'react-router-dom';


class UserProfile extends Component {

//   const editUrl = "/users/" + props.user.id + "/edit"

  render() {
    return (
      <div className="userProfile">
      <h1>Your profile</h1>
        <h2>Name: {this.props.children}</h2>
        <h2>Age {this.props.age}</h2>
        <h2>Dietary habits: {this.props.dietaryPreferences}</h2>
        <h3>Favourite music: {this.props.musicType}</h3>
        <h3>Fitness level: {this.props.fitnessLevel}</h3>

    <Link to= {editUrl}><button type="button">Edit yur profile!</button></Link>
      </div>
    );
  }
}

export default UserProfile;

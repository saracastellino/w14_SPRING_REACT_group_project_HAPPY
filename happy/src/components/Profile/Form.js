//this is the users profile setup form and submit button
import React, { Component } from 'react';

class Form extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: 0,
      dietaryPreferences: "",
      musicType: "",
      fitnessLevel: 0
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAgeChange = this.handleAgeChange.bind(this);
    this.handleDietaryPreferencesChange = this.handleDietaryPreferencesChange.bind(this);
    this.handleMusicTypeChange = this.handleMusicTypeChange.bind(this);
    this.handleFitnessLevelChange = this.handleFitnessLevelChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  
  handleSubmit(event) {
    event.preventDefault();
    const name = this.state.name.trim();
    const age = this.state.age.trim();
    const dietaryPreferences = this.state.dietaryPreferences.trim();
    const musicType = this.state.musicType.trim();
    const fitnessLevel = this.state.fitnessLevel.trim();
    if (!name || !age || !dietaryPreferences || !musicType || !fitnessLevel) {
      return
    }

    this.props.onUserSubmit({
        name: name,
        age: age,
        dietaryPreferences: dietaryPreferences,
        musicType: musicType,
        fitnessLevel: fitnessLevel
    });

    this.setState({
        name: "",
        age: "",
        dietaryPreferences: "",
        musicType: "",
        fitnessLevel: ""
    });
  }

  handleUpdate(event){
    event.preventDefault();
    console.log("update...");
    console.log("name:"+event.target.name.value);
    console.log("age:" + event.target.age.value);
    console.log("dietary:"+event.target.dietary.value);
    console.log("music:"+event.target.music.value);
    console.log("fitness:"+event.target.fitness.value);
    const name = event.target.name.value;
    const age = event.target.age.value;
    const dietaryPreferences = event.target.dietary.value;
    const musicType = event.target.music.value;
    const fitnessLevel = event.target.fitness.value;

    // const name = this.state.name.trim();
    // const age = this.state.age.trim();
    // const dietaryPreferences = this.state.dietaryPreferences.trim();
    // const musicType = this.state.musicType.trim();
    // const fitnessLevel = this.state.fitnessLevel.trim();
    if (!name || !age || !dietaryPreferences || !musicType || !fitnessLevel) {
      return
    }

    this.props.onUserSubmit({
        name: name,
        age: age,
        dietaryPreferences: dietaryPreferences,
        musicType: musicType,
        fitnessLevel: fitnessLevel
    });

  }

  handleNameChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleAgeChange(event) {
    this.setState({
      age: event.target.value
    });
  }

  handleDietaryPreferencesChange(event) {
    this.setState({
      dietaryPreferences: event.target.value
    });
  }

  handleMusicTypeChange(event) {
    this.setState({
        musicType: event.target.value
    });
  }

  handleFitnessLevelChange(event) {
    this.setState({
        fitnessLevel: event.target.value
    });
  }

  render() {
     if("" === this.props.user.name){
      return (
        <>
        <p>First time to use? Please input your profile.</p>
        <form className="profile-form" onSubmit={this.handleSubmit}>
          <label>Input your name: </label>
          <br/>
          <input
            type="text"
            placeholder="Your name"
            value={this.state.name}
            onChange={this.handleNameChange}
          />
          <br/>
          <label>Input your age: </label>
          <br/>
          <input
            type="number"
            placeholder="Your age"
            value={this.state.age}
            onChange={this.handleAgeChange}
          />
          <br/>
          <label>Input your dietary habits: </label>
          <br/>
           <input
            type="string"
            placeholder="Your dietary habits"
            value={this.state.dietaryPreferences}
             onChange={this.handleDietaryPreferencesChange}
          />
          <br/>
          <label>Input your favourit music type: </label>
          <br/>
           <input
            type="string"
            placeholder="Your favourit music"
            value={this.state.musicType}
             onChange={this.handleMusicTypeChange}
          />
          <br/>
          <label>Input your fitness level</label>
          <br/>
           <input
            type="number"
            placeholder="Your fitness level"
            value={this.state.fitnessLevel}
             onChange={this.handleFitnessLevelChange}
          />
          <br/>
          <input type="submit" value="Post" />
        </form>
        </>
      );
     }else{
       return(
         <>
         <p>Wish to change your profile?</p>
         <form className="profile-form-update" onSubmit={this.handleUpdate}>
          <label>Input your name: </label>
          <br/>
          <input
            type="text"
            placeholder="Your name"
            defaultValue={this.props.user.name}
            name="name"
            onChange={this.handleNameChange}
          />
          <br/>
          <label>Input your age: </label>
          <br/>
          <input
            type="number"
            placeholder="Your age"
            defaultValue={this.props.user.age}
            onChange={this.handleAgeChange}
            name="age"
          />
          <br/>
          <label>Input your dietary habits: </label>
          <br/>
           <input
            type="string"
            placeholder="Your dietary habits"
            defaultValue={this.props.user.dietaryPreferences}
             onChange={this.handleDietaryPreferencesChange}
             name="dietary"
          />
          <br/>
          <label>Input your favourit music type: </label>
          <br/>
           <input
            type="string"
            placeholder="Your favourit music"
            defaultValue={this.props.user.musicType}
             onChange={this.handleMusicTypeChange}
             name="music"
          />
          <br/>
          <label>Input your fitness level</label>
          <br/>
           <input
            type="number"
            placeholder="Your fitness level"
            defaultValue={this.props.user.fitnessLevel}
             onChange={this.handleFitnessLevelChange}
             name="fitness"
          />
          <br/>
          <input type="submit" value="Post" />
        </form>
         </>
       )
     }
     

//  ********************** SEMANTIC UI **********************
//    <Grid centered columns={2}>
//     <Grid.Column>
//       <Header as="h2" textAlign="center">
//         Create your profile!
//       </Header>
//       <Segment>
//         <Form size="large" onSubmit={this.handleSubmit}>
//         <Form.Input
//             fluid
//             icon="user"
//             iconPosition="left"
//             placeholder="Name"
//             value={this.state.name}
//             onChange={this.handleNameChange}
//           />
//           <Form.Input
//             fluid
//             icon="birthday cake"
//             iconPosition="left"
//             placeholder="Age"
//             value={this.state.age}
//             onChange={this.handleAgeChange}
//           />
//           <Form.Input
//             fluid
//             icon="food"
//             iconPosition="left"
//             placeholder="Dietary habits"
//             value={this.state.dietaryPreferences}
//             onChange={this.handleDietaryPreferencesChange}
//           />
//            <Form.Input
//             fluid
//             icon="music"
//             iconPosition="left"
//             placeholder="Favourite music type"
//             value={this.state.musicType}
//             onChange={this.handleMusicTypeChange}
//           />
//            <Form.Input
//             fluid
//             icon="trophy"
//             iconPosition="left"
//             placeholder="Fitness level"
//             value={this.state.fitnessLevel}
//             onChange={this.handleFitnessLevelChange}
//           />

//               <Modal trigger={<Button color="blue" fluid size="large" type="submit" value="Post">Create my profile!</Button>}>
//                 <Modal.Header>Thank you user.name</Modal.Header>
//                 <Modal.Description>
//                     <Header>You are now registered</Header>
//                     <p>
//                     How are you today? Rate your mood and keep track of how you feel!
//                     </p>
//                     <p>It will then be part of your diary.</p>
//                 </Modal.Description>
//             </Modal>
//         </Form>
//       </Segment>
//     </Grid.Column>
//   </Grid>
// *********************************************************

    
   }
}

export default Form;

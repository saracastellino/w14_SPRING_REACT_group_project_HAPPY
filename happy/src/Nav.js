import React from 'react';
import {
  Link,
  Route,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
import DataContainer from './containers/Data/DataContainer';
import UserProfile from './components/Profile/Form';
import Graph from './components/MoodData/Graph';
import Links from './components/home/Links';
import SubmitMood from './components/MoodData/SubmitMood';
import Header from './components/home/Header';

const Nav = (props) => (
  <Router>
    <ul>
      <li >
        <Link to="/submitmood">Home</Link>
      </li>

      <li>
        <Link to="/graph">Stats</Link>
      </li>

      <li>
        <Link to="/profile">Profile</Link>
      </li>

      <li>
        <Link to="/links">Links</Link>
      </li>
    </ul>

    <Switch>

      <Route path='/submitmood'>
        <Header user={props.user}/>
        <SubmitMood onMoodSubmit={props.onMoodSubmit}/>
      </Route>

      <Route path="/profile">
        <Header user={props.user}/>
        <UserProfile onUserSubmit={props.onUserSubmit} user={props.user}/>
      </Route>

      <Route path="/graph">
        {/* <Graph /> */}
        <Header user={props.user}/>
        <Graph diaryEntries={props.diaryEntries}/>
      </Route>

      <Route path="/links">
      <Header user={props.user}/>
        <Links />
      </Route>



    </Switch>


  </Router>
);

export default Nav;

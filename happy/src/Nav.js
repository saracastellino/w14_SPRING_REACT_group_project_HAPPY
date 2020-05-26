import React from 'react';
import { 
  Link,
  Route,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
import DataContainer from './containers/Data/DataContainer'
import UserProfile from './components/Profile/UserProfile'
import Graph from './components/MoodData/Graph'

const Nav = (props) => (
  <Router>
    <ul>
      <li >
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/stats">Stats</Link>
      </li>

      <li>
        <Link to="/profile">Profile</Link>
      </li>

      <li>
        <Link to="/log">Log Mood</Link>
      </li>
    </ul>

    <Switch>

      <Route path='/log'>
        <DataContainer />
      </Route>

      <Route path="/profile">
        <UserProfile />
      </Route>

      <Route path="/stats">
        <Graph />
      </Route>

      {/* <Route path="/">

      </Route> */}



    </Switch>


  </Router>
);

export default Nav;

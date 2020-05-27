import React from 'react';
import {
  Link,
  Route,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
import UserProfile from './components/Profile/Form';
import Graph from './components/MoodData/Graph';
import Links from './components/home/Links';
import SubmitMood from './components/MoodData/SubmitMood';
import graph_icon from './assets/navbar/graph_icon.png'
import home_icon from './assets/navbar/home_icon.png'
import user_icon from './assets/navbar/user_icon.png'
import links_icon from './assets/navbar/links_icon.png'
import Header from './components/home/Header';

const Nav = (props) => (
  <Router>
    
    <div className="navbar">
        <Link to="/submitmood"> <img src={home_icon} alt="home"/></Link>
   
        <Link to="/graph"> <img src={graph_icon} alt="graph"/></Link>
   
        <Link to="/profile"> <img src={user_icon} alt="user"/></Link>
    
        <Link to="/links"> <img src={links_icon} alt="links"/></Link>
    </div>
    
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

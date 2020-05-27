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

  <Router className="container">
    
    <div className="navbar">
        <Link to="/submitmood"> <img className="nav_icon" src={home_icon} alt="home"/></Link>
   
        <Link to="/graph"> <img className="nav_icon" src={graph_icon} alt="graph"/></Link>
   
        <Link to="/profile"> <img className="nav_icon" src={user_icon} alt="user"/></Link>
    
        <Link to="/links"> <img className="nav_icon" src={links_icon} alt="links"/></Link>
    </div>
    
    <Switch>

      <Route path='/submitmood'>
        <Header user={props.user}/>
        <SubmitMood onMoodSubmit={props.onMoodSubmit}/>
      </Route>

      <Route path="/profile">
        <UserProfile onUserSubmit={props.onUserSubmit} user={props.user}/>
      </Route>

      <Route path="/graph">
        <Graph diaryEntries={props.diaryEntries} />
      </Route>

      <Route path="/links">
        <Links />
      </Route>



    </Switch>
   

  </Router>

   
);

export default Nav;

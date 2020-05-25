import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => (

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
  );
  export default Nav;

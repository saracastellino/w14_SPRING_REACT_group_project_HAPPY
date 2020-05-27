import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return(
    <div>
    <h2>Hello {props.user.name}</h2>
    </div>
  );
}
export default Header;
